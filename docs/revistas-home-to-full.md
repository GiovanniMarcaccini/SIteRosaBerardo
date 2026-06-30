# Documentação: Revistas/Imprensa Home → Página Completa

## 1. ESTRUTURA FINAL DA SECTION NA HOME

### Localização atual:
- **Arquivo**: `site/pages/indexvn.html`
- **Seção**: `#section-imprensa` (linhas 607-691)
- **Wrapper**: Será criado `<section id="revistas-home" class="rb-revistas-area">`

### Estrutura final na home:

```html
<section id="revistas-home" class="rb-revistas-area">
  <!-- 1. CARROSSEL MODESTO (novo) -->
  <div class="homepage-14-container">
    <div class="homepage-14-slider style-1">
      <div class="swiper-container" data-speed="1000" data-parallax="1">
        <!-- 3 slides com capas de revistas -->
      </div>
    </div>
  </div>
  
  <!-- 2. TÍTULO DA SEÇÃO (mantido) -->
  <div class="container">
    <div class="row margin-lg-50t margin-lg-70b margin-xs-50b">
      <!-- Headings: "IMPrensa" / "Rosa Berardo na Mídia" -->
    </div>
  </div>
  
  <!-- 3. 3 CARDS ATUAIS (mantidos) -->
  <div class="container">
    <div class="rb-posts-grid">
      <!-- 3 cards de imprensa existentes -->
    </div>
  </div>
  
  <!-- 4. BOTÃO (novo) -->
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <a href="./revistas.html" class="button type-3">VER REVISTAS COMPLETAS</a>
      </div>
    </div>
  </div>
</section>
```

---

## 2. TRECHOS DO INDEX2.3 REAPROVEITADOS NA HOME

### Carrossel Swiper (linhas 317-384 do index2.3.html):
- **Estrutura HTML**: 
  - `.homepage-14-container`
  - `.homepage-14-slider.style-1`
  - `.swiper-container` com `data-speed="1000" data-parallax="1"`
  - `.swiper-wrapper` com `.swiper-slide`
  - Botões de navegação: `.swiper-button-prev` e `.swiper-button-next`
  - Paginação mobile: `.swiper-pagination.visible-xs`
  - Scroll button: `.scroll-button.style-3.hidden-xs`

- **Conteúdo dos slides**:
  - Background image: `style="background-image: url(...)"`
  - Título: `.slide-title.h2` com `data-swiper-parallax="-800"`
  - Descrição: `.slide-description.simple-article.large.grey` com `data-swiper-parallax="-400"`
  - Botão: `.button.type-3.grey` com `data-swiper-parallax="-300"`

- **Adaptações para home**:
  - Mostrar apenas 3 slides (as 3 primeiras revistas)
  - Usar capas das revistas: `../assets/img/fotos-para-o-site/revistas/capa1.jpg`, `capa2.jpg`, `capa3.jpg`
  - Títulos adaptados para nomes das revistas (ou placeholder se não houver)
  - Links dos botões podem apontar para PDFs ou para `revistas.html#revista-1`

---

## 3. TRECHOS DO INDEX2.3 REAPROVEITADOS NA PÁGINA FULL

### Estrutura completa (index2.3.html):

#### A) Carrossel (linhas 317-384):
- **Reaproveitado integralmente** na página full
- Todos os 6 slides (ou quantos revistas existirem)
- Mesma estrutura HTML e classes

#### B) Blocos de Portfolio Preview (linhas 391-444):
- **Estrutura**: `.homepage-portfolio-preview.mouseover`
- **Conteúdo**:
  - `.image.full-size` com `style="background-image: url(...)"`
  - `.mouseover-helper-frame`
  - `.text.h2.small.light` com título
- **Adaptação**: Usar capas das revistas e links para PDFs

#### C) Seção de Serviços (linhas 448-502):
- **NÃO será reaproveitada** - não faz sentido para revistas
- Será removida ou substituída por conteúdo relevante

---

## 4. LISTA DE CSS/JS NECESSÁRIOS

