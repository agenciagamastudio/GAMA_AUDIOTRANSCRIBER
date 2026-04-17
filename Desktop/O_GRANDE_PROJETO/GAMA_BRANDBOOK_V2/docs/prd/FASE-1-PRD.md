---
title: FASE 1 — Logo System & Favicon — PRD
type: Product Requirements Document
phase: 1/6
status: APROVADO
date: 2026-04-17
source: FASE-1-BRIEF.md
---

# PRD: Logo System & Favicon

## 1. Problema

**Situação Atual:**
- Logo do GAMA existe apenas em 1 variação (primária)
- Favicon não existe — aba do navegador (browser tab) não mostra logo
- Identidade visual é invisível nos primeiros contatos do usuário
- Impacta credibilidade e profissionalismo

**Dor do Usuário:**
- Não há visual identitário na aba (confunde com outros sites)
- Marcas rivais têm favicon (Stripe, GitHub, Figma) — padrão de indústria
- Sem variações de logo, uso em diferentes contextos fica inconsistente

**Impacto Negativo:**
- Menos profissional
- Difícil memorização
- Inconsistência visual em diferentes aplicações

---

## 2. Solução Proposta

### Componente 1: 4 Variações de Logo
**Objetivo:** Ter logo em diferentes contextos (claro, escuro, preto, apenas ícone)

| Variação | Uso | Formato |
|----------|-----|---------|
| **Primária** | Landing, hero, normal | SVG + PNG |
| **Negativa** | Sobre fundo escuro | SVG + PNG |
| **Monocromática** | Impressão B&W | SVG + PNG |
| **Ícone Only** | Favicon, app icon | SVG + PNG |

### Componente 2: Favicon em 5 Tamanhos
**Objetivo:** Logo visível na aba do navegador em todos contextos

| Tamanho | Uso | Resolução |
|---------|-----|-----------|
| Favicon Browser | Chrome, Firefox, Safari | 16x16, 32x32 |
| Apple Touch Icon | iOS home screen | 180x180 |
| Android Chrome | Android home screen | 192x192 |
| Android Large | Android splash screen | 512x512 |

### Componente 3: Página `/brand/logo-system`
**Objetivo:** Documentação educativa sobre uso correto de logo

Seções:
- [ ] Apresentação das 4 variações
- [ ] Clear space rules com exemplos visuais
- [ ] Tamanhos mínimos recomendados
- [ ] O que NÃO fazer (erros comuns)
- [ ] Manifest.json metadata

### Componente 4: Integração Técnica
**Objetivo:** Favicon carregado automaticamente em todas as páginas

- [ ] Favicon links em `layout.tsx` (head)
- [ ] Manifest.json em `public/`
- [ ] Logo SVG em `public/logos/`

---

## 3. Requisitos Funcionais

### RF-1: Logo Primária em SVG
- **Descrição:** Logo versão primária em formato SVG (escalável)
- **Localização:** `public/logos/logo-primary.svg`
- **Critério:** Escala sem perda de qualidade em qualquer resolução
- **AC:** `<svg>` válido, cores usando variables Tailwind

### RF-2: Logo Negativa em SVG
- **Descrição:** Logo versão negativa (branco em fundo escuro)
- **Localização:** `public/logos/logo-negative.svg`
- **Critério:** Legível com contrast ratio >= 4.5:1
- **AC:** Passa WCAG AA contrast check

### RF-3: Logo Monocromática em SVG
- **Descrição:** Logo em preto puro (monocromática)
- **Localização:** `public/logos/logo-monochrome.svg`
- **Critério:** Funciona em impressão B&W
- **AC:** #000000 (preto puro), sem cores

### RF-4: Logo Ícone Only em SVG
- **Descrição:** Apenas o ícone/marca sem texto
- **Localização:** `public/logos/logo-icon.svg`
- **Critério:** Reconhecível em 16x16px
- **AC:** Testado visual em dev tools zoom

### RF-5: Favicon 16x16
- **Descrição:** Favicon pequeno para browser tab
- **Localização:** `public/favicon.ico` (contém múltiplos tamanhos)
- **Critério:** Legível em tamanho reduzido
- **AC:** Aparece na aba do navegador (Chrome/Firefox/Safari)

### RF-6: Favicon 32x32
- **Descrição:** Favicon em resolução dupla
- **Localização:** `public/favicon-32x32.png`
- **Critério:** Nitidez em displays modernas
- **AC:** Não pixelado em devices Retina

### RF-7: Apple Touch Icon 180x180
- **Descrição:** Ícone para home screen iOS/iPad
- **Localização:** `public/apple-touch-icon.png`
- **Critério:** Preenchimento de borda com espaço seguro
- **AC:** Appears no home screen de devices iOS

