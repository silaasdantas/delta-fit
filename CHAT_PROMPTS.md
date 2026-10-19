# Delta Fit — prompts para iniciar conversas

Atualizado em 19/10/2026. Catálogo solicitado pelo fundador (D63). Usar em conversas com acesso à pasta do projeto. A existência deste arquivo não inicia chats nem autoriza implementação. Cada bloco só vira instrução quando escolhido e enviado pelo usuário na conversa correspondente.

## Como usar

- Produto e planejamento: os prompts abaixo estão prontos para copiar.
- I0 implementado: seção 3 preserva a autorização executada sob D74; não reenviar para começar do zero. Revisão do I0 pronta na seção 4; planejamento do pipeline na seção 5.
- D75: em cada próximo passo, indicar continuar no chat atual ou abrir outro, sua finalidade e o prompt correspondente. Correções do I0 podem continuar na implementação; revisão e planejamento de pipeline têm conversas próprias recomendadas. Não criar chats automaticamente.
- O conteúdo dinâmico fica em CONTEXT.md e na ficha da entrega, evitando copiar um resumo que envelhece para cada prompt.
- Outro chat ou ferramenta precisa acessar a mesma pasta ou receber os documentos. Não presumir memória global nem mensagens automáticas entre chats.
- Ao mudar de etapa, atualizar somente o resumo correspondente. Não sobrescrever trabalho de outra conversa; reler arquivos antes de alterá-los.

## 1. Produto — iniciar ou retomar

```text
Esta é uma conversa de produto do Delta Fit. Leia AGENTS.md, CONTEXT.md e FIRST_VERSION.md. Consulte apenas os trechos relevantes de PRODUCT_DECISIONS.md antes de perguntar sobre decisões existentes. Consulte DEVELOPMENT_WORKFLOW.md distinguindo confirmações de propostas.

Retome o cenário ou pendência de produto indicado no CONTEXT.md. Se o checkpoint estiver em planejamento técnico, apresente brevemente as pendências de produto e proponha o próximo cenário concreto de discovery, sem assumir execução técnica. Converse em português, com exemplos e perguntas curtas. Diferencie relato de uso, hipótese, proposta e decisão confirmada.

Registre confirmações relevantes com IDs estáveis, atualize o escopo quando necessário e deixe o ponto de retomada. Produto pode evoluir mesmo com incremento em andamento: registre impacto, sem ampliar silenciosamente o escopo da implementação. Não crie código, setup, deploy, contratação, novos chats ou mensagens para outras conversas.
```

## 2. Planejamento técnico — primeira entrega

```text
Esta é uma conversa de planejamento técnico do Delta Fit, sem autorização para implementar. Leia AGENTS.md, CONTEXT.md, FIRST_VERSION.md e DEVELOPMENT_WORKFLOW.md. Consulte as decisões de produto pertinentes. SPEC.md e PLANS.md são históricos parcialmente superados; consulte somente trechos úteis e reconcilie divergências antes de aproveitá-los.

Leia ARCHITECTURE.md e mantenha a visão de arquitetura atualizada. Registre escolhas técnicas relevantes em ADRs em docs/architecture/ somente quando discutidas, distinguindo propostas de decisões aceitas e planejado de implementado. Não substituir decisões de produto por escolhas técnicas implícitas.

Leia e refine a ficha proposta do Incremento 0 em docs/delivery/I0.md, consultando docs/delivery/README.md. Mantenha execução não autorizada. Ponto de partida proposto: cadastrar e listar um exercício pelo frontend Next.js, API ASP.NET Core/C# e PostgreSQL; recarregar e comprovar persistência, validando nome obrigatório e erro de comunicação. Esse recorte ainda precisa ser revisado, não tratado como aprovado.

Defina objetivo, decisões relacionadas, dentro/fora do recorte, dependências, critérios de aceite, verificações e plano técnico mínimo. Local primeiro já foi confirmado (D64); não perguntar novamente. Refine testes unitários quando houver regras próprias, integração com PostgreSQL e funcionais automatizados proporcionais (D65). Planeje Git desde a base e reaproveitamento das verificações em pipeline futuro; homologação vem depois da validação local (D66). Esclareça se homologação e ambiente de teste são o mesmo destino antes de planejar ambientes separados. Sem contratar ou configurar serviços. Não antecipar todas as entidades e funcionalidades do piloto. Requisitos adiados do incremento continuam no escopo do piloto.

Apresente escolhas que precisem de decisão humana com tradeoffs claros; não repita perguntas já respondidas. Prepare em CHAT_PROMPTS.md o prompt específico da entrega apenas quando o escopo estiver definido, distinguindo a versão de revisão da instrução de execução. Atualize o ponto de retomada técnica sem apagar pendências de produto. Não implemente nem execute o Master Initialization Prompt antigo.
```

