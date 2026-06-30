# Documentação: Contato Home → Página Completa

## 1. ONDE A SECTION FOI INSERIDA NA HOME

### Localização:
- **Arquivo**: `site/pages/indexvn.html`
- **Posição**: Logo ABAIXO da section de BLOG/Imprensa (após `#revistas-home`)
- **Wrapper**: `<section id="contato-home" class="rb-contato-area">`

### Estrutura na home:
```html
<!-- Após section #revistas-home -->
<section id="contato-home" class="rb-contato-area">
  <!-- Título da seção -->
  <!-- Informações de contato (4 colunas: Address, Phone, Email, Follow Us) -->
  <!-- Botão "IR PARA CONTATO" -> ./contato.html -->
</section>
```

---

## 2. BLOCOS DO CONTACTS1.HTML (MODESTO) USADOS NA HOME

### A) Cabeçalho (linhas 321-327):
- **Estrutura**: `.container` > `.row` > `.col-md-6.col-md-offset-3.text-center`
- **Conteúdo**:
  - Título: `.h2.light.small` com "CONTACT US"
  - Descrição: `.simple-article.large.light.transparent.text-center`
- **Adaptação**: 
  - Título: "CONTATO" ou "ENTRE EM CONTATO"
  - Descrição: Texto sobre como entrar em contato com Rosa Berardo

### B) Informações de Contato (linhas 331-378):
- **Estrutura**: `.row` com 4 colunas `.col-sm-3`
- **Conteúdo de cada coluna**:
  - `.contacts-entry`
  - Título: `.h4.light.small` com `<b>ADDRESS</b>`, `<b>PHONE</b>`, `<b>EMAIL</b>`, `<b>FOLLOW US</b>`
  - Conteúdo: `.simple-article.light.transparent`
- **Adaptação para home**:
  - **ADDRESS**: Placeholder "Cidade - UF" ou "Goiânia - GO"
  - **PHONE**: Placeholder "(00) 00000-0000"
  - **EMAIL**: `contato@dominio.com` (ou email real se existir)
  - **FOLLOW US**: Ícones de redes sociais (Instagram, Facebook, etc.)

### C) Formulário (linhas 382-444):
- **NÃO será incluído na home** - apenas na página completa
- A home terá apenas informações e botão

---

## 3. BLOCOS DO CONTACT.HTML (WISO) USADOS NA PÁGINA FULL

### A) Hero com Formulário (linhas 614-669):
- **Estrutura**: `.container-full` > `.hero` > `.contacts-info-wrap.parallax_info.full-height.over`
- **Conteúdo**:
  - Background image com parallax
  - Título: `.title-main` "Contact me"
  - Texto descritivo
  - Formulário: `.form-wrap.form` com campos:
    - Name (input text)
    - Email (input email)
    - Message (textarea)
    - Submit button
- **Adaptação**:
  - Background: usar imagem do projeto ou placeholder
  - Formulário: manter estrutura, mas `action="#"` (sem backend por enquanto)
  - Validação HTML5 básica

### B) Informações Adicionais (linhas 670-704):
- **Estrutura**: `.contacts-info-wrap.custom_info` > `.additional-content-wrap`
- **Conteúdo**:
  - Texto descritivo (2 colunas)
  - Informações: Address, Phone, Email
- **Adaptação**:
  - Usar placeholders ou dados reais se disponíveis
  - Manter layout 2 colunas

### C) Mapa (linhas 447-452 do contacts1.html):
- **Template Modesto**: Tem Google Maps com `data-lat`, `data-lng`, `data-zoom`
- **Template Wiso**: Não tem mapa visível no código fornecido
- **Decisão**: 
  - **NÃO implementar Google Maps API** (requer chave)
  - Substituir por iframe do Google Maps embed público OU placeholder com botão
  - Documentar essa decisão

---

## 4. LISTA DE CSS/JS ADICIONADOS E POR QUÊ

### CSS (já existente no projeto):
- ✅ `bootstrap.min.css` - já linkado
- ✅ `bootstrap.extension.css` - já linkado
- ✅ `font-awesome.min.css` - já linkado
- ✅ `style.css` - já linkado (contém estilos `.contacts-entry`, `.contact-form`, etc.)
- ⚠️ **CSS novo (se necessário)**: `contato-wiso.css` - apenas se precisar de ajustes específicos escopados

