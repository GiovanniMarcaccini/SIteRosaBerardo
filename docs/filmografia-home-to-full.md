# Documentação: Filmografia Home → Página Completa

## 1. O QUE FOI MANTIDO NA HOME

### Estrutura atual da FILMOGRAFIA na home:
- **Localização**: Linhas 496-665 em `indexvn.html`
- **Cabeçalho**: Mantido (título "FILMOGRAFIA" + subtítulo)
- **Cards mantidos**: Apenas os **3 primeiros cards**:
  1. **Um Sol de Jacaré** (style-1, col-sm-6)
  2. **A TRAVESSIA** (style-2, col-sm-6)
  3. **Romaria do Vão do Moleque** (style-3, col-sm-12 - full width)

### Elementos preservados em cada card:
- Estrutura `async-entry` com `style-1`, `style-2`, `style-3`
- Imagem de background (YouTube thumbnail)
- Título com link para YouTube
- Label "Tipo: [Categoria]"
- Rotate wrapper com "Ano / Duração"
- Efeitos hover (mouseover-helper-frame, mouseover-helper-icon)
- Espaçamentos `empty-space` entre rows

---

## 2. O QUE FOI REMOVIDO DA HOME

### Cards removidos (movidos para `filmografia.html`):
- **Romãozinho** (style-2, col-sm-6) - linha 585-608
- **Meninos Verdes** (style-1, col-sm-6) - linha 610-632
- **Hip Hop** (style-4, col-sm-12) - linha 635-658

### Botão atual:
- Botão "ver todos os filmes" (linha 662) será substituído por "VER FILMOGRAFIA COMPLETA" apontando para `./filmografia.html`

---

## 3. ESTRUTURA FINAL DA SECTION NA HOME

```html
<!-- FILMOGRAFIA -->
<div class="container">
  <!-- Cabeçalho (mantido) -->
  <div class="empty-space col-xs-b55 col-sm-b110"></div>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 text-center">
      <div class="h2 small"><b>FILMOGRAFIA</b></div>
      <div class="empty-space col-xs-b15"></div>
      <div class="simple-article grey">
        Uma coleção de histórias cinematográficas que exploram a condição humana através de narrativas íntimas e visuais marcantes.
      </div>
    </div>
  </div>
  
  <!-- Row 1: 2 cards lado a lado -->
  <div class="empty-space col-xs-b55 col-sm-b110"></div>
  <div class="row">
    <div class="col-sm-6">
      <!-- Card 1: Um Sol de Jacaré (style-1) -->
    </div>
    <div class="col-sm-6">
      <!-- Card 2: A TRAVESSIA (style-2) -->
    </div>
  </div>
  
  <!-- Row 2: 1 card full width -->
  <div class="empty-space col-xs-b55 col-sm-b110"></div>
  <div class="row">
    <div class="col-sm-12">
      <!-- Card 3: Romaria do Vão do Moleque (style-3) -->
    </div>
  </div>
  
  <!-- Botão -->
  <div class="empty-space col-xs-b35"></div>
  <div class="text-center">
    <a href="./filmografia.html" class="button type-3">VER FILMOGRAFIA COMPLETA</a>
  </div>
  <div class="empty-space col-xs-b55 col-sm-b110"></div>
</div>
```

---

## 4. ESTRUTURA DA NOVA PÁGINA `filmografia.html`

### Base: Template `index2.5.html`

### Estrutura completa:

#### HEAD (reutilizar do indexvn.html):
- Meta tags
- Fonts (Lato, Raleway, Droid Serif)
- CSS: bootstrap, font-awesome, style.css, swiper.css, header-rb.css
- **NÃO incluir**: indexvn-wiso.css (específico da home)

#### BODY:
- **Header**: Reutilizar do indexvn.html (type-4 light fixed)
- **Loader**: `<div id="loader-wrapper"></div>`
- **Content Block**: `<div id="content-block">`

#### Conteúdo principal (adaptado do index2.5.html):
- **Banner fixo** (opcional - pode remover se não necessário):
  - `fixed-background` com imagem
  - Título "FILMOGRAFIA" ou similar
  - Botões de navegação lateral (opcional)

- **Container principal**:
  - Cabeçalho: "FILMOGRAFIA" (h2 small)
  - Subtítulo descritivo
  - Grid de filmes com estrutura `async-entry`:
    - Row 1: style-1 + style-2 (2 colunas)
    - Row 2: style-3 (full width)
    - Row 3: style-2 + style-1 (2 colunas)
    - Row 4: style-4 (full width)
    - ... (todos os 9 filmes)

- **Footer**: Reutilizar do indexvn.html (`<div id="site-footer"></div>`)

#### Scripts (reutilizar do indexvn.html):
- jquery-2.1.4.min.js
- swiper.jquery.min.js
- jquery.mousewheel.min.js
- global.js
- partials.js

---

## 5. LISTA DE ASSETS REAPROVEITADOS DO TEMPLATE MODESTO

### CSS (já existente no projeto):
- `bootstrap.min.css` ✓
- `bootstrap.extension.css` ✓
- `font-awesome.min.css` ✓
- `style.css` ✓ (contém estilos `.async-entry`, `.mouseover`, etc.)
- `swiper.css` ✓

### Classes CSS reutilizadas:
- `.async-entry` (style-1, style-2, style-3, style-4)
- `.mouseover` (efeito hover)
- `.mouseover-helper-frame`
- `.mouseover-helper-icon`
- `.label-wrapper`
- `.rotate-wrapper`
- `.empty-space` (spacing utilities)
- `.button.type-3`

