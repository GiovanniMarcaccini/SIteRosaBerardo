# RELATÓRIO TÉCNICO - INTEGRAÇÃO WISO → INDEXVN
**Data:** 2026-01-XX  
**Objetivo:** Documentar a integração das sections do template Wiso (EXQUISITE ELEGANCE até BLOG) no indexvn.html

---

## ETAPA 1 - MAPA DA INDEXVN ATUAL

### Estrutura Existente (topo → baixo):

1. **HEAD** (linhas 1-36)
   - Meta tags, fonts, CSS links
   - Bootstrap, Font Awesome, header-rb.css, style.css, swiper.css

2. **BODY** (linha 37+)
   - **LOADER** (linha 40): `<div id="loader-wrapper"></div>`
   
3. **CONTENT-BLOCK** (linha 106)
   - **HERO/CARROSSEL** (linhas 107-235):
     - `homepage-1-backgrounds` (backgrounds fixos com blur)
     - `homepage-1-container` (header + slider Swiper)
     - `homepage-1-slider` (carrossel principal)
     - `homepage-1-pagination` (controles do slider)
     - **⚠️ NÃO ALTERAR ESTA SEÇÃO**

4. **SECTION CINEASTA** (linhas 237-260)
   - Bloco "OUR PHILOSOPHY" do Wiso
   - Classes: `wiso-block`, `headings-wrap`, `headings text_link`
   - **⚠️ JÁ EXISTE - NÃO ALTERAR**

5. **SECTION FILMOGRAFIA** (linhas 262-391)
   - Bloco "EXQUISITE ELEGANCE" (linhas 264-281)
   - Portfolio grid do Wiso (linhas 282-390)
   - **⚠️ PARCIALMENTE IMPLEMENTADO - VERIFICAR COMPLETUDE**

6. **SECTION IMPRENSA** (linhas 393-477)
   - Bloco "BLOG UPDATED" (linhas 395-409)
   - Posts grid do Wiso (linhas 410-476)
   - **⚠️ PARCIALMENTE IMPLEMENTADO - VERIFICAR COMPLETUDE**

7. **FOOTER** (linha 479)
   - `<div id="site-footer"></div>` (carregado via JS)

8. **SCRIPTS** (linhas 483-487)
   - jQuery 2.1.4, Swiper, mousewheel, global.js, partials.js

---

## ETAPA 2 - MAPA DO WISO INDEX.HTML

### Blocos Relevantes a Copiar/Adaptar:

#### A) "EXQUISITE ELEGANCE" (Wiso linhas 583-602)
- **Início:** `<section class="color_section">` (linha 583)
- **Fim:** `</section>` (linha 602)
- **Conteúdo:**
  - Container com headings
  - Ícone: `./images/decor.png`
  - Título: "EXQUISITE ELEGANCE"
  - Subtítulo: "Engagements, Weddings, Elopments"
- **Status no indexvn:** ✅ JÁ EXISTE (linhas 264-281)

#### B) Portfolio Grid "Wiso Portfolio 1" (Wiso linhas 603-711)
- **Início:** `<section class="color_section">` (linha 603)
- **Fim:** `</section>` (linha 711)
- **Conteúdo:**
  - Grid wrapper: `tg-grid-wrapper wiso-portfolio-1 portfolio-grid`
  - Grid holder: `tg-grid-holder tg-layout-grid`
  - 4 artigos com imagens (Outdoor, Indoor, Destination, Travel wedding)
- **Status no indexvn:** ✅ JÁ EXISTE (linhas 282-390) mas com paths errados (`./images/`)

#### C) "RECENT PROJECTS" (Wiso linhas 712-728)
- **Início:** `<div class="container">` (linha 712)
- **Fim:** `</div>` (linha 728)
- **Conteúdo:**
  - Headings com ícone decor.png
  - Título: "RECENT PROJECTS"
  - Subtítulo: "Happy moments from happy clients"
- **Status no indexvn:** ❌ NÃO EXISTE

#### D) Portfolio Masonry "Wiso Portfolio 2" (Wiso linhas 729-951)
- **Início:** `<div class="conrainer-full">` (linha 729) - **⚠️ TYPO: "conrainer"**
- **Fim:** `</div>` (linha 951)
- **Conteúdo:**
  - Grid wrapper: `tg-grid-wrapper wiso-portfolio-2 portfolio-masonry`
  - Grid holder: `tg-grid-holder tg-layout-masonry`
  - 6 artigos com imagens e categorias
  - Botão "ALL PROJECTS" (linhas 944-950)