### RF-8: Android Chrome 192x192
- **Descrição:** Ícone para home screen Android
- **Localização:** `public/android-chrome-192x192.png`
- **Critério:** Segue Material Design guidelines
- **AC:** Readable em 1/3 densidade de pixels

### RF-9: Android Chrome 512x512
- **Descrição:** Ícone para Android splash screen
- **Localização:** `public/android-chrome-512x512.png`
- **Critério:** Funciona como splash quando app carrega
- **AC:** Exibido durante carregamento em devices Android

### RF-10: Manifest.json
- **Descrição:** Metadata para instalação como PWA
- **Localização:** `public/manifest.json`
- **Critério:** Válido conforme Web App Manifest spec
- **AC:** Chrome DevTools valida sem erros

### RF-11: Favicon Link em Layout
- **Descrição:** Head tags apontando para favicon files
- **Localização:** `gama-ds-platform/src/app/layout.tsx`
- **Critério:** Todas as variantes de device suportadas
- **AC:**
  ```html
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.json">
  ```

### RF-12: Página Logo System
- **Descrição:** Página interativa mostrando todas as variações
- **Localização:** `src/app/brand/logo-system/page.tsx`
- **Critério:** Componentes reutilizáveis do Brandbook
- **AC:** Carrega em < 1s, responsive em mobile

### RF-13: Clear Space Documentation
- **Descrição:** Exemplos visuais de espaçamento mínimo ao redor de logo
- **Critério:** Ao menos 3 exemplos (correto/incorreto)
- **AC:** Imagens com medidas em pixels + percentual

### RF-14: Minimum Size Guidelines
- **Descrição:** Documentação do tamanho mínimo legível
- **Critério:** Tamanho mínimo 48px em contexto digital
- **AC:** Exemplo visual mostrando threshold

---

## 4. Requisitos Não-Funcionais

### RNF-1: Performance
- Favicon carrega em < 50ms
- Page `/brand/logo-system` carrega em < 1s
- Nenhum impacto em First Contentful Paint (FCP)

### RNF-2: Acessibilidade (WCAG AA)
- Logo com alt-text descritivo em todas imagens
- Contrast ratio >= 4.5:1 para textos com logo
- Imagens decorativas marcadas como `aria-hidden="true"`

### RNF-3: Compatibilidade
- Funciona em: Chrome, Firefox, Safari, Edge (versões recentes)
- iOS 14+ e Android 11+ para home screen icons
- SVG suportado em todos browsers modernos

### RNF-4: Responsividade
- Logo escala bem em mobile (320px) até 4K (2560px)
- Favicon legível em 16px até dispositivos Retina
- Page layout responsive até 280px de largura

### RNF-5: Segurança
- Nenhum script executável em imagens
- SVG validado contra XSS (sem `<script>`, `<event>`)
- Manifest.json validado contra injections

### RNF-6: SEO
- Alt-text em imagens com keywords ("GAMA Logo", "Brandbook")
- Open Graph metadata para sharing (og:image com logo)
- Structured data (Schema.org) se aplicável

---

## 5. Critério de Sucesso

✅ **Todos os seguintes itens devem estar completos:**

1. [ ] 4 arquivos SVG de logo existem em `public/logos/`
2. [ ] 5 arquivos PNG de favicon existem em `public/`
3. [ ] `manifest.json` válido em `public/`
4. [ ] Favicon aparece na aba do navegador em todos 3 browsers (Chrome, Firefox, Safari)
5. [ ] Página `/brand/logo-system` carrega sem erros no dev server
6. [ ] Clear space rules documentadas com exemplos visuais
7. [ ] Mínimo 3 erros comuns de uso listados ("O QUE NÃO FAZER")
8. [ ] Alt-text presentes em todas imagens
9. [ ] Layout page é responsive (teste em 3 breakpoints: 320px, 768px, 1024px)
10. [ ] Nenhum erro de console ao carregar página
11. [ ] Navigation inclui link para `/brand/logo-system`
12. [ ] Tests passam: `npm run lint`, `npm run typecheck` sem warnings

---

## 6. Escopo

### IN (Incluído)
- ✅ Gerar/criar 4 variações de logo em SVG/PNG
- ✅ Gerar favicon em 5 tamanhos
- ✅ Criar página `/brand/logo-system` com documentação
- ✅ Atualizar `layout.tsx` com favicon links
- ✅ Criar `manifest.json`
- ✅ Atualizar navigation sidebar
- ✅ Testes em browsers (manual)

