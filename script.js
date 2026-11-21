const P = [
  {t:"oil", dir:"images-bg", img:"rosemary_hair_oil", cut:1, c:"#2f5a3a", en:"Rosemary Hair Growth Oil", am:"የሮዝመሪ የፀጉር ማሳደጊያ ዘይት", d:"A rosemary-infused oil to nourish the scalp and support healthy-looking hair.", da:"ጭንቅላትን የሚንከባከብ እና ጤናማ የሚመስል ፀጉርን የሚደግፍ የሮዝመሪ ዘይት።", s:"300ml"},
  {t:"oil", dir:"images-bg", img:"onion_anti_hair_fall_oil", cut:1, c:"#b94a35", en:"Onion Anti Hair Fall Oil", am:"የሽንኩርት ፀጉር መርገፍ መከላከያ ዘይት", d:"Onion-based oil made to care for hair prone to falling.", da:"ለሚረግፍ ፀጉር እንክብካቤ የተዘጋጀ የሽንኩርት ዘይት።", s:"300ml"},
  {t:"oil", dir:"images", img:"cloves_hair_oil", cut:0, c:"#6b4030", en:"Cloves Hair Oil", am:"የቅርንፉድ የፀጉር ዘይት", d:"A warm, aromatic clove oil for everyday scalp and hair care.", da:"ለዕለታዊ የራስ ቆዳ እና የፀጉር እንክብካቤ የሚሆን የቅርንፉድ ዘይት።", s:"300ml"},
  {t:"oil", dir:"images-bg", img:"jojoba_hair_moisturizer_oil", cut:1, c:"#d9822b", en:"Jojoba Hair Moisturizer Oil", am:"የጆጆባ ፀጉር ማለስለሻ ዘይት", d:"Light jojoba oil that moisturizes and softens hair.", da:"ፀጉርን የሚያለሰልስ እና እርጥበት የሚሰጥ ቀላል የጆጆባ ዘይት።", s:"300ml"},
  {t:"oil", dir:"images-bg", img:"tea_tree_anti_dandruff_oil", cut:1, c:"#3a342d", en:"Tea Tree Anti Dandruff Hair Oil", am:"የሻይ ዛፍ የፎረፎር መከላከያ ዘይት", d:"Tea tree oil made to keep the scalp fresh and care for dandruff.", da:"የራስ ቆዳን የሚያድስ እና ፎረፎርን የሚንከባከብ የሻይ ዛፍ ዘይት።", s:"300ml"},
  {t:"oil", dir:"images-bg", img:"black_seed_hair", cut:1, c:"#3b2a1d", en:"Black Seed Hair Moisturizer Oil", am:"የጥቁር አዝሙድ የፀጉር ማለስለሻ ዘይት", d:"Rich black seed oil that moisturizes and conditions hair.", da:"ፀጉርን የሚያለሰልስ እና የሚንከባከብ የጥቁር አዝሙድ ዘይት።", s:"300ml"},
  {t:"oil", dir:"images-bg", img:"baby_hair_oil", cut:1, c:"#1a9e8f", en:"Baby Hair Oil", am:"የሕፃናት የፀጉር ዘይት", d:"A gentle oil made for little ones’ hair.", da:"ለሕፃናት ፀጉር የተዘጋጀ ለስላሳ ዘይት።", s:"300ml"},
  {t:"shampoo", dir:"images", img:"rosemary_shampoo", cut:0, c:"#2f4a36", en:"Rosemary Shampoo", am:"የሮዝመሪ ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"shampoo", dir:"images", img:"aloe_vera_shampoo", ext:"JPG", cut:0, c:"#1d5c45", en:"Aloe Vera Shampoo", am:"የአሎቬራ ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"shampoo", dir:"images", img:"onion_shampoo", ext:"JPG", cut:0, c:"#6d1a2e", en:"Onion Shampoo", am:"የሽንኩርት ሻምፑ", d:"For strong and healthy hair. For all hair types.", da:"ለጠንካራ እና ጤናማ ፀጉር። ለሁሉም የፀጉር አይነቶች።", s:"750ml"},
  {t:"cond", dir:"images", img:"rosemary_conditioner", cut:0, c:"#2f5a3a", en:"Rosemary Conditioner", am:"የሮዝመሪ ኮንዲሽነር", d:"Creamy rosemary conditioner for soft, manageable hair.", da:"ፀጉርን ለስላሳ እና ለመያዝ ቀላል የሚያደርግ የሮዝመሪ ኮንዲሽነር።", s:"500ml"},
  {t:"cond", dir:"images-bg", img:"aloe_vera_conditioner", cut:1, c:"#1d5c45", en:"Aloe Vera Conditioner", am:"የአሎቬራ ኮንዲሽነር", d:"Aloe vera conditioner that hydrates and softens.", da:"እርጥበት የሚሰጥ እና የሚያለሰልስ የአሎቬራ ኮንዲሽነር።", s:"500ml"},
  {t:"food", dir:"images", img:"carrot_hair_food", cut:0, c:"#e8741c", en:"Carrot Hair Food", am:"የካሮት ፀጉር ምግብ", d:"For healthy, long and shiny hair.", da:"ለጤናማ፣ ረጅም እና አንጸባራቂ ፀጉር።", s:""},
  {t:"food", dir:"images", img:"aloe_vera_hair_food", cut:0, c:"#3f9a2a", en:"Aloe Vera Hair Food", am:"የአሎቬራ ፀጉር ምግብ", d:"Moisturizes and nourishes, helps reduce breakage and adds natural shine.", da:"እርጥበት ይሰጣል፣ ይመግባል፣ መሰበርን ይቀንሳል እና ተፈጥሯዊ ብርሃን ይጨምራል።", s:""},
  {t:"food", dir:"images", img:"avocado_hair_food", cut:0, c:"#6a8f1f", en:"Avocado Hair Food", am:"የአቮካዶ ፀጉር ምግብ", d:"For healthy, long and shiny hair.", da:"ለጤናማ፣ ረጅም እና አንጸባራቂ ፀጉር።", s:""}
];

// extra cards (Jojoba Shampoo + the extra oils) come from benefits.js
P.push(...EXTRA);

// Homepage shows only these 4 (one oil, one shampoo, one conditioner, one hair food).
// To change one, replace the name with another product's "img" value.
const FEATURED = ["rosemary_hair_oil", "rosemary_shampoo", "aloe_vera_conditioner", "aloe_vera_hair_food"];

/* ---------- product cards ---------- */
const grid = document.getElementById('grid');
if (grid) {
  const preview = grid.dataset.mode === 'preview';

  const more = p => {
    const b = B[p.img];
    if (!b) return '';
    return `<div class="tog"><span data-am="ጥቅሞች">Benefits</span><i>+</i></div>
      <div class="more"><div><ul>${b.map(([e, a]) => `<li data-am="${a}">${e}</li>`).join('')}</ul></div></div>`;
  };

  const inner = p => `
    <div class="pic ${p.cut ? 'cut' : ''}">
      <img src="images/${p.img}.${p.ext||"jpg"}" alt="${p.en}" loading="lazy" onerror="this.parentNode.classList.add('noimg')" />
      <div class="ph" style="background:${p.c}" data-am="${p.am}">${p.en}</div>
    </div>
    <div class="info">
      <h3 data-am="${p.am}">${p.en}</h3>
      <p data-am="${p.da}">${p.d}</p>
      ${p.s ? `<span class="size">${p.s}</span>` : ''}
      ${preview ? `<div class="tog"><span data-am="ምርቱን ይመልከቱ">View product</span><i>→</i></div>` : more(p)}
    </div>`;

  if (preview) {
    grid.innerHTML = FEATURED.map(k => P.find(p => p.img === k)).filter(Boolean).map(p => `
      <a class="card rv" href="products.html#p-${p.img}" data-t="${p.t}">${inner(p)}</a>`).join('');
  } else {
    grid.innerHTML = P.map(p => `
      <article class="card rv ${B[p.img] ? 'has-more' : ''}" id="p-${p.img}" data-t="${p.t}" ${B[p.img] ? 'tabindex="0" role="button" aria-expanded="false"' : ''}>${inner(p)}</article>`).join('');

    const toggleCard = c => {
      const open = c.classList.toggle('open');
      c.setAttribute('aria-expanded', open);
      if (open) setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    };

    grid.addEventListener('click', e => {
      const c = e.target.closest('.has-more');
      if (c) toggleCard(c);
    });
    grid.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const c = e.target.closest('.has-more');
      if (!c) return;
      e.preventDefault();
      toggleCard(c);
    });

    // coming from a homepage card (products.html#p-...): open that product
    if (location.hash) {
      const c = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (c && c.classList.contains('has-more')) {
        c.classList.add('open');
        c.setAttribute('aria-expanded', 'true');
        setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'center' }), 400);
      }
    }
  }
}

