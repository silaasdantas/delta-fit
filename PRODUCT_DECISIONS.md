# Delta Fit — Decisões de produto e oportunidades futuras

Registro de discovery atualizado em 15/10/2026. Não é autorização para implementar todas as funcionalidades. Distinguir decisões do fundador, evidências pessoais e hipóteses ainda não validadas. SPEC.md e PLANS.md devem ser reconciliados com este registro antes da implementação.

Visão consolidada para revisão do primeiro piloto: `FIRST_VERSION.md`, separando núcleo definido, decisões pendentes e oportunidades posteriores. Essa consolidação não congela o escopo nem autoriza desenvolvimento.

## Decisões atuais

| ID | Decisão | Consequência |
| --- | --- | --- |
| D01 | No máximo um personal ativo por aluno | Exclusividade do vínculo no banco; permitir intervalo sem personal |
| D02 | Treinos disponíveis offline após download | Consultar exercícios, iniciar e concluir sessão, persistir registros e sincronizar posteriormente |
| D03 | Priorizar treino | Primeiro montagem manual com catálogo, publicação, execução, registro de carga e histórico; IA acelera esse fluxo em incremento posterior |
| D04 | Nutrição em segunda etapa | Não ampliar o primeiro ciclo de entrega para montagem nutricional; investigar autoria com profissionais no futuro |
| D05 | Piloto sem cobranças | Sem checkout, assinatura, cartão, fatura, cobrança automática ou bloqueio por pagamento; sem término automático do acesso por prazo de teste |
| D06 | Avaliar mensalidade recorrente no futuro | Intenção comercial registrada; preço, pagador, objeto da cobrança e fornecedor ainda não definidos |
| D07 | Considerar acompanhamento mínimo de três meses | Diretriz para a experiência de acompanhamento; não equivale a assinatura financeira mínima nem fidelização já aprovada |
| D08 | Adiar decisões de infraestrutura | Azure/AWS/Render, API Gateway, Terraform e pipelines serão discutidos depois do discovery; nenhuma escolha contratada |
| D09 | Evoluir por incrementos pequenos e integrados | Começar com frontend web, API C# e banco conectados por uma funcionalidade mínima; ampliar a partir de entregas verificáveis, sem montar o produto inteiro de uma vez |
| D10 | Permanecer em discovery até nova autorização | I0 e demais incrementos são propostas futuras; não criar código, setup ou infraestrutura agora |
| D11 | Mostrar a prescrição aplicável à sessão | Aluno não deve cruzar tabelas de periodização para descobrir repetições, descanso e método do dia; mecanismo de seleção da etapa ainda em aberto |
| D12 | Fila somente para pedidos que exigem resposta | Resumos de sessão, observações e registros ficam disponíveis para consulta, sem criar pendências de atendimento automaticamente |
| D13 | Área administrativa do Delta Fit após validação | Terceira visão, destinada ao operador do SaaS, para números dos personais, suporte cadastral e gestão financeira das assinaturas; fora da primeira versão de validação |
| D14 | Entrada do aluno por convite do personal na primeira versão | Personal inicia o vínculo; aluno cria/acessa sua conta ao aceitar convite. Sem entrada independente do aluno ou busca de profissionais neste primeiro fluxo |
| D15 | Piloto fechado com personais selecionados pelo fundador | Fundador convida os profissionais; sem cadastro público de personais ou painel administrativo completo como pré-requisito |
| D16 | Demonstrações por links na primeira versão | Personal pode associar links de vídeo aos exercícios; upload direto de vídeos fica para etapa posterior |
| D17 | Montagem do zero e por cópia na primeira versão | Personal pode criar ficha ou copiar uma existente e adaptar para outro aluno; cópia deve ser independente e começar como rascunho |
| D18 | Copiar ficha individual ou plano completo | Oferecer tanto cópia de uma ficha (ex.: A) quanto de todas as fichas de um plano (ex.: A/B/C); regras de independência e exclusão de dados do aluno de origem se aplicam às duas |
| D19 | Vigência do plano controlada pelo personal | Plano permanece vigente até o personal publicar sua substituição, sem data de vencimento automática na primeira versão |
| D20 | Avaliação e contexto de prescrição preenchidos pelo personal | Personal realiza avaliação e registra informações necessárias sobre o aluno; não exigir questionário de avaliação no aceite do convite nem permitir edição direta desses campos pelo aluno |
| D21 | Medidas corporais estruturadas na primeira versão | Incluir bíceps, cintura, quadril, panturrilha e peito na avaliação preenchida pelo personal; detalhes de unidade/lateralidade e obrigatoriedade ainda a definir |
| D22 | Validar primeiro a experiência de treino | Fundador escolheu concentrar o piloto em experiência e treino; registro de água e ranking de hábitos ficam para incremento posterior, sem descartar o interesse futuro |
| D23 | Prescrição atual explícita, sem periodização automática no piloto | Personal publica ficha com repetições e descansos aplicáveis e atualiza/publica quando necessário; aluno não interpreta quadro de semanas ou mesociclos |
| D24 | Registro de série integrado ao descanso | Mostrar última carga como referência, permitir ajuste rápido e salvar ao confirmar Concluir série, iniciando o descanso; nenhuma execução automática |
| D25 | Repetições sugeridas, editáveis e confirmadas | Quantidade prevista aparece como sugestão; aluno ajusta se fez diferente e confirma junto da série. Sem confirmação não há registro de execução |
| D26 | Corrigir série pelo registro concluído | Aluno toca na série concluída para ajustar carga/repetições, sem reiniciar sessão ou apagar outras séries |
| D27 | Exercício com orientação e última carga visíveis | Ao abrir: nome, orientação do personal, séries, última carga usada e ação Ver demonstração; sem reprodução automática do vídeo |
| D28 | Aviso visual de descanso inicialmente | Contagem e término do descanso com indicação visual no app; som fica para avaliação futura. Vibração não foi definida |
| D29 | Priorizar retomada da sessão em andamento | Ao reabrir o app, oferecer Continuar treino como opção principal, preservando registros e descanso atualizado, inclusive offline após download |
| D30 | Resolver sessão aberta antes de iniciar outra | Perguntar se aluno deseja continuar ou encerrar sessão anterior, inclusive se ficou aberta de dia anterior; preservar registros e não encerrar automaticamente |
| D31 | Carga pode ser registrada depois | Não exigir carga para concluir série ou seguir treino; permitir preencher após executar a série, ao terminar o exercício ou na revisão final da sessão, sem inventar valor |
| D32 | Carga anterior como referência e padrão por exercício | Aluno espera ver a carga do exercício no último treino e deseja mantê-la quando não informar outra. Padrão é independente por exercício; distinguir valor herdado de valor confirmado hoje |
| D33 | Indicador de pendência refere-se ao registro | Indicador discreto durante sessão é considerado útil, mas exercício sem marcação pode ter sido realizado. Não chamar ausência de confirmação de não realizado |
| D34 | Observação final opcional com pedido explícito de resposta | No fechamento, aluno pode deixar observação e escolher Pedir resposta; somente essa solicitação explícita cria atendimento, sem obrigar comentário ou pedido para encerrar |
| D35 | Resposta retira pedido das pendências do personal | Após envio bem-sucedido da resposta do personal, pedido sai da fila pendente sem ação extra de marcar Resolvido; conversa e resposta permanecem consultáveis |
| D36 | Nova mensagem do aluno reabre a pendência | Em conversa de atendimento já iniciada, nova mensagem enviada pelo aluno devolve o assunto à fila do personal; manter contexto e histórico, sem criar pedido duplicado |
| D37 | Alternativa gera pendência de ajuste da prescrição | Quando atendimento demanda alternativa de exercício, acompanhar ajuste pendente separado da resposta. Personal configura/publica alternativa ligada ao item original, com séries, técnica e demais orientações aplicáveis; aluno consulta a alternativa na ficha |
| D38 | Lista de pendências de prescrição do personal | Fundador considera útil listar ajustes de treino; confirmou ação explícita Adicionar ajuste ao treino na conversa para criar pendência, distinta do atendimento |
| D39 | Ajuste manual e acompanhamento pelo aluno | Personal também pode criar pendência diretamente na área do aluno, sem conversa. Aluno vê as pendências vinculadas a ele para acompanhar o que falta ao personal ajustar; não são tarefas a cumprir pelo aluno |
| D40 | Ajustes com dois estados | Usar somente Pendente e Concluído, visíveis ao personal e ao aluno correspondente; sem Em andamento na primeira versão |
| D41 | Concluir somente ajustes atendidos pela publicação | Ao publicar alteração, personal indica quais pendências aquela publicação atende; somente essas ficam Concluídas, preservando as demais Pendentes |
| D42 | Escolher alternativa dentro do exercício original | Aluno acessa Usar alternativa no item original; seleção mostra séries, instruções e histórico específicos da alternativa publicada pelo personal |
| D43 | Montagem organizada por fichas; referência de novembro para o teste do personal | Fundador confirmou separação por ficha e escolheu a planilha de novembro/2023 para testar a montagem começando pela ficha A. Ordem de criação das divisões e layout do editor continuam abertos |
| D44 | Testar organização por blocos flexíveis | Fundador aprovou testar a proposta por blocos e recolher feedback de personal e aluno para comparar com lista única; escolha de teste, sem superioridade validada ou implementação autorizada |
| D45 | Criar exercício pela busca durante a montagem | Se não encontrar o exercício, personal pode criá-lo na própria busca, sem sair da montagem da ficha; campos e regras do cadastro ainda a detalhar |
| D46 | Biblioteca própria de treinos de referência do personal | Fundador confirmou modelos cadastrados pelo próprio personal na biblioteca dele para copiar e adaptar ao aluno. Amplia D17–18; criação do zero versus salvar prescrição como modelo e manutenção ainda a detalhar |
| D47 | Separar cadastro do exercício de sua prescrição na ficha | Cadastro reutilizável contém nome, demonstração por link e orientação geral; ocorrência na ficha contém séries/repetições, descanso e orientações específicas do aluno. Obrigatoriedade dos campos ainda aberta |
| D48 | Cadastro mínimo do exercício exige somente nome | Link de demonstração e orientação geral são opcionais e podem ser complementados depois; personal pode continuar a montagem após cadastrar o nome. Não define campos obrigatórios da prescrição ou publicação |
| D49 | Descanso preenchido por exercício, ajustável por série | Personal informa uma duração aplicável a todas as séries daquela ocorrência do exercício na ficha e pode ajustar séries individualmente quando necessário. Não define duração padrão nem protocolo para métodos agrupados |
| D50 | Preenchimento rápido de repetições com opção por série | Personal informa quantidade de séries e repetições comuns; ação Repetições por série permite valores diferentes. Aceito para facilitar montagem de séries comuns; detalhes de faixas e falha ainda abertos |
| D51 | Facilidade de uso com robustez e utilidade | Diretriz confirmada: experiência de personal e aluno deve caber na demanda do dia, com pouco esforço de uso e flexibilidade suficiente para as necessidades de treino; validar com ambos, sem presumir facilidade apenas por menos cliques |
| D52 | Interpretação confirmada do supino inclinado da ficha A | No exemplo de novembro, 2 séries — 12 - 1×falha significa duas séries de 12 mais uma até a falha, totalizando três. Confirmação do fundador sobre a referência; não é regra automática de interpretação de outras fichas |
| D53 | Até a falha como opção de prescrição por série | Personal pode selecionar Até a falha em lugar de quantidade fixa naquela série; aluno recebe a orientação por extenso. Registro das repetições realizadas nesse caso ainda a definir |
| D54 | Sequência e descanso do bi-set de tríceps da ficha A | Fundador confirmou tríceps supinado seguido de francês, descansando somente após o par. Confirmação do exemplo; duração do descanso e interface de montagem ainda abertas |
| D55 | Adicionar bi-set dentro do bloco | Caminho aceito pelo fundador para teste: ação Adicionar bi-set, com quantidade de rodadas, dois exercícios em sequência, prescrição própria de cada um e descanso após o par. Facilidade percebida pelo fundador, ainda sem teste com convidados |
| D56 | Prescrição por duração no editor de séries | Escolher Repetições ou Duração; tempo informado vale para todas as séries, com ajuste individual quando necessário. Exemplo aceito: prancha com quatro séries de um minuto. Não define timer ou registro do aluno |
| D57 | Caminhada contínua com duração realizada variável — relato de uso | Fundador confirmou caminhada contínua prescrita de 30 min a 6 km/h, relatando que às vezes não completava os 30 min. Prescrição não comprova duração realizada; forma de registro ainda a confirmar |
| D58 | Registrar duração efetiva preservando a prescrita | Aluno pode informar tempo efetivamente realizado ao concluir exercício por duração; personal consulta previsto e realizado para avaliar ajustes de estratégia/intensidade. Sem confirmação, não considerar duração prevista realizada; sem ajuste automático |
| D59 | Visualizar como aluno antes de publicar | Personal pode conferir sequência, prescrições e orientações do rascunho na apresentação destinada ao aluno antes da publicação explícita. Prévia não publica nem comprova execução |
| D60 | Descanso padrão de 45 segundos quando não preenchido | Fundador definiu 45 s como padrão na ausência de tempo informado pelo personal; tempo explícito da prescrição prevalece. Substitui a ausência de padrão registrada em D49; não define novos pontos de descanso em métodos agrupados |
| D61 | Mostrar origem do descanso padrão no editor | Fundador confirmou apresentação Descanso: 45 s — padrão para o personal conferir antes de publicar; mantém D60 e o descanso após o par no bi-set discutido |
| D62 | Separar conversas por finalidade | Fundador confirmou preferência por conversas distintas para produto e implementação, com continuidade pelos documentos do projeto. Não autoriza criar chats, delegar, enviar mensagens entre tarefas ou implementar; demais detalhes de DEVELOPMENT_WORKFLOW.md seguem como proposta |
| D63 | Manter prompts de entrada das conversas no projeto | Fundador solicitou prompts prontos e registro durável. CHAT_PROMPTS.md reúne entradas de produto/planejamento e modelos de execução/revisão a preencher por incremento. Arquivo Markdown escolhido pelo assistente como solução inicial; nenhuma skill instalada ou novo chat iniciado |
| D64 | Validar a base localmente antes de homologação | Fundador escolheu começar localmente para construir a base e comprovar funcionamento básico; substitui a pendência de ambiente inicial do I0 |
| D65 | Planejar testes automatizados desde a primeira entrega | Fundador propôs testes unitários e funcionais automatizados, com discussão de proporcionalidade no planejamento. Integração com banco também precisa verificar o objetivo do I0; ferramentas e divisão final ainda a definir |
| D66 | Git e pipeline para publicação posterior em homologação | Fundador definiu direção de evoluir da validação local para publicação em ambiente de teste via Git/pipeline. Provedor, gatilhos, acesso e custos ainda abertos; esclarecer se homologação e teste nomeiam o mesmo ambiente. Não é instrução para provisionar ou publicar agora |
| D67 | Manter arquitetura documentada e evolutiva | Fundador solicitou registro da arquitetura para evolução incremental. ARCHITECTURE.md consolida direção e pendências; ADRs técnicos por demanda preservam contexto, alternativas e mudanças, separados das decisões de produto e das evidências de implementação |

