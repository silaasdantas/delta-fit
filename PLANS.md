# Delta Fit — Plano incremental para Codex

**Status atual: discovery.** Nenhuma implementação autorizada. Integração mínima, setup e prompts abaixo são propostas para uso futuro, após revisão e autorização explícita do fundador. Próximo passo atual: detalhar experiência do aluno e fila do personal, conforme `PRODUCT_DECISIONS.md`.

Atualização: revisar o escopo consolidado em `FIRST_VERSION.md` antes de qualquer fatiamento técnico. A jornada ali descrita não é ordem de implementação; este plano antigo permanece sem reconciliação completa com as decisões recentes.

Data: 15/10/2026. Fonte normativa de produto: `SPEC.md`. Este plano descreve arquivos futuros; nesta etapa somente `SPEC.md` e `PLANS.md` são entregues.

Decisões confirmadas: no máximo um personal ativo por aluno; consulta das fichas e registro de treinos offline, com sincronização posterior, são requisitos obrigatórios do piloto.

**Nota de revisão de discovery:** ler `PRODUCT_DECISIONS.md` antes de executar este plano. Piloto sem cobranças; assinatura e ciclo mínimo de acompanhamento são backlog futuro, fora das quatro fases atuais. Priorizar o ciclo manual de treino, depois IA, e nutrição em segunda etapa. A estrutura técnica e o Master Initialization Prompt abaixo antecedem a direção de API C# e precisam de revisão antes de uso. Infraestrutura, gateway, IaC e pipelines permanecem em avaliação.

## Método de execução

### Direção atual — primeiro incremento integrado

Esta direção tem precedência sobre o setup amplo e o Master Initialization Prompt originais abaixo. O fundador quer desenvolver aos poucos. Antes de iniciar implementação, revisar o prompt de execução para o incremento escolhido; não executar automaticamente as quatro fases.

**Incremento I0 proposto:** cadastrar e listar um exercício de teste em frontend Next.js → API ASP.NET Core → PostgreSQL. Persistir ID e nome; recarregar a página e comprovar permanência. Uma tela simples e endpoints de criação/listagem; sem editor completo de treino. Usar banco local de desenvolvimento para começar, com conexão PostgreSQL configurável, mantendo Supabase como opção gerenciada já escolhida para o produto.

**Aceite:** interface realmente consome a API C#; registro persiste no banco; validação de nome vazio e erro de comunicação aparecem na interface; integração API/banco verificada. Não usar mock como prova de persistência. Sem cloud, cobrança, IA, nutrição, gateway, Terraform ou pipeline neste incremento. Mobile entra em incremento próprio.

**Limite:** prova local com dados sintéticos, não piloto multiusuário. Não expor cadastro sem autenticação na internet nem usar dados reais; identidade e isolamento entram no incremento seguinte, antes de usuários reais.

**Arquivos previstos:** ler documentos de discovery e instruções aplicáveis; criar mínimo em `apps/web/`, `apps/api/DeltaFit.Api/`, `apps/api/DeltaFit.Api.Tests/`, `docs/progress.md`, configuração de conexão de exemplo e um único mecanismo versionado de migração. Escolher e registrar o mecanismo antes de gerar schema; não manter migrações EF e SQL concorrentes para os mesmos objetos. Não criar antecipadamente todos os pacotes ou tabelas do plano antigo.

**Sequência proposta, a refinar a cada entrega:**

1. I0 — integração local com cadastro/lista de exercício.
2. I1 — autenticação, propriedade e isolamento do catálogo por personal.
3. I2 — nomes próprios, instruções e demonstração por link; upload de vídeo em entrega separada.
4. I3 — vínculo com aluno, montagem manual simples e publicação versionada.
5. I4 — aluno consulta e registra execução; personal consulta histórico e observação da sessão.
6. I5 — persistência mobile/offline e sincronização; obrigatórios antes do piloto, embora não do primeiro teste técnico.
7. I6 — acompanhamento de prescrito versus realizado e evolução, orientado pela validação com Alex.

