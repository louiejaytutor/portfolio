try {
    lucide.createIcons();
} catch (e) {
    console.warn('Icon init failed:', e);
}

setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('in'));
}, 1500);

const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = document.getElementById('menuIconOpen');
const menuIconClose = document.getElementById('menuIconClose');
function setMenuOpen(isOpen) {
    mobileMenu.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    if (menuIconOpen) menuIconOpen.style.display = isOpen ? 'none' : '';
    if (menuIconClose) menuIconClose.style.display = isOpen ? '' : 'none';
}
menuBtn.addEventListener('click', () => setMenuOpen(!mobileMenu.classList.contains('open')));
const mobileCta = mobileMenu.querySelector('.btn-primary');
if(mobileCta) mobileCta.addEventListener('click', () => setMenuOpen(false));

const sections = document.querySelectorAll('section[id]');
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const target = document.getElementById(link.dataset.target);
        target.scrollIntoView({behavior:'smooth'});
        setMenuOpen(false);
    });
});

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-target="${entry.target.id}"]`).forEach(l => l.classList.add('active'));
        }
    });
}, { rootMargin:'-45% 0px -45% 0px' });
sections.forEach(s => navObserver.observe(s));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold:0.15 });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));

const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            let current = 0;
            const duration = 1400;
            const start = performance.now();
            function tick(now) {
                const progress = Math.min((now - start) / duration, 1);
                current = Math.floor(progress * target);
                el.textContent = current;
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = target;
            }
            requestAnimationFrame(tick);
            counterObserver.unobserve(el);
        }
    });
}, {threshold:0.5});
counters.forEach(c => counterObserver.observe(c));

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));