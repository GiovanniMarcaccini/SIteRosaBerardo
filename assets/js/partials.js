function getBasePath() {
    // Se estiver em /pages/..., precisa voltar 1 nível
    return window.location.pathname.includes("/pages/") ? "../" : "";
  }
  
  function loadPartial(id, url) {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Erro ao carregar ${url}`);
        return res.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(err => console.error(err));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const base = getBasePath();
    // Verificar se os elementos existem antes de tentar carregar
    const headerEl = document.getElementById("site-header");
    const footerEl = document.getElementById("site-footer");
    
    if (headerEl) {
      loadPartial("site-header", `${base}partials/header.html`);
    }
    
    if (footerEl) {
      loadPartial("site-footer", `${base}partials/footer.html`);
    }
  });
  