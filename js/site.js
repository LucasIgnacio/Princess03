'use strict';

const extraTranslations = {
  'pt-BR': {
    'ui.skip':'Pular para o conteúdo','ui.home':'Malharia Princesa — início','ui.navigation':'Navegação principal','ui.since':'Tecendo histórias desde 1951','ui.heroStart':'Moda que inspira','ui.heroEnd':'movimento.','ui.heroDescription':'O seu próximo projeto começa com o tecido certo. Criamos malhas, rendas e tules para marcas de moda íntima, esportiva e praia.','ui.yearsText':'anos de experiência em cada fio.','ui.heroAlt':'Duas mulheres com roupas esportivas em uma caminhada ao ar livre','ui.fashionLabel':'Feito para acompanhar você','ui.fashionTypes':'Íntima. Esportiva. Praia.','ui.specialties':'Especialidades','ui.stripOne':'Tradição que se renova','ui.stripTwo':'Tecnologia em cada fibra','ui.stripThree':'Da ideia ao toque final','ui.fabricsHeading':'Possibilidades em cada trama.','ui.fabricsIntro':'Da elasticidade das malhas à delicadeza das rendas, desenvolvemos tecidos que dão forma às suas coleções.','ui.knitting':'Malharia','ui.weaving':'Tecelagem','ui.specialty':'Especialidade','ui.knittingText':'Malhas lisas, listradas e com efeitos de desenho. Diferentes gramaturas para unir conforto, elasticidade e performance.','ui.weavingText':'Fios entrelaçados por urdume para combinar resistência e delicadeza em tecidos de compressão e linhas sem costura.','ui.lacesText':'Texturas, transparências e desenhos que valorizam os detalhes. Cuidado especial do primeiro fio à peça final.','ui.fabricContact':'Converse sobre este tecido','ui.aboutAlt':'Pessoas em uma comemoração dos 75 anos da Malharia Princesa','ui.aboutCaption':'Uma história feita de pessoas.','ui.aboutSignature':'O começo de uma história que continua em movimento.','ui.techHeading':'Mais do que um bom toque.','ui.techIntro':'Conheça as tecnologias que ampliam as possibilidades dos nossos tecidos, do conforto à durabilidade.','ui.amniText':'Poliamida desenvolvida com aditivos que favorecem a biodegradação em condições adequadas de descarte.','ui.creoraText':'Elastano com maior resistência ao cloro, pensado para a durabilidade de peças de moda praia e natação.','ui.tencelText':'Fibra de origem vegetal, reconhecida pelo toque suave e pelo conforto em contato com a pele.','ui.kelpText':'Fio com micropartículas de cristais bioativos, disponível para o desenvolvimento de artigos especiais.','ui.aloeText':'Acabamento com extrato de aloe vera aplicado ao tecido, uma possibilidade para agregar cuidado ao toque.','ui.greenText':'Fio produzido em ciclo fechado, com foco no uso eficiente de recursos durante a produção.','ui.techSustainability':'Sustentabilidade','ui.techDurability':'Durabilidade','ui.techSoftness':'Suavidade','ui.techInnovation':'Inovação','ui.techCare':'Cuidado','ui.bioactive':'Fio bioativo','ui.servicesHeading':'O processo inteiro. O mesmo cuidado.','ui.dyeingText':'Precisão de cor em poliamida, poliéster, modal, algodão e viscose, com processos em constante evolução.','ui.printingText':'Florais, listras, desenhos e efeitos especiais que transformam tecidos em identidade para a sua coleção.','ui.finishingText':'Maciez, volume e caimento, além de tratamentos especiais sob consulta. Os detalhes que fazem a diferença.','ui.natureAlt':'Mulher com roupa de praia em uma paisagem natural junto à água','ui.futureLabel':'O futuro também faz parte da trama.','ui.sustainHeading':'Criar hoje. Cuidar do amanhã.','ui.renewableText':'Desde 2021, utilizamos energia elétrica de fontes renováveis pelo Programa Perfil Energia + Limpa.','ui.waterText':'Investimento contínuo no tratamento de efluentes e na melhoria dos processos industriais.','ui.emissionsText':'Acompanhamento das emissões evitadas com a adesão à energia renovável pelo Programa Perfil Sustentável.','ui.contactEyebrow':'O próximo capítulo','ui.contactIntro':'Conte sobre a sua coleção. Nossa equipe comercial ajuda você a encontrar tecidos e soluções para o seu projeto.','ui.map':'Ver no mapa'
  },
  'en': {
    'ui.skip':'Skip to content','ui.home':'Malharia Princesa — home','ui.navigation':'Main navigation','ui.since':'Weaving stories since 1951','ui.heroStart':'Fashion that inspires','ui.heroEnd':'movement.','ui.heroDescription':'Your next project starts with the right fabric. We create knits, lace and tulle for intimate apparel, sportswear and beachwear brands.','ui.yearsText':'years of experience in every yarn.','ui.heroAlt':'Two women wearing sportswear on an outdoor walk','ui.fashionLabel':'Made to move with you','ui.fashionTypes':'Intimate. Sport. Beach.','ui.specialties':'Specialties','ui.stripOne':'Tradition, always evolving','ui.stripTwo':'Technology in every fiber','ui.stripThree':'From idea to final touch','ui.fabricsHeading':'Possibilities in every weave.','ui.fabricsIntro':'From the stretch of knits to the delicacy of lace, we develop fabrics that shape your collections.','ui.knitting':'Knitting','ui.weaving':'Weaving','ui.specialty':'Specialty','ui.knittingText':'Solid, striped and patterned knits. A range of fabric weights combining comfort, stretch and performance.','ui.weavingText':'Warp-interlaced yarns that combine strength and delicacy in compression fabrics and seamless lines.','ui.lacesText':'Textures, sheerness and patterns that celebrate detail. Exceptional care from the first yarn to the finished piece.','ui.fabricContact':'Ask about this fabric','ui.aboutAlt':'People celebrating Malharia Princesa’s 75th anniversary','ui.aboutCaption':'A history made by people.','ui.aboutSignature':'The beginning of a story that keeps moving.','ui.techHeading':'More than a beautiful touch.','ui.techIntro':'Explore technologies that extend what our fabrics can do, from comfort to durability.','ui.amniText':'Polyamide developed with additives that support biodegradation under appropriate disposal conditions.','ui.creoraText':'Elastane with enhanced chlorine resistance, designed for durable beachwear and swimwear.','ui.tencelText':'A plant-based fiber known for its soft touch and comfort against the skin.','ui.kelpText':'Yarn with bioactive crystal microparticles, available for the development of specialty fabrics.','ui.aloeText':'A fabric finish containing aloe vera extract, adding another dimension to the feel of the fabric.','ui.greenText':'Yarn produced in a closed-loop process focused on efficient use of production resources.','ui.techSustainability':'Sustainability','ui.techDurability':'Durability','ui.techSoftness':'Softness','ui.techInnovation':'Innovation','ui.techCare':'Care','ui.bioactive':'Bioactive yarn','ui.servicesHeading':'The entire process. The same care.','ui.dyeingText':'Color precision for polyamide, polyester, modal, cotton and viscose, with continually evolving processes.','ui.printingText':'Florals, stripes, patterns and special effects that turn fabrics into an identity for your collection.','ui.finishingText':'Softness, volume and drape, with special treatments available on request. Details that make a difference.','ui.natureAlt':'A woman in beachwear beside the water in a natural landscape','ui.futureLabel':'The future is part of the weave, too.','ui.sustainHeading':'Create today. Care for tomorrow.','ui.renewableText':'Since 2021, we have used electricity from renewable sources through the Perfil Energia + Limpa program.','ui.waterText':'Continued investment in effluent treatment and industrial process improvements.','ui.emissionsText':'Tracking emissions avoided through renewable energy with the Perfil Sustentável program.','ui.contactEyebrow':'The next chapter','ui.contactIntro':'Tell us about your collection. Our sales team will help you find fabrics and solutions for your project.','ui.map':'View on map'
  },
  'es': {
    'ui.skip':'Ir al contenido','ui.home':'Malharia Princesa — inicio','ui.navigation':'Navegación principal','ui.since':'Tejiendo historias desde 1951','ui.heroStart':'Moda que inspira','ui.heroEnd':'movimiento.','ui.heroDescription':'Su próximo proyecto comienza con el tejido adecuado. Creamos tejidos de punto, encajes y tules para marcas de moda íntima, deportiva y de playa.','ui.yearsText':'años de experiencia en cada hilo.','ui.heroAlt':'Dos mujeres con ropa deportiva caminando al aire libre','ui.fashionLabel':'Hecho para acompañarle','ui.fashionTypes':'Íntima. Deportiva. Playa.','ui.specialties':'Especialidades','ui.stripOne':'Tradición que se renueva','ui.stripTwo':'Tecnología en cada fibra','ui.stripThree':'De la idea al toque final','ui.fabricsHeading':'Posibilidades en cada trama.','ui.fabricsIntro':'Desde la elasticidad del punto hasta la delicadeza del encaje, desarrollamos tejidos que dan forma a sus colecciones.','ui.knitting':'Tejido de punto','ui.weaving':'Tejeduría','ui.specialty':'Especialidad','ui.knittingText':'Tejidos lisos, rayados y con diseños. Diferentes gramajes para combinar confort, elasticidad y rendimiento.','ui.weavingText':'Hilos entrelazados por urdimbre que combinan resistencia y delicadeza en tejidos de compresión y líneas sin costuras.','ui.lacesText':'Texturas, transparencias y diseños que realzan los detalles. Cuidado especial desde el primer hilo hasta la prenda final.','ui.fabricContact':'Consulte sobre este tejido','ui.aboutAlt':'Personas celebrando el 75 aniversario de Malharia Princesa','ui.aboutCaption':'Una historia hecha de personas.','ui.aboutSignature':'El comienzo de una historia que sigue en movimiento.','ui.techHeading':'Más que un buen tacto.','ui.techIntro':'Conozca las tecnologías que amplían las posibilidades de nuestros tejidos, desde el confort hasta la durabilidad.','ui.amniText':'Poliamida desarrollada con aditivos que favorecen la biodegradación en condiciones adecuadas de eliminación.','ui.creoraText':'Elastano con mayor resistencia al cloro, pensado para la durabilidad de prendas de playa y natación.','ui.tencelText':'Fibra de origen vegetal, conocida por su tacto suave y su confort en contacto con la piel.','ui.kelpText':'Hilo con micropartículas de cristales bioactivos, disponible para desarrollar tejidos especiales.','ui.aloeText':'Acabado con extracto de aloe vera aplicado al tejido, una posibilidad para enriquecer su tacto.','ui.greenText':'Hilo producido en ciclo cerrado, centrado en el uso eficiente de recursos durante la producción.','ui.techSustainability':'Sostenibilidad','ui.techDurability':'Durabilidad','ui.techSoftness':'Suavidad','ui.techInnovation':'Innovación','ui.techCare':'Cuidado','ui.bioactive':'Hilo bioactivo','ui.servicesHeading':'Todo el proceso. El mismo cuidado.','ui.dyeingText':'Precisión de color en poliamida, poliéster, modal, algodón y viscosa, con procesos en constante evolución.','ui.printingText':'Flores, rayas, diseños y efectos especiales que convierten los tejidos en la identidad de su colección.','ui.finishingText':'Suavidad, volumen y caída, además de tratamientos especiales bajo consulta. Detalles que marcan la diferencia.','ui.natureAlt':'Una mujer con ropa de playa junto al agua en un paisaje natural','ui.futureLabel':'El futuro también forma parte de la trama.','ui.sustainHeading':'Crear hoy. Cuidar del mañana.','ui.renewableText':'Desde 2021, utilizamos electricidad de fuentes renovables a través del programa Perfil Energia + Limpa.','ui.waterText':'Inversión continua en el tratamiento de efluentes y en la mejora de procesos industriales.','ui.emissionsText':'Seguimiento de las emisiones evitadas gracias a las energías renovables mediante el programa Perfil Sustentável.','ui.contactEyebrow':'El próximo capítulo','ui.contactIntro':'Cuéntenos sobre su colección. Nuestro equipo comercial le ayuda a encontrar tejidos y soluciones para su proyecto.','ui.map':'Ver en el mapa'
  },
  'zh-CN': {
    'ui.skip':'跳至主要内容','ui.home':'Malharia Princesa — 首页','ui.navigation':'主导航','ui.since':'自1951年起编织故事','ui.heroStart':'时尚激发','ui.heroEnd':'动感。','ui.heroDescription':'您的下一个项目，从合适的面料开始。我们为内衣、运动服和沙滩服品牌生产针织面料、蕾丝和网纱。','ui.yearsText':'年经验，融入每一根纱线。','ui.heroAlt':'两位穿运动服的女性在户外散步','ui.fashionLabel':'为您的每一步而设计','ui.fashionTypes':'内衣。运动。沙滩。','ui.specialties':'专业领域','ui.stripOne':'不断革新的传统','ui.stripTwo':'每一根纤维中的科技','ui.stripThree':'从创意到最后的触感','ui.fabricsHeading':'每一种织法，无限可能。','ui.fabricsIntro':'从针织的弹性到蕾丝的细腻，我们开发面料，为您的系列赋予形态。','ui.knitting':'针织','ui.weaving':'经编','ui.specialty':'特色面料','ui.knittingText':'素色、条纹及提花针织面料。不同克重，融合舒适、弹性与性能。','ui.weavingText':'经编纱线交织，在压缩面料和无缝产品中兼顾强度与细腻。','ui.lacesText':'质感、透明度和图案，彰显细节。从第一根纱线到成品，始终精心制作。','ui.fabricContact':'咨询此面料','ui.aboutAlt':'人们庆祝 Malharia Princesa 成立75周年','ui.aboutCaption':'由人共同书写的历史。','ui.aboutSignature':'一个持续前行的故事，从这里开始。','ui.techHeading':'不止于美好触感。','ui.techIntro':'了解拓展我们面料可能性的技术，从舒适到耐用。','ui.amniText':'采用特殊添加剂开发的聚酰胺，在适当的处置条件下有助于生物降解。','ui.creoraText':'提高耐氯性的弹性纤维，适合耐用的沙滩服和泳装。','ui.tencelText':'植物来源纤维，以柔软触感和贴肤舒适度著称。','ui.kelpText':'含生物活性晶体微粒的纱线，可用于开发特色面料。','ui.aloeText':'将芦荟提取物应用于面料后整理，为面料触感增加更多可能。','ui.greenText':'以闭环工艺生产的纱线，注重生产资源的高效利用。','ui.techSustainability':'可持续性','ui.techDurability':'耐用性','ui.techSoftness':'柔软度','ui.techInnovation':'创新','ui.techCare':'呵护','ui.bioactive':'生物活性纱线','ui.servicesHeading':'完整流程。同样用心。','ui.dyeingText':'为聚酰胺、聚酯、莫代尔、棉和粘胶提供精准染色，持续优化工艺。','ui.printingText':'花卉、条纹、图案与特殊效果，让面料彰显您的系列风格。','ui.finishingText':'柔软度、蓬松度与垂感，以及可咨询的特殊处理。细节造就不同。','ui.natureAlt':'一位穿沙滩服的女性站在自然景观中的水边','ui.futureLabel':'未来也是织物的一部分。','ui.sustainHeading':'创造今天。关爱明天。','ui.renewableText':'自2021年起，我们通过 Perfil Energia + Limpa 计划使用可再生能源电力。','ui.waterText':'持续投资于废水处理及工业流程改善。','ui.emissionsText':'通过 Perfil Sustentável 计划追踪使用可再生能源所避免的排放。','ui.contactEyebrow':'下一个篇章','ui.contactIntro':'告诉我们您的系列。我们的销售团队将帮助您寻找合适的面料和项目方案。','ui.map':'查看地图'
  }
};
for (const [language, entries] of Object.entries(extraTranslations)) Object.assign(translations[language], entries);