## 3. Implementação — I0-r1, pronto para copiar

Planejamento consolidado em D69–73. **Enviar o bloco abaixo em outra conversa autoriza implementar o I0 local.** Armazená-lo aqui não inicia execução. Não inclui deploy, contratação, pipeline ou instalação de ferramentas de sistema por consequência implícita; solicitar permissões do ambiente quando necessárias.

```text
Esta é a conversa de implementação do Incremento 0 do Delta Fit. Autorizo implementar, configurar localmente e verificar somente o escopo I0-r1 de docs/delivery/I0.md, consolidado nas decisões D69–73 em 18/10/2026. Não autorizo deploy, contratação, pipeline, remoto Git ou incrementos seguintes.

Leia AGENTS.md, CONTEXT.md, FIRST_VERSION.md, ARCHITECTURE.md, docs/architecture/ADR-001.md, docs/delivery/I0.md e as decisões pertinentes, em especial D69–73. Leia docs/progress.md se existir e confira arquivos, histórico e alterações já presentes. Se houver divergência material de escopo/aprovação, exponha antes de implementar. SPEC.md/PLANS.md não são contratos finais; não execute o Master Initialization Prompt antigo.

O fluxo é Next.js/TypeScript → API ASP.NET Core/C# → PostgreSQL em Docker Compose. API em Vertical Slice enxuta, um projeto, Minimal APIs e EF Core/Npgsql direto nas operações, com migrações versionadas. Sem MediatR, repository genérico ou projetos por camada. Frontend chama API diretamente, CORS local restrito. Cadastro/listagem usam UUID e nome obrigatório com trim; nomes iguais podem ter IDs distintos; listagem sem paginação. Sem autenticação/ownership do produto, mobile ou importação de dados reais.

Antes de setup, confira ferramentas e compatibilidade e fixe versões suportadas; não presuma Docker disponível. Preserve o Git existente e alterações de outras conversas. Use os detalhes operacionais da ficha/ADR como plano mínimo, sem ampliar o recorte. Solicite permissões necessárias para instalar ferramentas de sistema; não contrate serviços.

Implemente testes xUnit com PostgreSQL real para cadastro/listagem/validação/persistência e Playwright com processos reais para cadastro pela tela, recarga e erros. Unitários somente para regras próprias relevantes. Separe dados/bancos de desenvolvimento e testes, com limpeza restrita às instâncias descartáveis. Migrações devem preparar banco vazio; mocks não comprovam persistência. Registre falhas/limitações reais, sem declarar testes não executados como aprovados.

Implemente e verifique somente o recorte autorizado, preservando alterações existentes. Não ampliar o escopo com decisões novas sem avaliar impacto. Faça verificações proporcionais aos critérios de aceite e demonstre o fluxo integrado; mocks não comprovam persistência real.

Ao concluir, registre na ficha e em docs/progress.md o que foi implementado, evidências de testes e demonstração, limitações, pendências e próximo passo. Diferencie implementado, verificado, disponibilizado em servidor e validado por usuários. Atualize o ponto técnico de retomada sem apagar o contexto de produto. Não envie mensagens a outras conversas nem crie chats por iniciativa própria.
```

## 4. Revisão de entrega — I0-r1, pronto para copiar