IA, métodos avançados, upload, nutrição e detalhes de acompanhamento têm incrementos próprios após validar as bases. A divisão não descarta requisitos: permite validar uma capacidade por vez. Nenhum incremento está sendo implementado por esta atualização documental.

Quatro fases, cada uma dividida em milestones atômicos. Executar um milestone por prompt, revisar diff e evidências, então avançar. Uma fase não é uma instrução para implementar todo o SaaS de uma vez. Cada milestone deve produzir uma mudança verificável e reversível; registrar progresso real em `docs/progress.md` com pendências e comandos executados.

Formato dos próximos prompts:

```text
Leia AGENTS.md (se existir), SPEC.md, PLANS.md e docs/progress.md.
Execute somente o milestone <ID>, respeitando o gate anterior.
Objetivo: <resultado observável descrito abaixo>.
Leia/crie somente os arquivos necessários ao escopo; explique expansão relevante.
Preserve alterações existentes. Não implemente milestones seguintes.
Verifique os critérios de aceite; reporte comandos/resultados e bloqueios reais.
Atualize docs/progress.md com o que foi efetivamente verificado.
```

Não afirmar conclusão quando uma dependência externa impediu validação. Não testar contra produção, não commitar segredos, não publicar/deployar automaticamente. Não criar abstrações de múltiplos provedores além da interface mínima definida. Fixar versões compatíveis e registrar decisões em ADRs curtos.

## Fase 1 — Fundação, banco e identidade

**Meta:** ambiente reproduzível, domínio protegido por banco e fluxo de vínculo autenticado, sem produto visual elaborado.

**Non-goals:** engine de IA, geração/transcrição, telas de treino, gráficos, hábitos funcionais, sincronização offline, deploy e cobrança. Modelar tabelas futuras e políticas agora é parte da fundação, não implementação desses fluxos.

| Milestone | Entrega | Aceite e gate |
| --- | --- | --- |
| 1.1 — Workspace | pnpm workspace, Next/Expo mínimos, pacotes de contratos/domínio/tipos, scripts e env examples | Instalação reproduzível, typecheck/lint, web compila; configuração Expo resolve e app abre em um ambiente disponível, ou bloqueio de execução fica explícito |
| 1.2 — Domínio persistente | Migrações das entidades da SPEC, constraints, índices, catálogo seed pequeno e curado, tipos gerados | Banco local recriado do zero; integridade de ownership, exclusividade e unicidade testada; nenhuma tabela exposta sem RLS/grants deliberados |
| 1.3 — Identidade e vínculo | Clientes Auth web/mobile, entrada/saída/retomada, convite e aceite transacionais, encerramento de vínculo | Dois personais não acessam alunos alheios; aceite concorrente/expirado/reusado falha corretamente; ex-personal perde acesso; telas de auth mínimas |
| 1.4 — Gate da fundação | CI e documentação de setup/testes | Migrações, testes de permissões/constraints, typecheck/lint e build web passam; sem secrets rastreados; evidências documentadas |

**Ler:** documentos raiz e instruções de repositório existentes; documentação oficial das versões selecionadas.

**Criar/editar por necessidade:**

