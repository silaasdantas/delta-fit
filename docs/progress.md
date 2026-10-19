# Progresso técnico — Delta Fit

## I0-r1 — execução local autorizada (D74)

Início autorizado em 18/10/2026; verificações em 19/10/2026. Recorte D69–73 de docs/delivery/I0.md. Produto continua em discovery. Sem deploy, contratação, pipeline, remoto Git ou incrementos seguintes.

### Implementado

- Next.js/TypeScript em apps/web, rota /exercises: Nome/Salvar/lista, carregamento, validação, sucesso, erro de GET separado do vazio e erro de POST preservando texto. Sem repetição automática; mensagem de resultado incerto orienta consultar antes de reenviar.
- API única ASP.NET Core, operações CreateExercise/ListExercises em Features/Exercises, Minimal APIs, EF Core/Npgsql direto e Persistence compartilhado. UUID gerado no servidor, trim, acentos/caixa/espaços internos preservados, duplicados independentes, listagem por nome/id sem paginação. CORS somente origem local configurada, erros em Problem Details, falhas genéricas sem SQL/segredos no corpo/log de exceção.
- Migração inicial + snapshot para exercises(id uuid, name text not null) e constraint de nome não branco coerente com Unicode White_Space do .NET. Sem EnsureCreated ou migração automática no startup.
- Compose de desenvolvimento com volume persistente e dois serviços descartáveis em tmpfs (integração/E2E); portas locais 55432/55433/55434. Ferramentas/versões e comandos em README.md. Senha gerada em .env ignorado; conexão somente no backend, sem dados pessoais.
- xUnit/PostgreSQL real e Playwright/processos reais; runner scripts/local.ps1. Demonstração reproduzível em scripts/demo.mjs. Não foi criada suíte unitária artificial: validação pequena coberta via HTTP/constraint.

### Verificação e evidências

| Verificação | Estado/evidência |
| --- | --- |
| Inventário inicial/Git | Repositório master sem commits, sem remoto; documentos preexistentes não rastreados preservados. Sem git init, commit, reset, staging, remoto ou pipeline |
| Ferramentas | Node 24.12.0/npm 11.7.0; SDK .NET 10.0.402/runtime ASP.NET 10.0.13 disponíveis após preparação; Docker Desktop instalado, motor Linux operacional. Contêiner preexistente catalogdb preservado |
| Dependências | npm ci aprovado; npm audit final: zero vulnerabilidades. SDK/Node/EF CLI/pacotes/lockfiles/imagem PostgreSQL fixados; fontes oficiais no README |
| Migrações | Aplicadas em bancos de teste vazios; dotnet ef migrations has-pending-model-changes: nenhuma mudança pendente |
| Integração | scripts/local.ps1 integration: **15 aprovados, 0 falhas, 0 ignorados**; .local/results/integration.trx. HTTP/UUID/trim/duplicados/ordenação; outro contexto e outro host leem mesmo registro; entradas inválidas sem insert; constraint real; conexão indisponível retorna 500 genérico; CORS permitido/negado |
| Build e análise | scripts/local.ps1 check aprovado: .NET com 0 avisos/erros, lint, build Next e TypeScript |
| E2E | scripts/local.ps1 e2e: **5 aprovados, 0 falhas** em 6,8 s, Chromium, API/Next de produção e banco exclusivo; relatório em apps/web/playwright-report/index.html |
| Demonstração com reinícios | scripts/local.ps1 demo aprovado: criação pela tela/recarga, mesmo UUID/nome após reiniciar API e PostgreSQL mantendo volume, validação e API realmente parada sem sucesso falso. Evidências .local/demo.json e .local/demo.png; captura inspecionada |

### Falhas encontradas e tratadas

1. Inventário .NET dentro do sandbox não pôde consultar serviços Windows; verificado com permissão. Motor Docker inicialmente parado/inacessível no sandbox; operacional fora dele. Não foi presumida disponibilidade.
2. EF gerou literais com separadores Unicode que quebravam compilação. Constraint passou a usar chr(codepoint), com migration/snapshot correspondentes; build/testes e verificação de drift passaram.
3. Dependências transitivas resolviam EF 10.0.4 nos testes e 10.0.13 na API. Referência explícita a Relational 10.0.13 alinhou os consumidores; build sem avisos e integração aprovados.
4. ESLint 9 antigo e eslint-config-next traziam alertas/dependências incompatíveis com ESLint 10. Substituídos por ESLint 10 + TypeScript + Hooks com compatibilidade declarada; npm ci/audit/lint passaram. Lint na raiz alcança também os E2E. Há uma supressão pontual documentada de set-state-in-effect para sincronização inicial assíncrona com API.
5. Runner usava DOTNET_CLI_HOME local sem restaurar a ferramenta EF nesse contexto. Migrate agora restaura a versão fixa antes de executar.
6. Primeiro E2E: cadastro/recarga passou, quatro asserts falharam por seletor também encontrar o route announcer do Next. Seletores passaram a limitar alertas ao main, mantendo as expectativas; reexecução com 5/5 aprovados. Não houve simulação do fluxo de persistência.
7. Primeira demonstração: Next iniciado no diretório raiz, sem encontrar o build web. Corrigido cwd para apps/web; processos próprios encerrados no finally. Reexecução aprovada; a falha inicial não foi contada como demonstração aprovada.
8. Revisão manual em 19/10/2026: usuário não encontrou `pwsh` no terminal. A verificação anterior havia usado o PowerShell 7 incluído no runtime do agente, sem comprovar sua disponibilidade no PATH do usuário. README agora usa Windows PowerShell 5.1; script gera senha por APIs compatíveis com .NET Framework, tem UTF-8 com BOM para leitura correta no 5.1 e chama npm.cmd no Windows. Verificados no Windows PowerShell **5.1.26100.9711**: init em pasta descartável (sem alterar .env de desenvolvimento) e inicialização real da API com GET /api/exercises **200**, encerrando somente a árvore do processo de teste. Logs locais .local/ps51-api.out.log/.err.log. Suítes funcionais anteriores não foram repetidas para esta correção do launcher.

Demonstração concluída em 19/10/2026 às 00:12 (America/Sao_Paulo): exercício sintético UUID **42cbd7b5-2b25-44b5-8450-a4050aac1489** preservado nas duas verificações de reinício. A falha de POST foi demonstrada parando o processo real da API; nenhum registro correspondente foi encontrado após retomá-la. Dados de desenvolvimento mantidos, sem importação.

### Limites e retomada

**Implementado e verificado localmente**, com os resultados acima. **Não disponibilizado em servidor** e **não validado por usuários**. Sem autenticação/ownership, idempotency key ou política final de duplicados. Sem requisito arbitrário de tamanho de nome. Apenas dados sintéticos; não migrar esses registros para futuro piloto. Aviso ambiental do Playwright sobre NO_COLOR/FORCE_COLOR sem impacto nos testes. Verificação visual em desktop; não houve teste de usabilidade, matriz de navegadores ou entrega mobile.

Próximo passo: revisão humana do I0-r1 a partir da ficha, código e evidências. Sem pendência funcional conhecida dentro dos critérios de aceite locais. Git preservado sem commits/remoto; versionamento por commit pode ser tratado na revisão. Pipeline/homologação e outros incrementos dependem de autorização própria. Após a demonstração, web/API foram encerrados; banco de desenvolvimento preserva volume e serviços de teste são parados ao fechar a execução. Para reabrir, seguir README.
