# Delta Fit — Especificação do MVP

Status: proposta para validação de produto. Data: 15/10/2026. Nenhum código de aplicação faz parte desta entrega.

Para revisar o primeiro piloto, começar por `FIRST_VERSION.md`. A consolidação de discovery tem precedência sobre sugestões iniciais divergentes abaixo; contratos e arquitetura ainda requerem reconciliação antes de implementação.

Recorte confirmado em D22: primeiro piloto focado na experiência de treino; água e ranking de hábitos adiados. Menções a hábitos/metas abaixo representam escopo mais amplo futuro, não requisito desse piloto.

Atualizações de discovery: consultar `PRODUCT_DECISIONS.md` para dores validadas, comparação das quatro fichas, fila de dúvidas proposta e decisões pendentes sobre periodização. O contrato original abaixo não cobre todos os métodos observados e não deve ser congelado ou implementado sem reconciliação. Continuamos em discovery, sem autorização de setup ou código.

Visão futura confirmada: administrador da plataforma, com números dos personais/alunos, suporte cadastral e gestão das assinaturas pagas pelos personais ao Delta Fit. Área administrativa e cobrança ficam para depois da validação, fora do piloto inicial; detalhes em F09/F01 de `PRODUCT_DECISIONS.md`.

## 1. Objetivo e premissas

SaaS B2B2C para um personal prescrever, acompanhar e ajustar treinos; para o aluno executar séries e registrar hábitos com pouco atrito. Otimizar o fluxo completo antes de ampliar funcionalidades.

Decisões confirmadas pelo fundador em 15/10/2026:

- Cada aluno tem no máximo um personal ativo; pode ficar sem vínculo entre profissionais.
- Fichas e exercícios prescritos ficam disponíveis no aparelho após download. O aluno pode iniciar, registrar e concluir treinos sem conexão; os registros sincronizam posteriormente.
- Piloto sem cobranças. Mensalidade recorrente é uma intenção futura; acompanhamento mínimo de três meses é uma diretriz de produto a avaliar, sem compromisso financeiro implementado. Ver `PRODUCT_DECISIONS.md`.

Atualização de discovery: o ciclo manual de montagem/publicação/execução de treino é a prioridade inicial; IA vem em incremento posterior e nutrição em uma segunda etapa. As decisões e hipóteses recentes estão em `PRODUCT_DECISIONS.md`. A arquitetura e os milestones detalhados abaixo ainda precisam ser reconciliados com a direção de API C# antes da implementação; não executar o prompt inicial antigo sem essa revisão.

Demais premissas propostas para o MVP:

- Piloto no Brasil, português, adultos, unidades kg/ml, sem cobrança integrada.
- Um personal é a unidade de isolamento comercial; não há academias, equipes ou funcionários no MVP.
- Cada aluno tem no máximo um vínculo ativo com personal. Uma pessoa pode possuir os dois perfis, sem compartilhar permissões entre eles.
- IA entrega rascunho; personal revisa e publica. Não existe prescrição automática para o aluno.
- Mobile usa componentes nativos via Expo/React Native; não requer dois projetos separados em Swift/Kotlin.
- Portal exige conexão. Mobile permite iniciar e continuar sessões com uma ficha previamente baixada sem conexão; primeira autenticação, primeiro download, convite e publicação exigem rede.

## 2. Escopo e critérios de sucesso

**Revisão de discovery em andamento:** o relato de Alex acrescenta catálogo privado com nomes próprios, vídeos autorais e acompanhamento de execução/observações. Ver F06/F07 em `PRODUCT_DECISIONS.md`. Isso substitui a premissa abaixo de catálogo exclusivamente global e sem escrita por personal; domínio, matriz de acesso e contrato de IA ainda devem ser reconciliados antes de implementar essas funções. Desenvolvimento começa pelo incremento integrado I0 descrito em `PLANS.md`, sem antecipar todo o escopo.