/* ---------- category tabs (products page only) ---------- */
const tabs = document.getElementById('tabs');
if (tabs) {
  tabs.addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('on', t === b));
    document.querySelectorAll('.card').forEach(c => c.classList.toggle('hidden', b.dataset.f !== 'all' && c.dataset.t !== b.dataset.f));
  });
}

/* ---------- language toggle ---------- */
const tr = [...document.querySelectorAll('[data-am]')].filter(el => el.dataset.am !== '');
const trEmpty = [...document.querySelectorAll('[data-am=""]')];
tr.forEach(el => el.dataset.en = el.innerHTML);
trEmpty.forEach(el => el.dataset.en = el.innerHTML);
function setLang(l){
  tr.forEach(el => el.innerHTML = l === 'am' ? el.dataset.am : el.dataset.en);
  trEmpty.forEach(el => el.innerHTML = l === 'am' ? '' : el.dataset.en);   // English-only fragments vanish in Amharic
  document.documentElement.lang = l;
  document.getElementById('b-en').classList.toggle('on', l === 'en');
  document.getElementById('b-am').classList.toggle('on', l === 'am');
  try{ localStorage.setItem('wh-lang', l) }catch(e){}
}
document.getElementById('b-en').onclick = () => setLang('en');
document.getElementById('b-am').onclick = () => setLang('am');
try{ if(localStorage.getItem('wh-lang') === 'am') setLang('am') }catch(e){}

