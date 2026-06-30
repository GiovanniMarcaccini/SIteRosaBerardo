# Footer Zeo - Guia de Personalização

## 📋 Arquivos Alterados

1. **`site/partials/footer.html`** - Novo footer estilo Zeo
2. **`site/assets/css/footer-zeo.css`** - Estilos específicos do footer
3. **`site/pages/indexvn.html`** - Link para o CSS do footer adicionado

## 🖼️ Como Trocar a Imagem de Fundo

### Opção 1: Substituir o arquivo existente
1. Coloque sua imagem em: `/site/assets/img/footer-bg.jpg`
2. A imagem será carregada automaticamente
3. **Recomendações:**
   - Resolução: 1920x1080px ou maior
   - Formato: JPG ou PNG
   - Tamanho: Otimizado (máx. 500KB para melhor performance)

### Opção 2: Usar outro caminho
1. Abra `site/assets/css/footer-zeo.css`
2. Localize a linha 18:
   ```css
   background-image: url('../img/footer-bg.jpg');
   ```
3. Altere para o caminho desejado:
   ```css
   background-image: url('../img/sua-pasta/sua-imagem.jpg');
   ```

### Fallback
Se a imagem não for encontrada, o footer usará automaticamente um fundo escuro (`#1a1a1a`).

## 🔗 Como Trocar Links das Redes Sociais

1. Abra `site/partials/footer.html`
2. Localize a seção `.rb-footer-social` (linhas 17-32)
3. Substitua os `href` pelos seus links reais:

```html
<div class="rb-footer-social">
    <a href="https://www.instagram.com/SEU_PERFIL" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i class="fa fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com/SEU_PERFIL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <i class="fa fa-facebook"></i>
    </a>
    <a href="https://www.pinterest.com/SEU_PERFIL" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
        <i class="fa fa-pinterest-p"></i>
    </a>
    <a href="https://twitter.com/SEU_PERFIL" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i class="fa fa-twitter"></i>
    </a>
</div>
```

### Adicionar/Remover Redes Sociais

**Para adicionar uma nova rede:**
1. Copie um dos blocos `<a>` existentes
2. Altere o `href`, `aria-label` e o ícone (`fa fa-*`)
3. Ícones disponíveis: Font Awesome (já incluído no projeto)

**Para remover uma rede:**
- Simplesmente delete o bloco `<a>` correspondente

## 🎨 Personalização de Cores

Para alterar cores, edite `site/assets/css/footer-zeo.css`:

### Overlay (escurecimento da imagem)
```css
.rb-footer-overlay {
    background-color: rgba(0, 0, 0, 0.7); /* Altere o último valor (0.7) para mais/menos escuro */
}
```

### Cor dos ícones sociais (hover)
```css
.rb-footer-social a:hover {
    background-color: #fff; /* Cor de fundo ao passar o mouse */
    color: #1a1a1a; /* Cor do ícone ao passar o mouse */
}
```

### Cor do copyright
```css
.rb-footer-copyright {
    color: rgba(255, 255, 255, 0.8); /* Altere para a cor desejada */
}
```

## 📱 Responsividade

O footer já está totalmente responsivo:
- **Desktop**: Altura mínima 500px, logo 200px
- **Tablet**: Altura mínima 450px, logo 180px
- **Mobile**: Altura mínima 400px, logo 150px

## 🔝 Botão "Voltar ao Topo"

O botão aparece automaticamente quando o usuário rola a página para baixo (após 300px).

**Para personalizar:**
1. Abra `site/partials/footer.html`
2. Localize o script no final (linhas 50-75)
3. Altere o valor `300` na linha que verifica o scroll:
   ```javascript
   if (window.pageYOffset > 300) { // Altere 300 para outro valor
   ```

## ✅ Checklist de Implementação

- [x] Footer criado com background image
- [x] Overlay escuro para legibilidade
- [x] Logo centralizada (usando logo do projeto)
- [x] Ícones sociais com links
- [x] Copyright com ano automático
- [x] Botão voltar ao topo funcional
- [x] CSS responsivo (mobile/tablet/desktop)
- [x] Acessibilidade (aria-labels, alt text)
- [x] Fallback caso imagem não exista

## 🚀 Próximos Passos

1. **Adicionar imagem de fundo**: Coloque `footer-bg.jpg` em `/site/assets/img/`
2. **Atualizar links sociais**: Edite `site/partials/footer.html` com seus links reais
3. **Testar em diferentes dispositivos**: Verifique a responsividade
4. **Otimizar imagem**: Comprima a imagem de fundo para melhor performance

## 📝 Notas Técnicas

- O footer usa `background-attachment: fixed` no desktop para efeito parallax
- No mobile, o attachment é `scroll` para melhor performance
- O script de "voltar ao topo" usa scroll suave nativo do navegador
- O ano do copyright é atualizado automaticamente via JavaScript

