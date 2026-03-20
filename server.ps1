# Simple HTTP Server using .NET
Add-Type -AssemblyName System.Net.Http

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$context = $listener.GetContext()

Write-Host "Serveur démarré sur http://localhost:8080"
Write-Host "Appuyez sur Ctrl+C pour arrêter"

try {
    $listener.Start()
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.AbsolutePath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        $filePath = Join-Path "C:\Users\Ben Kisongo\Desktop\APP" $urlPath.Replace("/", "\")
        
        if (Test-Path $filePath) {
            $content = Get-Content $filePath -Raw
            $response.ContentType = "text/html"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - Fichier non trouvé")
        }
        
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        $response.Close()
    }
} finally {
    $listener.Stop()
}