const homeTranslations = {
  "pt-BR": {
    "home.start": "Início",
    "home.campaign": "Destaques da Malharia Princesa",
    "home.previous": "Destaque anterior",
    "home.next": "Próximo destaque",
    "home.slideFashion": "Ver destaque de moda",
    "home.slideHistory": "Ver destaque da Princesa",
    "home.factoryAlt": "Fachada da Malharia Princesa em Joinville",
    "home.factoryStart": "75 anos de história.",
    "home.factoryStrong": "O futuro em cada fio.",
    "home.factoryText": "Da nossa história em Joinville às coleções de todo o Brasil. Conhecimento, tecnologia e cuidado em cada etapa.",
    "home.aboutCta": "Conheça a Princesa",
    "home.explore": "Explore a Princesa",
    "home.brandTile": "A Princesa",
    "home.fabricTile": "Encontre seu tecido",
    "home.technologyTile": "Tecnologia têxtil",
    "home.follow": "Siga-nos",
    "home.solutions": "Nossas soluções",
    "home.backTop": "Voltar ao topo"
  },
  "en": {
    "home.start": "Home",
    "home.campaign": "Malharia Princesa highlights",
    "home.previous": "Previous highlight",
    "home.next": "Next highlight",
    "home.slideFashion": "View fashion highlight",
    "home.slideHistory": "View Princesa highlight",
    "home.factoryAlt": "Malharia Princesa factory in Joinville",
    "home.factoryStart": "75 years of history.",
    "home.factoryStrong": "The future in every yarn.",
    "home.factoryText": "From our roots in Joinville to collections across Brazil. Expertise, technology and care at every step.",
    "home.aboutCta": "Discover Princesa",
    "home.explore": "Explore Princesa",
    "home.brandTile": "Princesa",
    "home.fabricTile": "Find your fabric",
    "home.technologyTile": "Textile technology",
    "home.follow": "Follow us",
    "home.solutions": "Our solutions",
    "home.backTop": "Back to top"
  },
  "es": {
    "home.start": "Inicio",
    "home.campaign": "Destacados de Malharia Princesa",
    "home.previous": "Destacado anterior",
    "home.next": "Siguiente destacado",
    "home.slideFashion": "Ver destacado de moda",
    "home.slideHistory": "Ver destacado de Princesa",
    "home.factoryAlt": "Fábrica de Malharia Princesa en Joinville",
    "home.factoryStart": "75 años de historia.",
    "home.factoryStrong": "El futuro en cada hilo.",
    "home.factoryText": "Desde nuestras raíces en Joinville hasta las colecciones de todo Brasil. Conocimiento, tecnología y cuidado en cada etapa.",
    "home.aboutCta": "Conozca a Princesa",
    "home.explore": "Explore Princesa",
    "home.brandTile": "Princesa",
    "home.fabricTile": "Encuentre su tejido",
    "home.technologyTile": "Tecnología textil",
    "home.follow": "Síganos",
    "home.solutions": "Nuestras soluciones",
    "home.backTop": "Volver arriba"
  },
  "zh-CN": {
    "home.start": "首页",
    "home.campaign": "Malharia Princesa 精选",
    "home.previous": "上一个精选",
    "home.next": "下一个精选",
    "home.slideFashion": "查看时尚精选",
    "home.slideHistory": "查看 Princesa 精选",
    "home.factoryAlt": "位于若因维利的 Malharia Princesa 工厂",
    "home.factoryStart": "75年的历史。",
    "home.factoryStrong": "每一根纱线中的未来。",
    "home.factoryText": "从若因维利的根基，到巴西各地的时装系列。每一步都融合经验、技术与用心。",
    "home.aboutCta": "了解 Princesa",
    "home.explore": "探索 Princesa",
    "home.brandTile": "Princesa",
    "home.fabricTile": "寻找您的面料",
    "home.technologyTile": "纺织科技",
    "home.follow": "关注我们",
    "home.solutions": "我们的解决方案",
    "home.backTop": "返回顶部"
  }
};
for (const [language, entries] of Object.entries(homeTranslations)) Object.assign(translations[language], entries);

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Preferences remain usable without storage. */ } }
};
let currentLanguage = storage.get(LANGUAGE_STORAGE_KEY);
if (!translations[currentLanguage]) currentLanguage = 'pt-BR';
function t(key) { return translations[currentLanguage][key] ?? translations['pt-BR'][key] ?? key; }
function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'pt-BR';
  storage.set(LANGUAGE_STORAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.title = t('page.title');
  document.querySelector('meta[name="description"]').content = t('page.description');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t(el.dataset.i18nAlt); });
  updateLanguagePicker();
  const subjectField = document.querySelector('input[name="_subject"]');
  if (subjectField) subjectField.value = t('form.subject');
  updateMenuLabel();
}
const languagePicker = document.getElementById('languagePicker');
const languageSelect = document.getElementById('languageSelect');
const languageFlag = document.getElementById('languageFlag');
const languageButtons = Array.from(languagePicker.querySelectorAll('[data-language]'));
function updateLanguagePicker() {
  const selected = languageButtons.find(button => button.dataset.language === currentLanguage);
  if (!selected) return;
  languageFlag.src = selected.querySelector('img').getAttribute('src');
  languageSelect.title = selected.dataset.languageName;
  languageSelect.setAttribute('aria-label', `${t('language.select')}: ${selected.dataset.languageName}`);
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button === selected)));
}
languageButtons.forEach(button => button.addEventListener('click', () => {
  applyLanguage(button.dataset.language);
  languagePicker.open = false;
  languageSelect.focus();
}));
languagePicker.addEventListener('keydown', event => {
  if (event.key === 'Escape' && languagePicker.open) {
    event.preventDefault();
    languagePicker.open = false;
    languageSelect.focus();
    return;
  }
  if (!['ArrowDown','ArrowUp','Home','End'].includes(event.key)) return;
  event.preventDefault();
  languagePicker.open = true;
  let index = languageButtons.indexOf(document.activeElement);
  if (event.key === 'Home') index = 0;
  else if (event.key === 'End') index = languageButtons.length - 1;
  else if (index < 0) index = Math.max(0, languageButtons.findIndex(button => button.dataset.language === currentLanguage));
  else index = (index + (event.key === 'ArrowDown' ? 1 : -1) + languageButtons.length) % languageButtons.length;
  languageButtons[index].focus();
});
document.addEventListener('click', event => { if (!languagePicker.contains(event.target)) languagePicker.open = false; });
document.addEventListener('focusin', event => { if (!languagePicker.contains(event.target)) languagePicker.open = false; });