### CSS (já existente no projeto):
- ✅ `bootstrap.min.css` - já linkado
- ✅ `bootstrap.extension.css` - já linkado
- ✅ `font-awesome.min.css` - já linkado
- ✅ `style.css` - já linkado (contém estilos `.homepage-14-slider`, `.swiper-container`, etc.)
- ✅ `swiper.css` - já linkado
- ⚠️ **CSS novo (se necessário)**: `revistas-modesto.css` - apenas se precisar de ajustes específicos escopados

### JavaScript (já existente no projeto):
- ✅ `jquery-2.1.4.min.js` - já linkado
- ✅ `swiper.jquery.min.js` - já linkado (necessário para o carrossel)
- ✅ `jquery.mousewheel.min.js` - já linkado
- ✅ `global.js` - já linkado (contém inicialização do Swiper)
- ⚠️ **JS novo (se necessário)**: `revistas-modesto.js` - apenas se precisar de inicialização específica isolada

### Dependências do Swiper:
- O carrossel usa **Swiper.js** que já está no projeto
- Inicialização automática via `global.js` quando encontra `.swiper-container`
- **Não precisa de JS adicional** se o `global.js` já inicializa Swiper

---

## 5. LISTA DE AJUSTES DE PATHS

### No template original (`index2.3.html`):
- `css/bootstrap.min.css` → `../assets/css/bootstrap.min.css`
- `css/bootstrap.extension.css` → `../assets/css/bootstrap.extension.css`
- `css/font-awesome.min.css` → `../assets/css/font-awesome.min.css`
- `css/style.css` → `../assets/css/style.css`
- `css/swiper.css` → `../assets/css/swiper.css`
- `img/logo.png` → `../assets/img/logo.png`
- `img/background-43.jpg` → `../assets/img/fotos-para-o-site/revistas/capa1.jpg`
- `img/background-44.jpg` → `../assets/img/fotos-para-o-site/revistas/capa2.jpg`
- `img/background-45.jpg` → `../assets/img/fotos-para-o-site/revistas/capa3.jpg`
- `img/background-46.jpg` → `../assets/img/fotos-para-o-site/revistas/capa4.jpg`
- `img/background-47.jpg` → `../assets/img/fotos-para-o-site/revistas/capa5.jpg`
- `img/background-48.jpg` → `../assets/img/fotos-para-o-site/revistas/capa6.jpg`
- `js/jquery-2.1.4.min.js` → `../assets/js/jquery-2.1.4.min.js`
- `js/swiper.jquery.min.js` → `../assets/js/swiper.jquery.min.js`
- `js/jquery.mousewheel.min.js` → `../assets/js/jquery.mousewheel.min.js`
- `js/global.js` → `../assets/js/global.js`

### Links internos:
- Links de botões no carrossel: `#` → `./revistas.html` ou `../assets/img/fotos-para-o-site/revistas/revistaX.pdf`
- Links dos blocos portfolio preview: `#` → `../assets/img/fotos-para-o-site/revistas/revistaX.pdf`

---

## 6. RISCOS E COMO FORAM EVITADOS

### JavaScript:

#### ✅ Risco: Conflito de inicialização do Swiper
- **Causa**: Se `global.js` já inicializa Swiper automaticamente, pode haver duplicação
- **Solução**: 
  - Verificar se `global.js` já inicializa Swiper via seletor `.swiper-container`
  - Se sim, não criar inicialização adicional
  - Se não, criar inicialização isolada apenas para `.rb-revistas-area .swiper-container`

#### ✅ Risco: jQuery duplicado
- **Causa**: Template pode tentar carregar jQuery novamente
- **Solução**: Não duplicar - usar jQuery já existente no projeto

#### ✅ Risco: Swiper não inicializa na home
- **Causa**: Swiper pode não estar sendo inicializado corretamente
- **Solução**: 
  - Verificar se `global.js` já inicializa Swiper
  - Se necessário, criar inicialização específica em `revistas-modesto.js` apenas para o container `.rb-revistas-area`

### CSS:

#### ✅ Risco: Estilos do Modesto conflitando com estilos existentes
- **Causa**: Classes como `.homepage-14-slider` podem afetar outros elementos
- **Solução**: 
  - Escopar tudo dentro de `.rb-revistas-area`
  - Criar `revistas-modesto.css` com seletores escopados:
    ```css
    .rb-revistas-area .homepage-14-slider { ... }
    .rb-revistas-area .swiper-container { ... }
    ```

