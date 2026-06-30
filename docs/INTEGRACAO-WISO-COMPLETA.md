# Integração Completa do Template Wiso

## 📋 Objetivo

Integrar **TODO o ecossistema do template Wiso** no projeto Rosa Berardo, garantindo funcionamento 100% idêntico ao template original antes de qualquer adaptação de conteúdo.

## 🗂️ Estrutura de Pastas

Criar a seguinte estrutura dentro do projeto:

```
/site/assets/wiso/
├── css/          (TODOS os arquivos CSS do template)
├── js/           (TODOS os arquivos JavaScript do template)
├── fonts/        (TODOS os arquivos de fontes)
├── images/       (TODAS as imagens do template)
└── audio/        (Arquivos de áudio, se houver)
```

## 📦 Arquivos a Copiar

### 1. CSS (81 arquivos)
**Origem:** `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/css/`  
**Destino:** `site/assets/wiso/css/`

**Arquivos principais necessários:**
- `style.min.css`
- `bootstrap.min.css`
- `font-awesome.min.css`
- `pe-icon-7-stroke.css`
- `jquery.fancybox.min.css`
- `swiper.css`
- `simple-line-icons.css`
- `ionicons.min.css`
- `wiso.min.css`
- `menu-item-item.css`
- `banner_image.min.css`
- `team.min.css`
- `testimonial.min.css`
- `headings.min.css`
- `services.min.css`
- `skills.min.css`
- `line_of_images.min.css`
- `custom.css`
- **E TODOS os outros arquivos CSS da pasta**

### 2. JavaScript (55 arquivos)
**Origem:** `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/js/`  
**Destino:** `site/assets/wiso/js/`

**Arquivos principais necessários:**
- `jquery-3.3.1.min.js`
- `jquery.fitvids.min.js`
- `foxlazy.min.js`
- `countTo.js`
- `skills.js`
- `isotope.pkgd.min.js`
- `lightgallery.min.js`
- `script.js`
- `scripts.js`
- `swiper.min.js`
- **E TODOS os outros arquivos JS da pasta**

### 3. Fonts
**Origem:** `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/fonts/`  
**Destino:** `site/assets/wiso/fonts/`

**Copiar TODOS os arquivos:**
- `fonts.css`
- `ArcaMajora2-Heavy.otf`
- `ArcaMajora2-Heavy.ttf`
- `ArcaMajora3-Bold.otf`
- `ArcaMajora3-Heavy.otf`
- `fontawesome-webfont.*` (todos os formatos)
- `glyphicons-halflings-regular.*` (todos os formatos)
- `ionicons.*` (todos os formatos)
- `Pe-icon-7-stroke.*` (todos os formatos)
- `Simple-Line-Icons-Pro.*` (todos os formatos)
- `lg.*` (todos os formatos)
- `the_grid.*` (todos os formatos)
- `WooCommerce.*` (todos os formatos)
- `star.*` (todos os formatos)
- **E TODOS os outros arquivos de fonte**

### 4. Images (337 arquivos)
**Origem:** `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/images/`  
**Destino:** `site/assets/wiso/images/`

**Copiar TODAS as imagens:**
- `cropped-cropped-fx_favicon-1-1-32x32.png`
- `stamp-I.png`
- `brooke-cagle-193349.jpg`
- `timothy-paul-smith-405497.jpg`
- `petr-ovralov-239614.jpg`
- `sweet-ice-cream-photography-408541-e1525354275131.jpg`
- `team01.jpg`, `team02.jpg`, `team03.jpg`, `team04.jpg`, `team06.jpg`, `team-img-6.jpg`
- `logo_w.png`
- `image.png`, `image_2.png`, `image_3.png`, `image_4.png`, `image-1.png`
- `angelo-lacancellera-471042-unsplash.jpg` (e versão 300x200)
- `jonas-verstuyft-352713-unsplash.jpg` (e versão 300x200)
- `mikayla-herrick-619451-unsplash.jpg` (e versão 300x200)
- `allef-vinicius-346125-unsplash.jpg` (e versão 300x200)
- `benjamin-combs-27619-unsplash.jpg` (e versão 300x200)
- `stock-photo-138439815.jpg` (e versão 300x200)
- **E TODAS as outras 300+ imagens**