```text
Esta é uma conversa de revisão do I0-r1 do Delta Fit, descrito em docs/delivery/I0.md. Leia AGENTS.md, CONTEXT.md, FIRST_VERSION.md, ARCHITECTURE.md, docs/architecture/ADR-001.md, README.md e docs/progress.md; consulte D69–74 e decisões pertinentes. Confira Git, código e evidências, incluindo a correção do launcher para Windows PowerShell 5.1; não considere a afirmação de conclusão como prova suficiente. Commit inicial e remoto já existem: confira o estado atual, sem presumir que seja idêntico ao checkpoint.

Avalie aderência ao escopo e critérios de aceite, falhas relevantes, isolamento de acesso quando aplicável e limitações de teste. Execute verificações não destrutivas pertinentes quando viáveis. Não altere a aplicação, faça deploy ou amplie o escopo nesta revisão. Registre achados e verificações na ficha, preservando evidências históricas, e diferencie problemas da entrega de sugestões futuras de produto.

Entregue resultado da revisão com problemas priorizados, evidências e limites. Se não houver achados relevantes, diga quais verificações sustentam essa conclusão. Prepare um resumo documental para retomarmos a discussão de produto; não envie mensagens a outros chats.
```

## 5. Planejamento do pipeline de build e testes — pronto para copiar

Abrir outro chat na mesma pasta. Enviar este bloco autoriza somente planejamento/documentação, sem configurar CI. Não presume aceite do I0.

```text
Esta é uma conversa de planejamento técnico do pipeline de build e testes do Delta Fit. Não autorizo implementar workflows, configurar serviços/segredos/remotos, contratar ou fazer deploy nesta conversa.

Leia AGENTS.md, CONTEXT.md, FIRST_VERSION.md, DEVELOPMENT_WORKFLOW.md, ARCHITECTURE.md, docs/architecture/ADR-001.md, docs/delivery/I0.md, docs/progress.md e README.md. Consulte D62–66 e D69–75. Confira código, scripts, versões, histórico e estado Git existentes; preserve alterações. Repositório: https://github.com/silaasdantas/delta-fit.git. Não recrie Git, remoto ou I0. SPEC.md/PLANS.md não são contratos finais.

Planeje somente CI para a base I0: restauração por lockfiles, build .NET/Next, lint/TypeScript, xUnit com PostgreSQL real e Playwright com processos reais. Avalie compatibilidade dos scripts com o runner proposto, bancos descartáveis, credenciais sintéticas, gatilhos, permissões mínimas e artefatos de falha. Não presumir que comandos locais Windows já rodem em Linux ou que PostgreSQL de CI seja homologação. GitHub Actions pode ser avaliado como proposta, sem aprovação prévia presumida.

Prepare uma ficha própria em docs/delivery/ com objetivo, dentro/fora, decisões pendentes, critérios de aceite, verificações e plano mínimo. Registre pendências da revisão do I0 sem inventar aceite funcional do fundador. Homologação/acesso/hospedagem ficam para recorte posterior; sem deploy ou autenticação de produto por consequência.

Atualize o ponto técnico de retomada sem apagar contexto de produto. Com ficha e recorte definidos, prepare o prompt específico de implementação em CHAT_PROMPTS.md; armazenar não autoriza executar. Indique quando continuar ou mudar de sessão. Não crie chats, delegue ou envie mensagens a outras conversas.
```

## Passagem entre conversas

Ao encerrar um bloco, registrar onde paramos, decisões ou evidências novas, pendências e próximo passo no documento da frente correspondente. A conversa seguinte lê esse registro. CHAT_PROMPTS.md contém instruções de entrada, não uma segunda transcrição ou fonte de decisões.

## Estado atual

- Conversa de produto: em andamento.
- Planejamento do I0 concluído; seção 2 preserva a instrução original, sem repetir o estado antigo.
- I0-r1 implementado/verificado localmente sob D74; evidências em docs/progress.md. Commit inicial e remoto conferidos localmente em 19/10; isso não comprova aceite funcional ou revisão independente.
- Chat atual: implementação/correções e passagem documental. Recomenda-se outro para revisão (seção 4) e outro para planejamento de pipeline (seção 5), conforme a finalidade escolhida. Planejamento pode registrar pendências da revisão, sem presumir aceite.
- Servidor, pipeline e validação com usuários não comprovados. Nenhum chat criado automaticamente.