- Raiz: `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `.gitignore`, `.env.example`, `README.md`, `tsconfig.base.json`.
- `apps/web/{package.json,tsconfig.json,next.config.ts,src/app/layout.tsx,src/app/page.tsx}` e configuração Tailwind/Shadcn compatível com versões escolhidas.
- `apps/web/src/lib/supabase/{client,server}.ts`, mecanismo SSR de renovação de sessão conforme a versão Next escolhida, `apps/web/src/app/(auth)/`, `apps/web/src/app/invitations/`.
- `apps/mobile/{package.json,app.config.ts,tsconfig.json,app/_layout.tsx,app/index.tsx}`, `apps/mobile/src/lib/{supabase,secure-session}.ts`, `apps/mobile/app/(auth)/`.
- `packages/contracts/src/{identity,workout,habits}.ts`, `packages/domain/src/index.ts`, `packages/database/src/{index,database.types}.ts`, respectivos manifests/tsconfigs.
- `supabase/config.toml`, `supabase/migrations/<timestamp>_*.sql`, `supabase/seed.sql`, `supabase/tests/{constraints,rls,invitations}.test.sql`.
- `docs/architecture/001-foundation.md`, `docs/security/access-matrix.md`, `docs/progress.md`, `.github/workflows/ci.yml`.

Os nomes indicam responsabilidade; CLI pode criar arquivos auxiliares obrigatórios. Não compartilhar dependências server-only com mobile. Na 1.1 contratos são mínimos; completar domínio/migrações na 1.2 e Auth na 1.3.

## Fase 2 — Portal do personal e copiloto

**Meta:** personal convida aluno, prescreve manualmente ou por IA, revisa e publica uma ficha versionada; consegue consultar evolução real quando houver registros.

**Non-goals:** chat, RAG, agentes com ferramentas, publicação automática, fallback entre provedores, pagamentos, offline web, personalização visual extensa e sincronização mobile.

| Milestone | Entrega | Aceite e gate |
| --- | --- | --- |
| 2.1 — Fluxo manual | Alunos, contexto, catálogo, editor mínimo e publicação transacional | Prescrição completa sem IA; edição gera revisão; publicação concorrente não cria dois vigentes |
| 2.2 — Contrato e avaliações | Schema canônico executável, validador semântico, fixtures e adapter com provedor simulado | Rejeitar IDs desconhecidos/alheios, repetições invertidas, catálogo incompatível, campos extras e incoerência de status; aceitar esclarecimento válido |
| 2.3 — IA por texto | Rota autenticada, snapshot de contexto, idempotência, limites e adapter real único | Reenvio não duplica rascunho; timeout/recusa/truncamento não publicam; benchmark de latência/custo documentado |
| 2.4 — Voz e leitura | Transcrição editável, limpeza de áudio, gráficos simples de sessões/volume/peso | Falha de voz permite texto; dados de teste rotulados como fictícios; gráfico vazio não inventa progresso; revisão humana continua obrigatória |

**Ler:** artefatos da fase 1, especialmente RLS, contratos e SPEC seção 6.

**Criar/editar:** `apps/web/src/app/(coach)/{students,workouts}/`, `apps/web/src/components/{students,workouts,charts}/`, `apps/web/src/app/api/ai/{workout-drafts,transcriptions}/route.ts`, `apps/web/src/server/ai/{provider,generate,validate,limits,idempotency}.ts`, `packages/contracts/src/ai/{request,response,schema}.ts`, `packages/domain/src/workout-validation.ts`, `supabase/migrations/<timestamp>_publish_and_ai.sql`, `apps/web/tests/{ai,publishing}/`, `docs/ai/{prompt-v1,evaluations,benchmark}.md`, `docs/architecture/002-ai-provider.md`, `docs/progress.md`.

**Gate:** fluxo manual + IA + publicação passa com dois tenants; corpus inclui prompt injection, restrição não atendida e contexto desatualizado. Documentar se meta de 30 s foi ou não atingida. Integração real deve ser verificada com credenciais de desenvolvimento; mocks não comprovam compatibilidade do provedor.

## Fase 3 — Mobile do aluno e ajustes do personal

**Meta:** aluno completa treino e hábitos com retomada e sincronização confiável; personal faz ajustes simples no bolso.

**Non-goals:** IA por voz no mobile, wearables, push sofisticado, treino montado offline, chat, edição colaborativa, sincronização irrestrita de toda a conta.

| Milestone | Entrega | Aceite e gate |
| --- | --- | --- |
| 3.1 — Sessão online | Ficha, séries, último desempenho, cronômetro e conclusão | Sessão fixa revisão original; background/retomada recalcula descanso; rejeitar série de outra ficha/aluno |
| 3.2 — Persistência e sync | Download atômico de todas as fichas/exercícios vigentes, início e conclusão offline, outbox, UUID, ACK, retry e conflitos | Iniciar treino em modo avião após download; kill/reabertura/reenvio não perde nem duplica série; nova publicação não altera sessão anterior; revisão arquivada aceita registros offline próprios; cache isolado por usuário |
| 3.3 — Hábitos e progressão | Água, peso, metas diárias, consistência e sugestão determinística | Água não duplica no retry; timezone e virada do dia corretos; progressão só com dados comparáveis e suficientes |
| 3.4 — Personal mobile | Lista, consulta e edição pequena em nova revisão | Personal não edita publicação em lugar; aluno continua sessão anterior; revogação online funciona |

**Ler:** contratos, permissões, publicação, histórico e regras de sincronização das fases anteriores.

O milestone 3.1 é uma etapa intermediária de implementação. A fase só entrega o fluxo do aluno após 3.2: gravar localmente antes de confirmar na interface, sincronizar ao retomar/recuperar rede e disponibilizar revisões novas sem sobrescrever sessões em andamento. Testar primeiro acesso sem download, falha durante download, sessão expirada com fila pendente e logout com aviso antes de descartar pendências. Vídeos offline ficam fora do escopo.

**Criar/editar:** `apps/mobile/app/(student)/{workouts,session,habits}/`, `apps/mobile/app/(coach)/{students,workouts}/`, `apps/mobile/src/features/{workout,habits,coach}/`, `apps/mobile/src/{storage,sync}/`, `packages/contracts/src/{sessions,sync}.ts`, `packages/domain/src/{progression,daily-goals}.ts`, `supabase/migrations/<timestamp>_session_sync.sql`, `apps/mobile/tests/{session,sync,habits}.test.ts`, `packages/domain/tests/`, `docs/mobile/offline-protocol.md`, `docs/progress.md`.

**Gate:** testar execução em iOS e Android, pelo menos um dispositivo físico; modo avião, app encerrado com pendências, token expirado, logout/troca de conta e conflito entre dispositivos. Registrar verificações indisponíveis sem alegar aprovação. Medir tarefa de hábito com usuários, não apenas tempo de API.

## Fase 4 — Qualidade do piloto e operação

**Meta:** piloto utilizável, observável e recuperável, com estados completos e dados protegidos.

**Non-goals:** novas features de produto, reescrita de stack, microserviços, Kubernetes, planos comerciais, marketplace e garantias de escala sem medição.

| Milestone | Entrega | Aceite e gate |
| --- | --- | --- |
| 4.1 — UX completa | Estados vazios, carregamento, erro, retry, acessibilidade e feedback de sync | Jornadas de convite, IA, sessão e hábitos exercitadas sem becos sem saída |
| 4.2 — Operação e privacidade | Logs mínimos, métricas, limites, exportação/exclusão assistida, limpeza de áudio, runbooks | Sem conteúdo sensível em logs; exclusão e restauração verificadas em ambiente de teste; retenção definida antes do piloto |
| 4.3 — Validação do piloto | E2E web, smoke mobile, benchmark e checklist de distribuição | Personais/alunos piloto completam jornadas; bloqueadores críticos resolvidos; resultados e limitações documentados |

**Ler:** todos os contratos e evidências dos gates anteriores.

**Criar/editar:** estados e boundary files nas rotas existentes, `apps/web/tests/e2e/`, `apps/mobile/tests/flows/`, `docs/{pilot-checklist,privacy-retention,observability,release}.md`, `docs/runbooks/{backup-restore,export-delete,incident}.md`, configurações de monitoramento e CI existentes, `docs/progress.md`. Migrações adicionais apenas para correções demonstradas.

**Gate final:** matriz de acesso revisada, zero falha crítica conhecida, restauração testada e fluxo sem rede validado. Preparar builds e checklist de publicação; distribuição pública e produção são ações posteriores explícitas. Validações por pessoas não são substituídas por testes automatizados.

## Master Initialization Prompt — Fase 1

Copiar o bloco inteiro em uma nova execução do Codex. O prompt inicia a fase 1 pelo milestone 1.1; os demais são deliberadamente separados para manter revisão atômica.

```text
Você é o engenheiro responsável pelo Delta Fit, um SaaS B2B2C de fitness.
Implemente a fundação respeitando SPEC.md e PLANS.md. Nesta execução,
implemente SOMENTE o milestone 1.1 da Fase 1. Não implemente as fases 2–4.