const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
  root.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#000000' : '#ffffff';
  storage.set('mp-theme', root.dataset.theme);
}
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(root.dataset.theme);

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
function updateMenuLabel() { burger.setAttribute('aria-label', t(mobileNav.hidden ? 'menu.open' : 'menu.close')); }
function setMenu(open) { mobileNav.hidden = !open; burger.setAttribute('aria-expanded', String(open)); updateMenuLabel(); }
burger.addEventListener('click', () => setMenu(mobileNav.hidden));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); burger.focus(); } });
document.addEventListener('click', event => { if (!mobileNav.hidden && !document.getElementById('siteHeader').contains(event.target)) setMenu(false); });
window.matchMedia('(min-width:1101px)').addEventListener('change', event => { if(event.matches) setMenu(false); });

const carousel = document.getElementById('techCarousel');
if (carousel) {
const cards = Array.from(carousel.querySelectorAll('.tech-card'));
const previous = document.getElementById('techPrev');
const next = document.getElementById('techNext');
let activeCard = 0;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateCarousel() {
  const distance = carousel.scrollLeft;
  const step = cards[0].getBoundingClientRect().width + 20;
  activeCard = Math.min(cards.length - 1, Math.max(0, Math.round(distance / step)));
  previous.disabled = distance < 2;
  next.disabled = distance >= carousel.scrollWidth - carousel.clientWidth - 2;
  document.getElementById('techCounter').textContent = `${String(activeCard + 1).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
}
function moveCarousel(direction) {
  const step = cards[0].getBoundingClientRect().width + 20;
  carousel.scrollBy({left: direction * step, behavior: reduceMotion.matches ? 'instant' : 'smooth'});
}
previous.addEventListener('click', () => moveCarousel(-1));
next.addEventListener('click', () => moveCarousel(1));
carousel.addEventListener('scroll', updateCarousel, {passive:true});
carousel.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); moveCarousel(event.key === 'ArrowRight' ? 1 : -1); }
});
window.addEventListener('resize', updateCarousel, {passive:true});

  updateCarousel();
}

if ('IntersectionObserver' in window) {
  const links = document.querySelectorAll('.desktop-nav a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','true'); else link.removeAttribute('aria-current');
    }); });
  }, {rootMargin:'-15% 0px -55% 0px'});
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
applyLanguage(currentLanguage);

if (document.getElementById('contactMessage') && document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  window.addEventListener('pagehide', event => { if (!event.persisted) lifecycle.abort(); }, {once:true});
  const contactTool = {
    name:'prepare_princesa_contact',
    title:'Prepare a contact message',
    description:'Fill and open the Malharia Princesa contact form for review. This prepares a draft and does not send a message.',
    inputSchema:{type:'object',properties:{name:{type:'string',maxLength:120},email:{type:'string',maxLength:254},company:{type:'string',maxLength:160},message:{type:'string',maxLength:5000}},required:['name','email','message'],additionalProperties:false},
    annotations:{readOnlyHint:false,untrustedContentHint:false},
    execute(input) {
      if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Expected contact fields.');
      const lengths = {name:120,email:254,company:160,message:5000};
      if (Object.keys(input).some(key => !(key in lengths))) throw new Error('Unknown contact field.');
      for (const [key,limit] of Object.entries(lengths)) {
        if (key === 'company' && input[key] === undefined) continue;
        if (typeof input[key] !== 'string' || input[key].length > limit || (key !== 'company' && !input[key].trim())) throw new Error(`Invalid ${key}.`);
      }
      const emailProbe = document.createElement('input'); emailProbe.type = 'email'; emailProbe.required = true; emailProbe.value = input.email;
      if (!emailProbe.checkValidity()) throw new Error('Invalid email.');
      const fields = {name:'contactName',email:'contactEmail',company:'contactCompany',message:'contactMessage'};
      Object.entries(fields).forEach(([key,id]) => { document.getElementById(id).value = input[key] ?? ''; });
      document.getElementById('contato').scrollIntoView({behavior:'instant',block:'start'});
      document.getElementById('contactMessage').focus({preventScroll:true});
      return {status:'draft_prepared',sent:false};
    }
  };
  try { Promise.resolve(document.modelContext.registerTool(contactTool,{signal:lifecycle.signal})).catch(() => {}); } catch {}
}


// Campaign navigation uses the same languages and preferences as the page.
const campaignRoot = document.getElementById('topo');
if (campaignRoot?.querySelector('[data-campaign]')) {
const campaignSlides = Array.from(campaignRoot.querySelectorAll('[data-campaign]'));
const campaignDots = Array.from(campaignRoot.querySelectorAll('[data-campaign-index]'));
let campaignIndex = 0;
function showCampaign(index) {
  campaignIndex = (index + campaignSlides.length) % campaignSlides.length;
  campaignSlides.forEach((slide, i) => { slide.hidden = i !== campaignIndex; });
  campaignDots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === campaignIndex)));
  const status = document.getElementById('campaignStatus');
  status.dataset.i18n = campaignIndex === 0 ? 'home.slideFashion' : 'home.slideHistory';
  status.textContent = t(status.dataset.i18n);
}
campaignDots.forEach(dot => dot.addEventListener('click', () => showCampaign(Number(dot.dataset.campaignIndex))));
document.getElementById('campaignPrev').addEventListener('click', () => showCampaign(campaignIndex - 1));
document.getElementById('campaignNext').addEventListener('click', () => showCampaign(campaignIndex + 1));
campaignRoot.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  showCampaign(campaignIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
let campaignTouch = null;
campaignRoot.addEventListener('touchstart', event => {
  campaignTouch = {x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};
}, {passive:true});
campaignRoot.addEventListener('touchend', event => {
  if (!campaignTouch) return;
  const deltaX = event.changedTouches[0].clientX - campaignTouch.x;
  const deltaY = event.changedTouches[0].clientY - campaignTouch.y;
  if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) showCampaign(campaignIndex + (deltaX < 0 ? 1 : -1));
  campaignTouch = null;
}, {passive:true});
showCampaign(0);

}