| Público | MVP |
| --- | --- |
| Personal web | Cadastro/login, convites, alunos, contexto mínimo do aluno, catálogo, prescrição manual, geração por texto/voz, revisão/publicação, histórico e gráficos básicos |
| Aluno mobile | Aceitar convite, ficha vigente, séries/repetições/carga, último desempenho, descanso, retomada de sessão, água, peso e progresso semanal |
| Personal mobile | Lista de alunos, consulta do treino e histórico, edição simples de séries/repetições/descanso em nova revisão, publicação online |

Voz no web: gravar até 60 segundos, transcrever no servidor e mostrar transcrição editável antes de gerar. Sem conversa em tempo real. Se voz falhar, texto mantém o fluxo disponível. Vídeos opcionais são mídias curadas do catálogo; upload de vídeos pelo usuário fica fora.

Metas a medir no piloto, não garantias comerciais:

- Geração de rascunho por texto: p95 <= 30 s entre envio e rascunho validado; medir voz separadamente, incluindo transcrição. Medir também tempo até publicação, que inclui revisão humana.
- Registrar água ou peso: mediana <= 5 s, a partir da tela de hábito aberta; feedback local imediato e sincronização visível.
- Concluir sessão, reabrir o app e recuperar séries sem perda ou duplicação.
- Medir ativação (convite aceito + primeiro treino publicado), sessões concluídas/semana e retenção de 7 dias. Definir metas comerciais após entrevistas/piloto.

Fora do MVP: pagamentos, marketplace, chat, feed/ranking, wearables, dieta, diagnóstico/reabilitação, menores, organizações multiusuário, biblioteca de vídeos enviada por alunos, RAG/vetores e agentes autônomos. Progressão de carga não altera prescrição sozinha.

## 3. Arquitetura e responsabilidades

Monorepo TypeScript com pnpm workspaces, `apps/web` (Next.js App Router, Tailwind, Shadcn/ui), `apps/mobile` (Expo/React Native), `packages/contracts` (schemas e DTOs), `packages/domain` (regras puras) e `packages/database` (tipos gerados). Compartilhar contratos e regras, sem impor componentes visuais comuns.

Supabase concentra PostgreSQL, Auth e Storage. Operações simples usam cliente Supabase com sessão do usuário e RLS. Invariantes com várias escritas usam funções PostgreSQL transacionais: aceitar convite, publicar revisão, encerrar vínculo e sincronizar lote. Next.js Route Handlers concentram IA, transcrição e integrações que exigem segredo. Sem backend separado ou Edge Function duplicando o mesmo fluxo no MVP.

- Autorização ocorre no servidor e no banco, nunca apenas na interface. Usuário autenticado não é sinônimo de personal autorizado.
- RLS e grants explícitos em todas as tabelas expostas; políticas de Storage equivalentes. Views de gráficos respeitam permissões do chamador.
- Preferir cliente com JWT do usuário nas rotas. Credencial administrativa somente em operação administrativa específica e auditada; nunca no bundle web/mobile.
- Tokens mobile em armazenamento seguro; web com fluxo SSR/cookies apropriado à versão escolhida. Não armazenar sessão em logs.
- Versões compatíveis serão selecionadas e fixadas no setup, com lockfile; não assumir que todas as versões mais recentes funcionam juntas.
- Ambientes local, homologação e produção separados. Migrações versionadas; não editar schema de produção manualmente.

## 4. Modelo de domínio

IDs UUID, tempos em UTC (`timestamptz`), timezone IANA no perfil. `created_at`, `updated_at` e revisão inteira nos agregados mutáveis. FKs e constraints protegem integridade mesmo fora da UI. Nomes SQL sugeridos abaixo.