Antes de editar:
1. Leia AGENTS.md se existir e instruções aplicáveis das pastas ancestrais;
   depois SPEC.md e PLANS.md inteiros. Leia docs/progress.md se existir.
2. Inspecione a árvore e git status. Preserve alterações do usuário.
3. Respeite as decisões confirmadas na SPEC: um personal ativo por aluno
   e fichas/registros offline com sincronização posterior. As demais
   premissas permanecem provisórias. Offline será implementado na fase 3.
   Só pergunte se houver contradição que impeça uma implementação segura.
4. Verifique versões compatíveis nas fontes oficiais. Não fixe versões
   por memória nem altere a stack. Registre as escolhas e gere lockfile.

Objetivo desta execução:
Criar um monorepo pnpm/TypeScript instalável com apps/web (Next.js App
Router, Tailwind e configuração mínima Shadcn/ui), apps/mobile (Expo/
React Native) e packages/contracts, packages/domain e packages/database.
Compartilhe contratos/regras, não componentes visuais. Crie somente telas
de abertura mínimas. Não crie componentes complexos ou dados fictícios que
pareçam funcionalidade concluída.

Crie scripts coerentes de dev:web, dev:mobile, lint, typecheck e build:web.
Use versões TS/React compatíveis com cada app; evite duas cópias de React
no bundle mobile. Não importe módulos server-only em pacotes consumidos
pelo Expo. Se precisar adaptar configuração de monorepo/Metro, siga a
documentação da versão Expo escolhida.

