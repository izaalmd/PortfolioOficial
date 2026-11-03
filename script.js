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
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 1000; display: flex;
        align-items: center; justify-content: center; flex-direction: column;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        max-width: 90%; max-height: 90%; overflow-y: auto;
        text-align: center; padding: 20px;
    `;
    
    if (project.title.includes('Game Legends')) {
        const siteImages = project.images.filter(img => img.includes('site'));
        const appImages = project.images.filter(img => img.includes('app'));
        
        content.innerHTML = `
            <h2 style="color: #00ffff; margin-bottom: 20px;">${project.title}</h2>
            <div style="color: #fff; text-align: left; margin-bottom: 30px; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
                <p style="margin-bottom: 20px;">Game Legends é uma plataforma web e mobile criada para apoiar e dar visibilidade a desenvolvedores independentes de jogos, especialmente iniciantes. O projeto conecta criadores e jogadores em um ambiente colaborativo, permitindo a publicação de jogos, avaliações gratuitas, feedbacks da comunidade e um sistema de doações diretas para financiar projetos em desenvolvimento.</p>
                
                <p style="margin-bottom: 20px;">Desenvolvida com arquitetura moderna e escalável, a plataforma integra frontend responsivo, backend em Spring Boot, API RESTful e aplicação mobile em Flutter, garantindo segurança, usabilidade e consistência de dados entre web e mobile. O sistema conta com autenticação segura, diferentes níveis de acesso (cliente, desenvolvedor e administrador), moderação de conteúdo, filtros avançados de busca e controle de avaliações.</p>
                
                <p style="margin-bottom: 20px;">Além do aspecto técnico, a Game Legends possui um forte viés social, promovendo inclusão, inovação e democratização no mercado de games, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS 9). O projeto busca reduzir barreiras enfrentadas por desenvolvedores indie e fortalecer a relação entre quem cria e quem joga.</p>
                
                <p style="color: #00ffff; font-weight: bold; margin-top: 30px;">Algumas fotos do projeto:</p>
            </div>
            <h3 style="color: #fff; margin: 20px 0 10px 0;">🌐 Site</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
                ${siteImages.map(img => `
                    <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="Site Game Legends">
                `).join('')}
            </div>
            <h3 style="color: #fff; margin: 20px 0 10px 0;">📱 App</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                ${appImages.map(img => `
                    <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="App Game Legends">
                `).join('')}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top: 20px; padding: 10px 20px; background: #00ffff;
                color: #000; border: none; border-radius: 5px; cursor: pointer;
            ">Fechar</button>
        `;
    } else if (project.title.includes('Meu Cinema')) {
        content.innerHTML = `
            <h2 style="color: #00ffff; margin-bottom: 20px;">${project.title}</h2>
            <div style="color: #fff; text-align: left; margin-bottom: 30px; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
                <p style="margin-bottom: 20px;">Meu Cinema é um catálogo pessoal simples e intuitivo onde organizo filmes, séries e animes que gosto ou pretendo assistir. O projeto foi desenvolvido com foco na experiência do usuário, oferecendo uma interface limpa e moderna para navegar pelo conteúdo.</p>
                
                <p style="margin-bottom: 20px;">A aplicação permite visualizar detalhes dos títulos, incluindo sinopses, avaliações e informações técnicas. Com design responsivo e navegação fluida, o catálogo oferece uma experiência agradável tanto em dispositivos móveis quanto desktop.</p>
                
                <p style="color: #00ffff; font-weight: bold; margin-top: 30px;">Algumas fotos do projeto:</p>
            </div>
            <h3 style="color: #fff; margin: 20px 0 10px 0;">🎬 Aplicação</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                ${project.images.map(img => `
                    <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="Meu Cinema">
                `).join('')}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top: 20px; padding: 10px 20px; background: #00ffff;
                color: #000; border: none; border-radius: 5px; cursor: pointer;
            ">Fechar</button>
        `;
    }
    
    modal.appendChild(content);
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
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

            star.style.cssText = `
                left: ${Math.random() * 95}%;
                top: ${Math.random() * 90}%;
                animation-duration: ${dur}s;
                animation-delay: -${delay}s;
                opacity: ${opacity};
            `;

            star.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}"><path d="${path}"/></svg>`;
            container.appendChild(star);
        }
    });
}


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