| Entidade | Campos essenciais e relações |
| --- | --- |
| Usuário (`profiles`) | `id` = `auth.users.id`, nome, timezone, locale; identidade de acesso. Email é mantido pelo Auth, não por duplicação editável |
| Personal (`coach_profiles`) | `user_id` PK/FK, nome profissional; proprietário das prescrições; sem papel administrativo global |
| Aluno (`student_profiles`) | `user_id` PK/FK, objetivo, experiência, equipamentos disponíveis, restrições declaradas, versão do contexto; dados mínimos para prescrição |
| Convite (`invitations`) | personal, email normalizado, hash do token, expiração, estado, aceito por; nunca persistir token puro |
| Vínculo (`coach_student_links`) | id, personal, aluno, início, encerramento, estado; índice único parcial por aluno quando ativo |
| Exercício (`exercises`) | id, nome, aliases curados, grupo muscular, equipamentos, modo de carga (`external_kg`, `bodyweight`), ativo, mídia opcional; catálogo global curado e somente leitura para usuários |
| Treino (`workout_plans`) | id, aluno, personal, vínculo, título, revisão corrente; agregado de prescrição |
| Revisão (`workout_revisions`) | plano, número, estado `draft/published/archived`, versão do contexto, origem manual/IA, autoria e publicação; conteúdo publicado imutável |
| Ficha (`workout_days`) | revisão, ordem, nome (A/B/C), duração estimada; não representa dia fixo da semana |
| Exercício prescrito (`workout_items`) | ficha, ordem, exercício FK, séries, faixa de repetições, descanso, RIR, notas; MVP apenas exercícios de repetição |
| Sessão (`workout_sessions`) | aluno, revisão/ficha imutável, início, fim, estado `in_progress/completed/abandoned`, UUID cliente |
| HistóricoDeCarga (`set_logs`) | sessão, item prescrito, índice da série, repetições reais, carga kg ou nulo para peso corporal, RIR opcional, horário, revisão; unicidade sessão/item/série |
| Política de metas (`goal_settings`) | aluno, água ml/dia opcional, peso alvo opcional, início de vigência; define valores futuros |
| MetasDiarias (`daily_goals`) | aluno, data local, timezone e alvo de água copiado naquele dia; único aluno/data; alteração futura não reescreve dias anteriores |
| Registro de hábito (`habit_entries`) | UUID cliente, aluno/data local, tipo `water/weight`, quantidade, unidade, ocorrido em, revisão; água é incremental, peso é medição |
| Solicitação IA (`ai_requests`) | personal, aluno, chave idempotente, hash da entrada/contexto, estado, versões de schema/prompt/catálogo, provedor/modelo, latência, consumo, resultado validado e expiração |
| Auditoria (`audit_events`) | ator, ação, alvo, instante e metadados mínimos; escrita restrita ao backend/banco |

Cardinalidades: usuário 0..1 personal e 0..1 aluno; personal 1:N vínculos; aluno 1:N vínculos históricos; plano 1:N revisões; revisão 1:N fichas; ficha 1:N itens; sessão 1:N séries. Histórico pertence ao aluno; prescrição registra também autoria e vínculo.

Integridade: chaves compostas/FKs ou validações transacionais garantem que revisão, ficha, item e sessão pertencem ao mesmo aluno/plano. Não aceitar IDs válidos de outro agregado. Catálogo referenciado é desativado, não excluído. IDs de titularidade nunca são campos livremente mutáveis.

## 5. Regras de negócio e autorização

### Vínculo e identidade

1. Personal autenticado cria convite para email; token aleatório de alta entropia, uso único e validade proposta de 7 dias. Mostrar link copiável; envio de email automatizado não é necessário no piloto.
2. Aluno entra/cria conta, verifica email e aceita explicitamente. Email verificado deve coincidir com o convite. Mensagens não revelam existência de contas.
3. Aceite valida token, expiração e email em transação, bloqueia convite e verifica exclusividade do vínculo. Concorrência é resolvida também pela constraint, não por consulta prévia apenas.
4. Troca de personal exige encerrar vínculo anterior e aceitar novo convite. Sem transferência automática de dados ao novo profissional.
5. Encerramento revoga imediatamente acesso do antigo personal ao perfil/hábitos/histórico do aluno e impede novas publicações. Aluno mantém acesso ao próprio histórico e à última ficha publicada em modo de consulta/execução pessoal. Novo personal só vê registros produzidos a partir do novo vínculo; compartilhamento do passado fica para depois.
6. Online, verificar vínculo em cada operação relevante; no mobile, cache local não é mecanismo de autorização. Limpar cache ao sair/trocar conta; sem bloqueio remoto instantâneo de um dispositivo offline.

