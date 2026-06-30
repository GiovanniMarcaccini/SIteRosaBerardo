/**
 * lang.js — Sistema de tradução PT / EN / FR
 * Rosa Berardo Site
 *
 * Funciona sem dependências externas (vanilla JS puro).
 * Persiste a língua escolhida em localStorage.
 * Suporta conteúdo carregado dinamicamente via MutationObserver.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     1. DICIONÁRIO DE TRADUÇÕES
     Chave = texto em português (trimado)
     Valor = { en, fr }
  ───────────────────────────────────────────── */
  var dict = {

    /* ── Navegação ── */
    'Home':               { en: 'Home',            fr: 'Accueil' },
    'A Cineasta':         { en: 'The Filmmaker',   fr: 'La Cinéaste' },
    'Filmografia':        { en: 'Filmography',     fr: 'Filmographie' },
    'Revistas':           { en: 'Magazines',       fr: 'Revues' },
    'Revista':            { en: 'Magazine',        fr: 'Revue' },
    'Imprensa':           { en: 'Press',           fr: 'Presse' },
    'Galeria':            { en: 'Gallery',         fr: 'Galerie' },
    'Contato':            { en: 'Contact',         fr: 'Contact' },
    'Blog':               { en: 'Blog',            fr: 'Blog' },
    'Menu':               { en: 'Menu',            fr: 'Menu' },
    'close':              { en: 'close',           fr: 'fermer' },

    /* ── Overlay / sidebar ── */
    'INFORMAÇÃO':         { en: 'INFORMATION',     fr: 'INFORMATION' },
    'CONTATO':            { en: 'CONTACT',         fr: 'CONTACT' },
    'SIGA-ME':            { en: 'FOLLOW ME',       fr: 'SUIVEZ-MOI' },
    'Siga-me:':           { en: 'Follow me:',      fr: 'Suivez-moi:' },
    'Follow me:':         { en: 'Follow me:',      fr: 'Suivez-moi:' },
    'Telefone:':          { en: 'Phone:',          fr: 'Téléphone:' },
    'Última atualização': { en: 'Last update',     fr: 'Dernière mise à jour' },

    /* ── Texto de bio (aparece em vários overlays) ── */
    'Rosa Berardo é cineasta, fotógrafa e professora. Seu trabalho explora temas sociais, memória e identidade através do audiovisual e da fotografia.': {
      en: 'Rosa Berardo is a filmmaker, photographer and professor. Her work explores social themes, memory and identity through audiovisual and photography.',
      fr: 'Rosa Berardo est cinéaste, photographe et professeure. Son travail explore des thèmes sociaux, la mémoire et l\'identité à travers l\'audiovisuel et la photographie.'
    },

    /* ── Página: Filmografia ── */
    'FILMOGRAFIA': { en: 'FILMOGRAPHY', fr: 'FILMOGRAPHIE' },
    'Uma coleção completa de histórias cinematográficas que exploram a condição humana através de narrativas íntimas e visuais marcantes.': {
      en: 'A complete collection of cinematic stories exploring the human condition through intimate narratives and striking visuals.',
      fr: 'Une collection complète d\'histoires cinématographiques explorant la condition humaine à travers des récits intimes et des visuels marquants.'
    },
    'ver filmografia':    { en: 'view filmography',  fr: 'voir filmographie' },
    'NOSSOS MELHORES TRABALHOS': { en: 'OUR BEST WORKS', fr: 'NOS MEILLEURES ŒUVRES' },
    'Uma seleção de filmes que representam a diversidade e a profundidade do trabalho cinematográfico de Rosa Berardo, explorando diferentes gêneros e narrativas.': {
      en: 'A selection of films representing the diversity and depth of Rosa Berardo\'s cinematic work, exploring different genres and narratives.',
      fr: 'Une sélection de films représentant la diversité et la profondeur du travail cinématographique de Rosa Berardo, explorant différents genres et récits.'
    },
    'Tipo:':              { en: 'Type:',            fr: 'Type :' },
    'Curta de Ficção':    { en: 'Fiction Short Film', fr: 'Court Métrage de Fiction' },
    'Documentário':       { en: 'Documentary',      fr: 'Documentaire' },
    'Animação':           { en: 'Animation',        fr: 'Animation' },
    'voltar ao início':   { en: 'back to home',     fr: 'retour à l\'accueil' },

    /* ── Página: Galeria ── */
    'GALERIA': { en: 'GALLERY', fr: 'GALERIE' },
    'Uma coleção visual que explora a beleza através da fotografia e do cinema, capturando momentos únicos e transformando histórias em arte.': {
      en: 'A visual collection that explores beauty through photography and cinema, capturing unique moments and transforming stories into art.',
      fr: 'Une collection visuelle qui explore la beauté à travers la photographie et le cinéma, capturant des moments uniques et transformant des histoires en art.'
    },
    'Explore a galeria completa de Rosa Berardo, uma coleção visual que captura momentos únicos através da fotografia e do cinema.': {
      en: 'Explore Rosa Berardo\'s complete gallery, a visual collection capturing unique moments through photography and cinema.',
      fr: 'Explorez la galerie complète de Rosa Berardo, une collection visuelle capturant des moments uniques à travers la photographie et le cinéma.'
    },
    'ANIMAIS':            { en: 'ANIMALS',          fr: 'ANIMAUX' },
    'Retratos únicos da vida selvagem': { en: 'Unique portraits of wildlife', fr: 'Portraits uniques de la faune sauvage' },
    'FINE ARTS & IMPRESSIONISMO': { en: 'FINE ARTS & IMPRESSIONISM', fr: 'BEAUX-ARTS & IMPRESSIONNISME' },
    'Arte e expressão visual': { en: 'Art and visual expression', fr: 'Art et expression visuelle' },
    'CANADÁ & MEIO AMBIENTE': { en: 'CANADA & ENVIRONMENT', fr: 'CANADA & ENVIRONNEMENT' },
    'Paisagens e consciência ambiental': { en: 'Landscapes and environmental awareness', fr: 'Paysages et conscience environnementale' },

    /* ── Página: Contato ── */
    'Entre em contato': { en: 'Get in touch', fr: 'Contactez-nous' },
    'Tem interesse em trabalhar junto? Tem alguma pergunta ou apenas quer dizer olá?': {
      en: 'Interested in working together? Have a question or just want to say hello?',
      fr: 'Intéressé(e) à travailler ensemble ? Une question ou juste envie de dire bonjour ?'
    },
    'Rosa Berardo está sempre aberta a conversas sobre projetos cinematográficos, colaborações artísticas e oportunidades de trabalho conjunto. Se você tem uma ideia, um projeto ou apenas quer trocar experiências sobre cinema e arte, entre em contato.': {
      en: 'Rosa Berardo is always open to conversations about film projects, artistic collaborations and joint work opportunities. If you have an idea, a project, or just want to exchange experiences about cinema and art, get in touch.',
      fr: 'Rosa Berardo est toujours ouverte aux conversations sur les projets cinématographiques, les collaborations artistiques et les opportunités de travail. Si vous avez une idée, un projet ou souhaitez simplement échanger sur le cinéma et l\'art, prenez contact.'
    },
    'Estamos localizados em Goiânia, mas trabalhamos com projetos de todo o Brasil e internacionalmente.': {
      en: 'We are located in Goiânia, but we work on projects from all over Brazil and internationally.',
      fr: 'Nous sommes situés à Goiânia, mais nous travaillons sur des projets de tout le Brésil et à l\'international.'
    },
    'endereço:':          { en: 'address:',         fr: 'adresse :' },
    'telefone:':          { en: 'phone:',           fr: 'téléphone :' },
    'email:':             { en: 'email:',           fr: 'e-mail :' },
    'Rosa Berardo ©2025. Todos os direitos reservados.': {
      en: 'Rosa Berardo ©2025. All rights reserved.',
      fr: 'Rosa Berardo ©2025. Tous droits réservés.'
    },

    /* ── Footer partial ── */
    'Todos os direitos reservados.': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    'Voltar ao topo':     { en: 'Back to top',      fr: 'Retour en haut' },

    /* ── Página: A Cineasta (wiso) ── */
    'WELCOME TO STUDIO':  { en: 'WELCOME TO STUDIO', fr: 'BIENVENUE AU STUDIO' },
    'Welcome to Rosa Berardo studio': { en: 'Welcome to Rosa Berardo studio', fr: 'Bienvenue au studio Rosa Berardo' },
    'We are fine-art, wedding & portrait film photographers from Oregon, with a special love for natural light,': {
      en: 'We are fine-art, wedding & portrait film photographers from Oregon, with a special love for natural light,',
      fr: 'Nous sommes photographes de film fine-art, mariage et portrait de l\'Oregon, avec un amour particulier pour la lumière naturelle,'
    },
    'Culture science':    { en: 'Culture & Science', fr: 'Culture et Science' },
    'EQUIPE DEDICADA':    { en: 'DEDICATED TEAM',   fr: 'ÉQUIPE DÉDIÉE' },
    'Uma equipe comprometida com a excelência em cada projeto, unindo criatividade, técnica e paixão pelo audiovisual.': {
      en: 'A team committed to excellence in every project, combining creativity, technique and passion for audiovisual.',
      fr: 'Une équipe engagée vers l\'excellence dans chaque projet, alliant créativité, technique et passion pour l\'audiovisuel.'
    },
    'SOMOS CRIATIVOS':    { en: 'WE ARE CREATIVE',  fr: 'NOUS SOMMES CRÉATIFS' },
    'Nossa abordagem criativa combina narrativas visuais impactantes com técnicas cinematográficas inovadoras. Cada projeto é uma oportunidade de contar histórias únicas que ressoam com o público e deixam uma marca duradoura.': {
      en: 'Our creative approach combines impactful visual narratives with innovative cinematographic techniques. Each project is an opportunity to tell unique stories that resonate with audiences and leave a lasting mark.',
      fr: 'Notre approche créative combine des récits visuels percutants et des techniques cinématographiques innovantes. Chaque projet est une opportunité de raconter des histoires uniques qui résonnent avec le public.'
    },
    'SOMOS MODERNOS':     { en: 'WE ARE MODERN',    fr: 'NOUS SOMMES MODERNES' },
    'Utilizamos as mais recentes tecnologias e tendências do audiovisual para criar conteúdo contemporâneo e relevante. Nossa equipe está sempre atualizada com as melhores práticas da indústria cinematográfica.': {
      en: 'We use the latest audiovisual technologies and trends to create contemporary and relevant content. Our team is always up to date with the best practices in the film industry.',
      fr: 'Nous utilisons les dernières technologies et tendances audiovisuelles pour créer un contenu contemporain et pertinent. Notre équipe est toujours à jour avec les meilleures pratiques de l\'industrie cinématographique.'
    },
    'TUDO PARA O PROJETO': { en: 'ALL FOR THE PROJECT', fr: 'TOUT POUR LE PROJET' },
    'Dedicamos nossa expertise completa a cada projeto, desde a concepção até a finalização. Nosso compromisso é entregar resultados que superem expectativas e reflitam a visão única de cada cliente.': {
      en: 'We dedicate our full expertise to every project, from conception to completion. Our commitment is to deliver results that exceed expectations and reflect each client\'s unique vision.',
      fr: 'Nous dédions toute notre expertise à chaque projet, de la conception à la finalisation. Notre engagement est de livrer des résultats qui dépassent les attentes et reflètent la vision unique de chaque client.'
    },
    'NOSSA EQUIPE':       { en: 'OUR TEAM',         fr: 'NOTRE ÉQUIPE' },
    'Profissionais talentosos e dedicados que transformam ideias em realidade através do poder do audiovisual.': {
      en: 'Talented and dedicated professionals who transform ideas into reality through the power of audiovisual.',
      fr: 'Des professionnels talentueux et dévoués qui transforment les idées en réalité grâce au pouvoir de l\'audiovisuel.'
    },
    'Cineasta e Diretora':     { en: 'Filmmaker and Director',   fr: 'Cinéaste et Réalisatrice' },
    'EQUIPE DE PRODUÇÃO':      { en: 'PRODUCTION TEAM',          fr: 'ÉQUIPE DE PRODUCTION' },
    'Produtores e Técnicos':   { en: 'Producers and Technicians', fr: 'Producteurs et Techniciens' },
    'EQUIPE CRIATIVA':         { en: 'CREATIVE TEAM',            fr: 'ÉQUIPE CRÉATIVE' },
    'Roteiristas e Editores':  { en: 'Screenwriters and Editors', fr: 'Scénaristes et Monteurs' },
    'loading...':              { en: 'loading...',               fr: 'chargement...' },
    'Cineasta premiada, com paixão por narrativas visuais e uma abordagem única na direção.': {
      en: 'Award-winning filmmaker with a passion for visual narratives and a unique approach to direction.',
      fr: 'Cinéaste primée, avec une passion pour les récits visuels et une approche unique de la réalisation.'
    },
    'Information':        { en: 'Information',      fr: 'Information' },
    'Subscribe':          { en: 'Subscribe',        fr: 'S\'abonner' },
    'No spam, we promise': { en: 'No spam, we promise', fr: 'Pas de spam, promis' },
    '© Rosa Berardo 2025. All Right Reserved.': {
      en: '© Rosa Berardo 2025. All Rights Reserved.',
      fr: '© Rosa Berardo 2025. Tous droits réservés.'
    },

    /* ── Página: Revistas ── */
    'REVISTAS':           { en: 'MAGAZINES',        fr: 'REVUES' },
    'Rosa Berardo na mídia - Publicações e coberturas': {
      en: 'Rosa Berardo in the media - Publications and coverage',
      fr: 'Rosa Berardo dans les médias - Publications et couvertures'
    },
    'ver revista':        { en: 'view magazine',    fr: 'voir la revue' },

    /* ── Página inicial (indexvn) ── */
    'Cineasta, fotógrafa e professora. Transformando histórias em arte visual.': {
      en: 'Filmmaker, photographer and professor. Transforming stories into visual art.',
      fr: 'Cinéaste, photographe et professeure. Transformer des histoires en art visuel.'
    },
    'Explore a filmografia completa de Rosa Berardo, uma cineasta premiada que transforma histórias em arte visual.': {
      en: 'Explore the complete filmography of Rosa Berardo, an award-winning filmmaker who transforms stories into visual art.',
      fr: 'Explorez la filmographie complète de Rosa Berardo, une cinéaste primée qui transforme des histoires en art visuel.'
    },
    'Uma coleção completa de histórias cinematográficas que exploram a condição humana.': {
      en: 'A complete collection of cinematic stories exploring the human condition.',
      fr: 'Une collection complète d\'histoires cinématographiques explorant la condition humaine.'
    },
    'cinema / fotografia':   { en: 'cinema / photography',     fr: 'cinéma / photographie' },
    'documentários / ficção': { en: 'documentaries / fiction',  fr: 'documentaires / fiction' },

    /* ── Placeholders de formulário ── */
    'Seu nome':     { en: 'Your name',     fr: 'Votre nom' },
    'Seu e-mail':   { en: 'Your email',    fr: 'Votre e-mail' },
    'Sua mensagem': { en: 'Your message',  fr: 'Votre message' },
    'Enviar':       { en: 'Send',          fr: 'Envoyer' },
    'Search...':    { en: 'Search...',     fr: 'Rechercher...' },
    'Enter your-email': { en: 'Enter your email', fr: 'Entrez votre e-mail' },
  };

  /* ─────────────────────────────────────────────
     2. ESTADO
  ───────────────────────────────────────────── */
  var STORAGE_KEY = 'rb_lang';
  var langs = ['pt', 'en', 'fr'];
  var labels = { pt: 'PT', en: 'EN', fr: 'FR' };
  var currentLang = localStorage.getItem(STORAGE_KEY) || 'pt';

  /* ─────────────────────────────────────────────
     3. MOTOR DE TRADUÇÃO
  ───────────────────────────────────────────── */

  /**
   * Dado um texto em qualquer língua, tenta encontrar o
   * equivalente em português (para usar como chave do dict).
   */
  function toPtKey(text) {
    var t = text.trim();
    if (!t) return null;

    // Chave direta (texto já é PT)
    if (dict[t]) return t;

    // Procurar se esse texto é uma tradução conhecida
    for (var key in dict) {
      var entry = dict[key];
      if (entry.en === t || entry.fr === t) return key;
    }
    return null;
  }

  /**
   * Retorna a tradução de um texto para o idioma `lang`.
   * Se lang === 'pt', retorna a chave PT (original).
   */
  function translate(text, lang) {
    var key = toPtKey(text);
    if (!key) return null;
    if (lang === 'pt') return key;
    var entry = dict[key];
    return (entry && entry[lang]) ? entry[lang] : null;
  }

  /**
   * Aplica tradução em todos os nós de texto do `root`.
   */
  function applyToTextNodes(root, lang) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) {
      nodes.push(node);
    }
    nodes.forEach(function (n) {
      // Pula nós dentro do próprio botão de língua
      if (n.parentElement && n.parentElement.closest && n.parentElement.closest('#rb-lang-switcher')) return;
      var trimmed = n.nodeValue.trim();
      if (!trimmed) return;
      var result = translate(trimmed, lang);
      if (result !== null && result !== n.nodeValue.trim()) {
        // Preserva espaços e quebras de linha que existiam em volta
        n.nodeValue = n.nodeValue.replace(trimmed, result);
      }
    });
  }

  /**
   * Aplica tradução em atributos (placeholder, value de submit, aria-label).
   */
  function applyToAttributes(root, lang) {
    // Placeholders
    root.querySelectorAll('[placeholder]').forEach(function (el) {
      var result = translate(el.getAttribute('placeholder'), lang);
      if (result) el.setAttribute('placeholder', result);
    });
    // Botões submit
    root.querySelectorAll('input[type="submit"]').forEach(function (el) {
      var result = translate(el.value, lang);
      if (result) el.value = result;
    });
    // aria-label (aria-label="Voltar ao topo" etc.)
    root.querySelectorAll('[aria-label]').forEach(function (el) {
      // Pula o próprio botão de lang
      if (el.closest && el.closest('#rb-lang-switcher')) return;
      var result = translate(el.getAttribute('aria-label'), lang);
      if (result) el.setAttribute('aria-label', result);
    });
  }

  /**
   * Traduz a tag <title> da página.
   */
  var originalTitle = null;
  var pageTitles = {
    'Galeria - Rosa Berardo':      { en: 'Gallery - Rosa Berardo',      fr: 'Galerie - Rosa Berardo' },
    'Filmografia - Rosa Berardo':  { en: 'Filmography - Rosa Berardo',  fr: 'Filmographie - Rosa Berardo' },
    'Revistas - Rosa Berardo':     { en: 'Magazines - Rosa Berardo',    fr: 'Revues - Rosa Berardo' },
    'Rosa Berardo na Mídia - Imprensa': { en: 'Rosa Berardo in the Media - Press', fr: 'Rosa Berardo dans les Médias - Presse' },
    'Contato - Rosa Berardo':      { en: 'Contact - Rosa Berardo',      fr: 'Contact - Rosa Berardo' },
    'A Cineasta - Rosa Berardo':   { en: 'The Filmmaker - Rosa Berardo', fr: 'La Cinéaste - Rosa Berardo' },
    'Rosa Berardo':                { en: 'Rosa Berardo',                fr: 'Rosa Berardo' },
  };

  function applyTitle(lang) {
    if (!originalTitle) originalTitle = document.title;
    var entry = pageTitles[originalTitle];
    if (entry) {
      document.title = (lang === 'pt') ? originalTitle : (entry[lang] || originalTitle);
    }
  }

  /**
   * Função principal — traduz toda a página para `lang`.
   */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyToTextNodes(document.body, lang);
    applyToAttributes(document.body, lang);
    applyTitle(lang);
    updateButton();
  }

  /* ─────────────────────────────────────────────
     4. BOTÃO FLUTUANTE
  ───────────────────────────────────────────── */
  function createButton() {
    var style = document.createElement('style');
    style.textContent = [
      '#rb-lang-switcher {',
      '  position: fixed;',
      '  bottom: 24px;',
      '  left: 24px;',
      '  z-index: 99999;',
      '  font-family: "Lato", "Montserrat", sans-serif;',
      '  font-size: 12px;',
      '  letter-spacing: 0.08em;',
      '  user-select: none;',
      '}',
      '#rb-lang-trigger {',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 6px;',
      '  background: rgba(20,20,20,0.88);',
      '  color: #fff;',
      '  border: 1px solid rgba(255,255,255,0.18);',
      '  border-radius: 4px;',
      '  padding: 7px 13px;',
      '  cursor: pointer;',
      '  backdrop-filter: blur(6px);',
      '  transition: background 0.2s;',
      '  white-space: nowrap;',
      '}',
      '#rb-lang-trigger:hover { background: rgba(40,40,40,0.95); }',
      '#rb-lang-trigger .rb-globe { font-size: 14px; }',
      '#rb-lang-trigger .rb-caret { font-size: 9px; opacity: 0.6; transition: transform 0.2s; }',
      '#rb-lang-switcher.open #rb-lang-trigger .rb-caret { transform: rotate(180deg); }',
      '#rb-lang-panel {',
      '  display: none;',
      '  flex-direction: column;',
      '  position: absolute;',
      '  bottom: calc(100% + 6px);',
      '  left: 0;',
      '  background: rgba(20,20,20,0.95);',
      '  border: 1px solid rgba(255,255,255,0.18);',
      '  border-radius: 4px;',
      '  overflow: hidden;',
      '  backdrop-filter: blur(6px);',
      '  min-width: 100%;',
      '}',
      '#rb-lang-switcher.open #rb-lang-panel { display: flex; }',
      '.rb-lang-opt {',
      '  padding: 8px 16px;',
      '  color: rgba(255,255,255,0.7);',
      '  cursor: pointer;',
      '  text-align: center;',
      '  transition: background 0.15s, color 0.15s;',
      '  letter-spacing: 0.1em;',
      '}',
      '.rb-lang-opt:hover { background: rgba(255,255,255,0.1); color: #fff; }',
      '.rb-lang-opt.active { color: #fff; font-weight: 700; background: rgba(255,255,255,0.07); }',
    ].join('\n');
    document.head.appendChild(style);

    var wrapper = document.createElement('div');
    wrapper.id = 'rb-lang-switcher';

    // Painel de opções
    var panel = document.createElement('div');
    panel.id = 'rb-lang-panel';
    langs.forEach(function (l) {
      var opt = document.createElement('div');
      opt.className = 'rb-lang-opt' + (l === currentLang ? ' active' : '');
      opt.setAttribute('data-lang', l);
      opt.textContent = labels[l];
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        applyLanguage(l);
        wrapper.classList.remove('open');
      });
      panel.appendChild(opt);
    });

    // Botão trigger
    var trigger = document.createElement('div');
    trigger.id = 'rb-lang-trigger';
    trigger.innerHTML = '<span class="rb-globe">🌐</span><span class="rb-current">' + labels[currentLang] + '</span><span class="rb-caret">▲</span>';
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    wrapper.appendChild(panel);
    wrapper.appendChild(trigger);
    document.body.appendChild(wrapper);

    // Fechar ao clicar fora
    document.addEventListener('click', function () {
      wrapper.classList.remove('open');
    });
  }

  function updateButton() {
    var btn = document.querySelector('#rb-lang-trigger .rb-current');
    if (btn) btn.textContent = labels[currentLang];
    document.querySelectorAll('.rb-lang-opt').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });
  }

  /* ─────────────────────────────────────────────
     5. MUTATION OBSERVER (para partials dinâmicos)
  ───────────────────────────────────────────── */
  function watchDynamicContent() {
    var observer = new MutationObserver(function (mutations) {
      if (currentLang === 'pt') return; // Nada a fazer
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) { // Element
            applyToTextNodes(node, currentLang);
            applyToAttributes(node, currentLang);
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  /* ─────────────────────────────────────────────
     6. INIT
  ───────────────────────────────────────────── */
  function init() {
    createButton();
    watchDynamicContent();
    if (currentLang !== 'pt') {
      applyLanguage(currentLang);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
