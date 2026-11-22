const projects = [
    {
        title: "Game Legends",
        description: "Plataforma web e mobile criada para apoiar desenvolvedores independentes de jogos. Conecta criadores e jogadores com sistema de avaliações, feedbacks e doações.",
        quote: "\"Democratizando o mercado indie — conectando quem cria com quem joga.\"",
        tipo: "fullstack",
        badge: "FULLSTACK",
        ano: "2025",
        techs: ["Spring Boot", "Flutter", "MySQL", "REST API"],
        cover: "imagens/tcc/indexsite.png",
        images: [
            "imagens/tcc/indexsite.png",
            "imagens/tcc/loginsite.png",
            "imagens/tcc/jogossite.png",
            "imagens/tcc/codigosite.png",
            "imagens/tcc/redefinirsenhasite.png",
            "imagens/tcc/suportesite.png",
            "imagens/tcc/categoriasapp.png",
            "imagens/tcc/jogoapp.png",
            "imagens/tcc/perfilapp.png",
            "imagens/tcc/pixapp.png"
        ],
        github: "https://github.com/izaalmd"
    },
    {
        title: "Game Legends — Protótipo",
        description: "Protótipo de UI/UX desenvolvido no Figma antes da implementação do app. Define a identidade visual, fluxo de navegação e experiência do usuário da plataforma.",
        quote: "\"Do conceito ao produto — onde tudo começou.\"",
        tipo: "prototipo",
        badge: "FIGMA",
        ano: "2024",
        techs: ["Figma", "UI/UX", "Prototipação"],
        cover: "imagens/tcc/figma_gamelegends/indexgl.png",
        images: [
            "imagens/tcc/figma_gamelegends/entrecomgl.png",
            "imagens/tcc/figma_gamelegends/logingl.png",
            "imagens/tcc/figma_gamelegends/indexgl.png",
            "imagens/tcc/figma_gamelegends/jogogl.png",
            "imagens/tcc/figma_gamelegends/boletogl.png",
            "imagens/tcc/figma_gamelegends/abagl.png"
        ],
        github: "https://github.com/izaalmd",
        figma: "https://www.figma.com/design/oXDOhUDOxdreTXsONHiHem/Game-legends-app?node-id=0-1"
    },
    {
        title: "Meu Cinema",
        description: "Catálogo pessoal de filmes, séries e animes com interface limpa e moderna. Permite visualizar detalhes, sinopses e avaliações dos títulos.",
        quote: "\"Seu universo de entretenimento em um só lugar.\"",
        tipo: "frontend",
        badge: "FRONTEND",
        ano: "2024",
        techs: ["HTML", "CSS", "JavaScript"],
        cover: "imagens/tcc/meucinema/1filmes.png",
        images: [
            "imagens/tcc/meucinema/1filmes.png",
            "imagens/tcc/meucinema/2sries.png",
            "imagens/tcc/meucinema/3animes.png",
            "imagens/tcc/meucinema/4detalhes.png",
            "imagens/tcc/meucinema/5detalhes.png"
        ],
        github: "https://github.com/izaalmd"
    },
    {
        title: "Jogo da Velha",
        description: "Jogo da velha clássico desenvolvido com lógica pura em JavaScript. Interface simples e funcional.",
        quote: "\"Simples, divertido e feito do zero.\"",
        tipo: "frontend",
        badge: "FRONTEND",
        ano: "2024",
        techs: ["HTML", "CSS", "JavaScript"],
        cover: "imagens/tcc/jogodavelha/image.png",
        images: [],
        github: "https://github.com/izaalmd"
    }
];

function createMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.3';
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'getElement querySelector length return undefined function call div selected checked option'.split(' ').join('').split('');
    const fontSize = 14;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);
    const colors = ['#00aaff', '#aa00ff', '#ff00ff', '#0066ff'];

    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drops.forEach((y, i) => {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.font = fontSize + 'px monospace';
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y * fontSize);
            if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }

    setInterval(draw, 40);
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.project-card, .tech-item, .cert-logo-item, .cert-lista li, .sobre-body, .sobre-header').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function renderProjects(filtro = 'todos') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    const filtered = filtro === 'todos' ? projects : projects.filter(p => p.tipo === filtro);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-img-wrap">
                <img src="${project.cover}" alt="${project.title}" class="project-cover">
                <span class="project-ano">${project.ano}</span>
                <span class="project-badge">${project.badge}</span>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <blockquote>${project.quote}</blockquote>
                <div class="project-techs">
                    ${project.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <a href="${project.github}" target="_blank" class="project-icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    ${project.figma ? `<a href="${project.figma}" target="_blank" class="proj-modal-figma-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-7 3.5A3.5 3.5 0 0 1 8.5 12H12v7H8.5A3.5 3.5 0 0 1 5 16zm0 0"/></svg> Figma</a>` : ''}
                    ${project.images.length > 0 ? `<button class="project-ver-mais" onclick="showProjectImages(projects.find(p=>p.title==='${project.title}'))">Ver mais <span>→</span></button>` : '<span class="project-em-dev">Em desenvolvimento</span>'}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.querySelectorAll('.filtro').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        renderProjects(btn.dataset.filtro);
    });
});

function showProjectImages(project) {
    const siteImages = project.images.filter(img => img.includes('site'));
    const appImages = project.images.filter(img => img.includes('app'));
    const otherImages = project.images.filter(img => !img.includes('site') && !img.includes('app'));

    const hasSections = siteImages.length > 0 && appImages.length > 0;

    let imagesHTML = '';
    if (project.title.includes('Game Legends')) {
        imagesHTML = `
            <p class="proj-modal-section-title">Site</p>
            <div class="proj-modal-grid">${siteImages.map(img => `<img src="${img}" alt="Game Legends Site">`).join('')}</div>
            <p class="proj-modal-section-title">App Mobile</p>
            <div class="proj-modal-grid">${appImages.map(img => `<img src="${img}" alt="Game Legends App">`).join('')}</div>
            <p class="proj-modal-section-title">Protótipo Figma</p>
            <div class="proj-modal-figma-btn-wrap">
                <a href="https://www.figma.com/design/oXDOhUDOxdreTXsONHiHem/Game-legends-app?node-id=0-1" target="_blank" class="proj-modal-figma-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-7 3.5A3.5 3.5 0 0 1 8.5 12H12v7H8.5A3.5 3.5 0 0 1 5 16zm0 0"/></svg>
                    Abrir no Figma
                </a>
            </div>
            <div class="proj-modal-grid">
                ${['abagl','boletogl','entrecomgl','indexgl','inicialgl','jogogl','logingl'].map(name =>
                    `<img src="imagens/tcc/figma_gamelegends/${name}.png" alt="Prototipo ${name}">`
                ).join('')}
            </div>
        `;
    } else if (hasSections) {
        imagesHTML = `
            <p class="proj-modal-section-title">Site</p>
            <div class="proj-modal-grid">${siteImages.map(img => `<img src="${img}" alt="${project.title}">`).join('')}</div>
            <p class="proj-modal-section-title">App Mobile</p>
            <div class="proj-modal-grid">${appImages.map(img => `<img src="${img}" alt="${project.title}">`).join('')}</div>
        `;
    } else if (project.title.includes('Game Legends') && project.tipo === 'prototipo') {
        imagesHTML = `
            <div class="proj-modal-figma-btn-wrap">
                <a href="${project.figma}" target="_blank" class="proj-modal-figma-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zm0 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm-7 3.5A3.5 3.5 0 0 1 8.5 12H12v7H8.5A3.5 3.5 0 0 1 5 16zm0 0"/></svg>
                    Abrir no Figma
                </a>
            </div>
            <p class="proj-modal-section-title">Telas do Protótipo</p>
            <div class="proj-modal-grid">${project.images.map(img => `<img src="${img}" alt="Prototipo">`).join('')}</div>
        `;
    } else {
        const imgs = [...otherImages, ...siteImages, ...appImages];
        imagesHTML = `<div class="proj-modal-grid">${imgs.map(img => `<img src="${img}" alt="${project.title}">`).join('')}</div>`;
    }

    const overlay = document.createElement('div');
    overlay.className = 'proj-modal-overlay';
    overlay.innerHTML = `
        <div class="proj-modal">
            <button class="proj-modal-close" onclick="this.closest('.proj-modal-overlay').remove()">✕</button>
            <span class="proj-modal-badge">${project.badge}</span>
            <h2 class="proj-modal-title">${project.title}</h2>
            <p class="proj-modal-desc">${project.description}</p>
            <div class="proj-modal-techs">
                ${project.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <p class="proj-modal-section-title">Imagens do projeto</p>
            ${imagesHTML}
        </div>
    `;

    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
    });
    document.body.appendChild(overlay);
}

