---
title: FASE 1 — Logo System & Favicon
type: Brief
phase: 1/6
status: PRONTO
date: 2026-04-17
---

# BRIEF: Logo System & Favicon

## Objetivo
Implementar logo system completo (4 variações) + favicon em múltiplos tamanhos no Brandbook V2, tornando identidade visual presente em toda a plataforma web.

## Contexto
- GAMA Brandbook V2 está 70% pronto (foundations, components, applications)
- Logo atualmente existe 1 versão apenas (primária)
- Favicon não existe — aba do navegador sem logo
- Impacto visual: marca não está presente onde usuário vê primeiro (browser tab)
- Necessário para: credibilidade, profissionalismo, consistência

## Requisitos Funcionais
- [ ] 4 variações de logo (primária, negativa, monocromática, ícone only)
- [ ] Favicon em 5 tamanhos (16x16, 32x32, 180x180, 192x192, 512x512)
- [ ] Página dedicada `/brand/logo-system` documentando clear space rules
- [ ] Favicon na aba do navegador (browser tab visible)
- [ ] Manifest.json com metadata para app installations

## Requisitos Não-Funcionais
- Performance: sem impacto em load time
- Acessibilidade: alt-text padrão para todas as imagens
- Responsividade: logos adaptar bem em mobile/tablet/desktop
- Compatibilidade: Funcionar em Chrome, Firefox, Safari, Edge

## Escopo
### IN (Incluído)
- Criar/gerar 4 variações de logo em SVG
- Gerar favicon em 5 tamanhos
- Criar página `/brand/logo-system` com documentação
- Atualizar `layout.tsx` com favicon links
- Atualizar navigation para incluir logo system
- Testar em navegadores

### OUT (Excluído)
- Redesenhar logo (usar logo existente apenas em variações)
- Criar brand guidelines PDF (FASE 6)
- Animações de logo (fora de escopo)
- Download page (FASE 6)

## Critério de Sucesso
✅ Favicon aparece na aba do navegador  
✅ 4 variações de logo estão em `/public/logos/`  
✅ Página `/brand/logo-system` carrega sem erros  
✅ Clear space rules documentadas  
✅ Teste em 3+ navegadores passando  
✅ Sem erros de console no dev server  

## Timeline
**Estimado:** 0.5 dia (~4 horas)
- Step 1.1: Preparar arquivos (1h)
- Step 1.2: Favicon + manifest (1h)
- Step 1.3: Página de logo (1h)
- Step 1.4-1.5: Navigation + teste (1h)

## Dependências
- Logo primária existente (já temos em assets/)
- Server rodando em http://localhost:3008
- Acesso a RealFaviconGenerator.net (opcional) ou tool local (ffmpeg)

## Risks
- Logo em formatos errados (não SVG/PNG padrão)
- Favicon não renderizar em todos navegadores (versão antiga do Safari)
- Clear space rules pouco claros (requer exemplos visuais)

## Owner
- Execução: Você (ou @dev se AIOS workflow)
- Validação: @qa antes de merge