### 5. Audio (se houver)
**Origem:** `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/audio/`  
**Destino:** `site/assets/wiso/audio/`

## 📄 Página Base Criada

**Arquivo:** `site/pages/wiso-cineasta.html`

Esta página:
- ✅ Copia o HTML **COMPLETO** do `about.html` do template Wiso
- ✅ Ajusta **TODOS** os paths para `/assets/wiso/...`
- ✅ Mantém **TODA** a estrutura original
- ✅ Usa **TODOS** os CSS e JS do Wiso

## 🔧 Como Copiar os Arquivos

### Opção 1: Copiar Manualmente
1. Abra o explorador de arquivos
2. Navegue até `templates-fonte/02-tpl-wiso/Wiso_html_tf_v.1.0.2/html/`
3. Copie as pastas `css/`, `js/`, `fonts/`, `images/`, `audio/`
4. Cole dentro de `site/assets/wiso/`

### Opção 2: Usar Terminal/CMD
```bash
# No diretório raiz do projeto
xcopy "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\css" "site\assets\wiso\css\" /E /I /Y
xcopy "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\js" "site\assets\wiso\js\" /E /I /Y
xcopy "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\fonts" "site\assets\wiso\fonts\" /E /I /Y
xcopy "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\images" "site\assets\wiso\images\" /E /I /Y
xcopy "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\audio" "site\assets\wiso\audio\" /E /I /Y
```

### Opção 3: PowerShell
```powershell
# No diretório raiz do projeto
Copy-Item -Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\css" -Destination "site\assets\wiso\" -Recurse -Force
Copy-Item -Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\js" -Destination "site\assets\wiso\" -Recurse -Force
Copy-Item -Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\fonts" -Destination "site\assets\wiso\" -Recurse -Force
Copy-Item -Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\images" -Destination "site\assets\wiso\" -Recurse -Force
Copy-Item -Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\audio" -Destination "site\assets\wiso\" -Recurse -Force
```

## ✅ Checklist de Validação

Após copiar os arquivos, verificar:

- [ ] Abrir `site/pages/wiso-cineasta.html` no navegador
- [ ] Abrir DevTools (F12) → Console
- [ ] Verificar se **NÃO há erros 404**:
  - [ ] CSS carregando corretamente
  - [ ] JS carregando corretamente
  - [ ] Fontes carregando corretamente
  - [ ] Imagens carregando corretamente
- [ ] Verificar se o layout está **100% idêntico** ao template original
- [ ] Testar interações:
  - [ ] Menu mobile funciona
  - [ ] Swiper do team funciona
  - [ ] Swiper de testimonials funciona
  - [ ] Animações de skills funcionam
  - [ ] Light gallery funciona (se aplicável)

## 🎨 Próximos Passos (APÓS validação)

**SOMENTE depois que tudo estiver funcionando:**

1. **Adaptar identidade visual:**
   - Substituir logo "Wiso" por logo "Rosa Berardo"
   - Ajustar cores (se necessário)
   - Substituir textos placeholder

2. **Adaptar conteúdo:**
   - Substituir imagens placeholder pelas reais
   - Atualizar textos
   - Ajustar links do menu

3. **Integrar com o resto do site:**
   - Conectar menu com outras páginas
   - Manter consistência de navegação

## ⚠️ IMPORTANTE

- **NÃO** tente adaptar antes de validar que está funcionando 100%
- **NÃO** remova CSS/JS achando que é redundante
- **NÃO** misture libs do projeto atual com libs do Wiso
- **PRIORIZE** funcionamento perfeito antes de otimização

## 📝 Notas Técnicas

- Todos os paths na página `wiso-cineasta.html` já estão ajustados para `../assets/wiso/...`
- A página usa o HTML completo do template, sem modificações estruturais
- O template Wiso é isolado em `/assets/wiso/` para não conflitar com assets do projeto principal

