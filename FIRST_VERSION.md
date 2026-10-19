# Delta Fit — Escopo consolidado da primeira versão

Data: 15/10/2026. Status de produto: discovery, consolidação para revisão do fundador. Autorização técnica posterior D74 permite somente implementar/configurar/verificar I0-r1 local; não autoriza o restante do piloto ou contratação de serviços. Evidências em docs/progress.md.

## Como ler

Para retomar em outro chat, começar por `AGENTS.md` e `CONTEXT.md`; eles indicam o estado atual e as decisões que substituíram propostas anteriores.

`PRODUCT_DECISIONS.md` mantém decisões, evidências e hipóteses detalhadas. Este documento organiza o escopo de produto discutido; não transforma sugestões anteriores em aprovações. SPEC.md e PLANS.md ainda contêm arquitetura/contratos antigos que exigem reconciliação antes de uso. O piloto completo é diferente de um primeiro incremento técnico.

## Objetivo do piloto

Diretriz confirmada (D51): priorizar facilidade de uso para personal e aluno diante da demanda diária, com robustez e utilidade suficientes para os cenários de treino do escopo. Validar esforço e compreensão de ambos nos testes.

Testar com personais selecionados e seus alunos se é possível prescrever com menos esforço, executar e registrar com menos atrito e acompanhar dúvidas/resultados no produto. Validar utilidade antes de IA, cobrança e operação comercial completa.

Decisão posterior do fundador: priorizar experiência de treino para validar a ideia. Água e ranking de hábitos ficam fora do primeiro piloto. Avaliação e atendimento já discutidos permanecem como apoio ao ciclo de treino; essa escolha não implica retirar silenciosamente essas funções.

## 1. Núcleo definido para o primeiro teste