### JavaScript (já existente no projeto):
- ✅ `jquery-2.1.4.min.js` - já linkado
- ✅ `swiper.jquery.min.js` - já linkado
- ✅ `jquery.mousewheel.min.js` - já linkado
- ✅ `global.js` - já linkado
- ⚠️ **JS novo (se necessário)**: `contato-wiso.js` - apenas se precisar de inicialização específica isolada

### Dependências do Modesto (contacts1.html):
- **map.js**: Para Google Maps - **NÃO será usado** (sem API key)
- **contact.form.js**: Para validação/envio do formulário - **NÃO será usado** (form sem backend)

### Dependências do Wiso (contact.html):
- **parallax.js**: Para efeito parallax no hero - **Verificar se já existe no projeto**
- **kenburn.js**: Para efeitos de imagem - **Verificar se já existe no projeto**

---

## 5. AJUSTES DE PATHS REALIZADOS

### No template Modesto (`contacts1.html`):
- `css/bootstrap.min.css` → `../assets/css/bootstrap.min.css`
- `css/bootstrap.extension.css` → `../assets/css/bootstrap.extension.css`
- `css/font-awesome.min.css` → `../assets/css/font-awesome.min.css`
- `css/style.css` → `../assets/css/style.css`
- `css/swiper.css` → `../assets/css/swiper.css`
- `img/logo1.png` → `../assets/img/logo.png`
- `js/jquery-2.1.4.min.js` → `../assets/js/jquery-2.1.4.min.js`
- `js/swiper.jquery.min.js` → `../assets/js/swiper.jquery.min.js`
- `js/jquery.mousewheel.min.js` → `../assets/js/jquery.mousewheel.min.js`
- `js/global.js` → `../assets/js/global.js`
- `js/map.js` → **NÃO será linkado** (sem Google Maps)
- `js/contact.form.js` → **NÃO será linkado** (form sem backend)

### No template Wiso (`contact.html`):
- `css/style.min.css` → `../assets/css/style.css` (ou não linkar se já tiver)
- `css/bootstrap.min.css` → `../assets/css/bootstrap.min.css`
- `css/font-awesome.min.css` → `../assets/css/font-awesome.min.css`
- `css/swiper.css` → `../assets/css/swiper.css`
- `images/christin-hume-505823.jpg` → `../assets/img/fotos-para-o-site/...` (ou placeholder)
- `js/jquery-3.3.1.min.js` → `../assets/js/jquery-2.1.4.min.js` (usar versão existente)
- `js/parallax.js` → **Verificar se existe** ou não linkar
- `js/kenburn.js` → **Verificar se existe** ou não linkar

### Links internos:
- Links de botões: `#` → `./contato.html` (na home)
- Links de email: `mailto:...` → manter formato
- Links de telefone: `tel:...` → manter formato

---

## 6. RISCOS E COMO FORAM EVITADOS

### JavaScript:

#### ✅ Risco: Conflito de versões do jQuery
- **Causa**: Wiso usa jQuery 3.3.1, projeto usa 2.1.4
- **Solução**: Usar jQuery 2.1.4 já existente no projeto. Se houver incompatibilidade, testar e documentar.

#### ✅ Risco: Parallax.js não existe no projeto
- **Causa**: Wiso usa parallax.js para efeito no hero
- **Solução**: 
  - Verificar se `global.js` já tem suporte a parallax
  - Se não, remover efeito parallax ou usar CSS puro
  - Não adicionar biblioteca nova sem necessidade

#### ✅ Risco: Formulário sem backend
- **Causa**: Templates têm scripts de envio de formulário
- **Solução**: 
  - Formulário com `action="#"` e validação HTML5
  - Não linkar `contact.form.js` ou scripts de envio
  - Documentar que backend será implementado depois

### CSS:

#### ✅ Risco: Estilos do Modesto/Wiso conflitando
- **Causa**: Classes como `.contacts-entry`, `.contact-form` podem afetar outros elementos
- **Solução**: 
  - Escopar tudo dentro de `.rb-contato-area` (home) e `.rb-contato-page` (página)
  - Criar `contato-wiso.css` com seletores escopados:
    ```css
    .rb-contato-area .contacts-entry { ... }
    .rb-contato-page .contacts-info-wrap { ... }
    ```

