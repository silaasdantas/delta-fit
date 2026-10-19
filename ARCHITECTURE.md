# Delta Fit — arquitetura em evolução

Atualizado em 19/10/2026. Estado: base I0-r1 implementada e verificada localmente sob D74; restante é direção planejada. Documentação solicitada pelo fundador (D67). Não autoriza planos antigos ou outros incrementos.

## Objetivo e limites

Manter uma visão atual da arquitetura, seus limites e escolhas pendentes. Evoluir junto aos incrementos sem antecipar toda a infraestrutura ou domínio do piloto. Código e verificações futuras comprovarão o estado implementado; esta direção não é evidência de sistema em funcionamento.

## Direção registrada

| Parte | Direção | Alcance |
| --- | --- | --- |
| Web | Next.js e TypeScript | Primeiro frontend do I0 |
| API | ASP.NET Core e C# | Backend do fluxo integrado; substitui a antiga proposta de toda API em Next.js |
| Banco | PostgreSQL | Persistência do I0, inicialmente local |
| Mobile | Expo/React Native e TypeScript | Incremento posterior, com offline obrigatório antes do piloto |
| Serviços gerenciados | Supabase registrado para PostgreSQL/Auth/Storage | Integração de identidade, RLS e API C# ainda requer definição; não usar automaticamente os contratos antigos |

Fluxo implementado no I0: página web → API C# → PostgreSQL. [ADR-001](docs/architecture/ADR-001.md): navegador chama API diretamente, um único projeto de API organizado por funcionalidade com Minimal APIs, EF Core/Npgsql e migrações explícitas como autoridade única do schema. Next.js não contém API concorrente de negócio. Contrato e verificações em docs/delivery/I0.md.

## Evolução confirmada de ambiente e qualidade

- D64: começar localmente e comprovar funcionamento básico.
- D65: planejar testes automatizados proporcionais; integração real com banco e funcional pela interface verificam o fluxo. Unitários para regras próprias quando aplicáveis, sem arquitetura artificial para criar testes.
- D66: Git e pipeline para homologação após validação local. Provedor, gatilhos, acesso, custos e publicação ainda abertos; confirmar se homologação e teste são o mesmo destino.
- D09/D51: incrementos pequenos, utilidade e facilidade de uso; minimizar dependência de fornecedor sem abstrações genéricas excessivas.

## Decisões necessárias ao I0

Versões, estrutura, conexão/migrações e testes locais concretizados no I0 sob D74; configuração reproduzível em README.md. Git inicial preservado sem commits/remoto. Gateway, Terraform, demais tabelas, identidade e publicação continuam fora do recorte.

## Como manter este documento

- Atualizar o mapa quando houver mudança material confirmada; distinguir planejado, implementado e verificado.
- Registrar decisões técnicas relevantes em docs/architecture/ADR-xxx.md, criadas por demanda. Cada ADR contém contexto, estado (proposto/aceito/substituído), escolha, alternativas, consequências e referências ao incremento/decisões de produto.
- ADRs aceitos não são reescritos para ocultar mudanças: nova decisão indica qual anterior substitui; esta visão aponta para a atual.
- Planos e evidências ficam na ficha da entrega e no progresso, sem duplicar conteúdo integral aqui. Dxx continuam para decisões de produto/colaboração; ADRs explicam escolhas técnicas.
- Conversa técnica registra decisões técnicas confirmadas; mudanças de comportamento de produto precisam ser explicitadas, não presumidas a partir da implementação.

## Referências e estado real

AGENTS.md orienta leitura; CONTEXT.md indica retomada; FIRST_VERSION.md e PRODUCT_DECISIONS.md descrevem produto; docs/delivery/I0.md descreve recorte e fechamento; docs/progress.md registra evidências. SPEC.md e PLANS.md são históricos parcialmente superados, não contratos técnicos vigentes.

ADR-001/D69–73 implementados sob autorização local D74. Em 19/10/2026: 15 xUnit com PostgreSQL real e 5 Playwright com processos reais aprovados, builds/lint/TypeScript aprovados e demonstração com reinícios preservando UUID/volume concluída. Sem suíte unitária artificial. Web/API encerrados após demonstração; retomada pelo README. Não disponibilizado em servidor, sem validação por usuários, deploy, remoto Git ou pipeline. Próximo passo é revisão do I0; demais evoluções exigem autorização própria.