| Área | Escopo e decisões confirmadas |
| --- | --- |
| Entrada | Fundador convida personais selecionados; personal convida alunos. Sem cadastro público ou busca de profissionais. No máximo um personal ativo por aluno |
| Avaliação | Personal preenche avaliação/contexto. Campos iniciais: peso, altura, bíceps direito/esquerdo, cintura, quadril, panturrilha direita/esquerda e peito. Aluno consulta suas avaliações e evolução, sem editar |
| Exercícios | Necessidade de nomes familiares, exercícios próprios e demonstrações por links; upload de vídeos adiado. Criar exercício na própria busca sem sair da montagem (D45). Separar cadastro reutilizável da prescrição na ficha (D47). No cadastro, somente nome obrigatório; link e orientação geral opcionais e complementáveis depois (D48). Séries/repetições, descanso e orientação individual pertencem à prescrição, cujos requisitos ainda estão abertos. Catálogo básico compartilhado mais personalização privada é desenho proposto, ainda não fechado |
| Montagem | Organização por fichas. Criar do zero ou copiar ficha individual/plano completo para adaptar. Biblioteca própria de treinos de referência cadastrados pelo personal (D46), para copiar e adaptar; forma de alimentar/manter modelos ainda a detalhar. Cópias independentes; não trazer histórico ou dados pessoais do aluno de origem. Teste de mesa do personal usa a ficha A da referência de novembro/2023 (D43); layout e ordem de criação das fichas ainda abertos |
| Prescrição | Séries comuns (fixas, faixas ou repetições por série), bi-set, drop-set, exercícios por tempo e aquecimento separado. Preenchimento rápido de quantidade de séries e repetições comuns, com opção Repetições por série (D50). Para séries comuns, descanso preenchido uma vez por exercício na ficha e ajustável por série (D49); se não preenchido, padrão de 45 s (D60), com tempo explícito prevalecendo. Padrão não cria pausas dentro de métodos agrupados. Repetições/descansos atuais explícitos na ficha, atualizados pelo personal; sem variação automática por semana |
| Publicação | Salvar em rascunho; oferecer Visualizar como aluno para conferir sequência, prescrições e orientações antes de publicar (D59). Liberar por ação explícita de Publicar. Plano não expira automaticamente: personal decide quando substituí-lo |
| Aviso de plano novo | Aviso no aplicativo e e-mail. WhatsApp/push ficam para depois; operação/custo de e-mail a definir |
| Execução | Aluno escolhe dias para cumprir quantidade semanal acordada e escolhe ficha conforme contexto. Segue normalmente ordem prescrita; desvios dentro da sessão são exceções relatadas |
| Offline | Após download, consultar ficha/exercícios e iniciar, registrar e concluir sessões sem rede; sincronizar depois. Vídeo externo não tem garantia offline |
| Registro e encerramento | Reduzir esforço de carga; revisão final rápida só das pendências, com não fiz/substituí/fiz sem carga. Encerrar sem preencher tudo não inventa execução. Detalhes de interface ainda a testar |
| Registro de série | Última carga como referência e repetições previstas como sugestão editável; aluno ajusta e confirma em Concluir série para salvar e iniciar descanso. Valor inicial para faixas e adaptação para bi-set/drop-set ainda a definir |
| Carga sem bloqueio | Concluir série e seguir treino não exige informar carga. Preencher por exercício ao final da série ou do treino. Se não atualizar, manter carga do último treino como padrão identificado pela origem, sem tratá-la como carga atual confirmada; sem histórico, fica não informada |
| Pendências durante sessão | Indicador discreto de registro/confirmação pendente, não de exercício necessariamente não realizado. Permitir registro posterior; ausência de marcação não comprova ausência de execução |
| Correção | Tocar em uma série concluída permite ajustar valores, sem reiniciar treino ou apagar outras séries |
| Descanso | Contagem com aviso visual inicialmente; som fica para depois e vibração não foi definida. Retomar app deve refletir o tempo transcorrido |
| Retomada | Continuar treino é a opção principal ao reabrir com sessão em andamento; preservar séries e descanso, sem concluir/descartar por fechar o app |
| Sessão anterior aberta | Antes de iniciar outro treino, pedir para continuar ou encerrar a anterior, preservando os registros. Vale também para sessão esquecida de dia anterior; sem duração artificial baseada no tempo aberto |
| Consulta do exercício | Nome, orientação, séries, última carga registrada pelo aluno com data da execução e detalhe por série quando variar, e botão Ver demonstração, sem vídeo automático; layout de etapas de drop-set ainda a validar |
| Atendimento | Pedidos que exigem resposta entram na fila; relatos e sessões não geram atendimento automaticamente. Texto atende à necessidade inicial; áudio não é requisito. Aviso de resposta dentro do app |
| Responder pedido | Resposta enviada com sucesso retira o pedido das pendências, sem marcar Resolvido separadamente; conversa permanece consultável. Falha de envio não remove pendência |
| Continuar conversa | Nova mensagem enviada pelo aluno reabre a mesma conversa na fila, preservando histórico e contexto; sem criar novo pedido a cada mensagem |
| Ajuste e alternativa | Pedido de alternativa também gera pendência de ajuste para o personal, separada da resposta. Alternativa configurada/publicada aparece vinculada ao exercício original, com séries, técnica e orientações próprias; responder não elimina ajuste pendente |
| Usar alternativa | Ação dentro do exercício original abre alternativa publicada com séries, instruções e histórico próprios. Seleção não confirma execução nem transfere carga do original |
| Lista de ajustes | Personal cria pela conversa ou diretamente na área do aluno. Lista separada dos pedidos de resposta; aluno acompanha somente os próprios ajustes. Estados Pendente e Concluído. Ao publicar, personal indica os ajustes atendidos; somente esses são concluídos após sucesso |
| Observação final | Campo opcional com ação Pedir resposta, também opcional. Sem pedido, fica no histórico; com pedido, entra na fila após sincronização confirmada |
| Acompanhamento | Priorizar últimos treinos realizados na área do aluno. Personal deseja lista de alunos, indicadores resumidos de alunos ativos e pedidos aguardando resposta; definições/apresentação ainda a validar |

