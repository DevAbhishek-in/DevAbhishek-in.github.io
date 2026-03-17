/* ─────────────────────────────────────
   Navbar — scroll effect + hamburger
───────────────────────────────────── */
const navbar   = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ─────────────────────────────────────
   Typewriter effect
───────────────────────────────────── */
const phrases  = ['Web Developer.', 'Cybersecurity Analyst.', 'Static Web Architect.'];
const typedEl  = document.getElementById('typed-text');
let   phraseIdx = 0;
let   charIdx   = 0;
let   deleting  = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  typedEl.textContent = current.slice(0, charIdx);

  let delay;
  if (!deleting && charIdx < current.length) {
    charIdx++;
    delay = 78;
  } else if (!deleting && charIdx === current.length) {
    deleting = true;
    delay = 1900;
  } else if (deleting && charIdx > 0) {
    charIdx--;
    delay = 38;
  } else {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 200;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ─────────────────────────────────────
   Fade-up on scroll (Intersection Observer)
───────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ─────────────────────────────────────
   Bento hover colours (set from data attrs)
───────────────────────────────────── */
document.querySelectorAll('.bento-item').forEach(card => {
  const color = card.dataset.color || '#00d2ff';
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow  = `0 20px 50px ${color}22`;
    card.style.borderColor = `${color}55`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow  = '';
    card.style.borderColor = card.dataset.border || `${color}22`;
  });
});

/* ─────────────────────────────────────
   Project card hover colours
───────────────────────────────────── */
document.querySelectorAll('.project-card').forEach(card => {
  const accent = card.dataset.accent || '#00d2ff';
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = `0 32px 64px rgba(0,0,0,0.5), 0 0 40px ${accent}15`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });
});

/* project demo buttons */
document.querySelectorAll('.project-btn').forEach(btn => {
  const card   = btn.closest('.project-card');
  const accent = card ? card.dataset.accent : '#00d2ff';
  btn.style.color       = accent;
  btn.style.borderColor = `${accent}40`;

  btn.addEventListener('mouseenter', () => {
    btn.style.background  = `${accent}12`;
    btn.style.borderColor = accent;
    btn.style.boxShadow   = `0 0 22px ${accent}28`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background  = 'transparent';
    btn.style.borderColor = `${accent}40`;
    btn.style.boxShadow   = '';
  });
});

/* ─────────────────────────────────────
   Contact cards hover
───────────────────────────────────── */
document.querySelectorAll('.contact-card').forEach(card => {
  const accent = card.dataset.accent || '#00d2ff';
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = `${accent}55`;
    card.style.background  = `${accent}07`;
    card.style.boxShadow   = `0 10px 30px ${accent}18`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '';
    card.style.background  = '';
    card.style.boxShadow   = '';
  });
});
