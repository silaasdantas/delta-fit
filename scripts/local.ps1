param([Parameter(Mandatory)][ValidateSet('init','db','migrate','api','web','check','integration','e2e','demo','stop-tests')][string]$Action)
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$repoRoot = Split-Path $PSScriptRoot -Parent
Set-Location $repoRoot
function Run([string]$File, [string[]]$Arguments) {
    # Windows PowerShell may select npm.ps1, blocked by its execution policy.
    if ($File -eq 'npm' -and $env:OS -eq 'Windows_NT') { $File = 'npm.cmd' }
    & $File @Arguments
    if ($LASTEXITCODE -ne 0) { throw "$File falhou (exit $LASTEXITCODE)." }
}
if ($Action -eq 'init') {
    if (!(Test-Path .env)) {
        $bytes = New-Object byte[] 24
        $random = [System.Security.Cryptography.RandomNumberGenerator]::Create()
        try { $random.GetBytes($bytes) } finally { $random.Dispose() }
        $password = [BitConverter]::ToString($bytes).Replace('-', '')
        Set-Content .env "DELTAFIT_DB_PASSWORD=$password" -Encoding utf8
    }
    Write-Host 'Configuração local .env pronta e ignorada pelo Git. Não compartilhe esse arquivo.'
    exit
}
if (!(Test-Path .env)) { throw 'Execute primeiro: powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 init' }
$passwordLine = Get-Content .env | Where-Object { $_ -match '^DELTAFIT_DB_PASSWORD=' }
if (@($passwordLine).Count -ne 1) { throw 'Configuração local inválida.' }
$env:DELTAFIT_DB_PASSWORD = $passwordLine.Substring('DELTAFIT_DB_PASSWORD='.Length)
$env:DOTNET_CLI_HOME = Join-Path $repoRoot '.local/dotnet'
$env:DOTNET_SKIP_FIRST_TIME_EXPERIENCE = '1'
$env:DOTNET_CLI_TELEMETRY_OPTOUT = '1'
$env:NEXT_TELEMETRY_DISABLED = '1'
$apiProject = 'apps/api/DeltaFit.Api'
function Set-Database([int]$Port, [string]$Database) {
    $env:ConnectionStrings__Database = "Host=127.0.0.1;Port=$Port;Database=$Database;Username=deltafit;Password=$env:DELTAFIT_DB_PASSWORD;Include Error Detail=false"
}
function Migrate {
    Run dotnet @('tool','restore')
    Run dotnet @('ef','database','update','--project',$apiProject)
}
switch ($Action) {
    'db' { Run docker @('compose','up','-d','--wait','db') }
    'migrate' { Set-Database 55432 'deltafit_dev'; Migrate }
    'api' { Set-Database 55432 'deltafit_dev'; $env:WebOrigin='http://127.0.0.1:3000'; Run dotnet @('run','--no-launch-profile','--project',$apiProject,'--urls','http://127.0.0.1:5075') }
    'web' { $env:NEXT_PUBLIC_API_URL='http://127.0.0.1:5075'; Set-Location apps/web; Run npm @('run','dev') }
    'check' {
        Run dotnet @('restore','DeltaFit.slnx','--locked-mode')
        Run dotnet @('build','DeltaFit.slnx','--no-restore')
        Set-Location apps/web
        Run npm @('run','lint')
        Run npm @('run','build')
        Run npm @('run','typecheck')
    }
    'integration' {
        Run docker @('compose','--profile','tests','up','-d','--wait','--force-recreate','integration-db')
        Set-Database 55433 'deltafit_integration_disposable'
        $env:DELTAFIT_INTEGRATION_CONNECTION=$env:ConnectionStrings__Database
        Run dotnet @('test','tests/DeltaFit.Api.IntegrationTests','--logger','trx;LogFileName=integration.trx','--results-directory','.local/results')
    }
    'e2e' {
        Run docker @('compose','--profile','tests','up','-d','--wait','--force-recreate','e2e-db')
        Set-Database 55434 'deltafit_e2e_disposable'; Migrate
        $env:WebOrigin='http://127.0.0.1:3100'
        $env:NEXT_PUBLIC_API_URL='http://127.0.0.1:5175'
        Run dotnet @('build',$apiProject)
        Set-Location apps/web
        Run npm @('run','build')
        Run npm @('run','test:e2e')
    }
    'demo' {
        Run docker @('compose','up','-d','--wait','db')
        Set-Database 55432 'deltafit_dev'; Migrate
        $env:WebOrigin='http://127.0.0.1:3000'
        $env:NEXT_PUBLIC_API_URL='http://127.0.0.1:5075'
        Run dotnet @('build',$apiProject)
        Push-Location apps/web
        try { Run npm @('run','build') } finally { Pop-Location }
        Run node @('scripts/demo.mjs')
    }
    'stop-tests' { Run docker @('compose','--profile','tests','stop','integration-db','e2e-db') }
}
