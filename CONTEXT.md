# Delta Fit — leia primeiro para retomar

Checkpoint: decisões/relatos até D74. Estado: **produto em discovery; I0-r1 implementado e verificado localmente em 19/10/2026**. Resumo substituível, não transcrição. Fonte detalhada: `PRODUCT_DECISIONS.md`; escopo organizado: `FIRST_VERSION.md`.

## Retomada técnica — I0-r1

D74: autorização humana específica recebida nesta conversa para implementar/configurar/verificar somente o I0-r1 consolidado em D69–73. Sem deploy, contratação, pipeline, remoto Git, mobile, autenticação/ownership, dados reais ou incrementos seguintes. Avisos anteriores de ausência de autorização descrevem o planejamento, substituídos somente nesse recorte.

Código local: apps/web (Next/TypeScript), apps/api/DeltaFit.Api (Minimal APIs/Vertical Slice/EF Core), Compose PostgreSQL e migração inicial; testes em tests/. Comandos em README.md e scripts/local.ps1. Git preservado sem commits/remoto e documentos preexistentes mantidos. Evidências em docs/progress.md: 15/15 integração PostgreSQL real, 5/5 E2E, builds/lint/TypeScript e demonstração com reinícios aprovados. Web/API encerrados ao concluir; volume de desenvolvimento preservado. Não disponibilizado em servidor nem validado por usuários. Próximo passo técnico: revisão humana do I0-r1; sem pendência funcional conhecida dentro do recorte, sem avançar automaticamente a pipeline/homologação/outro incremento.

Retomada de produto permanece a revisão antes de publicar descrita abaixo; I0 não decide requisitos da prescrição.

Revisão manual iniciada pelo usuário em 19/10: `pwsh` não estava no PATH do terminal comum. Corrigidos README e launcher para Windows PowerShell 5.1, sem instalar ferramenta ou mudar política permanente. Init e API/GET 200 verificados nesse PowerShell; detalhes em docs/progress.md. Usuário pode retomar execução pelos comandos atualizados do README.

## Onde paramos

