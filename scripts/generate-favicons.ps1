$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$assetDirectory = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../public'))

function New-PortfolioIcon([int] $size) {
    $bitmap = New-Object Drawing.Bitmap($size, $size)
    $canvas = [Drawing.Graphics]::FromImage($bitmap)
    $background = New-Object Drawing.Drawing2D.GraphicsPath
    $monogram = New-Object Drawing.Drawing2D.GraphicsPath
    $brush = New-Object Drawing.SolidBrush([Drawing.ColorTranslator]::FromHtml('#F56539'))
    $pen = New-Object Drawing.Pen([Drawing.Color]::White, 16)
    try {
        $canvas.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $canvas.Clear([Drawing.Color]::Transparent)
        $canvas.ScaleTransform($size / 256.0, $size / 256.0)
        $background.AddArc(0, 0, 104, 104, 180, 90)
        $background.AddArc(152, 0, 104, 104, 270, 90)
        $background.AddArc(152, 152, 104, 104, 0, 90)
        $background.AddArc(0, 152, 104, 104, 90, 90)
        $background.CloseFigure()
        $canvas.FillPath($brush, $background)
        $pen.StartCap = $pen.EndCap = [Drawing.Drawing2D.LineCap]::Round
        $pen.LineJoin = [Drawing.Drawing2D.LineJoin]::Round
        $monogram.AddLine(34, 178, 76, 78)
        $monogram.AddLine(76, 78, 118, 178)
        $monogram.StartFigure()
        $monogram.AddLine(48, 145, 104, 145)
        $monogram.StartFigure()
        $monogram.AddBezier(218, 98, 206, 83, 194, 78, 180, 78)
        $monogram.AddBezier(180, 78, 150, 78, 136, 100, 136, 128)
        $monogram.AddBezier(136, 128, 136, 156, 150, 178, 180, 178)
        $monogram.AddBezier(180, 178, 196, 178, 207, 172, 218, 163)
        $monogram.AddLine(218, 163, 218, 130)
        $monogram.AddLine(218, 130, 184, 130)
        $canvas.DrawPath($pen, $monogram)
        return ,$bitmap
    } finally {
        $canvas.Dispose()
        $background.Dispose()
        $monogram.Dispose()
        $brush.Dispose()
        $pen.Dispose()
    }
}

foreach ($asset in @(
    @{ Name = 'favicon.png'; Size = 180 },
    @{ Name = 'favicon192.png'; Size = 192 },
    @{ Name = 'favicon512.png'; Size = 512 }
)) {
    $bitmap = New-PortfolioIcon $asset.Size
    try { $bitmap.Save((Join-Path $assetDirectory $asset.Name), [Drawing.Imaging.ImageFormat]::Png) }
    finally { $bitmap.Dispose() }
}

# Package a 32px PNG into a standard ICO container for browser fallback.
$bitmap = New-PortfolioIcon 32
$buffer = New-Object IO.MemoryStream
try {
    $bitmap.Save($buffer, [Drawing.Imaging.ImageFormat]::Png)
    $bytes = $buffer.ToArray()
    $writer = New-Object IO.BinaryWriter([IO.File]::Create((Join-Path $assetDirectory 'favicon.ico')))
    try {
        $writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]1)
        $writer.Write([byte]32); $writer.Write([byte]32)
        $writer.Write([byte]0); $writer.Write([byte]0)
        $writer.Write([uint16]1); $writer.Write([uint16]32)
        $writer.Write([uint32]$bytes.Length); $writer.Write([uint32]22)
        $writer.Write($bytes)
    } finally { $writer.Dispose() }
} finally { $bitmap.Dispose(); $buffer.Dispose() }
