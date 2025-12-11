# Simple Content Extraction for WhyNotBroker
# Run this command to extract all text:

Get-ChildItem -Path "src" -Recurse -Include "*.jsx", "*.js" -Exclude "node_modules", ".next" | ForEach-Object {
    $file = $_.FullName
    Write-Host "Processing: $file"
    
    # Extract lines with quoted text
    Get-Content $file | Where-Object { 
        $_ -match '".+"' -or $_ -match "'.+'" 
    } | Out-File ".\website-content\simple-extract.txt" -Encoding utf8 -Append
}