### OUT (Explicitamente Excluído)
- ❌ Redesenhar/modificar logo existente (apenas usar em variações)
- ❌ Animações de logo (scope futuro)
- ❌ Animações de spinner usando logo
- ❌ PWA installation prompts (apenas foundational files)
- ❌ Internacionalizações (logo é agnóstico de idioma)
- ❌ Brand guidelines PDF (FASE 6)
- ❌ Documentação de aplicações com logo (FASE 6)

---

## 7. Dependências

### Pré-requisitos Técnicas
- [ ] Server rodando em port 3008+
- [ ] Logo primária existente em assets ou gerada
- [ ] Acesso a ferramentas: (RealFaviconGenerator OU ffmpeg local)
- [ ] Next.js 14 + TypeScript + Tailwind operacionais

### Pré-requisitos Funcionais
- [ ] Decisão: qual logo usar como "primária" (usar existente?)
- [ ] Decisão: estilo/tom das variações (derivadas automaticamente?)
- [ ] Decisão: publicar como arquivo `.ico` único ou múltiplos `.png`?

### Dependências de Fase
- **Não depende de:** FASE 2-6 (independente)
- **Depende de:** Codebase setup completo (GAMA_BRANDBOOK_V2 rodando)

---

## 8. Riscos & Mitigação

| Risk | Probabilidade | Impacto | Mitigação |
|------|---------------|--------|-----------|
| Logo não renderiza em todos browsers | Média | Baixo | Testar em 3+ browsers antes de commit |
| Favicon não aparece em Safari | Alta (comum) | Médio | Usar manifest.json + apple-touch-icon |
| Clear space rules pouco claras | Média | Médio | Incluir 5+ exemplos visuais com medidas |
| SVG com erros XSS | Baixa | Alto | Validar SVG com OWASP guideline |
| Page lenta no dev mode | Baixa | Baixo | Otimizar SVGs (remove metadata) |

---

## 9. Métricas de Sucesso

| Métrica | Target | Verificação |
|---------|--------|-------------|
| Favicon visibility | 100% | Aparece em aba em 3 browsers |
| Page load time | < 1s | Dev tools Network tab |
| Accessibility score | >= AA | WAVE/Axe DevTools audit |
| Responsiveness | 320px-2560px | Visual inspection em dev mode |
| Documentation completeness | 100% | 5+ exemplos, 3+ erros documentados |

---

## 10. Deliverables

| Deliverable | Formato | Localização |
|-------------|---------|-------------|
| Logo Primária | SVG + PNG | `public/logos/logo-primary.*` |
| Logo Negativa | SVG + PNG | `public/logos/logo-negative.*` |
| Logo Monocromática | SVG + PNG | `public/logos/logo-monochrome.*` |
| Logo Ícone | SVG + PNG | `public/logos/logo-icon.*` |
| Favicon 16x16 | .ico/.png | `public/favicon.ico` |
| Favicon 32x32 | PNG | `public/favicon-32x32.png` |
| Apple Touch Icon | PNG | `public/apple-touch-icon.png` |
| Android 192 | PNG | `public/android-chrome-192x192.png` |
| Android 512 | PNG | `public/android-chrome-512x512.png` |
| Manifest | JSON | `public/manifest.json` |
| Layout Updated | TSX | `src/app/layout.tsx` |
| Logo System Page | TSX + MDX | `src/app/brand/logo-system/page.tsx` |
| Navigation Updated | TS | `src/config/navigation.ts` |

---

## 11. Timeline

| Step | Estimativa | Dependências |
|------|-----------|--------------|
| 1.1 Preparar arquivos logo | 1h | Nenhuma |
| 1.2 Favicon + manifest | 1h | Step 1.1 |
| 1.3 Página de logo system | 1h | Step 1.2 |
| 1.4 Atualizar navigation | 30m | Step 1.3 |
| 1.5 Testes em browsers | 30m | Step 1.4 |
| **TOTAL** | **~4.5h** | **0.5 dia** |

---

## 12. Stakeholders

| Role | Responsabilidade |
|------|-----------------|
| **Dev** | Implementar RF1-RF14, RNF1-RNF6 |
| **Designer** | Validar visual das variações de logo |
| **QA** | Testar em 3+ browsers, validar RNF |
| **Product Owner** | Validar contra critério de sucesso |

---

## 13. Success Criteria (Executive)

✅ **Favicon é visível na aba do navegador de qualquer dispositivo**  
✅ **Logo está documentado com guias visuais claros**  
✅ **Nenhum erro de console ou warnings em produção**  
✅ **Pronto para FASE 2 (Manifesto & Posicionamento)**

---

**Gerado em:** 17 de Abril, 2026  
**Status:** 🟢 PRONTO PARA IMPLEMENTAÇÃO  
**Próximo:** Iniciar Story Development Cycle
