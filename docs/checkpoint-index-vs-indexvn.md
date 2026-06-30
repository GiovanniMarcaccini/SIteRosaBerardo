# Checkpoint Técnico: index.html vs indexvn.html

## Objetivo
Identificar diferenças estruturais que impedem os efeitos visuais (slider, background, controles) no `indexvn.html` em relação ao `index.html`.

---

## 1. Classes do `<body>`

### index.html (linha 37)
```html
<body class="fonts-1">
```

### indexvn.html (linha 41)
```html
<body class="fonts-1">
```

**Status:** ✅ **IGUAL**

---

## 2. Elementos que o global.js espera encontrar

### 2.1 `.page-height` (global.js linha 44)
**Uso:** `$('.page-height').css({'height':winH, 'min-height':(winH<480)?480:winH});`

- **index.html linha 107:** `<div class="page-height responsive-initial">`
- **indexvn.html linha 111:** `<div class="page-height responsive-initial">`

**Status:** ✅ **IGUAL**

---

### 2.2 `.swiper-container` (global.js linha 113)
**Uso:** `$('.swiper-container').each(function(){...})`

- **index.html linha 119:** `<div class="swiper-container" data-speed="1000" data-center="1" data-slides-per-view="2" data-ini="1" data-pagination-rel="0">`
- **indexvn.html linha 123:** `<div class="swiper-container" data-speed="1000" data-center="1" data-slides-per-view="2" data-ini="1" data-pagination-rel="0">`

**Status:** ✅ **IGUAL**

---

### 2.3 `.homepage-1-backgrounds[data-pagination-rel]` (global.js linha 180)
**Uso:** `$('.homepage-1-backgrounds[data-pagination-rel="'+container.data('pagination-rel')+'"]').length`

- **index.html linha 108:** `<div class="homepage-1-backgrounds full-size" data-pagination-rel="0">`
- **indexvn.html linha 112:** `<div class="homepage-1-backgrounds full-size" data-pagination-rel="0">`

**Status:** ✅ **IGUAL**

---

### 2.4 `.slider-click.left` e `.slider-click.right` (global.js linhas 194, 201)
**Uso:** `$('.slider-click.left').on('click', function(){...})`

- **index.html linha 205:** `<div class="slider-click left" data-pagination-rel="0">`
- **index.html linha 216:** `<div class="slider-click right" data-pagination-rel="0">`
- **indexvn.html linha 209:** `<div class="slider-click left" data-pagination-rel="0">`
- **indexvn.html linha 220:** `<div class="slider-click right" data-pagination-rel="0">`

**Status:** ✅ **IGUAL**

---

### 2.5 `.homepage-1-container` (wrapper principal)
- **index.html linha 113:** `<div class="homepage-1-container">`
- **indexvn.html linha 117:** `<div class="homepage-1-container">`

**Status:** ✅ **IGUAL**

---

### 2.6 `.rotate` (global.js linha 47)
**Uso:** `$('.rotate').each(function(){$(this).css({'width':$(this).parent().height()});});`

- **index.html:** Presente em múltiplos locais (linhas 128, 142, 152, 166, 176, 190)
- **indexvn.html:** Presente em múltiplos locais (linhas 132, 146, 156, 170, 180, 194)

**Status:** ✅ **IGUAL**

---

### 2.7 `#content-block` (wrapper principal)
- **index.html linha 106:** `<div id="content-block">`
- **indexvn.html linha 110:** `<div id="content-block">`

**Status:** ✅ **IGUAL**

---

### 2.8 `.homepage-1-slider` (container do slider)
- **index.html linha 117:** `<div class="homepage-1-slider valign-middle">`
- **index.html linha 202:** `<div class="homepage-1-slider homepage-1-pagination">`
- **indexvn.html linha 121:** `<div class="homepage-1-slider valign-middle">`
- **indexvn.html linha 206:** `<div class="homepage-1-slider homepage-1-pagination">`

**Status:** ✅ **IGUAL**

---

## 3. Resumo Comparativo

### Elementos que EXISTEM no index.html e NÃO existem no indexvn.html
**NENHUM** - Todos os elementos estruturais críticos estão presentes em ambos os arquivos.

### Elementos que existem em ambos
- ✅ `<body class="fonts-1">`
- ✅ `<div id="content-block">`
- ✅ `<div class="page-height responsive-initial">`
- ✅ `<div class="homepage-1-backgrounds full-size" data-pagination-rel="0">`
- ✅ `<div class="homepage-1-container">`
- ✅ `<div class="homepage-1-slider valign-middle">`
- ✅ `<div class="swiper-container" data-speed="1000" data-center="1" data-slides-per-view="2" data-ini="1" data-pagination-rel="0">`
- ✅ `<div class="swiper-wrapper">` com múltiplos `<div class="swiper-slide">`
- ✅ `<div class="homepage-1-slider homepage-1-pagination">`
- ✅ `<div class="slider-click left" data-pagination-rel="0">`
- ✅ `<div class="slider-click right" data-pagination-rel="0">`
- ✅ Múltiplos elementos com classe `.rotate`
- ✅ `<div id="loader-wrapper"></div>`
- ✅ `<div id="site-header"></div>`
- ✅ `<div id="site-footer"></div>`

---

## 4. Hipótese Técnica Objetiva

### Conclusão Estrutural
**A estrutura HTML e classes necessárias para o global.js são IDÊNTICAS em ambos os arquivos.**

Todos os seletores que o `global.js` busca estão presentes:
- `.page-height` ✅
- `.swiper-container` ✅
- `.homepage-1-backgrounds[data-pagination-rel]` ✅
- `.slider-click.left` e `.slider-click.right` ✅
- `.rotate` ✅

### Problema Identificado (NÃO estrutural)
**Os caminhos das imagens no `indexvn.html` estão incorretos.**

- **index.html:** Usa `assets/img/...` (correto para raiz `/site/`)
- **indexvn.html:** Usa `assets/img/...` (INCORRETO - deveria ser `../assets/img/...` porque está em `/pages/`)

**Impacto:**
- As imagens de background (`background-1.jpg`, `background-2.jpg`, `background-3.jpg`) retornam 404
- O CSS `background-image: url(...)` falha silenciosamente
- Os backgrounds não aparecem visualmente
- O JavaScript do swiper pode inicializar, mas os efeitos visuais não funcionam porque as imagens não carregam

**Hipótese:**
O `global.js` inicializa o swiper corretamente, mas os efeitos visuais não aparecem porque:
1. As imagens de background não carregam (404)
2. O CSS não consegue aplicar os backgrounds
3. A função `watchSwiperProgress()` (linha 179) tenta alternar backgrounds, mas como as imagens não existem no caminho correto, o efeito visual não ocorre

---

## 5. Próximos Passos

O problema **NÃO é estrutural**, mas sim de **caminhos de assets**.

Para corrigir, é necessário:
1. Ajustar todos os caminhos de imagens em `indexvn.html` de `assets/img/...` para `../assets/img/...`
2. Isso inclui:
   - Backgrounds do `.homepage-1-backgrounds` (linhas 113-115)
   - Backgrounds dos slides (linhas 139, 163, 187)
   - Thumbnails do overlay (linhas 93-99)