| D68 | Iniciar planejamento técnico do I0 em conversa própria | Fundador solicitou arquitetura mínima, estrutura, testes e atualização da ficha para Next.js → API C# → PostgreSQL. Autoriza documentação/discussão; discovery continua na conversa de produto. Sem implementação, configuração ou publicação autorizadas. ADR-001 contém recomendações; aceites posteriores são registrados explicitamente |
| D69 | Executar PostgreSQL local em Docker Compose | Fundador preferiu Compose à instalação nativa para I0. Escolha técnica detalhada no ADR-001, parcialmente aceito nesse ponto; não autoriza instalação/configuração nem confirma as demais propostas do ADR |
| D70 | Usar EF Core com Npgsql e migrações versionadas no I0 | Fundador aceitou a recomendação de persistência/migrações após comparação com SQL manual. Detalhes e consequências no ADR-001; não confirma as demais propostas nem autoriza implementação/setup |
| D71 | Organizar API do I0 em Vertical Slice enxuta | Fundador aprovou a estrutura apresentada: um projeto C#, Minimal APIs, operações de criação/listagem reunindo endpoint/entrada/validação/execução, EF Core direto e Persistence compartilhado. Sem MediatR, repository genérico ou projetos por camada no recorte. Detalhes/tradeoffs no ADR-001; sem autorização de implementação |
| D72 | Confirmar divisão proporcional de testes do I0 | Fundador aceitou xUnit com PostgreSQL real para cadastro/listagem/validação/persistência; Playwright para cadastro pela tela, recarga e mensagens de erro; unitários quando houver regra própria relevante. Aceite da estratégia não autoriza implementação nem confirma todo o restante do plano |
| D73 | Fechar limites do I0 e preparar passagem à implementação | Fundador aceitou frontend chamando diretamente a API com CORS local restrito, UUID/nome obrigatório com trim, nomes iguais com IDs distintos e listagem sem paginação. Consolidação I0-r1 reúne D69–73; detalhes operacionais do plano são recomendações de execução dentro desse recorte. Preparar prompt específico, sem iniciar implementação nesta conversa; enviá-lo no chat de implementação autoriza somente o I0 local |
| D74 | Autorizar implementação local somente do I0-r1 | Em 18/10/2026, fundador enviou o prompt específico nesta conversa: implementar, configurar localmente e verificar o recorte D69–73, com xUnit/PostgreSQL real, Playwright/processos reais, inventário/fixação de versões e registro de evidências. Preservar Git/alterações existentes. Sem deploy, contratação, pipeline, remoto Git ou incrementos seguintes. Substitui avisos anteriores de ausência de autorização somente no I0-r1; não aprova todo o piloto. Execução/evidências em docs/progress.md |

| D75 | Orientar explicitamente continuidade ou troca de conversa | Em 19/10/2026, fundador pediu indicar sempre se o próximo passo continua na sessão atual ou exige outra finalidade, com prompt organizado em CHAT_PROMPTS.md. Reforça D62–63; não autoriza criar chats ou executar pipeline. Revisão do I0 e planejamento de CI têm entradas próprias; correções podem continuar na implementação atual |

| D76 | Usar Git Bash no Windows com o launcher existente | Fundador informou preferência por Git Bash nas suas máquinas e aceitou o próximo passo proposto: verificar chamadas a powershell.exe e documentar no README, mantendo scripts/local.ps1 como implementação única. Não implica portabilidade Linux/macOS/CI nem criação de wrapper Bash; evidências em docs/progress.md |

Direção técnica discutida: API em C#/ASP.NET Core aproveitando a experiência do fundador; frontend web/mobile permanece TypeScript. Especificação técnica inicial ainda descreve backend Next.js e deve ser revisada separadamente. Não iniciar código de aplicação neste registro.

## Evidências que orientam o produto

- O fundador, como aluno, continuou usando a ficha porque ela informa o que fazer e o treino atende sua necessidade.
- Relata esquecer de atualizar a carga mesmo quando muda o peso utilizado. A interface deve reduzir esforço, sem presumir execução ou carga não confirmada.
- Relata dificuldade para entender nomes/movimentos e necessidade de pesquisar fora da ficha.
- A ficha de referência possui treinos A–D, aquecimento, repetições variáveis por série, bi-set, drop-set, rest-pause e exercícios por duração. O contrato inicial de treino não representa tudo isso e precisa de revisão de escopo/modelagem.
- Na alimentação, a necessidade relatada é encontrar orientações, porções e substituições; não manter um diário obrigatório de refeições.
- Segundo o relato do fundador, Alex recebia dúvidas repetidas e tinha dificuldade de responder a todos pelo WhatsApp. Validar diretamente com profissionais antes de generalizar.
- O acompanhamento relatado durava três meses, com avaliações mensais. A justificativa relatada por Alex é favorecer mudanças ao longo do tempo; não constitui evidência de que esse prazo seja universalmente necessário ou garanta resultados.