Registro de substituição informa o realizado; não comprova equivalência entre exercícios. Pedido de alternativa leva contexto ao personal. Sessão encerrada não equivale a treino integralmente realizado. Ausência de registro não comprova ausência de treino. Sessões em andamento preservam a versão original quando uma nova ficha é publicada.

## 2. Decisões que faltam para fechar o escopo

Complemento de prescrição confirmado (D53): no preenchimento por série, Até a falha pode substituir a quantidade fixa; aluno vê a orientação por extenso. Sugestão/registro das repetições efetivamente realizadas nesse caso ainda a definir.

Exercícios por tempo (D56): editor de séries permite escolher Repetições ou Duração, preencher tempo comum e ajustar individualmente quando necessário. Exemplo aceito: prancha 4 × 1 min. Timer e registro da duração realizada ainda abertos.

Confirmação posterior de registro por tempo (D58): aluno pode informar duração efetivamente realizada ao concluir, mantendo a prescrita separada para consulta do personal e avaliação de estratégia/intensidade. Sem confirmação, duração prevista não comprova realização. Não há ajuste automático de treino. Timer, preenchimento inicial, obrigatoriedade e edição posterior ainda abertos; substitui a pendência genérica de registro mencionada em D56 apenas nesse alcance.

Caminho de montagem aceito para teste (D55): Adicionar bi-set dentro do bloco, informando rodadas, dois exercícios em sequência, prescrições próprias e descanso após o par. Referência D54 confirma esse protocolo no bi-set de tríceps da ficha A; outros protocolos e registro pelo aluno ainda precisam ser discutidos. Facilidade ainda não validada com convidados.

| Tema | O que falta decidir | Limite sugerido para evitar excesso |
| --- | --- | --- |
| Hábitos — adiado | Água fica para depois do primeiro piloto; autoria da meta e registro serão definidos nessa etapa | Não implementar hábito ou diário alimentar para validar treino |
| Consistência — adiada | Ranking de hábitos fica para depois; combinação de água diária e frequência semanal segue sem fórmula aprovada | Interesse futuro preservado, sem score no piloto |
| Avaliação | Unidades propostas kg/cm, campos opcionais, datas, comparações e notas privadas | Comparação simples entre avaliações; gráficos complexos não são necessários por pressuposto |
| Catálogo | Base inicial, criação privada versus aliases, visibilidade após encerramento do vínculo | Evitar biblioteca enorme; nunca deduzir identidade apenas pelo nome |
| Métodos | Execução/descanso de bi-set e etapas de drop-set; dados mínimos de cardio e timer | Confirmar exemplos com profissional; não inferir regras de abreviações |
| Atendimento | Resposta retira da fila e nova mensagem do aluno reabre; rótulos e apresentação ainda a validar | Não exigir resolução manual extra; não construir chat genérico ou automações de atendimento |
| Ajustes e alternativas | Criação pela conversa/área do aluno, dois estados e conclusão seletiva na publicação já definidos. Detalhar configuração, execução parcial, sincronização e caso que não será executado | Sem gerenciador genérico de tarefas nem equivalência automática de exercícios |
| Medição de uso | O que conta como sessão realizada, período da meta semanal e indicadores do painel | Mostrar o que é conhecido; preservar pendências offline e registros incompletos |
| Acesso | Forma de convite, revogação/troca de personal e limites dos dados compartilhados | Revalidar propostas originais; não confundir convite com criação de senha por terceiro |

Peso autorrelatado como hábito apareceu na SPEC original, mas sua prioridade no piloto não foi confirmada nas decisões recentes. Não confundir esse registro com peso medido na avaliação profissional.

## 3. Depois da validação do núcleo