### Matriz de acesso

| Recurso | Aluno | Personal ativo | Outros |
| --- | --- | --- | --- |
| Perfil/avaliação do aluno | Campos de conta conforme permissão; ler suas avaliações e evolução; sem edição direta da avaliação/contexto de prescrição (D20); notas privadas não incluídas automaticamente | Ler/editar avaliação e contexto dos alunos com vínculo ativo | Negado |
| Convites/vínculos | Aceitar/ler o próprio; encerrar vínculo | Criar convite/ler e encerrar seus vínculos | Negado |
| Rascunho | Sem acesso | Ler/editar se autor e vínculo ativo | Negado |
| Revisão publicada | Ler a própria | Ler/publicar se autor e vínculo ativo | Negado |
| Sessões, séries, hábitos | Ler/escrever os próprios | Somente leitura no intervalo do vínculo ativo | Negado |
| Metas | Ler/editar as próprias | Ler | Negado |
| Catálogo | Ler ativos e referências históricas | Ler | Sem escrita por clientes |
| IA/auditoria | Sem acesso à IA | Ler suas solicitações com vínculo ativo; auditoria por escopo autorizado | Negado |

Perfis do personal são visíveis ao próprio e aos alunos vinculados. Alteração de papel/ownership não pode ocorrer por edição de metadados livres. Funções privilegiadas, se necessárias, usam escopo estreito, `search_path` fixo, grants mínimos e validação explícita de `auth.uid()`; testar ausência de bypass e recursão nas políticas.

### Prescrição e execução

- Um aluno tem uma revisão vigente por vez; pode conter fichas A/B/C. Publicação valida tudo e troca a revisão vigente atomicamente. Manter versões anteriores para histórico.
- Editar treino publicado cria novo rascunho. Sessão iniciada continua na revisão original, inclusive após publicação concorrente.
- Dados de treino são estruturados em tabelas; JSON é transporte/resultado de geração, não a única fonte do histórico.
- Apenas séries explicitamente concluídas compõem volume e progressão. Zero kg é carga externa válida; nulo indica peso corporal, conforme catálogo. MVP não modela assistência negativa, tempo ou distância.
- Sugestão determinística de progressão: comparar as duas últimas sessões concluídas do mesmo exercício, modo e faixa prescrita; se todas as séries atingiram teto com RIR >= 2 e cargas comparáveis, sugerir o incremento permitido pelo equipamento configurado pelo personal. Ausência de RIR, incremento ou comparabilidade => manter carga e informar falta de base. Sem alterar treino automaticamente.
- Volume = soma de kg externos x repetições concluídas; exercícios de peso corporal não entram nesse volume. Não comparar máquinas/modalidades como se fossem equivalentes.
- Cronômetro persiste instante de término, recalcula ao voltar do background; não depende de intervalo JavaScript contínuo.
- Água soma eventos; peso mostra a última medição válida do dia, preservando as demais. Dias seguem timezone registrado no momento do evento; mudança de timezone não reclassifica passado.
- Gamificação: indicador discreto de consistência semanal; registrar peso não exige bater peso alvo. Sem punição por faltar, ranking ou incentivo a perda acelerada.

### Sincronização mínima do mobile

O funcionamento offline é requisito obrigatório do piloto, incluindo iniciar uma sessão nova a partir da ficha já disponível no aparelho. Baixar todas as fichas da revisão vigente com seus exercícios, nomes, instruções, séries, repetições, descansos e último desempenho sincronizado. Vídeos não são requisito offline. Sem download anterior, informar que a ficha precisa ser sincronizada uma primeira vez; não mostrar ficha vazia como se não existisse treino.