#### ✅ Risco: Fonts diferentes
- **Causa**: Template usa `fonts-7`, projeto usa `fonts-1`
- **Solução**: Não alterar classe `fonts-1` do body - manter consistência

### Estrutura:

#### ✅ Risco: Header/Footer do Modesto quebrando layout
- **Causa**: Copiar header/footer do template pode quebrar navegação
- **Solução**: 
  - **NÃO copiar** header/footer do template
  - Reutilizar header/footer do projeto atual (via `partials.js` ou estrutura existente)

#### ✅ Risco: Overlay menu do Modesto
- **Causa**: Template tem overlay complexo que pode conflitar
- **Solução**: **NÃO copiar** overlay - usar header padrão do projeto

### Performance:

#### ✅ Risco: Home carregando estrutura pesada
- **Causa**: Carregar todo o conteúdo do index2.3 na home
- **Solução**: 
  - Carregar apenas o carrossel (3 slides) na home
  - Resto do conteúdo apenas em `revistas.html`

#### ✅ Risco: Imagens grandes no carrossel
- **Causa**: Capas das revistas podem ser pesadas
- **Solução**: 
  - Usar imagens já otimizadas
  - Considerar lazy loading se necessário (mas Swiper já faz isso)

---

## 7. DADOS DAS REVISTAS

### Revistas disponíveis:
1. **Revista 1**: `capa1.jpg` → `Revista1.pdf`
2. **Revista 2**: `capa2.jpg` → `revista2.pdf`
3. **Revista 3**: `capa3.jpg` → `revista3.pdf`
4. **Revista 4**: `capa4.jpg` → `revista4.pdf`
5. **Revista 5**: `capa5.jpg` → `revista5.pdf`
6. **Revista 6**: `capa6.jpg` → `revista6.pdf`

### Paths:
- **Imagens**: `../assets/img/fotos-para-o-site/revistas/capaX.jpg`
- **PDFs**: `../assets/img/fotos-para-o-site/revistas/revistaX.pdf` ou `Revista1.pdf`

---

## 8. CHECKLIST DE IMPLEMENTAÇÃO

### Home (`indexvn.html`):
- [ ] Envolver seção de Imprensa em `<section id="revistas-home" class="rb-revistas-area">`
- [ ] Inserir carrossel Modesto no início da seção (3 slides)
- [ ] Adaptar slides com capas das revistas (capa1, capa2, capa3)
- [ ] Manter título da seção ("IMPrensa")
- [ ] Manter 3 cards atuais de imprensa
- [ ] Substituir botão "VER TODOS" por "VER REVISTAS COMPLETAS"
- [ ] Atualizar link do botão para `./revistas.html`
- [ ] Verificar que carrossel funciona (Swiper inicializa)
- [ ] Verificar que não quebrou outras sections

### Página `revistas.html`:
- [ ] Criar estrutura base (head, body, header, footer)
- [ ] Adaptar carrossel completo (6 slides ou todos disponíveis)
- [ ] Adaptar blocos portfolio preview com todas as revistas
- [ ] Corrigir todos os paths (CSS, JS, imagens)
- [ ] Remover seção de serviços (ou adaptar)
- [ ] Garantir responsividade
- [ ] Testar que Swiper funciona
- [ ] Validar que não há erros no console

### CSS/JS (se necessário):
- [ ] Criar `revistas-modesto.css` apenas se precisar de ajustes
- [ ] Escopar todos os estilos dentro de `.rb-revistas-area`
- [ ] Criar `revistas-modesto.js` apenas se precisar de inicialização específica
- [ ] Verificar que não há conflitos com CSS/JS existentes

---

## 9. OBSERVAÇÕES FINAIS

- **Carrossel na home**: Será uma versão "light" com apenas 3 slides para não pesar a home
- **Página completa**: Terá todos os slides e blocos de portfolio preview
- **Swiper.js**: Já existe no projeto - não precisa adicionar biblioteca nova
- **Inicialização**: Verificar se `global.js` já inicializa Swiper automaticamente
- **Header/Footer**: Sempre reutilizar do projeto atual, nunca copiar do template
- **Overlay menu**: Não copiar - usar header padrão do projeto