- **Status no indexvn:** ❌ NÃO EXISTE

#### E) Separator (Wiso linhas 952-964)
- **Início:** `<div class="container">` (linha 952)
- **Fim:** `</div>` (linha 964)
- **Conteúdo:**
  - Linha separadora com classes `separator vc_sep_width_90`
- **Status no indexvn:** ❌ NÃO EXISTE

#### F) "BLOG UPDATED" (Wiso linhas 965-979)
- **Início:** `<div class="container">` (linha 965)
- **Fim:** `</div>` (linha 979)
- **Conteúdo:**
  - Headings com ícone decor.png
  - Título: "BLOG UPDATED"
  - Subtítulo: "Our stories from groom and bride"
- **Status no indexvn:** ✅ JÁ EXISTE (linhas 395-409)

#### G) Posts Grid "Wiso Posts 1" (Wiso linhas 980-1076)
- **Início:** `<div class="margin-lg-90b...">` (linha 980)
- **Fim:** `</div>` (linha 1076)
- **Conteúdo:**
  - Grid wrapper: `tg-grid-wrapper wiso-posts-1 portfolio-masonry`
  - Grid holder: `tg-grid-holder tg-layout-masonry`
  - 3 artigos de blog com imagens, datas, categorias
- **Status no indexvn:** ✅ PARCIALMENTE EXISTE (linhas 410-476) mas incompleto (só 2 posts)

---

## ETAPA 3 - DEPENDÊNCIAS

### CSS Necessário:

1. **the-grid.min.css** (Wiso linha 19)
   - Plugin de grid do Wiso
   - **Status:** ❌ NÃO está em `/site/assets/css/`
   - **Ação:** Verificar se existe ou criar alternativa estática

2. **wiso.min.css** (Wiso linha 12)
   - **Status:** ✅ JÁ EXISTE em `/site/assets/css/wiso.min.css`

3. **menu-item-item.css** (Wiso linha 13)
   - **Status:** ✅ JÁ EXISTE em `/site/assets/css/menu-item-item.css`

4. **swiper.css** (Wiso linha 15)
   - **Status:** ✅ JÁ EXISTE em `/site/assets/css/swiper.css`

5. **Classes específicas do Wiso:**
   - `.headings-wrap`, `.headings`, `.classic_text`, `.text_link`
   - `.color_section`
   - `.tg-grid-wrapper`, `.tg-grid-holder`, `.tg-item`
   - `.margin-lg-*`, `.margin-md-*`, `.margin-sm-*`, `.margin-xs-*`
   - `.padding-lg-*`

### JavaScript Necessário:

1. **the-grid.min.js** (Wiso linha 1186)
   - Plugin JavaScript para grids dinâmicos
   - **Status:** ❌ NÃO está em `/site/assets/js/`
   - **⚠️ RISCO CRÍTICO:** Grids não funcionarão sem este plugin

2. **jquery-3.3.1.min.js** (Wiso linha 1174)
   - **Status:** ✅ JÁ EXISTE em `/site/assets/js/jquery-3.3.1.min.js`
   - **Nota:** indexvn usa jQuery 2.1.4 - pode haver conflito

3. **swiper.min.js** (Wiso linha 1182)
   - **Status:** ❌ NÃO está em `/site/assets/js/`
   - **Nota:** indexvn usa `swiper.jquery.min.js` - verificar compatibilidade

4. **Outros scripts do Wiso:**
   - `public.js`, `script.js`, `scripts.js`, `tg_global.js`
   - **Status:** ❌ NÃO estão em `/site/assets/js/`

### Imagens Necessárias:

1. **decor.png** (usado em headings)
   - **Path no Wiso:** `./images/decor.png`
   - **Path correto em indexvn:** `../assets/img/fotos-para-o-site/decor.png` (ou criar pasta específica)

2. **stamp-I.png** (usado em "OUR PHILOSOPHY")
   - **Path no Wiso:** `./images/stamp-I.png`
   - **Path correto em indexvn:** `../assets/img/fotos-para-o-site/stamp-I.png`

3. **Imagens do portfolio** (4 imagens no grid 1, 6 no grid 2)
   - **Paths no Wiso:** `./images/sweet-ice-cream-photography-*.jpg`, etc.
   - **Ação:** Substituir por imagens reais ou usar placeholders

4. **Imagens dos posts** (3 imagens)
   - **Paths no Wiso:** `images/averie-woodard-111825-300x200.jpg`, etc.
   - **Ação:** Substituir por imagens reais ou usar placeholders