Persistir o snapshot completo localmente de forma atômica antes de marcar a ficha como disponível offline. Registros de sessão e séries devem ser gravados localmente antes de confirmar sucesso na interface, sem aguardar internet. Exibir última sincronização e pendências. Tentar sincronizar ao abrir/retomar o app, após registros quando houver rede e ao recuperar conectividade, com opção de tentar novamente. Não depender de execução contínua em background para garantir envio.

Ao reconectar, enviar registros pendentes vinculados à revisão original e consultar a revisão publicada mais recente. Uma publicação nova só substitui a ficha local após download completo; falha mantém o snapshot anterior utilizável. Sessões já iniciadas permanecem na revisão original; novas sessões passam a usar a revisão nova após sincronização. Aceitar registros offline de revisões antes disponibilizadas ao aluno, mesmo que agora arquivadas; conferir titularidade e referências, sem exigir que continuem vigentes. Nunca reescrever o passado para encaixá-lo na nova prescrição.

Cache persistente da ficha e sessão atual, fila local de mutações com UUID e revisão esperada, confirmação pelo servidor e remoção somente após ACK. Retry com backoff. Reenvio idêntico retorna resultado anterior; mesma chave com payload diferente retorna conflito. Séries usam unicidade e controle de revisão para impedir duplicações/overwrite silencioso. Conflito entre dispositivos exige recarregar e resolver; nunca somar duas vezes a mesma água. Meta diária é criada idempotentemente ao registrar hábito. Desvinculação impede acesso do personal, mas não a gravação dos próprios registros pelo aluno. Informar estado pendente/erro e testar encerramento do app durante sincronização.

Sessão expirada pausa apenas o envio: manter registros locais e solicitar reautenticação da mesma conta para sincronizar. Logout explícito com pendências exige aviso e escolha entre sincronizar antes ou descartar os dados locais; não apagar silenciosamente. Isolar armazenamento por usuário e impedir que outra conta leia ou envie a fila anterior.

## 6. IA: fronteira de confiança e contrato estrito v1

### Fluxo e entrada pública

`POST /api/ai/workout-drafts`, apenas personal autenticado. Header `Idempotency-Key`: UUID. Corpo fechado: `schema_version` (constante `1.0`), `student_id` (UUID), `brief` (texto 1..4000), `days_per_week` (inteiro 1..6), `session_minutes` (inteiro 15..120). Todos obrigatórios; campos adicionais rejeitados. Voz produz o mesmo `brief` após revisão da transcrição. Não aceitar do cliente personal_id, histórico, catálogo ou permissões.

Servidor monta contexto autorizado: objetivo, experiência, restrições declaradas, equipamentos, versões de contexto/catálogo e subconjunto permitido de exercícios com IDs. Não enviar nome, email ou dados desnecessários. `brief` e transcrição são dados não confiáveis: não podem alterar instruções, acessar ferramentas ou selecionar outros alunos.

Se contexto mínimo estiver ausente ou restrição não puder ser atendida pelo catálogo, retornar necessidade de esclarecimento. Nenhum prompt garante ausência de alucinação: o servidor valida estrutura, referências, combinações e limites; o personal avalia adequação profissional.

### Schema canônico da saída do modelo