/* ---------- hero mouse parallax (homepage only) ---------- */
const hero = document.getElementById('hero');
if(hero && matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
    hero.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
  });
  hero.addEventListener('pointerleave', () => { hero.style.setProperty('--mx', 0); hero.style.setProperty('--my', 0); });
}

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target) } }), {threshold:.12});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* ---------- mobile menu ---------- */
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('mobile-drawer');
if (menuBtn && drawer) {
  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.textContent = '☰';
    });
  });
}

/* ---------- map card orbit (homepage only) ---------- */
const whLoc = document.getElementById('wh-loc-card');
const whOrbit = whLoc ? whLoc.querySelector('.wh-orbit') : null;
if (whLoc && whOrbit && matchMedia('(hover:hover)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches) {
  whLoc.addEventListener('pointermove', e => {
    const r = whLoc.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const dy = ((e.clientY - r.top) / r.height - 0.5) * 16;
    whOrbit.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  });
  whLoc.addEventListener('pointerleave', () => {
    whOrbit.style.transform = 'translate3d(0, 0, 0)';
  });
}

/* ---------- background lineup fades out toward Contact (homepage only) ---------- */
(function () {
  const bg = document.querySelector('.page-bg');
  const contact = document.getElementById('contact');
  if (!bg || !contact) return;

  const MAX = 0.7;
  function update() {
    const contactTop = contact.getBoundingClientRect().top + window.scrollY;
    const end = Math.max(1, contactTop - window.innerHeight * 0.5);
    const p = Math.min(Math.max(window.scrollY / end, 0), 1);
    bg.style.opacity = (MAX * (1 - p)).toFixed(3);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