- Registro de água e ranking/indicadores de hábitos; resolver a regra diária versus semanal antes de criar pontuação conjunta.
- IA para acelerar a montagem de treino, sempre com revisão profissional; IA para sugerir respostas no tom do personal é oportunidade distinta, sem envio automático aprovado.
- Montagem/consulta nutricional, com alternativas explicitamente prescritas; sem dieta automática presumida.
- Upload de vídeos autorais, áudio/anexos de atendimento, push e WhatsApp, sujeitos à necessidade e custo.
- Métodos adicionais como cluster/rest-pause; recursos avançados de periodização e análise, se necessários.
- Cobrança recorrente do SaaS aos personais e área administrativa (cadastros, números e pagamentos). Controle de pagamentos aluno→personal continua sem inclusão decidida.
- Entrada independente do aluno e busca de profissionais; não pressupor marketplace.

Ideia de acompanhamento mínimo de três meses permanece em avaliação, separada de obrigação financeira, expiração automática ou fidelização no piloto. Hospedagem, gateway, Terraform e pipelines continuam adiados. Direção API C# permanece registrada, sem exigir decisões de infraestrutura nesta revisão de produto.

## 4. Jornada a validar, sem ordem de implementação definida

1. Fundador convida personal; personal convida aluno.
2. Personal avalia aluno e prepara exercícios/demonstrações necessários.
3. Monta ou copia prescrição, adapta, revisa e publica.
4. Aluno recebe aviso, sincroniza a ficha e escolhe uma sessão.
5. Consulta instruções, executa, registra, lida com impedimentos e encerra com revisão rápida.
6. Registros chegam ao personal após sincronização; pedido explícito de ajuda entra na fila.
7. Personal consulta atividade, responde e ajusta prescrição quando necessário.
8. Nova avaliação permite ao aluno e ao personal consultar evolução.

Água não entra no primeiro piloto. Não condicionar o encerramento do treino ao preenchimento de avaliação extensa.

## 5. Evidências para decidir se a versão funciona

Hipótese de interface aceita para teste (D44): blocos flexíveis na ficha, começando com um bloco e adicionando outros conforme necessidade, sem divisões fixas obrigatórias. Aluno acompanha sequência com títulos discretos e sem ação extra entre blocos; métodos agrupados ficam dentro deles. Comparar com lista única com função por exercício, observando esforço de montagem do personal e compreensão/continuidade do aluno separadamente, também em ficha simples. Ainda não há feedback de testes nem formato vencedor validado.

Propostas de avaliação, ainda sem metas numéricas aprovadas:

- Pendência futura confirmada (D44): planejar teste A/B de blocos flexíveis versus lista única com função por exercício quando começarem os testes com convidados; desenho e critérios ainda abertos. Não iniciar experimento nesta etapa de discovery.

- Personal consegue preparar/publicar uma ficha e reaproveitá-la sem depender da IA? Observar tempo e dificuldades.
- Aluno encontra a orientação aplicável sem perguntar como interpretar a ficha?
- Registro de carga exige menos esforço do que a planilha? Observar esquecimentos; não usar apenas quantidade de cliques como prova.
- Sessão previamente baixada sobrevive a falta de rede e reabertura do app sem perda/duplicação?
- Personal entende o que foi feito, substituído e não informado?
- Dúvidas com contexto são resolvidas na fila? Verificar se ainda exigem WhatsApp e por quê.
- Avaliações são úteis para acompanhar evolução sem criar coleta desnecessária?

Um relato pessoal e as falas de Alex orientam as hipóteses, mas não demonstram demanda geral ou superioridade ao MFIT. Testar com os convidados e registrar observações antes de ampliar o produto.

## Próxima decisão proposta

Teste de mesa do aluno percorrido até atendimento, ajuste e escolha de alternativa; montagem pelo personal avançou até prévia e descanso padrão, identificado como tal no editor (D61). Usuário solicitou discutir lacunas e pequenas entregas integradas (18/10/2026). Próximo passo: planejar recorte, aceite e ambiente da primeira entrega, sem implementação autorizada. Pendências do piloto continuam válidas; não é necessário fechá-las todas para planejar o primeiro incremento. Estado e retomada em `CONTEXT.md`.