#### ✅ Risco: Fonts diferentes
- **Causa**: Modesto usa `fonts-8`, projeto usa `fonts-1`
- **Solução**: Não alterar classe `fonts-1` do body - manter consistência

### Estrutura:

#### ✅ Risco: Header/Footer do template quebrando layout
- **Causa**: Copiar header/footer do template pode quebrar navegação
- **Solução**: 
  - **NÃO copiar** header/footer dos templates
  - Reutilizar header/footer do projeto atual (via `partials.js` ou estrutura existente)

#### ✅ Risco: Google Maps requer API key
- **Causa**: Templates usam Google Maps que requer chave de API
- **Solução**: 
  - **NÃO implementar Google Maps API**
  - Substituir por:
    - iframe do Google Maps embed público (sem chave) OU
    - Placeholder com imagem e botão "Ver no Google Maps"
  - Documentar essa decisão

### Performance:

#### ✅ Risco: Home carregando estrutura pesada
- **Causa**: Carregar todo o conteúdo do template na home
- **Solução**: 
  - Carregar apenas informações básicas (4 colunas) na home
  - Formulário e hero apenas em `contato.html`

#### ✅ Risco: Parallax pesado
- **Causa**: Efeito parallax pode ser pesado
- **Solução**: 
  - Usar CSS puro se possível
  - Se precisar de JS, verificar se `global.js` já suporta
  - Não adicionar biblioteca parallax nova

---

## 7. DADOS DE CONTATO (PLACEHOLDERS)

### Informações a usar:
- **Email**: `contato@dominio.com` (ou email real se existir no projeto)
- **Telefone**: `(00) 00000-0000` (placeholder)
- **Endereço**: `Cidade - UF` ou `Goiânia - GO` (se tiver certeza)
- **Redes Sociais**: Links placeholder ou reais se existirem

### Formulário:
- Campos: Name, Email, Subject, Message
- Validação: HTML5 (`required`, `type="email"`)
- Action: `#` (sem backend por enquanto)
- Submit: Botão "Enviar" ou "Send"

---

## 8. CHECKLIST DE IMPLEMENTAÇÃO

### Home (`indexvn.html`):
- [ ] Inserir section de contato abaixo da section de blog
- [ ] Criar wrapper `<section id="contato-home" class="rb-contato-area">`
- [ ] Adicionar título "CONTATO" ou "ENTRE EM CONTATO"
- [ ] Adicionar descrição curta
- [ ] Criar 4 colunas com informações (Address, Phone, Email, Follow Us)
- [ ] Adicionar botão "IR PARA CONTATO" -> `./contato.html`
- [ ] Garantir responsividade (4 colunas desktop, 2 tablet, 1 mobile)
- [ ] Verificar que não quebrou outras sections

### Página `contato.html`:
- [ ] Criar estrutura base (head, body, header, footer)
- [ ] Adaptar hero com formulário do Wiso
- [ ] Adaptar informações adicionais
- [ ] Substituir Google Maps por placeholder ou iframe embed
- [ ] Corrigir todos os paths (CSS, JS, imagens)
- [ ] Garantir que formulário funciona (validação HTML5)
- [ ] Garantir responsividade
- [ ] Validar que não há erros no console

### CSS/JS (se necessário):
- [ ] Criar `contato-wiso.css` apenas se precisar de ajustes
- [ ] Escopar todos os estilos dentro de `.rb-contato-area` e `.rb-contato-page`
- [ ] Criar `contato-wiso.js` apenas se precisar de inicialização específica
- [ ] Verificar que não há conflitos com CSS/JS existentes

---

## 9. OBSERVAÇÕES FINAIS

- **Formulário na home**: NÃO será incluído - apenas informações e botão
- **Formulário na página completa**: Será incluído com validação HTML5 básica
- **Google Maps**: Não será implementado (requer API key) - usar placeholder
- **Parallax**: Verificar se `global.js` já suporta antes de adicionar biblioteca nova
- **Header/Footer**: Sempre reutilizar do projeto atual, nunca copiar dos templates
- **Dados de contato**: Usar placeholders claros se não houver dados reais