function createStars() {
    const configs = [
        { id: 'hero-stars', count: 18, dark: true },
        { id: 'sobre-stars', count: 12, dark: false },
        { id: 'cert-stars', count: 10, dark: false },
        { id: 'contato-stars', count: 10, dark: false },
    ];
    const darkColors = ['#c77dff','#ff79c6','#bd93f9','#ffffff','#e0aaff','#f8c8ff','#a0c4ff'];
    const lightColors = ['#9b5de5','#c77dff','#e879f9','#f472b6','#a78bfa','#7c3aed','#db2777'];
    const starPaths = [
        'M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z',
        'M12 1l3 8h8l-6.5 5 2.5 8L12 17.5 5 22l2.5-8L1 9h8z',
        'M12 2l2 6h6l-5 4 2 6-5-3.5L7 18l2-6-5-4h6z',
    ];
    configs.forEach(({ id, count, dark }) => {
        const container = document.getElementById(id);
        if (!container) return;
        const colors = dark ? darkColors : lightColors;
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 22 + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const path = starPaths[Math.floor(Math.random() * starPaths.length)];
            const dur = Math.random() * 6 + 4;
            const delay = Math.random() * 6;
            const opacity = dark ? (Math.random() * 0.5 + 0.3) : (Math.random() * 0.3 + 0.15);
            star.style.cssText = `left:${Math.random()*95}%;top:${Math.random()*90}%;animation-duration:${dur}s;animation-delay:-${delay}s;opacity:${opacity};`;
            star.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="${path}"/></svg>`;
            container.appendChild(star);
        }
    });
}

function typeWriter() {
    const texts = ['Desenvolvedora', 'UI/UX Designer', 'Fullstack Dev', 'Criativa'];
    let i = 0, j = 0, deleting = false;
    const el = document.getElementById('typing-text');
    if (!el) return;
    function tick() {
        const cur = texts[i];
        el.textContent = deleting ? cur.substring(0, j--) : cur.substring(0, j++);
        if (!deleting && j === cur.length + 1) { deleting = true; setTimeout(tick, 1800); return; }
        if (deleting && j === 0) { deleting = false; i = (i + 1) % texts.length; }
        setTimeout(tick, deleting ? 50 : 100);
    }
    tick();
}

function updateDots() {
    const sections = document.querySelectorAll('section[id]');
    const dots = document.querySelectorAll('.dot');
    const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((sec, idx) => {
        const top = sec.offsetTop - window.innerHeight / 2;
        const bottom = top + sec.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            dots.forEach(d => d.classList.remove('active'));
            if (dots[idx]) dots[idx].classList.add('active');
        }
    });
}

document.body.addEventListener('scroll', updateDots);
updateDots();

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

createMatrix();
createStars();
typeWriter();
renderProjects();
observeElements();