### JavaScript (já existente):
- `jquery-2.1.4.min.js` ✓
- `swiper.jquery.min.js` ✓
- `jquery.mousewheel.min.js` ✓
- `global.js` ✓ (contém lógica do Modesto)

### Imagens:
- Thumbnails do YouTube (já em uso)
- Não há imagens locais do template a copiar

---

## 6. LISTA DE AJUSTES DE PATH FEITOS

### No template original (`index2.5.html`):
- `css/bootstrap.min.css` → `../assets/css/bootstrap.min.css`
- `css/bootstrap.extension.css` → `../assets/css/bootstrap.extension.css`
- `css/font-awesome.min.css` → `../assets/css/font-awesome.min.css`
- `css/style.css` → `../assets/css/style.css`
- `css/swiper.css` → `../assets/css/swiper.css`
- `img/logo1.png` → `../assets/img/logo.png` (ou logo do projeto)
- `img/background-73.jpg` → Remover ou usar imagem do projeto
- `img/background-95.jpg` → `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`
- `js/jquery-2.1.4.min.js` → `../assets/js/jquery-2.1.4.min.js`
- `js/swiper.jquery.min.js` → `../assets/js/swiper.jquery.min.js`
- `js/jquery.mousewheel.min.js` → `../assets/js/jquery.mousewheel.min.js`
- `js/global.js` → `../assets/js/global.js`

### Links internos:
- `about1.html` → `./a-cineasta.html` (ou remover)
- `portfolio1.html` → `./indexvn.html#filmografia` (ou remover)
- `contacts1.html` → `./indexvn.html#contato` (ou remover)

---

## 7. RISCOS IDENTIFICADOS

### JavaScript:
- ✅ **jQuery**: Já existe no projeto (mesma versão 2.1.4)
- ✅ **Swiper**: Já existe no projeto
- ✅ **global.js**: Já existe e contém lógica do Modesto
- ⚠️ **Conflitos potenciais**: Nenhum identificado - scripts já estão em uso na home

### CSS:
- ✅ **style.css**: Já contém todos os estilos `.async-entry` necessários
- ✅ **Sem duplicação**: Não será necessário criar CSS novo
- ⚠️ **Fonts**: Template usa `fonts-4`, projeto atual usa `fonts-1` - verificar se há diferenças visuais

### Estrutura:
- ✅ **Header/Footer**: Reutilizar do indexvn.html garante consistência
- ✅ **Loader**: Já existe no projeto
- ⚠️ **Overlay menu**: Template tem overlay complexo - **NÃO copiar**, usar header padrão do projeto

### Performance:
- ✅ **Home leve**: Apenas 3 cards mantidos
- ✅ **Página completa**: Carrega apenas quando necessário
- ⚠️ **Imagens YouTube**: Thumbnails são externas - considerar lazy loading se necessário

---

## 8. FILMES A INCLUIR NA PÁGINA COMPLETA

### Ordenação (mais recente primeiro):
1. **Romaria do Vão do Moleque** (2024) - Documentário - style-3 (já na home)
2. **Um Sol de Jacaré** (2020) - Curta de Ficção - style-1 (já na home)
3. **A TRAVESSIA** (2016) - Curta de Ficção - style-2 (já na home)
4. **Romãozinho** (2020) - Curta de Ficção - style-2
5. **Meninos Verdes** (2019) - Animação - style-1
6. **Hip Hop** (2014) - Documentário - style-4
7. **ABÁ** (2016) - Documentário - style-3 (ou style-4)
8. **A Infância de Aninha** (2012) - Animação - style-1
9. **A Chegada de Aninha** (2024) - Animação - style-2

### Estrutura de layout na página completa:
- Manter alternância visual (2 colunas → full width → 2 colunas → full width)
- Distribuir os 9 filmes de forma equilibrada

---

## 9. CHECKLIST DE IMPLEMENTAÇÃO

### Home (`indexvn.html`):
- [ ] Remover cards 4, 5 e 6 (Romãozinho, Meninos Verdes, Hip Hop)
- [ ] Manter apenas 3 primeiros cards
- [ ] Substituir botão "ver todos os filmes" por "VER FILMOGRAFIA COMPLETA"
- [ ] Atualizar link do botão para `./filmografia.html`
- [ ] Verificar que espaçamentos estão corretos
- [ ] Testar que nenhuma outra section foi afetada

### Página `filmografia.html`:
- [ ] Criar estrutura base (head, body, header, footer)
- [ ] Adaptar conteúdo do index2.5.html
- [ ] Corrigir todos os paths (CSS, JS, imagens)
- [ ] Incluir todos os 9 filmes
- [ ] Manter estrutura `async-entry` com estilos variados
- [ ] Garantir responsividade
- [ ] Testar animações hover
- [ ] Verificar que imagens carregam
- [ ] Validar que não há erros no console

---

## 10. OBSERVAÇÕES FINAIS

- **Banner fixo**: O template index2.5.html tem um banner fixo no topo. Decisão: **manter ou remover?** Por padrão, vou remover para manter a página mais limpa e focada no conteúdo.

- **Overlay menu**: O template tem um menu overlay complexo. **NÃO será copiado** - usar header padrão do projeto.

- **Footer**: Reutilizar o footer do indexvn.html via `partials.js` ou copiar estrutura similar.

- **Título da página**: "FILMOGRAFIA" ou "FILMOGRAFIA COMPLETA" - usar "FILMOGRAFIA" para consistência.