---

## ETAPA 4 - RISCOS IDENTIFICADOS

### 🔴 RISCO CRÍTICO 1: Plugin "the-grid" ausente
- **Problema:** Grids do Wiso dependem de `the-grid.min.js` e `the-grid.min.css`
- **Impacto:** Grids não funcionarão (layout quebrado, itens não posicionados)
- **Solução:**
  - Opção A: Copiar `the-grid.min.js` e `the-grid.min.css` do template Wiso
  - Opção B: Criar grid estático com CSS puro (Bootstrap grid ou flexbox)
  - **Recomendação:** Opção B (mais simples, sem dependências)

### 🟡 RISCO MÉDIO 2: Paths de imagens quebrados
- **Problema:** Indexvn está em `/pages/`, então `./images/` não funciona
- **Impacto:** Imagens não carregam
- **Solução:** Converter todos os paths para `../assets/img/...`

### 🟡 RISCO MÉDIO 3: Conflito de jQuery
- **Problema:** Wiso usa jQuery 3.3.1, indexvn usa jQuery 2.1.4
- **Impacto:** Possíveis incompatibilidades de API
- **Solução:** Manter jQuery 2.1.4 (já carregado) ou atualizar para 3.3.1

### 🟡 RISCO MÉDIO 4: Classes CSS do Wiso não aplicadas
- **Problema:** Classes como `.margin-lg-105b`, `.padding-lg-35t` podem não estar definidas
- **Impacto:** Espaçamentos incorretos
- **Solução:** Verificar se `wiso.min.css` contém essas classes ou criar CSS customizado

### 🟢 RISCO BAIXO 5: Seções duplicadas
- **Problema:** Algumas seções já existem parcialmente no indexvn
- **Impacto:** Conteúdo duplicado ou inconsistente
- **Solução:** Verificar e completar seções existentes ao invés de duplicar

---

## ETAPA 5 - CONCLUSÃO DA DOCUMENTAÇÃO

### O que NÃO deve ser alterado:
- ✅ Hero/Carrossel (linhas 107-235)
- ✅ Header (carregado via JS em `#site-header`)
- ✅ Section "OUR PHILOSOPHY" (linhas 237-260)
- ✅ Footer (carregado via JS em `#site-footer`)
- ✅ Scripts existentes (jQuery, Swiper, global.js, partials.js)
- ✅ CSS global (style.css, overrides-indexvn.css)

### O que será copiado/adaptado:

1. **COMPLETAR Section Filmografia:**
   - Verificar se "EXQUISITE ELEGANCE" está completo
   - Corrigir paths das imagens do portfolio grid
   - Garantir que grid funcione (com plugin ou alternativa estática)

2. **ADICIONAR "RECENT PROJECTS" + Portfolio Masonry:**
   - Bloco de título "RECENT PROJECTS" (Wiso linhas 712-728)
   - Portfolio Masonry "Wiso Portfolio 2" (Wiso linhas 729-951)
   - Botão "ALL PROJECTS" (Wiso linhas 944-950)

3. **ADICIONAR Separator:**
   - Linha separadora (Wiso linhas 952-964)

4. **COMPLETAR Section Imprensa:**
   - Verificar se "BLOG UPDATED" está completo
   - Completar posts grid (adicionar 3º post que falta)
   - Corrigir paths das imagens dos posts

### Estratégia de Implementação:

**Opção Recomendada: Grid Estático**
- Substituir `tg-grid-wrapper` por estrutura Bootstrap/Flexbox
- Manter visual e espaçamentos do Wiso
- Evitar dependência do plugin `the-grid`

**Alternativa: Plugin Completo**
- Copiar `the-grid.min.js` e `the-grid.min.css` do template Wiso
- Garantir que jQuery 3.3.1 seja carregado
- Testar compatibilidade com código existente

---

## CHECKLIST PRÉ-IMPLEMENTAÇÃO

- [ ] Decidir estratégia para grids (estático vs plugin)
- [ ] Verificar se `wiso.min.css` contém classes de espaçamento
- [ ] Preparar imagens (decor.png, stamp-I.png, placeholders)
- [ ] Mapear todos os paths de imagens a corrigir
- [ ] Verificar seções existentes para evitar duplicação
- [ ] Criar CSS isolado para área Wiso (rb-wiso-area)
- [ ] Testar responsividade após implementação

---

**FIM DO RELATÓRIO TÉCNICO**