Crie .gitignore e exemplos de variáveis por ambiente. Somente URL/chave
publicável Supabase podem aparecer como variáveis públicas. Segredos de
IA e credenciais administrativas ficam exclusivamente no servidor;
nenhum segredo real é necessário neste milestone. Não criar projetos em
serviços externos, não fazer deploy e não instalar ferramentas globais.

Packages devem exportar apenas contratos mínimos coerentes com SPEC.md;
não invente um database.types.ts como se fosse gerado de banco existente.
Documente que sua geração real pertence ao milestone 1.2. Não implementar
migrações, RLS ou Auth pela metade nesta execução: são entregas de 1.2/1.3.

Documente README com requisitos, instalação, comandos de execução e
verificação, envs e estrutura. Crie docs/architecture/001-foundation.md
com decisões, versões e riscos; docs/progress.md com status real por
milestone. Explique o que depende de Supabase/Docker/emulador sem declarar
esses fluxos como testados.

Verificação:
- Instalação a partir do lockfile, typecheck e lint dos workspaces.
- Build do web sem segredos de produção.
- Resolução da configuração Expo e abertura do app em ambiente disponível.
- Se um comando não puder rodar, registre bloqueio e saída relevante;
  não marque o gate como aprovado. Não criar testes que só confirmem
  boilerplate; testes de autorização/integridade virão com o banco.

Ao terminar, apresente arquivos criados, escolhas, comandos/resultados e
limitações. Atualize docs/progress.md. Pare no limite de 1.1 e descreva o
próximo milestone 1.2 com os arquivos a ler. Não declare a Fase 1 completa.
```

## Prompts de continuação da Fase 1

- **1.2:** usar o formato de execução, com objetivo de criar todas as tabelas da SPEC e isolamento desde a criação; implementar constraints, RLS, seed curado e geração real de tipos. Incluir testes negativos com identidades distintas, ownership cruzado, histórico temporal e inserts/updates/deletes proibidos. Sem UI de produto.
- **1.3:** implementar autenticação mínima web/mobile, renovação/retomada, convite aceito em transação e encerramento. Testar token reutilizado, email errado, aceite concorrente e revogação. Não acrescentar login social ou envio automatizado de email comercial.
- **1.4:** executar o gate integrado, configurar CI com banco local e documentar instalação limpa, segredos e resultados. Corrigir apenas falhas da fundação. Só marcar fase concluída com as evidências de 1.1–1.4; não iniciar a fase 2 implicitamente.
