# PLANO DE IMPLEMENTAÇÃO - INTEGRAÇÃO WISO → INDEXVN
**Data:** 2026-01-XX  
**Baseado em:** Relatório Técnico de Integração Wiso

---

## OBJETIVO
Completar e corrigir as sections do template Wiso no indexvn.html, adicionando os blocos faltantes e corrigindo paths/imagens.

---

## ESTRATÉGIA ESCOLHIDA: GRID ESTÁTICO

**Decisão:** Usar estrutura Bootstrap/Flexbox ao invés do plugin `the-grid` do Wiso.

**Motivos:**
- Evitar dependência de plugin externo complexo
- Manter compatibilidade com código existente
- Facilita manutenção futura
- Visual e espaçamentos podem ser replicados com CSS

---

## PASSO 1: PREPARAÇÃO DE ASSETS

### 1.1 Imagens Necessárias
- [ ] Verificar se `decor.png` existe em `/site/assets/img/fotos-para-o-site/`
- [ ] Verificar se `stamp-I.png` existe em `/site/assets/img/fotos-para-o-site/`
- [ ] Se não existirem, criar placeholders ou copiar do template Wiso
- [ ] Preparar placeholders para imagens do portfolio (10 imagens no total)
- [ ] Preparar placeholders para imagens dos posts (3 imagens)

### 1.2 CSS Isolado
- [ ] Criar arquivo `/site/assets/css/indexvn-wiso.css`
- [ ] Escopar todo CSS dentro de `.rb-wiso-area`
- [ ] Incluir estilos para:
  - Headings (classic_text, text_link)
  - Color sections
  - Grid estático (substituindo tg-grid)
  - Items do portfolio
  - Posts do blog
  - Separator
  - Botões

---

## PASSO 2: CORRIGIR SECTION FILMOGRAFIA EXISTENTE

### 2.1 Verificar "EXQUISITE ELEGANCE"
- [ ] Confirmar que bloco está completo (linhas 264-281)
- [ ] Corrigir path do ícone: `./images/decor.png` → `../assets/img/fotos-para-o-site/decor.png`

### 2.2 Corrigir Portfolio Grid 1
- [ ] Corrigir todos os paths de imagens:
  - `./images/sweet-ice-cream-photography-113287.jpg` → `../assets/img/...`
  - `./images/bridget-flohe-339785.jpg` → `../assets/img/...`
  - `./images/cameron-stow-243141.jpg` → `../assets/img/...`
  - `./images/natalie-toombs-450098.jpg` → `../assets/img/...`
- [ ] Substituir estrutura `tg-grid-wrapper` por grid Bootstrap estático
- [ ] Manter visual e hover effects

---

## PASSO 3: ADICIONAR "RECENT PROJECTS" + PORTFOLIO MASONRY

### 3.1 Inserir Bloco "RECENT PROJECTS"
- [ ] **Localização:** Após fechamento da section filmografia (após linha 391)
- [ ] Copiar estrutura do Wiso (linhas 712-728)
- [ ] Corrigir path do ícone: `images/decor.png` → `../assets/img/fotos-para-o-site/decor.png`
- [ ] Adaptar classes para funcionar dentro de `.rb-wiso-area`

### 3.2 Inserir Portfolio Masonry "Wiso Portfolio 2"
- [ ] **Localização:** Imediatamente após "RECENT PROJECTS"
- [ ] Copiar estrutura do Wiso (linhas 729-951)
- [ ] Corrigir typo: `conrainer-full` → `container-full`
- [ ] Corrigir todos os paths de imagens (6 imagens)
- [ ] Substituir `tg-grid-wrapper` por grid Bootstrap/Flexbox estático
- [ ] Incluir botão "ALL PROJECTS" (linhas 944-950)

---

## PASSO 4: ADICIONAR SEPARATOR

### 4.1 Inserir Separator
- [ ] **Localização:** Após Portfolio Masonry, antes de "BLOG UPDATED"
- [ ] Copiar estrutura do Wiso (linhas 952-964)
- [ ] Adaptar classes para funcionar dentro de `.rb-wiso-area`

---

## PASSO 5: COMPLETAR SECTION IMPRENSA

### 5.1 Verificar "BLOG UPDATED"
- [ ] Confirmar que bloco está completo (linhas 395-409)
- [ ] Corrigir path do ícone: `images/decor.png` → `../assets/img/fotos-para-o-site/decor.png`

### 5.2 Completar Posts Grid
- [ ] Adicionar 3º post que está faltando (Wiso linha 1047-1070)
- [ ] Corrigir paths das imagens dos 3 posts:
  - `images/averie-woodard-111825-300x200.jpg` → `../assets/img/...`
  - `images/photo-nic-co-uk-nic-133995-300x200.jpg` → `../assets/img/...`
  - `images/sweet-ice-cream-photography-408541-e1525354275131-300x200.jpg` → `../assets/img/...`
- [ ] Substituir `tg-grid-wrapper` por grid Bootstrap estático
- [ ] Manter visual de posts (data, categoria, título)

---

## PASSO 6: CRIAR CSS ISOLADO

