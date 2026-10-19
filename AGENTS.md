# Delta Fit — instruções de continuidade

## Ao começar ou retomar

1. Leia `CONTEXT.md` (estado atual e próximo passo).
2. Leia `FIRST_VERSION.md` (escopo consolidado).
3. Consulte `PRODUCT_DECISIONS.md` para IDs, evidências e detalhes do tema discutido. Leia o trecho relevante, não todos os arquivos indiscriminadamente a cada resposta.
4. `SPEC.md` e `PLANS.md` são documentos iniciais parcialmente superados. Não executar o Master Initialization Prompt, criar código ou assumir seus contratos como finais sem reconciliação e autorização do usuário.
5. Para preparar passagem para outra conversa, consultar `CHAT_PROMPTS.md` (D63). Manter entradas por finalidade e preparar execução específica somente com ficha e recorte definidos; armazenar prompt não é executá-lo ou obter autorização.
6. Em planejamento/implementação técnica, consultar `ARCHITECTURE.md` (D67) e ADRs relevantes quando existirem. Manter direção atual e decisões técnicas registradas, distinguindo plano de estado implementado.

## Limites e forma de colaborar

- Produto continua em discovery. Autorização posterior D74: implementar/configurar/verificar localmente **somente I0-r1** de docs/delivery/I0.md (D69–73), nesta conversa de implementação. Não autoriza deploy, contratação, pipeline, remoto Git ou incrementos seguintes. Estado técnico/evidências em docs/progress.md.
- Usuário quer evolução gradual, com foco em treino. Não voltar a arquitetura/infraestrutura sem necessidade ou solicitação.
- Preferência confirmada (D62): separar conversas por finalidade, mantendo continuidade pelos documentos do projeto. Produto continua sendo refinado durante futuras implementações; escopo de execução depende de autorização própria. DEVELOPMENT_WORKFLOW.md distingue essa confirmação das demais propostas de fluxo.
- Conversar em português, com cenários concretos e perguntas curtas. Não perguntar novamente o que já foi decidido. Distinguir proposta do assistente, relato de uso e decisão confirmada.
- Não criar novos chats, enviar mensagens a terceiros ou delegar trabalho por conta deste documento.
- Fonte de verdade: instrução humana atual; depois decisões confirmadas vigentes. No histórico, confirmação posterior substitui proposta anterior do mesmo tema. Se houver ambiguidade real, expô-la em vez de inventar requisito.
- Carga mantida do último treino não comprova carga confirmada hoje; registro ausente não comprova exercício não realizado.
- Não copiar dados pessoais de avaliações/dietas ou conteúdo integral das planilhas para a memória do projeto. Manter achados de produto e referências já autorizadas.

## Manutenção da memória

- Após decisão relevante, registrar/atualizar em `PRODUCT_DECISIONS.md`, usando IDs estáveis Dxx e distinguindo hipóteses.
- Atualizar `FIRST_VERSION.md` se mudar escopo ou comportamento da primeira versão.
- Atualizar `CONTEXT.md` quando mudar etapa da discussão, próximo passo ou alguma decisão-chave do resumo. Substituir estado antigo, sem criar outra transcrição cronológica.
- Ao encerrar um bloco ou preparar troca de chat, deixar no CONTEXT: posição atual, confirmações recentes, pendências reais e próximo cenário. Não tratar passagem do tempo como autorização.
- Evitar duplicação e crescimento ilimitado: usar referências aos IDs para aprofundamento. Não alterar fatos históricos para ocultar mudanças; sinalizar o que foi substituído.
- Não prometer memória global ou carregamento automático desses arquivos em outras ferramentas. Continuidade depende de acesso à mesma pasta ou de fornecer os documentos ao novo chat.

Estas instruções registram as preferências já expressas pelo usuário e podem ser alteradas por ele.