Referência fornecida pelo fundador: [ficha de treino](https://docs.google.com/spreadsheets/d/1l99sVR4YbdERHMEPZjbwYFv0rJcLQKSf/edit). Não replicar dados pessoais, medidas ou conteúdo integral da dieta no repositório.

### Novo relato de Alex — acompanhamento e autonomia de prescrição

Fonte: fala de Alex reproduzida pelo fundador em 15/10/2026, não entrevista conduzida pelo agente.

- Usa planilha para mapear volume, cargas, repetições e séries; precisa acompanhar o executado, além de montar a prescrição.
- Quer que o aluno registre execução e observações e que esses dados fiquem disponíveis para acompanhamento pelo personal.
- Quer cadastrar exercícios com nomes familiares a ele e aos alunos, e disponibilizar vídeos de sua autoria.
- Cita MFIT como concorrente usado no mercado e relata limitações percebidas na montagem/acompanhamento e na demonstração dos exercícios.

As afirmações sobre MFIT são percepção relatada, não análise competitiva verificada. Não afirmar que o concorrente não possui determinada função sem pesquisa específica posterior.

Implicação de produto: a hipótese de valor passa a ser prescrever com liberdade e acompanhar o que foi realmente executado, com feedback do aluno. Diferenciar volume prescrito de realizado; ausência de registro não significa ausência de treino. Atualização imediata depende de conexão e sincronização; offline o painel pode estar desatualizado e deve indicar isso.

## Backlog futuro para avaliação

### F10 — Aluno encontra seu personal

Status: possibilidade futura mencionada pelo fundador; fora da primeira versão.

Avaliar cadastro independente do aluno e descoberta/busca de profissionais. Diretório, perfis públicos, contato, solicitação de vínculo e critérios de seleção ainda não foram definidos. Não presumir marketplace, contratação ou pagamento intermediado. Preservar a regra de no máximo um personal ativo, salvo decisão futura explícita.

### Primeira versão — entrada por convite

Decisão confirmada: personal inicia a entrada do aluno por convite; o aluno aceita o vínculo e cria ou acessa sua conta nesse percurso. Isso não autoriza o personal a definir senha ou aceitar condições em nome do aluno.

Entrada do personal confirmada posteriormente: fundador seleciona e convida profissionais para um piloto fechado. Canal, validade e operação de concessão de acesso ainda precisam ser definidos; não pressupor criação de painel administrativo. O profissional cria sua própria conta/credencial, sem senha definida pelo fundador.

Ainda a definir: canal de compartilhamento dos convites, dados mínimos solicitados e experiência de convite inválido/expirado. O fluxo proposto anteriormente de link copiável permanece proposta, não escolha confirmada nesta decisão.

### Primeira versão — criação e reaproveitamento de fichas

Decisão do fundador: oferecer tanto criação do zero quanto cópia de ficha para adaptação. Evidência adicional: segundo conversa do fundador com Alex, copiar/adaptar é prática habitual. Não depende de IA ou de biblioteca avançada de templates para entregar valor.

Comportamento proposto para validar: copiar somente estrutura de prescrição autorizada do próprio personal (exercícios, ordem, séries, repetições, descansos, instruções e links), criando rascunho independente para revisão antes de publicação. Alterar a cópia não modifica a origem; não propagar mudanças automaticamente entre alunos.

Não copiar identidade, restrições, avaliações, histórico executado, cargas registradas, observações pessoais, mensagens ou metas individuais do aluno de origem. Instruções podem conter nomes/contexto pessoal: revisar campos livres antes de reutilizar para outro aluno. Reaproveitar prescrição não comprova adequação ao destinatário.

Alcance confirmado posteriormente pelo fundador: ambas as opções, ficha individual e plano completo. Cópia de ficha para plano existente deve preservar as demais fichas; forma de inserção, nome e ordenação ainda a validar, sem substituir conteúdo silenciosamente.

Pendências: seleção da origem (fichas já prescritas versus modelos próprios); campos que devem ser limpos por padrão; regras para instruções específicas. Biblioteca de templates e compartilhamento de fichas entre profissionais não foram aprovados por esta decisão.

Confirmação posterior (D46): fundador solicitou cadastro de treinos de referência para o personal espelhar e ajustar à necessidade do aluno. Substitui a pendência acima quanto à inclusão de modelos reutilizáveis; não autoriza compartilhamento entre profissionais nem define biblioteca global. Aplicam-se as regras vigentes de cópia independente, adaptação em rascunho e publicação explícita (D17–18); alterar a cópia não modifica a origem. Ainda definir quem cadastra os modelos, sua visibilidade, se serão criados do zero e/ou salvos de prescrição existente, e manutenção das referências. Modelos não carregam dados pessoais ou histórico de aluno.

Confirmação na mesma discussão (D45): na busca de exercícios durante montagem, oferecer Criar exercício quando não encontrar o desejado, preservando o contexto da ficha. Dados mínimos, demonstração, instruções reutilizáveis versus prescrição específica e regras de identidade/visibilidade ainda serão discutidos; não presumir que criar um exercício crie automaticamente um treino de referência.

Confirmação posterior de D46: os treinos de referência são cadastrados pelo próprio personal na biblioteca dele. Resolve autoria e caráter próprio da biblioteca, antes abertos; sem compartilhamento entre personais aprovado. Permanece aberta a forma de alimentar a biblioteca (criação do zero e/ou salvar uma prescrição como modelo) e de manter os modelos. O aluno recebe a prescrição adaptada e publicada, sem acesso à biblioteca por esta decisão.

Confirmação D47: fundador aceitou separar cadastro reutilizável (nome, demonstração por link e orientação geral) da prescrição do exercício na ficha (séries/repetições, descanso e orientações específicas para o aluno). O mesmo exercício pode ter prescrições diferentes, inclusive em ocorrências distintas da mesma ficha. Não colocar instruções individuais no cadastro geral por padrão. Obrigatoriedade dos campos, preenchimento inicial e efeitos de futuras alterações no cadastro sobre prescrições publicadas ainda não definidos.

Confirmação posterior D48: para criar um exercício, somente o nome é obrigatório; link de demonstração e orientação geral são opcionais, com possibilidade de complementar depois. Personal pode cadastrar e continuar a montagem sem preencher esses dois campos. Resolve a obrigatoriedade do cadastro mencionada em D45/D47, mas não define requisitos para salvar/publicar a prescrição. No cenário atual, próximo passo é prescrever 3 × 10 no bloco Fortalecimento; descanso ausente na planilha não autoriza presumir valor.

Confirmação D49: na prescrição de séries comuns, preencher descanso uma vez para todas as séries do exercício, permitindo ajuste por série quando necessário. Esse dado pertence à ocorrência prescrita na ficha (D47), não ao cadastro geral do exercício. Os 60 segundos mencionados na discussão foram exemplo ilustrativo, não descanso confirmado para o manguito nem valor padrão. Obrigatoriedade, descanso após última série/transição de exercício e regras de bi-set/drop-set continuam abertos.

Confirmação D50: personal informa quantidade de séries e uma quantidade de repetições comum a todas; quando necessário, usa Repetições por série para preencher cada uma. No teste de mesa, isso atende ao aquecimento 2 × 20 e às quatro séries 15/12/10/8 na parte principal, como ocorrências distintas do mesmo exercício. Não supõe nova prescrição clínica nem resolve interpretação de falha/abreviações ou preenchimento de faixas.

Diretriz D51, expressa pelo fundador ao aceitar D50: facilidade de uso deve ser um dos pontos principais, considerando a demanda diária tanto do personal quanto do aluno, preservando robustez e utilidade. Orientação para o discovery: avaliar esforço e compreensão nos cenários concretos dos dois públicos; oferecer ajustes quando necessários sem exigir seu preenchimento no caso simples. Isso não amplia o escopo de métodos já aceitos nem comprova usabilidade sem testes.

Confirmação D52 no teste de mesa: para o supino inclinado da ficha A de novembro, fundador confirmou duas séries de 12 repetições e uma terceira até a falha. Preservar a evidência original da planilha e usar essa explicação humana para o cenário. Não inferir igual interpretação para outras abreviações ou exercícios. Interface de prescrição até a falha e sugestão/registro de repetições pelo aluno nesse caso ainda precisam ser discutidos; não converter falha em quantidade fixa presumida.

Confirmação posterior D53: no preenchimento por série, personal pode escolher Até a falha em vez de informar quantidade fixa de repetições. No supino inclinado do exemplo, prescrição fica 12 / 12 / Até a falha. Aluno vê a orientação por extenso. Resolve a interface de prescrição pendente em D52; não define sugestão numérica, obrigatoriedade ou forma de registrar repetições efetivamente realizadas pelo aluno.

Confirmação D54 no teste de mesa: no bi-set de tríceps da ficha A, fundador confirmou realizar supinado e em seguida francês, com descanso somente após completar o par. A referência traz três séries e 12 + falha; representação proposta pelo assistente é grupo de três rodadas com dois exercícios e prescrições próprias. A resposta confirma sequência e posição do descanso, sem fechar gesto/interface de agrupamento nem duração do intervalo. Não generalizar automaticamente esse protocolo para todo bi-set; execução/registro do grupo e transição após última rodada ainda a discutir.

Confirmação posterior D55: fundador considerou simples o caminho Adicionar bi-set dentro do bloco e aceitou essa proposta para o teste de montagem. Editor do grupo contém quantidade de rodadas, dois exercícios ordenados, prescrição individual e descanso após o par. No cenário da ficha A: três rodadas de supinado com 12 repetições, seguido de francês até a falha. Duração do descanso continua sem valor confirmado. Resolve a proposta de interface de montagem de D54, sem comprovar usabilidade com profissionais convidados ou definir execução/registro do aluno, transição da última rodada ou cobertura de outros protocolos de bi-set.

Confirmação D56: para exercícios por tempo, usar o mesmo editor de séries com escolha entre Repetições e Duração. Preencher tempo comum às séries, permitindo ajuste individual. Cenário aceito: prancha isométrica com quatro séries de um minuto e campo de descanso sem valor presumido. Não define contagem de execução, acionamento de timer, sugestão/registro de duração realizada nem campos específicos de cardio.

Relato de uso D57: ao perguntar sobre a caminhada final da ficha A, fundador confirmou 30 minutos contínuos a 6 km/h como orientação, acrescentando que às vezes não fazia os 30 minutos. Não informou duração efetiva nem motivo; não presumir esses dados ou velocidade efetivamente mantida em cada execução. Prescrição deve permanecer distinguível do realizado, sem considerar o tempo previsto como execução comprovada. Proposta ainda a confirmar: permitir informar duração efetiva, inclusive menor que a prevista. Velocidade em orientação textual, timer, obrigatoriedade e preenchimento sugerido de duração não foram aprovados por essa resposta.

Confirmação posterior D58: fundador aceitou registrar duração efetiva ao concluir o exercício, preservando a duração prescrita para consulta do personal. Exemplo hipotético apresentado: previsto 30 min, realizado 20 min; não é duração real relatada pelo fundador. Motivação confirmada: personal pode usar essa informação para avaliar mudança de estratégia do treino, incluindo intensidade. Não inferir motivo da duração menor, necessidade/direção do ajuste, intensidade efetivamente executada ou criar ajuste automático. Duração prevista sem confirmação não equivale à realizada. Obrigatoriedade de preencher tempo, sugestão inicial, timer e edição posterior continuam abertos.

### Primeira versão — vigência da prescrição

Decisão confirmada pelo fundador: o personal decide quando trocar o plano. A prescrição vigente não expira automaticamente por passagem de tempo, fim de mês ou ciclo de acompanhamento de três meses. Regras de encerramento do vínculo e acesso ao histórico são assuntos distintos.

Manter proposta já descrita na SPEC: alterações são preparadas em rascunho e passam a valer quando publicadas; sessão iniciada preserva a versão original. No modo offline, nova prescrição só aparece após sincronização completa, sem invalidar silenciosamente a sessão em andamento. Aviso específico ao aluno sobre troca do plano ainda precisa ser definido.

### Primeira versão — autoria da avaliação

Decisão confirmada: somente o personal preenche a avaliação e o contexto necessário à prescrição, com base na avaliação que conduz. Os campos sugeridos (objetivo, experiência, equipamentos e restrições) são candidatos, não formulário obrigatório aprovado; definir o mínimo útil sem tentar reproduzir uma avaliação completa desde o início.

Separar dados da avaliação profissional de credenciais/perfil de conta e registros de execução/hábitos produzidos pelo aluno. A decisão não retira do aluno o registro de treino, água ou pedidos de ajuda. O aluno pode comunicar mudanças e correções ao personal pelo atendimento; isso não altera automaticamente a avaliação.

Revisar a matriz original de acesso da SPEC, que permitia ao aluno editar contexto de prescrição: essa permissão está substituída por D20. Visibilidade da avaliação ao aluno, campos mínimos, medidas e histórico de avaliações continuam a definir; não presumir acesso a notas privadas do profissional.

### Primeira versão — medidas corporais

Decisão do fundador: iniciar avaliação estruturada com medidas de bíceps, cintura, quadril, panturrilha e peito. Preenchimento pelo personal conforme D20; não substituir esses campos apenas por anotação livre.

Propostas para validar: registrar avaliação com data, medidas em centímetros e observação opcional; preservar avaliações anteriores para comparação, sem sobrescrever histórico ao fazer nova avaliação. Medida não coletada permanece ausente, nunca zero. Não calcular percentual de gordura ou outros índices a partir dessas medidas sem definir método e dados necessários.

Lateralidade confirmada pelo fundador: bíceps direito e esquerdo; panturrilha direita e esquerda. Cintura, quadril e peito permanecem como medidas únicas. São sete campos de medida ao todo; não copiar automaticamente valor de um lado para outro nem preencher lado não medido com zero.

Pendências: condição/local de medição para comparação consistente; campos opcionais versus obrigatórios; inclusão de peso na avaliação (distinto do hábito de peso já discutido); visualização das medidas pelo aluno. Nenhum protocolo clínico de medição foi definido nesta conversa.

Decisão posterior confirmada: incluir peso e altura na primeira versão da avaliação, preenchidos pelo personal. Conjunto inicial: peso, altura, bíceps direito/esquerdo, cintura, quadril, panturrilha direita/esquerda e peito.

Proposta de unidades: kg para peso e cm para altura e circunferências, ainda a validar junto às demais regras de avaliação. Peso medido na avaliação profissional deve ter autoria/data próprias e ser distinguível do peso autorrelatado como hábito; não sobrescrever automaticamente uma fonte com a outra. Percentual de gordura e cálculos derivados não foram incluídos por esta confirmação.

Visibilidade confirmada pelo fundador: aluno pode consultar suas avaliações e a evolução das medidas no aplicativo. Preenchimento/edição continuam exclusivos do personal conforme D20; leitura pelo aluno não implica alteração dos valores nem acesso automático a eventuais notas privadas. Histórico por data é necessário para a evolução; forma de apresentação (lista, comparação, gráfico) ainda a definir. Não exibir medida ausente como zero ou prometer tendência com dados insuficientes.

### Primeira versão — métodos suficientes para testar

Conjunto proposto e aceito pelo fundador como suficiente para o primeiro teste:

- Séries comuns com repetições fixas, faixas ou repetições diferentes em cada série.
- Bi-set: dois exercícios agrupados com sequência explícita.
- Drop-set: etapas que permitam registrar cargas e repetições.
- Exercícios por tempo, incluindo prancha e cardio.
- Aquecimento apresentado separadamente da parte principal.

Cluster, rest-pause e demais variações ficam para avaliação posterior. Não declarar cobertura integral das fichas fornecidas. Rótulos como hardset e BACK OF SET não serão convertidos automaticamente em regras presumidas.

Aceite do conjunto não define protocolo de execução: validar com profissional como prescrever descanso dentro/entre grupos, etapas de drop-set, critérios por série, instruções de cardio e comportamento de registro/retomada. Modelagem inicial da SPEC limitada a repetições simples continua pendente de reconciliação; não tratar seu JSON como contrato final. Nenhuma implementação autorizada.

### Primeira versão — orientação vigente na ficha

Decisão confirmada pelo fundador: o personal publica repetições e descansos atuais diretamente na ficha e atualiza quando necessário, por rascunho e nova publicação. Sem engine de variação automática semanal, calendário de mesociclos ou necessidade de o aluno identificar a semana para interpretar a sessão no piloto.

Isso resolve a pendência de apresentação da periodização para o primeiro teste, sem afirmar que cobre integralmente as planilhas de referência. A frequência semanal de treino e escolha livre dos dias permanecem; frequência não altera automaticamente a prescrição. Sessão iniciada continua na versão original e nova versão offline exige sincronização, conforme regras anteriores.

### Primeira versão — registrar série e descansar

Direção aceita pelo fundador para teste: mostrar a última carga registrada como referência, ajuste rápido e ação Concluir série para salvar a execução e iniciar descanso. Persistir localmente antes da confirmação visual, mantendo o requisito offline.

A referência histórica não é execução atual até confirmação. Ausência de histórico não permite inventar carga. Não atribuir repetições realizadas automaticamente a partir da prescrição: forma de confirmação das repetições permanece a definir, especialmente em faixas e séries variáveis. Mudanças/erros de preenchimento exigem caminho simples de correção, ainda a detalhar.

Concluir uma série de bi-set ou etapa de drop-set pode não ser o momento de descanso; distinguir fim de etapa, exercício e grupo. O fluxo aprovado descreve a série comum e precisa ser adaptado aos métodos com o profissional antes de especificar comportamento final.

Confirmação posterior do fundador: mostrar repetições previstas como sugestão editável, permitindo confirmar sem redigitar quando executadas conforme previsto, ou ajustar antes de concluir. Persistir repetições reais confirmadas separadamente da prescrição. Isso resolve a forma básica de confirmação mencionada acima, mas não determina um número quando a prescrição é uma faixa (ex.: 8–12): valor inicial ou seleção rápida nessa situação ainda a definir. Exercícios por tempo exigem duração, não repetições fictícias.

Correção confirmada pelo fundador: tocar na série concluída permite ajustar valores registrados, preservando as demais séries e a sessão. Correção atualiza o mesmo registro, sem criar série duplicada ou alterar prescrição. Proposta para validar: não reiniciar descanso automaticamente ao corrigir dado; manter capacidade offline e sincronizar revisão. Exclusão/desfazer conclusão e edição após encerramento não foram definidos por esta confirmação.

### Primeira versão — abrir o exercício

Apresentação aceita pelo fundador: nome, orientação do personal, séries e botão Ver demonstração, sem vídeo automático. Reforço explícito: mostrar o último peso usado no exercício em destaque.

Última carga deve vir de registro real do próprio aluno, nunca de outro aluno ou da ficha copiada. Referência pode estar desatualizada offline; proposta é indicar data da execução de origem. Sem histórico, informar ausência de registro, não sugerir zero como carga anterior. Não misturar exercícios diferentes por semelhança de nome.

Quando a última execução contém cargas diferentes por série ou etapas de drop-set, um número isolado pode ser enganoso. Forma de resumo e acesso ao detalhe ainda a validar; a decisão não aprova usar o maior peso como resumo padrão. Essa informação é referência histórica, não recomendação automática de progressão.

Confirmação posterior do fundador: exibir a data da última execução e detalhar cargas por série quando diferentes (exemplo ilustrativo: 20 / 22 / 22 kg), sem reduzir a um peso único. Em drop-set, preservar associação de cada carga à respectiva série/etapa; layout dessas etapas ainda a validar. Valores ausentes ficam identificados como não registrados, sem presumir repetição da carga anterior. Data exibida é de execução, não de sincronização.

### Primeira versão — descanso

Decisão confirmada pelo fundador: aviso visual por enquanto; som pode ser avaliado no futuro. Não presumir vibração aprovada. Proposta apresentada: contagem regressiva com indicação de término, sem iniciar/concluir próxima série automaticamente.

Aviso visual refere-se ao app visível, não a notificação push ou alerta garantido em tela bloqueada. Ao retomar o aplicativo, mostrar tempo restante ou descanso encerrado a partir do instante persistido, sem depender de contador rodando em background. Forma de pular, prolongar ou corrigir descanso e comportamento nos métodos agrupados ainda a definir.

### Primeira versão — retomada da sessão

Decisão confirmada: ao reabrir com treino em andamento, priorizar Continuar treino, preservando séries registradas e posição/estado da sessão. Descanso reflete o tempo transcorrido. Retomar é escolha do aluno, não execução automática de série. Fechar/sair do app não conclui nem descarta a sessão.

Essa confirmação se refere à saída/fechamento do aplicativo, não ao logout da conta, que mantém regras separadas de proteção das pendências. Sessão retomada continua na versão da prescrição em que começou.

Pendências: como tratar sessão esquecida aberta de dia anterior, descarte/encerramento e tentativa de iniciar outra sessão enquanto uma já está aberta. Não descartar, concluir ou classificar abandono automaticamente sem regra definida.

Confirmação posterior do fundador: antes de iniciar outro treino, perguntar se deseja continuar ou encerrar a sessão anterior, inclusive quando esquecida aberta de dia anterior. Não iniciar outra sessão enquanto essa escolha não for resolvida. Continuar retoma a sessão existente; encerrar preserva registros e pendências como não informadas quando não revisadas, conforme fechamento rápido já aprovado. Encerramento não significa execução integral e não apaga os dados para liberar novo treino.

Ainda a definir: horário efetivo de término quando aluno encerra uma sessão esquecida. Não usar automaticamente todo o intervalo até a confirmação no dia seguinte como tempo real de treino; duração pode ficar incompleta até haver informação confiável. Descartar sessão e uso concorrente em dispositivos diferentes permanecem pendentes, sem impedir definição deste fluxo local.

### Teste de mesa — carga sem bloqueio da execução

Correção do fundador durante simulação do treino A: não precisa informar carga logo ao concluir a série; pode preencher depois da execução ou no final do treino. D31 refina D24/D25: conclusão de série e completude do registro de carga são informações independentes. Não bloquear avanço, descanso ou encerramento por carga ausente.

- Preservar série confirmada com carga não informada; isso não equivale a exercício não realizado, zero kg ou peso corporal.
- Última carga pode ser referência, mas não se torna carga atual sem confirmação explícita, nem por simplesmente concluir a série.
- Permitir completar cargas das séries durante a sessão e na revisão final, sem exigir reabrir cada exercício como condição para encerrar. Forma de preenchimento rápido a validar.
- Não exigir que aluno preencha todo o histórico pendente antes de encerrar; manter distinção entre execução registrada e carga ausente no resumo do personal.
- Edição após encerramento definitivo continua pendente; registro no final do treino não autoriza por si só alterações irrestritas em sessões antigas.

Simulação usa treino A de novembro como referência, não sessão realmente realizada. Questão sobre sugestão de carga para a segunda série foi interrompida pela correção e permanece sem resposta; não definir preferência presumida.

### Teste de mesa — referência histórica e padrão de carga

Esclarecimento posterior do fundador: espera ver a carga do exercício do último treino, não substituir essa referência pela carga recém-informada em outra série de hoje. Pode informar carga ao final da série ou no final do treino, e cada exercício tem seu registro isolado. Rejeitou a proposta de preenchimento em lote para todas as séries como fluxo desejado; não implementar essa proposta como decisão aprovada.

Nova regra solicitada: se não informar carga atual, manter a do último treino para aquele exercício. Isso altera as propostas anteriores de deixar sempre a carga ausente quando não preenchida. Execução continua dependendo de confirmação própria; herdar carga não marca série ou exercício como realizado.

Consequência de modelagem a revisar: preservar origem do valor (herdado do histórico versus informado/confirmado hoje), sem apresentar um padrão como medição atual comprovada. Essa distinção é proposta de transparência, não etapa adicional de confirmação obrigatória. Não usar carga herdada como evidência confirmada de recorde, volume efetivamente medido ou progressão. Personal pode consultar que o valor não foi atualizado.

Sem histórico real anterior, não inventar zero nem carga sugerida. Referência deve pertencer ao mesmo aluno/exercício e modo de carga. Não copiar cargas do aluno de origem ao duplicar ficha. Quando houver múltiplas cargas por série/etapa na execução anterior, regra de correspondência ainda precisa ser definida; não escolher arbitrariamente uma carga única. Também definir se dias sucessivos sem confirmação mantêm referência ao último registro confirmado, sem perder a origem por heranças encadeadas.

### Teste de mesa — realizado sem marcação

Fundador considera útil indicador discreto durante sessão, mas ressalta que pode realizar exercício e deixá-lo sem marcação. Isso reforça a distinção já presente entre ausência de registro e não execução.

Proposta de rótulo: pendente de confirmação/registro, nunca não feito por inferência. Ao tocar, permitir voltar ao exercício e registrar posteriormente, sem exigir repetição da execução. Ao encerrar, reaproveitar a revisão rápida já aceita (fiz, substituí, não fiz), preservando séries parciais e sem inventar repetições. Fiz sem detalhe confirma apenas o nível de informação fornecido, não todas as séries prescritas automaticamente. Carga anterior mantida conforme D32 continua identificada pela origem, sem comprovar execução atual.

Não realizado só é informação explícita do aluno; sem revisão, manter não informado. Indicador durante treino não cria pedido na fila do personal nem prova baixa adesão. Forma final da confirmação rápida durante a sessão permanece a testar.

### Teste de mesa — observação no encerramento

Direção aceita pelo fundador: junto da observação final opcional, disponibilizar ação Pedir resposta, também opcional. Resumo curto proposto apresenta exercícios confirmados, substituições e registros incompletos; forma de apresentação ainda a testar.

Observação sem pedido fica no histórico da sessão; com pedido explícito, entra na fila do personal após envio confirmado, levando contexto e texto. Não exigir comentário, avaliação extensa ou pedido de ajuda para encerrar. Essa entrada pelo fechamento complementa pedidos durante a sessão, sem eliminar associação ao exercício quando aplicável.

Offline, salvar observação e intenção de pedir resposta localmente e mostrar aguardando envio, sem afirmar que o personal recebeu. Reenvio da mesma solicitação não deve criar pedidos duplicados. Personal responder gera aviso no app conforme decisão anterior, não e-mail automaticamente.

### Teste de mesa — resposta e fila do personal

Decisão confirmada: responder basta para retirar o pedido das pendências do personal. Não exigir ação separada de marcar Resolvido no primeiro fluxo. A proposta anterior de resolução manual é substituída nesse ponto; isso não comprova que o aluno leu ou que sua dúvida foi solucionada.

Retirar só após envio confirmado da resposta; falha ou rascunho não tira a pendência. Histórico permanece acessível ao personal e ao aluno autorizado, e aluno recebe aviso interno conforme já definido. Se houver nova mensagem concorrente do aluno ainda sem resposta, não ocultá-la como se estivesse atendida; regra de reabertura por continuação da conversa permanece para confirmação.

Confirmação posterior do fundador: nova mensagem do aluno nessa conversa volta automaticamente para a fila. Não exigir novo pedido ou novo acionamento de Pedir resposta em cada continuação de atendimento. Isso se aplica a conversa já aberta como pedido; observações isoladas de treino continuam sem gerar fila automaticamente. Mensagem offline só reabre para o personal após envio confirmado. Várias mensagens no mesmo assunto representam uma pendência de conversa, não múltiplos pedidos independentes.

### Teste de mesa — alternativa como ajuste acompanhado

Correção do fundador: responder com sugestão de alternativa não basta. Deve haver pendência para o personal ajustar o treino e fazer a alternativa aparecer ao aluno, preservando contexto de séries, técnica e orientações.

- Distinguir pendência de resposta de pendência de ajuste. Resposta enviada retira a primeira conforme D35, mas não conclui a alteração da ficha. Nenhuma contradição com manter somente pedidos de resposta na fila de atendimento: ajustes são trabalho prescritivo separado.
- Alternativa é ligada ao exercício/item prescrito original, não apenas texto perdido na conversa nem substituição silenciosa do item principal.
- Personal configura prescrição aplicável à alternativa e publica explicitamente. Não herdar automaticamente séries, cargas, descanso ou método como se todo exercício fosse equivalente; pode reaproveitar para revisão, conforme desenho ainda a definir.
- Preservar vínculo da tarefa com pedido, aluno e versão/item de origem. Configuração de criação da tarefa (ação explícita versus solicitação tipificada), priorização e tratamento de pedidos repetidos ainda a definir; não inferir alternativa automaticamente com IA.
- Proposta para conclusão: considerar ajuste atendido após publicação bem-sucedida da alternativa, não somente resposta ou rascunho; validar comportamento se o personal decidir outra solução ou recusar a troca.
- Aluno vê alternativa publicada com orientação, séries e técnica pertinentes; detalhes de escolha durante sessão a definir. Sincronização offline e preservação da sessão original continuam válidas: publicação não troca automaticamente o exercício já realizado.
- Evolução/histórico continuam associados ao exercício efetivamente executado, sem transferir carga/recordes entre original e alternativa.

Esta decisão inclui alternativas prescritas no escopo do primeiro teste e amplia o atendimento para acompanhar ações prometidas pelo profissional. Não implica gerenciador genérico de tarefas ou criação automática de tarefas para toda observação.

### Lista de pendências de prescrição

Fundador confirmou ação explícita Adicionar ajuste ao treino na conversa e sugeriu uma lista das coisas que o personal precisa ajustar nos treinos. Registro da direção de produto; apresentação e abrangência ainda a validar.

Proposta mínima para o primeiro teste: lista de ajustes abertos, cada um com aluno, resumo, data de criação, ficha/exercício e conversa de origem quando houver; ação para abrir contexto e preparar ajuste. Nova ação na mesma conversa não deve criar duplicatas inadvertidas.

Responder ao aluno não conclui o ajuste. Alternativa em rascunho ainda é trabalho pendente; proposta é concluir após publicação relacionada e bem-sucedida. Como associar publicação/tarefa, como cancelar uma tarefa sem publicação e como tratar plano alterado ou vínculo encerrado continuam a definir. Não fechar todos os ajustes do aluno só porque qualquer revisão foi publicada.

Pode ser útil abrir ajuste diretamente na área do aluno, mesmo sem conversa, mas isso é proposta ainda não confirmada. Prazos, responsáveis múltiplos, prioridades, recorrência, kanban e automações não foram pedidos nem incluídos por esta decisão. Painel pode distinguir contagem de pedidos de resposta e de ajustes de treino, sem fundi-los em indicador ambíguo; apresentação é proposta.

Confirmação posterior do fundador: criação manual de ajuste na área do aluno é útil e entra na direção inicial. Além disso, o aluno deve poder ver as pendências do personal vinculadas a ele, para saber o que está sendo ajustado. Isso substitui a hipótese anterior de aluno só ver o resultado publicado.

Visibilidade é restrita aos ajustes do próprio aluno, nunca à lista global do personal ou tarefas de outros alunos. Pendência continua sendo responsabilidade do profissional; não bloquear treino do aluno por existir ajuste aberto. Conteúdo de rascunho, notas internas e dados de outras pessoas não se tornam públicos por essa decisão.

Proposta de apresentação a validar: descrição compreensível ao aluno e situação aguardando ajuste/concluído, com acesso ao contexto quando autorizado. Etapa em andamento, prazo previsto, cancelamento e aviso de mudança de estado ainda a definir; não prometer prazo ou notificações adicionais. Se houver notas internas separadas, sua existência e edição precisam de regra explícita; não presumir que todo campo livre é privado quando a pendência é visível.

Para alternativas de exercício, concluir tarefa deve refletir ajuste efetivamente publicado e relacionado, conforme proposta anterior; comentário ou resposta não substitui publicação. Definir comportamento quando ajuste deixar de ser necessário, evitando exibir como publicado algo apenas cancelado.

Estados confirmados pelo fundador: somente Pendente e Concluído. Não incluir Em andamento. A definição do evento de conclusão (especialmente publicação vinculada), permissão de correção e tratamento de ajuste que não será feito permanecem a definir; não adicionar estado Cancelado ou concluir silenciosamente como se tivesse sido publicado. A decisão trata ajustes de prescrição, não muda a regra de fila de mensagens (resposta retira, nova mensagem reabre).

Confirmação posterior após exemplo: ao publicar alteração, o personal indica quais pendências foram efetivamente atendidas. Só essas passam a Concluído após publicação bem-sucedida. Exemplo: publicar alternativa ao supino não conclui ajuste de pernas ainda não realizado. Não concluir por salvar rascunho, responder mensagem ou publicar alteração não relacionada. Vincular a conclusão à publicação correspondente para manter contexto. Publicação sem pendência associada continua possível; não exigir tarefa para todo ajuste espontâneo. Reabertura/correção de conclusão e ajuste que não será executado seguem pendentes de definição.

### Primeira versão — usar alternativa prescrita

Formato aceito pelo fundador: alternativa publicada aparece dentro do exercício original, por ação Usar alternativa. Ao selecionar, aluno encontra séries, instruções e histórico específicos da alternativa. Manter indicação do item original para o contexto, sem substituir a prescrição histórica silenciosamente.

Carga de referência usa registros do próprio exercício alternativo; sem histórico, não copiar carga do original. Escolher alternativa não confirma execução automaticamente. Registros devem identificar exercício realmente realizado e alternativa prescrita de origem. Disponibilidade offline depende de download prévio da prescrição correspondente, sem alterar silenciosamente sessão já iniciada para incorporar publicação nova.

Quantidade de alternativas por item, possibilidade de voltar ao original após séries parciais e agrupamentos bi-set/drop-set ainda precisam ser definidos. Não apagar registros parciais por alternar seleção nem presumir equivalência entre exercícios. A decisão aprova o acesso contextual, não todos esses casos de execução.

### Primeira versão — aviso de nova prescrição

Direção do fundador: aviso dentro do aplicativo e e-mail são suficientes para comunicar publicação de nova versão do treino. WhatsApp e push são possibilidades futuras, condicionadas à avaliação de necessidade, custo e operação. Provedor e orçamento de e-mail ainda não definidos; não contratar ou integrar agora.

Essa decisão trata publicação de treino. Para respostas da fila de atendimento, permanece a decisão anterior de aviso somente dentro do app inicialmente; não estender e-mail automaticamente a todas as mensagens.

Propostas de comportamento a validar: notificar somente após publicação bem-sucedida, não a cada edição de rascunho; e-mail genérico com acesso autenticado ao plano vigente, sem medidas, restrições ou conteúdo sensível; falha de entrega não desfaz publicação nem impede consulta do treino. Não afirmar que e-mail foi lido por ter sido enviado. Duplicação de envios, reenvio, preferências e volume de ajustes precisam ser definidos antes de implementação.

Aviso no app acompanha a prescrição sincronizada; offline pode continuar mostrando a revisão anterior. Preservar a sessão em andamento na versão original e não trocar sua execução silenciosamente. Publicação explícita após rascunho é proposta apresentada nesta discussão e já prevista na SPEC, ainda sem confirmação específica do fundador nesta resposta.

Confirmação posterior do fundador: editar em rascunho e liberar alterações somente por ação explícita de Publicar. Enquanto o rascunho é preparado, aluno continua acessando a versão publicada anterior, se houver. Primeiro plano sem publicação não fica visível como ficha pronta. Avisos de nova prescrição se vinculam à publicação, não ao salvamento de rascunho.

### F09 — Administração da plataforma

Status: necessidade futura confirmada pelo fundador; desenvolver somente após validar a ideia, sem incluir no piloto inicial.

Público: administrador/operador do Delta Fit, distinto de personal e aluno. Não atribuir privilégio administrativo automaticamente a quem tem perfil de personal.

Escopo solicitado para avaliação futura:

- Consultar números por personal, incluindo quantidade de alunos; definir ativos versus históricos e demais métricas antes de especificar painéis.
- Gestão de cadastros quando necessária para suporte; campos editáveis, permissões, confirmação e rastreabilidade de alterações ainda precisam ser definidos.
- Acompanhar pagamentos dos personais pela assinatura do Delta Fit, faturamento, pagamentos pendentes e realizados. Isso esclarece a relação comercial desejada: personal como pagador do SaaS; preço, planos, cobrança e eventual papel comercial do aluno continuam a especificar em F01.

Limites e pendências:

- Não inclui controle do pagamento de aluno ao personal, que segue administrado pelo profissional e sem inclusão decidida no app.
- Visão de números não implica acesso irrestrito a treino, medidas, mensagens ou outros dados individuais dos alunos. Escopo de suporte e acesso devem seguir necessidade definida.
- Não pressupor impersonação, edição de registros de pagamento, emissão fiscal ou painel contábil completo.
- Definir fonte dos eventos financeiros, conciliação, inadimplência, cancelamento e diferença entre valor cobrado, recebido e receita reconhecida antes de nomear métricas de faturamento.
- Separar suporte cadastral de operações financeiras; alterações sensíveis exigem autorização e auditoria adequadas quando essa etapa for implementada.
- Nenhuma tela, integração financeira ou infraestrutura administrativa está autorizada agora. No piloto, permanece a proposta de operações assistidas e restritas do operador, sem painel completo.

### F01 — Mensalidade recorrente

Status: intenção futura confirmada; implementação fora do piloto.

Objetivo: permitir sustentabilidade comercial após validar utilidade e adesão.

Antes de especificar, decidir:

- Direção esclarecida em F09: personal paga pela assinatura do SaaS. Detalhar condições comerciais; pagamento aluno→personal permanece uma relação separada administrada pelo profissional.
- O Delta Fit cobra pelo software ou também intermedeia pagamentos do profissional?
- Preço, unidade de cobrança, limites de alunos, renovação e mudanças de plano.
- Cancelamento, pausa, inadimplência, reembolso e acesso aos dados após encerramento.
- Canal de contratação e requisitos aplicáveis antes de escolher integração de pagamento.

Critério para priorizar: evidência de uso recorrente, disposição a pagar e modelo de cobrança definido. Não criar tabelas de assinatura ou integrar provedor apenas para antecipar essa possibilidade.

### F02 — Ciclo de acompanhamento de três meses

Status: diretriz do fundador a validar com profissionais e alunos.

Objetivo: organizar um período de acompanhamento com objetivo inicial, avaliações e ajustes. Usar o termo acompanhamento, sem pressupor tratamento clínico.

Proposta para avaliar: início e fim previstos, avaliações mensais, autoavaliação do aluno e comparação de evolução. Nenhum agendamento automático faz parte da decisão atual.

Manter conceitos separados: ciclo de acompanhamento é a relação profissional/aluno; assinatura é a relação comercial pelo software ou serviço. Um ciclo de três meses não determina cobrança trimestral, três cobranças obrigatórias ou bloqueio de cancelamento.

Pendências: prazo obrigatório ou recomendado; três meses de calendário ou duração em dias; efeito de pausas e troca de personal; possibilidade de renovação. Mesmo sem cobrança, não impor prazo mínimo ao piloto até validar seu comportamento.

### F03 — Montagem e consulta nutricional

Status: segunda etapa; não faz parte da primeira entrega de treino.

Investigar montagem rápida pelo profissional responsável. Para o aluno, priorizar consulta por dia/refeição, porções, alternativas e substituições explicitamente prescritas. Não inferir equivalências ou quantidades ausentes. Autoria, atribuições e processo de publicação precisam ser definidos antes de desenvolver; sem geração automática de dieta nesta decisão.

### F04 — Avaliações e feedback

Status: oportunidade identificada no relato, escopo a validar.

Considerar avaliações periódicas, comparação de medidas e feedback breve sobre duração, dificuldade e experiência de treino. Evitar coleta obrigatória que recrie o esforço de preencher planilhas.

### F05 — Orientações reutilizáveis de exercício

Status: hipótese para reduzir dúvidas recorrentes.

Considerar demonstração, instruções de método e observações individuais junto ao exercício. Distinguir dúvida de execução de pedido de adaptação individual. A fila de dúvidas é discutida separadamente em F08; chatbot e resposta automática não estão aprovados.

## Oportunidades de treino e acompanhamento

### F06 — Catálogo personalizável e vídeos próprios

Status: necessidade identificada no relato de Alex; proposta de escopo a validar.

- Permitir exercícios privados do personal e nome de exibição próprio, sem alterar catálogo de outros profissionais.
- Preservar ID estável e histórico ao renomear; dois exercícios com o mesmo nome não são automaticamente equivalentes para progressão/volume.
- Associar demonstração e instruções próprias. Link de vídeo pode ser primeiro incremento; upload privado é outro, com limites, acesso e custo definidos antes da implementação. Ambos devem ser avaliados, sem substituir a necessidade de vídeo próprio por animação genérica.
- Decisão posterior do fundador: links são suficientes na primeira versão. Upload direto fica para depois; vídeo autoral pode ser referenciado por link externo. Links não garantem disponibilidade offline do vídeo; instruções textuais e ficha continuam sujeitas ao requisito offline já confirmado. Provedores aceitos e abertura externa versus reprodução incorporada ainda a definir; não prometer suporte a qualquer URL.
- Exercícios publicados ao aluno precisam manter referências utilizáveis no histórico; definir comportamento após troca de personal. Arquivar em vez de apagar registros referenciados.
- Esta proposta substitui a premissa inicial de catálogo exclusivamente global e somente leitura. A IA futura só poderá selecionar exercícios do catálogo autorizado, incluindo privados permitidos.

### F07 — Execução, observações e acompanhamento

Status: necessidade identificada no relato de Alex; implementar em incrementos após montagem/publicação.

- Registrar séries, repetições e cargas realizadas e permitir observação opcional por sessão; avaliar comentário por exercício depois.
- Personal consulta prescrito versus realizado, histórico e comentários no vínculo autorizado.
- Começar por consulta/atualização simples após sincronização. Fila de conversas em F08; streaming em tempo real e WebSockets não são requisitos assumidos.
- Mostrar quando os dados foram recebidos e distinguir pendência de sincronização de dado inexistente. Não prometer presença ao vivo quando aluno está offline.
- Definir com Alex como deseja analisar volume (por exercício, grupo muscular, sessão ou período). Não confundir número de séries com soma de carga x repetições, nem comparar modalidades incompatíveis.

### F08 — Fila de dúvidas e feedbacks contextualizados

Status: necessidade explicitada pelo fundador e reconhecida como importante; funcionamento abaixo é proposta para validar.

Objetivo: trazer o acompanhamento hoje feito por WhatsApp para o produto, permitindo que o personal controle pendências e responda com contexto.

- Aluno abre assunto associado a sessão, exercício ou orientação; personal consulta contexto, responde e acompanha pendências.
- Proposta: distinguir avaliação breve, sem resposta obrigatória, de pedido de ajuda que entra na fila. A distinção e os nomes ainda não foram validados.
- Estados propostos: aguardando personal, aguardando aluno e resolvido; nova mensagem do aluno reabre assunto. Definir quem encerra e como sinalizar leitura/entrega posteriormente.
- Preservar vínculo com a versão da ficha que originou a conversa mesmo após ajuste do treino.
- Mensagem offline permanece aguardando envio; não indicar recebimento pelo personal antes da confirmação do servidor.
- IA no tom do profissional é oportunidade futura. Primeira hipótese é rascunho revisado pelo personal; envio automático não foi aprovado. Tom, contexto permitido e limites precisam de validação.
- Prioridade exata no piloto, notificações, anexos, expectativa de prazo e tipos de assunto ainda em aberto. Não presumir atendimento imediato.

### Teste de montagem — blocos flexíveis (D44)

Pendência explícita solicitada pelo fundador: realizar futuramente teste A/B entre organização por blocos flexíveis (A) e lista única com função por exercício (B). Retomar ao planejar os testes com convidados. Não executar agora; desenho do experimento, participantes e critérios de comparação ainda serão definidos. Manter blocos no teste de mesa atual.

Em 16/10/2026, fundador relatou compreender melhor a organização por blocos e, após discutir tradeoffs, aprovou testá-la e registrar feedback para decidir qual formato funciona melhor. Trata-se de hipótese de experiência aceita para teste, não resultado validado.

Proposta aceita para testar:
- Personal começa com um bloco e pode adicionar outros quando necessário, sem quatro blocos obrigatórios nem blocos vazios mantidos na apresentação. Facilitar reorganização de exercícios entre blocos; gesto/layout ainda não definido.
- Aluno vê a sequência completa com títulos discretos, sem ação adicional para passar de um bloco ao seguinte.
- Bloco organiza etapas da ficha; agrupamentos de execução como bi-set permanecem dentro do bloco, sem confundir etapa com método.
- Usar a ficha A da referência D43 no teste de mesa, começando por fortalecimento e aquecimento. Não presumir que todos os treinos precisam dessas divisões.

Validação futura com convidados, ainda não realizada: comparar blocos com lista única com função indicada por exercício. Observar separadamente montagem pelo personal (compreensão, esforço para adicionar e reorganizar, passos desnecessários) e execução pelo aluno (localização da etapa, distinção de exercícios repetidos com prescrições diferentes, rolagem e continuidade). Incluir ficha simples para verificar se blocos acrescentam complexidade sem benefício. Registrar dificuldades observadas e preferência declarada de cada público; não decidir apenas por preferência do fundador ou quantidade de cliques. Protocolo, participantes e critérios quantitativos ainda não definidos.

## Achados da comparação das fichas

### Revisão da montagem — prévia do aluno (D59)

Confirmação posterior D60, no cenário de descanso vazio na revisão: fundador definiu usar 45 segundos quando não houver tempo preenchido. É escolha de comportamento do produto, não duração constatada na planilha ou recomendação clínica do assistente. Descanso explícito do personal prevalece, inclusive ajustes por série (D49). Substitui a pendência de duração padrão; não se aplica como pausa entre os dois exercícios do bi-set confirmado em D54, cujo descanso ocorre após o par. Não determina descanso após última série/transição nem resolve demais protocolos agrupados. Proposta de apresentação ainda a validar: indicar 45 s como padrão na montagem/prévia para o personal saber o que o aluno receberá; não apresentar valor como digitado pelo personal. Aviso ou bloqueio por descanso vazio não foi escolhido: há agora valor padrão para esse caso.

Fundador confirmou oferecer Visualizar como aluno antes de publicar, para o personal conferir sequência, prescrições e orientações. É prévia do rascunho para revisão pelo profissional; mantém-se a publicação explícita já decidida e a versão vigente acessível ao aluno enquanto o rascunho é preparado. Não implica obrigatoriedade de abrir a prévia, simular uma sessão, registrar execução ou enviar o rascunho ao aluno. Layout da revisão, validações e tratamento de campos incompletos ainda a discutir. A referência de novembro não está integralmente coberta pelo escopo: rest-pause segue adiado.

Referência escolhida explicitamente pelo fundador em 16/10/2026 para o teste de mesa da montagem pelo personal (D43): [treino de novembro/2023](https://docs.google.com/spreadsheets/d/1l99sVR4YbdERHMEPZjbwYFv0rJcLQKSf/edit). Link já registrado abaixo; não é uma quinta fonte. Conteúdo textual consultado novamente via Drive nessa data. Usar ficha A como primeiro exemplo, sem copiar a planilha integral, dados pessoais ou cargas para a memória. A escolha da referência não aprova todos os métodos nela presentes: rest-pause permanece fora do conjunto inicial aceito. Separação por fichas confirmada; não implica exigir criar A–D antes de preencher A.

Fonte: conteúdo textual dos arquivos fornecidos, consultado em 15/10/2026; não houve auditoria de fórmulas, formatação ou avaliação da adequação do treino. Datas abaixo são as datas dos títulos, não prova da vigência real.

| Referência | Estrutura observada |
| --- | --- |
| [Março/2023](https://docs.google.com/spreadsheets/d/1wt2fXbzBXqnkXYo6vGVukv-5XMoL5jtly8zZRD_JIpA/edit) | A–E, quadro de periodização com dois mesociclos e faixas semanais de repetições/descanso; hardset, bi-set e drop-set |
| [Maio/2023](https://docs.google.com/spreadsheets/d/1cbFEu4gGSFWBvXhiUCKv0m_ZGmZ0XPJF/edit) | A–D, periodização e marcações BACK OF SET; mesmo exercício aparece em mais de uma posição com função diferente |
| [Setembro/2023](https://docs.google.com/spreadsheets/d/1s-DVbwrsjwgMEUHKivtwx7SUw0XYhslR/edit) | A–E, prescrições locais por exercício, cluster/drop-set/bi-set, mudanças de exercícios e cardio |
| [Novembro/2023](https://docs.google.com/spreadsheets/d/1l99sVR4YbdERHMEPZjbwYFv0rJcLQKSf/edit) | A–D, repetições por série, rest-pause, bi-set, drop-set e atividades por duração |

O link de setembro foi enviado duas vezes; conta como uma única fonte. São quatro fichas distintas incluindo novembro, já consultada antes.

Evidência confirmada pelo fundador: treinava sozinho e precisava consultar Alex para interpretar qual orientação da periodização aplicar. Não confundir execução sem presença do personal com compreensão autônoma da planilha.

Dores e consequências para discovery:

1. Prescrição distribuída entre ficha e quadro de periodização exige interpretação. Mostrar orientação aplicável à sessão; calendário, sessões concluídas ou escolha do personal são alternativas ainda não decididas.
2. Aquecimento, fortalecimento, parte principal e final têm funções diferentes. Avaliar apresentação por blocos sem obrigar o aluno a decifrar texto solto.
3. Repetições por série, duração, agrupamentos e etapas de carga não cabem no contrato inicial simples. Priorizar representação de casos reais antes de congelar contrato ou construir IA.
4. Revisar a proibição inicial de exercício repetido na mesma ficha: ocorrência prescrita e identidade do exercício são conceitos diferentes.
5. Células vazias ou conteúdo ambíguo não permitem inferir execução, unidade ou equivalência de cargas. Não importar automaticamente como histórico confirmado. Nenhuma conclusão de evolução quantitativa foi feita.
6. As fichas mostram mudanças, mas não revelam o motivo das escolhas do profissional. Não deduzir estratégia ou eficácia a partir delas.

## Próxima discussão proposta

### Escolha da ficha e ordem dos exercícios — relato do aluno

Confirmado pelo fundador em 15/10/2026:

- Ao escolher por qual ficha começar, considera lotação e disponibilidade de equipamentos. Pode iniciar por pernas em vez de peito, por exemplo; as letras das fichas não determinam dias fixos da semana em sua experiência.
- Às vezes muda a ordem dos exercícios dentro da ficha, mas como exceção. Normalmente segue a ordem prescrita, reconhecendo a intenção de aquecimento, volume e esforço da sessão. Isso é relato de uso, não autorização universal para reorganizar qualquer prescrição.

Hipóteses de experiência a validar:

- Mostrar fichas disponíveis, última execução e orientação do personal para ajudar na escolha; não impor calendário fixo por padrão.
- Preservar a sequência prescrita e distinguir aquecimento/parte principal/final. Disponibilizar acesso a outro exercício sem reescrever a prescrição original ou concluir automaticamente o exercício pulado.
- Distinguir exercício adiado de exercício não realizado; registrar execução real separadamente da ordem planejada.
- Não exigir justificativa para cada interação. Avaliar uma observação opcional quando houver mudança relevante, sem transformar exceção em formulário obrigatório.

Confirmação adicional do fundador: pode voltar depois ao exercício adiado ou encerrar a sessão sem realizá-lo. Também pode descobrir que sua academia não possui o aparelho/máquina prescrito.

Casos distintos para a experiência, ainda sem definir interface ou estados técnicos:

- Equipamento ocupado: possibilidade de adiar e retomar na mesma sessão.
- Exercício não realizado até o encerramento: preservar ausência de execução, sem marcar como concluído ou atribuir carga/repetições fictícias.
- Equipamento inexistente: impedimento que pode se repetir; oportunidade de pedir adaptação ao personal com contexto do exercício e da sessão.

Hipóteses a validar: motivo rápido e opcional para não realização; pedido de adaptação entrando na fila F08; personal cadastrar alternativas previamente autorizadas na prescrição. Nenhuma equivalência de exercícios ou substituição automática por IA foi aprovada. Disponibilizar alternativa autorizada deve preservar tanto o que foi prescrito quanto o que foi executado, sem sobrescrever o histórico.

Pendências: como retomar exercício adiado; como encerrar sessão incompleta sem confundir com execução integral; restrições de sequência por bloco/método; alternativas prévias versus resposta individual; como atualizar equipamentos disponíveis do aluno sem exigir cadastro extenso antes do primeiro treino.

### Substituição decidida pelo aluno durante a sessão

Relato confirmado pelo fundador: quando não encontra equipamento, pode escolher rapidamente outro exercício que considera relacionado, ou não executar o item. Depois pede a Alex uma alternativa. Trata-se de comportamento observado, não validação da equivalência ou adequação da escolha.

Consequências para a proposta de experiência:

- Distinguir prescrição original, alternativa previamente indicada pelo personal e substituição relatada pelo aluno sem validação prévia.
- Permitir informar o que realmente fez sem reescrever a ficha nem registrar o exercício original como executado. Forma de registro ainda a validar; considerar nome livre quando o exercício não estiver disponível no catálogo, sem obrigar cadastro completo durante a sessão.
- Não transferir automaticamente cargas, recordes ou progressão entre exercícios considerados relacionados pelo aluno.
- Possibilitar pedir uma alternativa para as próximas sessões com referência ao exercício original, motivo e eventual execução substituta. O pedido deve aparecer na fila do personal somente após envio confirmado.
- Não transformar cada substituição em mensagem automática: avaliar se o aluno solicita resposta ou apenas relata o ocorrido. Propostas de fluxo ainda não aprovadas.

Próximo tema sugerido de discovery: fechamento de sessão, distinguindo realizado, parcialmente realizado, substituído e não informado; definir quais informações ajudam o personal sem criar mais uma tarefa de preenchimento para o aluno.

### Fechamento rápido da sessão

Direção aceita pelo fundador para testar: revisão curta apenas dos exercícios pendentes, sem avaliação extensa obrigatória ao finalizar o treino.

- Ações propostas de um toque: não fiz; substituí; fiz, sem registrar carga. Nenhuma opção inventa cargas ou repetições.
- Comentário não obrigatório e possibilidade de detalhar posteriormente. Substituição só conta como exercício identificado quando o aluno informar qual foi; sem isso, manter indicação de substituição sem atribuir identidade fictícia.
- Permitir encerrar sem revisar tudo; pendências restantes ficam não informadas, diferentes de não realizadas.
- Preservar séries parciais já registradas. Resposta sobre exercício pendente não deve apagar execução parcial ou convertê-la em execução integral.
- Tempo de 5–10 segundos é hipótese para teste de usabilidade, não meta já comprovada. Validar sobretudo quando houver vários itens pendentes.
- Revisão não cria automaticamente pedido de resposta ao personal; manter distinção entre relato e pedido de ajuda discutida em F08.

Próxima discussão: como o personal consulta o resumo da sessão e distingue informação de pendência que exige resposta, sem receber uma conversa por cada treino concluído.

### Separação entre atividade e atendimento

Decisão confirmada pelo fundador: somente pedidos que exigem resposta entram na fila do personal.

- Atividade dos alunos: sessões, séries, substituições, revisão final e observações ficam disponíveis para consulta, sem gerar atendimento automaticamente.
- Atendimento: pedido explícito do aluno, como dúvida de execução ou solicitação de alternativa, entra na fila após envio confirmado e leva o contexto disponível.
- Uma observação isolada não é automaticamente pedido de ajuda. A apresentação da ação para solicitar resposta ainda será validada.
- Não classificar urgência ou abrir pedidos automaticamente por IA nesta decisão.
- Estados da conversa, fechamento, reabertura e notificações continuam como propostas de F08, ainda não confirmadas individualmente.

### Formato das mensagens de atendimento

Evidência relatada pelo fundador: texto era suficiente para explicar suas dúvidas a Alex; enviou áudios ocasionalmente, com menor frequência.

Proposta para a primeira versão da fila: pedidos e respostas por texto, com contexto de ficha/exercício/sessão quando aplicável. Áudio é oportunidade posterior, não requisito inicial confirmado. O relato não estabelece necessidade de fotos ou vídeos enviados pelo aluno; vídeos demonstrativos publicados pelo personal são outra funcionalidade e permanecem em F06.

### Aviso de resposta

Decisão confirmada pelo fundador: aviso dentro do aplicativo é suficiente inicialmente para o aluno saber que recebeu resposta. Notificação no celular (push) fica como oportunidade futura, sem implementação ou dependência no primeiro fluxo de atendimento.

Hipótese de apresentação a validar: indicador de respostas não lidas com acesso à conversa. Não pressupor que recebimento, leitura e resolução do pedido sejam a mesma coisa. Avisos de novas respostas dependem de sincronização; não prometer atualização enquanto o aparelho estiver sem conexão. Não exigir serviço de push para entregar a primeira versão.

### Área do aluno para o personal — prioridade inicial

Decisão do fundador: destacar os últimos treinos realizados ao abrir a área de um aluno. Evolução das cargas e dificuldades relatadas são informações de apoio, sem prioridade sobre a atividade recente nesta primeira visão.

Proposta para validar: lista por data de execução com ficha, situação da sessão e resumo do registrado; abrir uma sessão revela realizado versus prescrito, substituições e observações. Distinguir sessão encerrada de treino integralmente executado e dado não informado de exercício não realizado. Só exibir dados recebidos; registrar também momento da sincronização para não confundir envio atrasado com treino realizado naquele momento. Pedido que exige resposta continua na fila de atendimento, sem ser perdido ou resolvido pela simples consulta da sessão.

Pendências: conteúdo mínimo de cada item, tratamento de sessões em andamento e forma de apresentar cobertura dos registros. Não inferir abandono ou falta de treino apenas pela ausência de sincronização.

### Visão geral do personal — indicadores de resumo

Direção sugerida pelo fundador: apresentar indicadores numéricos de pedidos de resposta, alunos ativos e, futuramente, alunos com mensalidade em dia ou atrasada.

Proposta para o piloto:

- Pedidos aguardando resposta do personal: contar assuntos que exigem ação, não cada mensagem; excluir resolvidos e os que aguardam aluno. Estados ainda devem ser validados em F08.
- Alunos ativos: usar vínculo ativo como definição inicial proposta, sem confundir com aluno que treinou recentemente ou pagou. Validar esse significado antes de implementar.
- Indicadores podem levar à lista correspondente; navegação é hipótese de experiência.

Indicadores financeiros ficam em avaliação futura, pois o piloto segue sem cobranças. Não apresentar zero ou status inventado para pagamentos ainda não acompanhados. É necessário esclarecer se o fundador se refere à mensalidade do acompanhamento cobrada pelo profissional ou à assinatura do SaaS; não presumir que sejam o mesmo produto financeiro.

Pendências para indicadores financeiros: controle manual de pagamentos externos versus integração; valor e vencimento; definição de atraso, períodos de tolerância e atualização dos dados. Nenhum controle financeiro manual, checkout, cobrança automática ou bloqueio de acesso foi autorizado por esta sugestão. Ver F01 para as decisões comerciais relacionadas.

Esclarecimento do fundador: os indicadores financeiros sugeridos se referem ao pagamento do aluno ao personal pelo acompanhamento, administrado pelo próprio profissional. Incluir esse controle no Delta Fit é uma possibilidade ainda não decidida. É distinto da eventual assinatura recorrente do SaaS em F01. Não presumir acesso a pagamentos externos nem status financeiro confiável sem registro correspondente.

Recomendação de escopo a validar: adiar controle financeiro do acompanhamento e os respectivos indicadores; priorizar alunos ativos, treinos recentes e pedidos aguardando resposta. Reavaliar se profissionais relatarem dificuldade recorrente com vencimentos/conciliação e disposição para manter registros no produto. Mesmo controle manual exige regras de atualização e pode criar mais trabalho; não é condição para validar o ciclo de treino e atendimento.

### Lista de alunos e ordenação por adesão

Interesse expresso pelo fundador: lista de alunos com uma espécie de ranking de quem mais realizou os treinos corretamente. Necessidade ainda em definição; nenhum algoritmo ou score foi aprovado.

Interpretação proposta: visão privada do personal para acompanhar consistência/adesão, não ranking público entre alunos. Confirmar o significado de corretamente: conclusão relatada, frequência em relação ao combinado ou outro critério. Registros de séries não comprovam técnica do movimento, esforço adequado ou qualidade de execução.

Hipóteses de critérios a discutir: sessões concluídas em relação às previstas no período, cobertura dos registros e exercícios realizados/alternativas autorizadas. Apresentar dimensões separadas antes de inventar pontuação composta. Não ordenar apenas por quantidade absoluta de sessões, pois alunos podem ter frequências prescritas diferentes. Sem frequência-alvo definida, não calcular percentual de adesão como se houvesse denominador conhecido.

Dados pendentes offline, ausência de preenchimento, início recente, pausas e prescrição alterada podem distorcer comparação. Não classificar automaticamente ausência de registro como ausência de treino nem penalizar alternativa autorizada. Definir janela de tempo, universo comparável e informação insuficiente antes de implementar ordenação.

Esta oportunidade é distinta do ranking social/gamificação antes deixado fora do MVP; sua inclusão na primeira versão do painel continua a validar.

Esclarecimento do fundador: deseja ordenar pela frequência de treino e pelo cumprimento da meta diária de água durante o mês, destacando alunos que mais cumpriram as metas dos dias. O critério desejado é consistência de hábitos relatados, não avaliação de técnica ou carga levantada.

Proposta de leitura a validar antes de definir ranking:

- Água: dias em que os registros atingem a meta vigente daquele dia / dias elegíveis no mês. Quantidade além da meta não gera crédito adicional. Meta individual é configurada, não calculada ou recomendada por este ranking.
- Treino: cumprimento da frequência acordada; definir se há meta por dia, semana ou período flexível. Não exigir treino em dias de descanso nem fixar A/B/C em dias da semana, contrariando a flexibilidade já relatada.
- Exibir inicialmente os dois indicadores separados; fórmula conjunta, pesos, desempate e ordenação única ainda não definidos. Não assumir que cada dia só conta quando ambas as metas são atingidas.
- Validar mês calendário versus janela móvel; participação parcial, pausas, metas alteradas, ausência de meta e sincronização tardia. Comparar proporções de oportunidades elegíveis em vez de apenas total bruto, se essa regra for aprovada.
- Dados são autorrelatados: mostrar consistência registrada, sem afirmar adesão real comprovada. Sem registro, sinalizar informação insuficiente em vez de concluir automaticamente que a pessoa não cumpriu.

Próxima decisão de produto: manter duas metas independentes ou definir um dia cumprido como atendimento de todas as metas aplicáveis, com água nos dias elegíveis e treino apenas quando previsto. Essa segunda opção ainda depende de definir agenda/frequência flexível.

Decisão posterior confirmada pelo fundador: adotar dia cumprido como unidade de consistência. Um dia conta quando todas as metas aplicáveis a ele forem atingidas segundo os registros disponíveis. No escopo discutido, essas metas são água diária e treino quando previsto; descanso não exige treino, e ultrapassar água não compensa treino faltante ou gera crédito adicional.

O painel privado do personal deve permitir entender o motivo do resultado do dia, distinguindo meta cumprida, não cumprida com informação disponível e não informada/pendente de sincronização. Dia com informação insuficiente não deve ser apresentado como cumprimento confirmado nem como descumprimento comprovado.

A fórmula de ordenação mensal permanece aberta: total bruto de dias versus proporção dos dias elegíveis e regra para dados incompletos, empates e ingresso durante o mês. A decisão dia cumprido não resolve essas comparações automaticamente.

Pendência prioritária: definir quem estabelece os dias com meta de treino e como tratar mudança de dia, pois o aluno relatou flexibilidade na escolha da ficha. Não inferir meta de treino em todos os dias nem atrelar A/B/C a segunda/terça/quarta. Calendário, compromisso diário do aluno e meta semanal são alternativas ainda não decididas; meta semanal exige regra própria antes de ser convertida em resultado diário.

Decisão posterior do fundador: personal e aluno trabalham com quantidade semanal de treinos; aluno escolhe os dias. Não há agenda fixa de treino por dia nesta decisão, nem obrigação de antecipar a escolha diária.

Consequência: a afirmação anterior de dia de treino versus descanso não tem classificação prévia automática. Um dia sem treino não pode ser tratado como falta antes de avaliar a frequência semanal, nem o aluno declarar descanso pode por si só comprovar cumprimento da meta semanal. A interpretação de todas as metas do dia, escolhida anteriormente, precisa ser reconciliada com essa decisão; não implementar score diário conjunto como se a regra estivesse completa.

Proposta para discussão, ainda não aprovada: acompanhar água por dia e frequência por semana (ex.: 2/3), apresentando consistência mensal com essas duas dimensões visíveis. Caso se mantenha um único ranking por dias cumpridos, definir explicitamente como uma meta semanal influencia os dias sem treino, sem atribuir faltas arbitrárias ou permitir que descanso declarado esconda frequência abaixo da meta.

Outras pendências futuras: início/fim da semana, semanas que atravessam meses, meta alterada durante a semana, ingresso/pausa, critérios para sessão contar na frequência e mais de uma sessão no mesmo dia. Escolher quantidade semanal não define esses critérios.

Detalhar uma sessão do ponto de vista do aluno: escolha da ficha/etapa, apresentação de instruções, registro, descanso, pedido de ajuda e encerramento. Usar cenário concreto para testar hipóteses, sem exigir conhecimento do processo interno de Alex. Depois discutir a fila do personal. Tudo permanece em discovery; cobrança, infraestrutura e implementação seguem adiadas.