JSON Schema é o contrato da aplicação; adaptar o subconjunto suportado ao provedor escolhido e sempre aplicar validação completa no servidor. Não presumir que provedores suportam os mesmos keywords. Todos os objetos são fechados, todos os campos obrigatórios, e nulo é explícito. IDs do catálogo são UUIDs emitidos pelo servidor; em execução, restringir `exercise_id` aos IDs permitidos quando suportado, além de verificar pertinência no backend.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "DeltaFitWorkoutDraftV1",
  "type": "object",
  "additionalProperties": false,
  "required": ["schema_version", "status", "questions", "warnings", "plan"],
  "properties": {
    "schema_version": { "const": "1.0" },
    "status": { "enum": ["ready", "needs_clarification"] },
    "questions": {
      "type": "array", "maxItems": 2,
      "items": { "type": "string", "minLength": 1, "maxLength": 240 }
    },
    "warnings": {
      "type": "array", "maxItems": 5,
      "items": { "type": "string", "minLength": 1, "maxLength": 300 }
    },
    "plan": {
      "anyOf": [
        { "type": "null" },
        {
          "type": "object", "additionalProperties": false,
          "required": ["title", "days"],
          "properties": {
            "title": { "type": "string", "minLength": 1, "maxLength": 100 },
            "days": {
              "type": "array", "minItems": 1, "maxItems": 6,
              "items": { "$ref": "#/$defs/day" }
            }
          }
        }
      ]
    }
  },
  "$defs": {
    "day": {
      "type": "object", "additionalProperties": false,
      "required": ["label", "estimated_minutes", "exercises"],
      "properties": {
        "label": { "type": "string", "minLength": 1, "maxLength": 40 },
        "estimated_minutes": { "type": "integer", "minimum": 15, "maximum": 120 },
        "exercises": {
          "type": "array", "minItems": 1, "maxItems": 12,
          "items": { "$ref": "#/$defs/exercise" }
        }
      }
    },
    "exercise": {
      "type": "object", "additionalProperties": false,
      "required": ["exercise_id", "sets", "reps_min", "reps_max", "rest_seconds", "target_rir", "notes"],
      "properties": {
        "exercise_id": { "type": "string", "format": "uuid" },
        "sets": { "type": "integer", "minimum": 1, "maximum": 6 },
        "reps_min": { "type": "integer", "minimum": 1, "maximum": 30 },
        "reps_max": { "type": "integer", "minimum": 1, "maximum": 30 },
        "rest_seconds": { "type": "integer", "minimum": 15, "maximum": 300 },
        "target_rir": { "type": ["integer", "null"], "minimum": 0, "maximum": 5 },
        "notes": { "type": ["string", "null"], "maxLength": 300 }
      }
    }
  }
}
```

O validador deve habilitar verificação de `format: uuid`. Limites acima são guardrails de produto, não comprovação de segurança clínica.

Validações semânticas obrigatórias após o schema:

1. `ready` exige plano não nulo e perguntas vazias; `needs_clarification` exige plano nulo e 1..2 perguntas.
2. Número de fichas igual a `days_per_week`; ordem deriva da posição no array. Labels distintas; sem IDs de entidades gerados pelo modelo.
3. Exercícios existem, estão ativos, pertencem ao catálogo enviado e são compatíveis com equipamentos/restrições estruturadas. Sem exercício repetido na mesma ficha no MVP.
4. `reps_min <= reps_max`; duração estimada <= orçamento. A estimativa não é garantia de duração real.
5. Sem carga kg inventada: modelo prescreve repetições/RIR, aplicativo consulta histórico real. Nomes, vídeos e equipamento vêm exclusivamente do catálogo.
6. Conferir versões do contexto, catálogo e vínculo na gravação e publicação. Se mudaram, exigir nova validação; não publicar resultado obsoleto.

### Resposta HTTP, falhas e persistência

Sucesso `200`: objeto fechado `{request_id, schema_version, result}`; `result` obedece ao schema acima. `needs_clarification` também é `200`, sem criar rascunho. `ready` cria rascunho transacional, vinculado à solicitação para recuperar seu ID por consulta autorizada; nunca publica. Repetição idempotente retorna a mesma resposta. IDs e autoria são atribuídos pelo servidor.

Erro: objeto fechado `{request_id, error: {code, message, retryable}}`. Sem stack trace ou payload do provedor. Códigos: `401 UNAUTHENTICATED`, `403 FORBIDDEN`, `404 STUDENT_NOT_FOUND` (também para alvo fora do escopo, evitando enumeração), `409 IDEMPOTENCY_CONFLICT/STALE_CONTEXT`, `422 INVALID_INPUT`, `429 RATE_LIMITED`, `502 AI_INVALID_OUTPUT/AI_UNAVAILABLE`, `504 AI_TIMEOUT`. Recusa do provedor é falha explícita `AI_REFUSED`, não saída fabricada. Truncamento não é plano parcial válido.

Uma tentativa de reparo de saída inválida, sem ampliar catálogo, dentro do prazo total; após isso falhar sem persistir plano. Proposta: deadline total de 35 s, limite de 5 solicitações/minuto e teto diário configurável por personal. Chave idempotente única por personal, retida 7 dias; hash inclui entrada e snapshot de contexto. Reservar solicitação antes de chamar modelo; concorrentes recebem `409 REQUEST_IN_PROGRESS` com indicação de retry. Limites e custo são controlados atomicamente no servidor. Provedor inicial único, adapter preparado para outro, sem fallback automático pago no MVP.

`POST /api/ai/transcriptions`: personal autenticado, áudio até 60 s/10 MB, formatos permitidos validados, rate limit; retorna texto para edição. Áudio temporário privado, removido após processamento; registrar falhas de remoção para limpeza. Não usar Storage público.

## 7. Segurança, operação e qualidade

- Minimizar dados pessoais e contexto de saúde; não colocar brief, restrições, peso, tokens ou áudio nos logs operacionais. Antes do piloto, definir política de retenção, exportação/exclusão e condições de processamento com provedores; esta especificação não determina conformidade legal.
- Proposta de retenção técnica: áudio eliminado após transcrição; resultado idempotente IA 7 dias; métricas agregadas sem conteúdo por 90 dias. Histórico de treino enquanto conta ativa; prazo de backups e execução de exclusão devem ser definidos antes do piloto.
- Mídias privadas com URLs temporárias, acesso por escopo. Seeds só com exercícios e mídia de origem/licença conhecida, sem dados reais.
- Publicação e convite têm auditoria. Métricas: latência, erro, custo e validação sem conteúdo sensível; correlacionar por request_id.
- Exportação/exclusão assistida pelo operador no piloto, com runbook e verificação de identidade; sem painel administrativo completo. Testar restauração de backup antes de usuários reais.
- Fluxos críticos com acessibilidade, carregamento, vazio, erro, retry e confirmação de sincronização. Offline é implementado na fase 3, segurança desde a fase 1.

## 8. Riscos e validações de discovery

| Risco | Mitigação / prova necessária |
| --- | --- |
| Isolamento entre personais | Testes negativos com dois personais, dois alunos e ex-vínculo; incluir RPC, views e Storage |
| IA plausível mas inadequada | Catálogo fechado, validação semântica, revisão obrigatória, conjunto de avaliações com casos incompletos/adversariais |
| Meta de 30 s conflita com voz/revisão | Medir etapas separadas; benchmark em amostra de briefs reais antes de prometer SLA |
| Registro perdido em academia sem rede | Fila persistente, idempotência, retomada após kill, conflito entre dispositivos |
| Escopo excessivo para dev solo | Fases com gates; personal mobile restrito a ajuste simples; sem cobrança/chat |
| Troca de personal e propriedade de dados | Política explícita de acesso temporal e testes de revogação |
| Duração/custo de APIs e hospedagem | Spike de compatibilidade e timeout na fase 2; limites de consumo e métricas |
| Progressão compara coisas diferentes | Exercício/modo/faixa comparáveis; ausência de evidência mantém carga |

Validar com 3–5 personais e 5–10 alunos: observar criação de ficha e registro de série; testar protótipo de transcrição/revisão; confirmar se os dois aplicativos pessoais são necessários no piloto. Os números de entrevistas são proposta de discovery, não evidência já coletada.

Exclusividade do vínculo e funcionamento offline foram confirmados pelo fundador. A política proposta de acesso ao histórico após troca de personal e as demais premissas de produto ainda devem ser validadas no discovery.

## 9. Referências técnicas consultadas

Consultadas em 15/10/2026; decisões de produto deste documento são propostas próprias.

- [Supabase: RLS, grants e testes de acesso](https://supabase.com/docs/guides/database/postgres/row-level-security).
- [Supabase: cliente e autenticação SSR](https://supabase.com/docs/guides/auth/server-side/nextjs).
- [Expo: monorepos](https://docs.expo.dev/guides/monorepos/).
