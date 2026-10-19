# Delta Fit — proposta de continuidade entre produto e engenharia

Data: 18/10/2026. Proposta do assistente para revisão do fundador, motivada pela solicitação de manter o refinamento de produto durante futuras implementações. Não autoriza código, setup, deploy, contratação, novos chats ou delegação. Não modifica decisões Dxx vigentes.

Confirmação parcial posterior (D62): fundador prefere separar conversas por finalidade. Essa separação está confirmada; organização detalhada dos registros e ciclo abaixo continuam propostos.

D63: catálogo de prompts criado em CHAT_PROMPTS.md por solicitação do fundador. Usar entradas prontas de produto/planejamento e preparar execução específica por entrega. Solução inicial em Markdown, sem skill necessária neste momento.

## Objetivo

Continuar discutindo e refinando o produto enquanto entregas pequenas são implementadas, preservando distinção entre intenção, plano, comportamento verificado e feedback de usuários. A memória durável pertence aos documentos do projeto; chats são espaços de trabalho que precisam acessar esses registros.

## Organização mínima proposta

| Registro | Função | Situação |
| --- | --- | --- |
| AGENTS.md | Instruções curtas e mapa de leitura | Existente |
| CONTEXT.md | Posição atual, pendências e próximo passo | Existente; futuramente separar resumo de produto e resumo de implementação |
| PRODUCT_DECISIONS.md | Decisões Dxx, evidências e hipóteses | Existente; decidir não significa implementar |
| FIRST_VERSION.md | Comportamento desejado para o piloto | Existente; não representa lista do que está entregue |
| docs/delivery/README.md | Índice dos incrementos e estado de cada um | Criar quando começarmos a organizar as entregas |
| docs/delivery/Ixx.md | Escopo, plano, aceite e evidências de um incremento | Criar por demanda; não preencher todos antecipadamente |
| docs/progress.md | Estado implementado e verificado, limitações e último ponto de retomada | Criar ao iniciar implementação autorizada |
| docs/architecture/ADR-xxx.md | Decisão técnica relevante, alternativas e consequências | Criar somente quando houver escolha material |
| docs/research/TEST-xxx.md | Pergunta de validação, protocolo, observações e conclusão | Criar quando planejar teste concreto; incluir futuro A/B de D44 |

SPEC.md e PLANS.md permanecem históricos parcialmente superados. Reconciliar os trechos necessários ao incremento antes de usá-los; não tratá-los como contratos finais nem executar prompts antigos.

## Duas frentes, com ligação explícita

Produto pode continuar explorando cenários e registrando decisões enquanto engenharia executa um incremento delimitado. Preferência confirmada (D62): conversas separadas por finalidade, com continuidade pelos documentos compartilhados do projeto. Esta conversa segue como espaço de produto; conversas de implementação terão escopo delimitado quando forem solicitadas. Não criar ou enviar mensagens a outros chats sem instrução humana. Separar chats não cria isolamento de arquivos; evitar edições concorrentes do mesmo documento e conferir mudanças antes de registrar nova informação.

Cada incremento aponta para as decisões Dxx aplicáveis. Mudança de produto durante implementação exige avaliar impacto: alteração necessária agora, mudança de escopo a combinar ou trabalho para incremento posterior. Decisão recente não deve expandir silenciosamente tarefa em andamento. Comportamento existente divergente da intenção deve ser registrado como diferença, sem reescrever a decisão para fingir conformidade.

## Ciclo proposto para cada entrega

1. Refinar cenário de produto suficiente para a entrega, sem tentar encerrar todo o discovery.
2. Escrever ficha do incremento e esclarecer dependências que realmente bloqueiam esse recorte.
3. Obter autorização humana para executar esse escopo; estados de planejamento não são autorização automática.
4. Implementar a entrega delimitada e verificar critérios com testes proporcionais e demonstração do fluxo.
5. Revisar diff e comportamento; registrar falhas e o que não foi testado. Teste técnico aprovado não comprova utilidade ou facilidade de uso.
6. Atualizar evidências, documentação afetada e estado de implementação. Quando Git for adotado/configurado, versionar junto código, plano e documentação em mudanças pequenas e revisáveis, com referência ao incremento.
7. Recolher feedback de uso e levar os achados de volta ao discovery, alterando decisões explicitamente quando necessário.

## Ficha enxuta de incremento

- ID, título e estado: proposto / pronto para implementar / em andamento / implementado / verificado. Pronto indica clareza do plano; autorização de execução deve estar explícita à parte. Entrega em servidor e validação com usuários também precisam de evidências próprias.
- Problema e resultado observável para quem usa ou verifica.
- Decisões Dxx e dependências aplicáveis.
- Dentro e fora do recorte, sem retirar requisitos do piloto.
- Critérios de aceite verificáveis, incluindo erro relevante e persistência quando aplicável.
- Plano técnico mínimo, ambiente e dados de teste.
- Autorização: escopo efetivamente autorizado e referência à instrução humana.
- Evidências: verificações executadas, resultados, limitações, arquivos/commit/PR quando existirem.
- Pendências e próximo passo.

I0 em planejamento técnico (D68): cadastrar/listar exercício via frontend → API C# → PostgreSQL; comprovar persistência após recarregar. Local primeiro confirmado em D64 substitui a antiga pendência local versus servidor. Plano/testes em docs/delivery/I0.md e ADR-001 proposto. Sem implementação iniciada.

## Uso com IA

Ao discutir produto: ler continuidade, consultar decisões relevantes, distinguir hipótese de confirmação e registrar mudanças sem iniciar implementação por consequência implícita.

Ao executar entrega autorizada: ler instruções, ficha do incremento, Dxx referenciadas e progresso real; conferir o código existente. Resolver divergências materiais antes de implementar. Trabalhar no recorte, verificar resultado e registrar evidências. Não declarar pronto com base apenas na geração de código.

Ao retomar: usar CONTEXT.md como mapa, depois abrir os registros da frente ativa. Não carregar todos os arquivos indiscriminadamente nem copiar transcrições integrais. Manter resumos substituíveis e referências estáveis. A continuidade entre ferramentas depende de acesso à pasta/repositório ou do fornecimento dos documentos.

## Fontes consultadas

- [OpenAI — Iterating Development Workflows with Codex](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex): orientação de repositório, planos por fase e registros de contexto/evidência; os nomes além de AGENTS.md são convenções adaptáveis.
- [GitHub — Spec-driven development](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/): especificação viva, plano e tarefas com escopos distintos.
- [Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents): continuidade entre sessões por progresso explícito, incrementos e verificações.

Esta estrutura é adaptação proposta para um fundador solo; não afirma existir um processo único adotado por todas as grandes empresas, nem exige instalar ferramentas dessas fontes.