### 6.1 Estrutura do CSS
```css
/* Escopo principal */
.rb-wiso-area { ... }

/* Headings */
.rb-wiso-area .headings-wrap { ... }
.rb-wiso-area .headings.classic_text { ... }
.rb-wiso-area .headings.text_link { ... }

/* Color sections */
.rb-wiso-area .color_section { ... }

/* Grid estático (substituindo tg-grid) */
.rb-wiso-area .rb-portfolio-grid { ... }
.rb-wiso-area .rb-portfolio-item { ... }

/* Posts */
.rb-wiso-area .rb-posts-grid { ... }
.rb-wiso-area .rb-post-item { ... }

/* Separator */
.rb-wiso-area .separator { ... }

/* Responsividade */
@media (max-width: 991px) { ... }
@media (max-width: 767px) { ... }
```

### 6.2 Classes de Espaçamento
- [ ] Verificar se `wiso.min.css` contém classes `.margin-lg-*`, `.padding-lg-*`
- [ ] Se não, criar versões escopadas em `indexvn-wiso.css`

---

## PASSO 7: ADICIONAR WRAPPER E LINKAR CSS

### 7.1 Wrapper na indexvn
- [ ] Envolver todas as sections Wiso em:
  ```html
  <section id="wiso-area" class="rb-wiso-area">
    <!-- todas as sections Wiso aqui -->
  </section>
  ```

### 7.2 Linkar CSS
- [ ] Adicionar no `<head>` do indexvn:
  ```html
  <link href="../assets/css/indexvn-wiso.css" rel="stylesheet" type="text/css" />
  ```

---

## PASSO 8: CONVERSÃO DE GRIDS (DETALHAMENTO)

### 8.1 Portfolio Grid 1 (4 itens)
**Estrutura Original (tg-grid):**
```html
<div class="tg-grid-wrapper wiso-portfolio-1">
  <div class="tg-grid-holder tg-layout-grid">
    <article class="tg-item">...</article>
    <!-- 4 artigos -->
  </div>
</div>
```

**Estrutura Nova (Bootstrap):**
```html
<div class="rb-portfolio-grid rb-grid-3col">
  <div class="row">
    <div class="col-md-4 rb-portfolio-item">...</div>
    <div class="col-md-4 rb-portfolio-item">...</div>
    <div class="col-md-4 rb-portfolio-item">...</div>
    <div class="col-md-4 rb-portfolio-item">...</div>
  </div>
</div>
```

### 8.2 Portfolio Masonry (6 itens)
**Estrutura Nova (Bootstrap + CSS):**
```html
<div class="rb-portfolio-masonry">
  <div class="row">
    <div class="col-md-4 rb-masonry-item">...</div>
    <!-- 6 itens com alturas variadas -->
  </div>
</div>
```

### 8.3 Posts Grid (3 itens)
**Estrutura Nova (Bootstrap):**
```html
<div class="rb-posts-grid">
  <div class="row">
    <div class="col-md-4 rb-post-item">...</div>
    <div class="col-md-4 rb-post-item">...</div>
    <div class="col-md-4 rb-post-item">...</div>
  </div>
</div>
```

---

## PASSO 9: CHECKLIST DE VERIFICAÇÃO

### 9.1 Funcionalidade
- [ ] Hero/carrossel continua funcionando
- [ ] Header carrega corretamente
- [ ] Todas as imagens carregam (sem 404)
- [ ] Grids exibem corretamente (sem plugin)
- [ ] Hover effects funcionam
- [ ] Links funcionam (mesmo que sejam `#`)

### 9.2 Visual
- [ ] Espaçamentos corretos (margins/paddings)
- [ ] Tipografia consistente
- [ ] Cores corretas
- [ ] Ícones aparecem

### 9.3 Responsividade
- [ ] Desktop (1200px+): 3 colunas
- [ ] Tablet (768px-1199px): 2-3 colunas
- [ ] Mobile (<768px): 1 coluna
- [ ] Imagens responsivas

### 9.4 Isolamento
- [ ] CSS não afeta outras sections
- [ ] Classes escopadas corretamente
- [ ] Sem conflitos com style.css global

### 9.5 Conteúdo
- [ ] "EXQUISITE ELEGANCE" completo
- [ ] Portfolio Grid 1 com 4 itens
- [ ] "RECENT PROJECTS" presente
- [ ] Portfolio Masonry com 6 itens
- [ ] Separator presente
- [ ] "BLOG UPDATED" completo
- [ ] Posts Grid com 3 itens
- [ ] Footer não foi incluído (correto)

---

## ORDEM DE EXECUÇÃO

1. ✅ Criar relatório técnico (CONCLUÍDO)
2. ✅ Criar plano de implementação (CONCLUÍDO)
3. ⏳ Preparar assets (imagens, CSS)
4. ⏳ Corrigir section filmografia existente
5. ⏳ Adicionar "RECENT PROJECTS" + Portfolio Masonry
6. ⏳ Adicionar separator
7. ⏳ Completar section imprensa
8. ⏳ Criar e linkar CSS isolado
9. ⏳ Testar e ajustar

---

## NOTAS IMPORTANTES

- **NÃO alterar:** Hero, header, footer, scripts existentes
- **NÃO incluir:** Footer do Wiso
- **SEMPRE escopar:** Todo CSS dentro de `.rb-wiso-area`
- **SEMPRE corrigir:** Paths de imagens para `../assets/img/...`
- **TESTAR:** Após cada passo, verificar visual e funcionalidade

---

**FIM DO PLANO DE IMPLEMENTAÇÃO**

