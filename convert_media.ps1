$ErrorActionPreference = 'Stop'

Write-Host "Converting images to webp..."
Get-ChildItem -Path public -Include *.jpg,*.jpeg,*.png -File -Recurse | ForEach-Object {
    $out = [System.IO.Path]::ChangeExtension($_.FullName, ".webp")
    Write-Host "Converting: $($_.Name) -> WebP"
    & ffmpeg -y -v warning -i $_.FullName -c:v libwebp -quality 80 $out
    if ($LASTEXITCODE -eq 0) {
        Remove-Item -LiteralPath $_.FullName
    }
}

Write-Host "Converting videos to webm (VP9)..."
Get-ChildItem -Path public -Include *.mp4 -File -Recurse | ForEach-Object {
    $out = [System.IO.Path]::ChangeExtension($_.FullName, ".webm")
    Write-Host "Converting: $($_.Name) -> WebM (This might take several minutes...)"
    & ffmpeg -y -v warning -stats -i $_.FullName -c:v libvpx-vp9 -crf 35 -b:v 0 -row-mt 1 -speed 4 -threads 4 -c:a libopus $out
    if ($LASTEXITCODE -eq 0) {
        Remove-Item -LiteralPath $_.FullName
    }
}

Write-Host "Done!"