- Concluímos um teste de mesa da jornada do aluno usando a ficha A de novembro como exemplo; não foi treino realmente executado no produto.
- Percorremos execução, registro tardio, encerramento, pedido de alternativa, resposta do personal, pendência de ajuste e publicação da alternativa.
- Jornada do aluno encerrada em D42: ação Usar alternativa dentro do item original abre prescrição e histórico próprios da alternativa publicada.
- Usuário aceitou continuar pelo olhar do personal, começando pela montagem da ficha. Antes disso, pediu mecanismo de memória para retomar em outro chat. Esta é a razão dos arquivos AGENTS.md/CONTEXT.md.
- D43: usuário confirmou organização por fichas e escolheu a [planilha de novembro/2023](https://docs.google.com/spreadsheets/d/1l99sVR4YbdERHMEPZjbwYFv0rJcLQKSf/edit) como referência do teste do personal, começando pela ficha A. Link e finalidade preservados em PRODUCT_DECISIONS.md; não copiar conteúdo integral ou dados pessoais para memória.
- D44: aprovado testar blocos flexíveis: personal começa com um bloco e adiciona outros se necessário; aluno vê sequência com títulos discretos, sem ação extra entre blocos. Pendência explícita: retomar teste A/B (blocos versus lista única com função por exercício) ao planejar testes com convidados, observando montagem e execução separadamente, inclusive em ficha simples. Hipótese aceita para teste, sem resultado validado; experimento não iniciado.
- D45: criar exercício na própria busca, sem sair da montagem, confirmado. Mínimo definido em D48; visibilidade ainda aberta.
- D46: confirmado cadastro de treinos de referência pelo próprio personal na biblioteca dele, para copiar/adaptar ao aluno, mantendo cópia independente e publicação explícita. Forma de alimentar/manter modelos ainda aberta; sem compartilhamento entre personais aprovado.
- D47–48: cadastro reutilizável do exercício separado da prescrição na ficha. Somente nome obrigatório no cadastro; link e orientação geral opcionais, complementáveis depois. Requisitos da prescrição/publicação ainda abertos.
- D49/D60: descanso preenchido uma vez por ocorrência do exercício, ajustável por série; quando não preenchido, usar padrão de 45 s confirmado pelo fundador. Tempo explícito prevalece. 60 s foi só exemplo anterior. Transições/métodos agrupados ainda têm detalhes abertos; não inserir pausa dentro do par confirmado em D54.
- D50: quantidade de séries e repetições comuns como preenchimento rápido, com ação Repetições por série para valores diferentes. Caminho aceito para aquecimento 2 × 20 e parte principal 15/12/10/8; não é resultado de teste com convidados.
- D51: facilidade de uso para personal/aluno na rotina é prioridade, preservando robustez e utilidade. Validar esforço e compreensão dos dois públicos; não ampliar escopo por essa diretriz.
- D52: fundador confirmou que supino inclinado da ficha A corresponde a duas séries de 12 mais uma até a falha (três no total). Interpretação específica da referência, sem regra automática para abreviações.
- D53: confirmada opção Até a falha em lugar de quantidade fixa no preenchimento por série; aluno recebe orientação por extenso. Registro das repetições realizadas nesse caso ainda aberto.
- D54: no bi-set de tríceps da ficha A, confirmado supinado seguido de francês, descansando só após o par. Duração não definida; não presumir mesmo protocolo para todos os bi-sets.
- D55: caminho Adicionar bi-set dentro do bloco aceito para teste, com rodadas, dois exercícios ordenados, prescrição própria e descanso após o par. Registro pelo aluno e outros protocolos ainda abertos; facilidade percebida pelo fundador, não validada com convidados.
- D56: editor permite Repetições ou Duração, com tempo comum às séries e ajuste individual; prancha 4 × 1 min aceita como exemplo. Timer e registro de execução ainda não definidos.
- D57 (relato de uso): caminhada prescrita de 30 min contínuos a 6 km/h, mas fundador às vezes fazia menos de 30 min. Duração efetiva/motivo não informados; não confundir previsto com realizado. Velocidade em texto continua proposta.
- D58: confirmado informar duração efetiva ao concluir, mantendo previsto e realizado distintos para o personal avaliar estratégia/intensidade. Sem ajuste automático nem inferência de motivo. 20 min foi exemplo hipotético, não relato de execução. Timer, preenchimento inicial e obrigatoriedade ainda abertos.
- D59: confirmado Visualizar como aluno antes de publicar, para conferir sequência, prescrições e orientações do rascunho. Não torna prévia obrigatória nem libera rascunho ao aluno.
- D60–61: descanso vazio resolvido com padrão de 45 s; confirmado mostrar Descanso: 45 s — padrão no editor para revisão do personal.
- Posição atual (18/10/2026): usuário perguntou quais lacunas impedem começar a planejar pequenas entregas de ponta a ponta, inclusive frontend/API/banco em servidor. Autorizado discutir o fatiamento; não iniciar setup, código, deploy ou contratação. A proposta I0 local existente em PLANS.md é referência histórica útil, mas servidor exige rever esse limite, acesso e ambiente.
- D62: confirmada preferência por separar conversas por finalidade. Esta conversa segue em produto; futuras conversas de implementação serão delimitadas e solicitadas pelo usuário, com continuidade pelos documentos. Não criar chats nem enviar mensagens por iniciativa própria. DEVELOPMENT_WORKFLOW.md registra a confirmação parcial; demais detalhes do fluxo seguem propostos.
- Ficha proposta do I0 criada em docs/delivery/I0.md, com índice em docs/delivery/README.md: cadastrar/listar exercício com persistência real, validação e tratamento de erro. É proposta documental, não recorte aprovado nem implementação. Prompt de planejamento em CHAT_PROMPTS.md atualizado para refinar a ficha existente.
- D64–66: confirmado começar localmente, discutir testes unitários/funcionais automatizados proporcionais desde o início, e seguir depois para Git/pipeline e homologação. Planejamento deve incluir integração real com banco; Git pode acompanhar a base desde o começo. Ambiente inicial não é mais pendência. Esclarecer se homologação e teste são o mesmo destino; sem provedor ou deploy definidos.
- D67: arquitetura evolutiva solicitada; ARCHITECTURE.md criado com direção registrada, pendências e protocolo de ADRs técnicos por demanda. Prompt técnico atualizado para consultá-lo e mantê-lo. Não há implementação comprovada por esse documento.
- Frente técnica (D68): conversa de planejamento iniciada por instrução humana. docs/delivery/I0.md refinado com estrutura, contrato HTTP, matriz de testes e sequência futura. ADR-001 registra recomendações ainda propostas: um projeto de API por funcionalidade, Minimal APIs, EF Core/Npgsql, migrations explícitas, PostgreSQL real nos testes e Playwright. Nenhum setup ou código criado.
- D69: fundador escolheu PostgreSQL em Docker Compose. Confirmação de Compose registrada no ADR-001; aceite posterior de persistência em D70. Nenhum aceite integral do ADR. Nenhuma instalação/configuração realizada.
- D70: fundador confirmou EF Core com Npgsql e migrações versionadas. ADR-001 parcialmente aceito para Compose e persistência; demais recomendações continuam em revisão.
- D71: fundador aprovou Vertical Slice enxuta em um único projeto da API com Minimal APIs e EF Core direto nas operações, Persistence compartilhado, sem MediatR/repository genérico/projetos por camada. Arquitetura ainda planejada, sem implementação.
- D72: divisão proporcional de testes confirmada: xUnit com PostgreSQL real, Playwright e unitários quando houver regra própria relevante. Implementação ainda não autorizada.
- D73: transporte direto/CORS local restrito, UUID/nome obrigatório com trim, duplicados com IDs distintos e listagem sem paginação confirmados. Ficha consolidada I0-r1 pronta para implementar. Detalhes operacionais do plano são recomendações, sem aceite individual presumido.
- Passagem técnica concluída (D74): usuário abriu esta conversa e autorizou somente I0-r1 local. Código e verificações em docs/progress.md; não repetir setup como se nada existisse. Homologação/pipeline continuam fora da autorização.
- Retomada de produto solicitada pelo usuário: continuar revisão da ficha antes de publicar, definindo informação mínima por exercício. Próximo cenário proposto: exercício com séries preenchidas e sem repetições/duração/Até a falha; distinguir salvar rascunho de publicar incompleto. Descanso padrão e link opcional já decididos, não reabrir. Rest-pause continua fora do conjunto inicial aceito. Não iniciar código.

D63/D73: prompts de entrada em CHAT_PROMPTS.md. Produto/planejamento disponíveis; implementação I0-r1 pronta na seção 3, revisão ainda é modelo para depois da entrega. Substitui o antigo prompt único de retomada desta seção. Arquivo criado, sem iniciar outra conversa ou execução.

## Produto e evidências

Fundador Silas, engenheiro solo; foi aluno de Alex, coach usado como referência de persona. Prescrição/medidas em planilhas e dúvidas por WhatsApp. Quatro fichas foram lidas via Drive; links e achados estão no registro. Não sabemos o processo mental de montagem de Alex: primeira versão será hipótese testada com convidados, não reprodução presumida de processo conhecido. MFIT foi citado por Alex; limitações relatadas não foram verificadas.

Dores: registrar carga interrompe rotina e é esquecido; nomes/métodos e periodização exigem consulta ao coach; procurar vídeos fora do treino; dúvidas repetidas; personal precisa acompanhar execução e ajustes, além de prescrever.

## Decisões vigentes essenciais

- **Acesso (D01, D14–15):** piloto fechado; fundador convida personais, que convidam alunos; um personal ativo por aluno. Sem busca pública de profissionais.
- **Prioridade (D03–10, D22–23):** experiência de treino primeiro. IA posterior; água/ranking, nutrição, cobrança/administração completa ficam fora do piloto. Sem periodização automática: personal publica instruções atuais e atualiza quando necessário. Meta semanal de treinos, aluno escolhe dias e ficha.
- **Avaliação (D20–21 e detalhes):** somente personal preenche; aluno consulta evolução. Peso, altura, bíceps direito/esquerdo, cintura, quadril, panturrilha direita/esquerda e peito. Unidades kg/cm e comparação simples são propostas; obrigatoriedade e notas privadas ainda abertas.
- **Catálogo/montagem (D16–19):** exercícios próprios/nomes familiares, links de demonstração inicialmente. Criar do zero ou copiar ficha individual/plano completo para adaptar, cópias independentes sem dados do aluno de origem. Rascunho → publicação explícita. Vigente até personal trocar; sem expiração automática.
- **Métodos aceitos para testar:** séries comuns (fixas, faixas ou diferentes por série), bi-set, drop-set, exercícios por tempo e aquecimento separado. Detalhes de execução/descanso ainda precisam ser definidos. Não interpretar abreviações automaticamente.
- **Offline (D02):** iniciar/seguir/concluir sessão previamente baixada; salvar localmente e sincronizar depois. Vídeos por link podem exigir rede. Nova publicação não altera sessão já iniciada silenciosamente.
- **Durante sessão (D24–33):** instruções/séries/Ver demonstração sem autoplay; última carga real do próprio exercício com data e detalhe por série quando variar. Repetições previstas sugeridas/editáveis, confirmadas ao concluir série. Carga pode ser preenchida ao final da série ou do treino, sem bloquear execução.
- **Carga, correção importante (D32):** se não informar nova carga, manter anterior por exercício como padrão, distinguível de valor confirmado hoje. Não usar carga recém-informada de outra série como substituta automática da referência do último treino. Sem histórico, não inventar valor. Correspondência entre múltiplas cargas antigas e novas ainda aberta.
- **Execução ausente:** sem marcação = não informado, não não realizado. Indicador discreto de pendências de registro. Editar série concluída corrige valores sem apagar demais registros. Revisão final rápida/opcional: fiz, substituí, não fiz; não inventa detalhe de séries/repetições.
- **Descanso/retomada (D28–30):** aviso visual; som futuro, vibração não definida. Continuar treino é principal ao reabrir; preservar registros/tempo transcorrido. Antes de iniciar outra sessão, escolher continuar ou encerrar anterior. Não contar noite inteira como duração real.
- **Atendimento (D12, D34–36):** observação final opcional e Pedir resposta explícito. Texto suficiente inicialmente. Resposta enviada sai da fila, nova mensagem do aluno reabre a mesma conversa. Atividade comum não gera atendimento. Aviso de resposta no app; e-mail só foi escolhido também para nova prescrição.
- **Ajustes (D37–41):** outra lista, distinta dos pedidos de resposta. Personal cria pela conversa (Adicionar ajuste ao treino) ou na área do aluno. Aluno vê os próprios ajustes. Só Pendente/Concluído. Ao publicar, personal indica quais ajustes atendeu; somente esses são concluídos após sucesso. Responder não conclui ajuste.
- **Alternativas (D42):** manter relação com original, séries/técnica/instruções próprias. Usar alternativa não confirma execução nem transfere carga/histórico do original.
- **Painel:** lista de alunos, últimos treinos na área de cada aluno e contagem de alunos ativos/pedidos pendentes; sem financeiro aluno→personal. Uso de indicadores de ajustes é proposta.

## O que foi superado — não reintroduzir

| Sugestão antiga | Regra atual |
| --- | --- |
| Backend Next.js como toda a API | Direção aceita: ASP.NET Core/C#; web Next.js e mobile Expo/TS. Especificação técnica ainda não reconciliada |
| Catálogo só global e sem escrita | Necessidade de exercícios/nomes próprios do personal |
| Impedir exercício repetido na ficha | Fichas mostram repetições com função distinta; não impor proibição antiga |
| Exigir carga ao concluir série / sempre deixá-la vazia se omitida | Registro tardio permitido e carga anterior mantida com origem diferenciada |
| Toda pendência é tarefa de resposta | Atendimento e ajuste são filas distintas; aluno acompanha ajustes |
| Marcar Resolvido após responder | Resposta enviada basta; nova mensagem do aluno reabre |
| Ranking por dia com agenda de treino fixa | Quantidade semanal flexível; ranking/água adiados e fórmula não resolvida |
| Iniciar setup com Master Initialization Prompt | Sem implementação autorizada; plano/contrato inicial antigos |

## Pendências reais, sem necessidade de resolver todas agora

Montagem do editor/catálogo, prescrição de métodos agrupados e duração; sugestão de repetição para faixa; histórico com cargas por etapas; seleção/retorno de alternativa após execução parcial; ajustes que deixaram de ser necessários/reabertura; limites de edição pós-sessão; troca de personal e autorização temporal; detalhes de avaliação/convites. Priorizar cenário normal do personal antes de aprofundar exceções.

## Arquitetura futura e organização documental

Direção atual e pendências em ARCHITECTURE.md (D67). API C#/ASP.NET Core, web Next.js/TS, mobile Expo/React Native/TS, PostgreSQL/Supabase Auth/Storage. Supabase RLS/contexto de identidade precisam revisão com API C#. Pipeline para homologação agora é direção futura confirmada (D66), após validação local; configuração/provedor ainda abertos. Gateway/Terraform continuam adiados.

- `AGENTS.md`: instruções curtas e protocolo de atualização.
- `CONTEXT.md`: este checkpoint; atualizar quando mudar etapa ou decisão-chave, sem apêndice infinito.
- `FIRST_VERSION.md`: escopo atual consolidado; não substitui detalhes de cada decisão.
- `PRODUCT_DECISIONS.md`: decisões até D74, evidências, hipóteses e backlog. Passagens antigas podem ter confirmação posterior; usar decisão mais recente do mesmo tema.
- `SPEC.md`/`PLANS.md`: material técnico inicial histórico, com avisos de desatualização. Não executar sem reconciliação.

Memória é documental: novo chat precisa acessar esta pasta ou receber os arquivos. Não pressupor acesso global à conversa antiga. Implementação e verificações locais do I0 em docs/progress.md; isso não comprova servidor disponibilizado ou validação do produto com usuários.
