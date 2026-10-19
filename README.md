# Delta Fit — I0 local

Somente cadastro/listagem de exercícios sintéticos. Next.js → API ASP.NET Core → PostgreSQL real. Sem autenticação: executar apenas em loopback. Escopo: [I0-r1](docs/delivery/I0.md), arquitetura: [ADR-001](docs/architecture/ADR-001.md), evidências: [progresso](docs/progress.md).

## Pré-requisitos e versões

- Windows PowerShell 5.1 (`powershell`, incluído no Windows) ou PowerShell 7 opcional, Docker Desktop operacional com Linux containers e Compose v2. Verificado nesta máquina: Desktop 4.32.0, Engine 27.0.3, Compose 2.28.1; nenhuma atualização de Docker exigida pelo I0.
- SDK .NET **10.0.402**, ASP.NET Core/runtime **10.0.13**; `global.json` não permite troca silenciosa de SDK. .NET 10 LTS escolhido em vez dos SDKs 8 antigos instalados.
- Node **24.12.0** LTS, npm **11.7.0**, `.node-version`/`.nvmrc`. Next **16.4.2**, React **19.3.1**, TypeScript **5.9.3**; versões completas em package.json/package-lock.json.
- EF Core/EF CLI **10.0.13**, Npgsql EF **10.0.3**. NuGet com versões diretas exatas e packages.lock.json.
- Lint: ESLint **10.13.0**, typescript-eslint **8.71.2** e React Hooks **7.1.1**, sem pacote eslint-config-next (plugins transitivos antigos incompatíveis com ESLint 10).
- PostgreSQL **18.6**, mesma imagem em desenvolvimento e testes, portas publicadas exclusivamente em 127.0.0.1.

Compatibilidade consultada antes do setup: [SDK .NET 10](https://dotnet.microsoft.com/en-us/download/dotnet/10.0), [Node LTS](https://nodejs.org/en/about/previous-releases), [Next instalação](https://nextjs.org/docs/app/getting-started/installation), [suporte Next](https://nextjs.org/support-policy), [Npgsql EF](https://www.npgsql.org/efcore/), [PostgreSQL suportado](https://www.postgresql.org/support/versioning/). Dependências exatas conferidas nos registros NuGet/npm; não usar `latest` na reprodução.

## Preparar

Na raiz, sem recriar o Git existente. Os comandos usam o Windows PowerShell disponível no terminal comum; não é necessário instalar PowerShell 7. `-ExecutionPolicy Bypass` vale somente para o processo iniciado, sem alterar a política permanente do Windows:

```powershell
dotnet tool restore
dotnet restore DeltaFit.slnx --locked-mode
npm ci --prefix apps/web
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 init
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 db
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 migrate
```

`init` gera senha aleatória em `.env` ignorado pelo Git; não imprime nem substitui uma configuração existente. Exemplos não contêm senha real. Conexão é transmitida à API por variável de ambiente, sem arquivo público. Nunca copiar `.env` para o frontend. O processo Next recebe somente `NEXT_PUBLIC_API_URL` como configuração pública de serviço.

Migrações versionadas são a única autoridade do schema. `migrate` aplica explicitamente em banco vazio/existente. API não aplica migrações no startup; não há EnsureCreated, fallback em memória ou seed real.

## Executar

Em dois terminais, na raiz:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 api
```

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 web
```

Abrir [exercícios locais](http://127.0.0.1:3000/exercises). API: `http://127.0.0.1:5075/api/exercises`. Use exatamente a origem 127.0.0.1 (CORS não libera localhost por equivalência). Encerrar cada processo com Ctrl+C. Banco de desenvolvimento: `docker compose stop db`; retomar com `scripts/local.ps1 db`. Não remover o volume `deltafit-i0_dev-data` ao verificar persistência.

## Verificar

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 check
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 integration
```

Preparar Chromium uma vez e executar E2E:

```powershell
Push-Location apps/web
npx playwright install chromium
Pop-Location
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 e2e
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 stop-tests
```

`check` restaura NuGet em locked mode, compila solução, executa ESLint, build Next e TypeScript. Integração usa xUnit/WebApplicationFactory e PostgreSQL real; E2E inicia API e Next de produção em portas reais **5175/3100**, sem reutilizar servidores. O runner reconstrói Next com URL da API E2E. A próxima execução de desenvolvimento recompila com URL 5075; para `next start` manual, fazer novo build com a URL desejada.

Integração: banco `deltafit_integration_disposable`, porta **55433**. E2E: `deltafit_e2e_disposable`, **55434**. Cada comando recria somente seu serviço de teste, em tmpfs; nunca recria o serviço `db` nem remove volume de desenvolvimento. Não executar duas instâncias da mesma suíte simultaneamente. A fixture rejeita conexão de limpeza fora de host/porta/banco/usuário esperados. Testes sintéticos não devem ser migrados ao catálogo futuro.

Resultados xUnit: `.local/results/integration.trx`. Relatório/artefatos Playwright: `apps/web/playwright-report` e `apps/web/test-results` (ignorados). Os casos de sucesso não interceptam rede. Interceptações somente nas falhas de comunicação. Sem suíte unitária artificial: regras pequenas de validação/trim cobertas via HTTP e constraint real.

## Demonstração reproduzível

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/local.ps1 demo
```

Automatiza os passos abaixo com Chromium real e dados de desenvolvimento sintéticos. Usa portas 3000/5075 livres, inicia/encerra somente seus processos e preserva o volume. Evidências em `.local/demo.json` e `.local/demo.png`. Executar `check`, `e2e` e `demo` sequencialmente: os comandos usam o mesmo build web, com URLs diferentes.

1. Criar um nome sintético pela página, observar sucesso e recarregar. Consultar GET e anotar o UUID retornado.
2. Encerrar/reiniciar API; consultar e confirmar mesmo UUID/nome.
3. `docker compose restart db`, esperar healthcheck, consultar novamente e confirmar o mesmo registro. Não usar `down -v`.
4. Enviar espaços: validação sem sucesso, sem nova linha no banco. Parar API e tentar salvar outro nome: erro com texto preservado, orientando consultar lista antes de reenviar. Retomar API e consultar.

POST não é repetido automaticamente. Se a resposta se perder após commit, o resultado é incerto: consultar lista antes de tentar de novo. Nomes duplicados podem ter UUIDs distintos; não há idempotency key, ownership ou política final de catálogo.
