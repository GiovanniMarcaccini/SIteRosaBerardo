// Proteção leve: bloqueia clique-direito em imagens (não é proteção absoluta)
document.addEventListener('contextmenu', (e) => {
    const img = e.target.closest?.('img');
    if (img) e.preventDefault();
  });
  