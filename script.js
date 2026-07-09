// Portfolio data and interactions for a clean, fast single-page site
(function () {
    const placeholderThumb = 'assets/thumbs/placeholder.svg';

    const categoryLabels = {
        'All': 'Vše',
        '3D': '3D',
        'Posters': 'Plakáty',
        'Campaigns': 'Kampaně',
        'Video&Game': 'Video & Hry'
    };
    const labelFor = (c) => categoryLabels[c] || c;

    const portfolioItems = [
        // 3D graphics
        {
            id: '3d-1', title: 'ArchViz - Liminální prostor', category: '3D',
            description: 'Architektonická vizualizace liminálního prostoru.',
            Role: '3D grafik', Nástroje: ['Blender'], Předmět: '4ME213 – 3D grafika', outcome: 'Improved hard-surface workflow.',
            folder: 'assets/3D/ARCHVIZ', extension: 'png', thumb: 'assets/3D/ARCHVIZ/1.png',
            links: {}
        },
        {
            id: '3d-2', title: 'Maskot - Plyšové auto', category: '3D',
            description: '3D model plyšového auta jako maskot.',
            Role: '3D grafik', Nástroje: ['Blender'], outcome: 'Balanced composition and light.',
            folder: 'assets/3D/CAR', files: ['car1.png', 'car2.png'], thumb: 'assets/3D/CAR/car1.png',
            links: {}
        },
        {
            id: '3d-3', title: 'Concept art - Gun', category: '3D',
            description: 'Model zbraně navržené na základě vlastního concept artu.',
            Role: '3D grafik', Nástroje: ['Blender'], outcome: 'Reusable material library.',
            folder: 'assets/3D/GUN', files: ['Untitled.png', 'Untitled2.png'], thumb: 'assets/3D/GUN/Untitled.png',
            links: {}
        },
        {
            id: '3d-4', title: 'Charakter pro videohru', category: '3D',
            description: 'Úprava a animace modelu nepřátelského NPC pro hru Pale Trial.',
            Role: '3D grafik', Nástroje: ['Blender'], Předmět: '4ME383 – Základy herního designu', outcome: '',
            folder: 'assets/3D/SPIDER', files: ['potvora.png', 'potvora2.png'], thumb: 'assets/3D/SPIDER/potvora.png',
            links: {}
        },

        // Posters / graphic design
        {
            id: 'poster-1', title: 'Poster: Kvartet Plamenomet + BackStep', category: 'Posters',
            description: 'Poster design pro koncert Kvartet Plamenomet a BackStep.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe Photoshop','Blender'], outcome: 'Eye-catching poster design.',
            images: ['assets/POSTERS/kvartetbackstep.jpg'], thumb: 'assets/POSTERS/kvartetbackstep.jpg', links: {}
        },
        {
            id: 'poster-2', title: 'Poster: Kvartet Plamenomet + Shizzle Orchestra', category: 'Posters',
            description: 'Poster design pro koncert Kvartet Plamenomet a Shizzle Orchestra.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator'], outcome: 'Eye-catching poster design.',
            images: ['assets/POSTERS/kvartetshizzle.jpg'], thumb: 'assets/POSTERS/kvartetshizzle.jpg', links: {}
        },
        {
            id: 'poster-3', title: 'Poster: Death Grips Berlin', category: 'Posters',
            description: 'Poster design pro koncert Death Grips v Berlíně.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator'], Předmět: '4ME110 – Základy počítačové grafiky', outcome: 'Energetický plakát s výraznou typografií.',
            images: ['assets/POSTERS/deathgrips.jpg'], thumb: 'assets/POSTERS/deathgrips.jpg', links: {}
        },

        // Campaigns (case studies)
        {
            id: 'camp-ecomail', title: 'Ecomail Campaign', category: 'Campaigns', caseStudy: true, year: '2024',
            description: 'Marketingové vizuály zaměřené na srozumitelnost a přehlednost.',
            Role: 'Grafik', Nástroje: ['Adobe Photoshop','Adobe Illustrator'], Předmět: '4ME251 – Řízení multimediálních projektů (kreativita a produkce)', outcome: 'Consistent visual set increasing engagement.',
            folder: 'assets/ECOMAIL', pattern: 'EcomailPrezentace2_{i}', extension: 'jpg', thumb: 'assets/ECOMAIL/EcomailPrezentace2_1.jpg',
            links: {}
        },
        {
            id: 'camp-fis', title: 'VŠE Green FIS Campaign', category: 'Campaigns', caseStudy: true, year: '2023',
            description: 'University faculty campaign emphasizing information architecture.',
            Role: 'Grafik', Nástroje: ['Adobe InDesign','Adobe Illustrator'], Předmět: '4ME251 – Řízení multimediálních projektů (kreativita a produkce)', outcome: 'Unified look across materials.',
            folder: 'assets/CSR', pattern: 'CSR-prez-nahled_{i}', extension: 'jpg', thumb: 'assets/CSR/CSR-prez-nahled_1.jpg',
            links: {}
        },
        {
            id: 'camp-pps', title: 'PPS (Pražské popelářské služby) – Visual Identity', category: 'Campaigns', caseStudy: true, year: '2022',
            description: 'Fictional brand with complete identity system: logo, color, typography.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe InDesign'], Předmět: '4ME110 – Základy počítačové grafiky', outcome: 'Coherent brand guide and assets.',
            folder: 'assets/PPS', files: [
                'banner1.png','banner2.png','banner3.png',
                'mockup1.png','mockup2.png','mockup3.png','mockup4.png','mockup5.png',
                'case_study.jpg'
            ],
            thumb: 'assets/PPS/logo.jpg', links: {}
        },
        {
            id: 'camp-jezevec', title: 'Vizuál filmu pro Donio - Jezevec', category: 'Campaigns', caseStudy: true, year: '2021',
            description: 'Vizuál filmu v souladu s jeho tónem a poselstvím.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe Photoshop'], outcome: 'Consistent visuals for outreach.',
            folder: 'assets/JEZEVEC', extension: 'png', thumb: 'assets/JEZEVEC/1.png',
            links: {}
        },


        // Video & Game (work cards)
        {
            id: 'vid-cowboy', title: 'Cowboy Stuff - Animace', category: 'Video&Game',
            description: 'Krátká animace Cowboy Stuff.',
            Role: 'Animátor', Nástroje: ['Adobe After Effects','Adobe Photoshop'], Předmět: '4ME314 – Grafika a animace', outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=ZYn0Ihbhkpk',
            thumb: 'https://img.youtube.com/vi/ZYn0Ihbhkpk/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'vid-mezi', title: 'Mezi Zdmi - Dokument', category: 'Video&Game',
            description: 'Dokumentární film Mezi Zdmi.',
            Role: 'Režie', Nástroje: ['DaVinci Resolve','Premiere Pro'], Předmět: '4ME231 – Základy audiovizuální komunikace', outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=nDyv7YVN5Lw',
            thumb: 'https://img.youtube.com/vi/nDyv7YVN5Lw/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'vid-synteza', title: 'Syntéza - Reportáž', category: 'Video&Game',
            description: 'Reportáž Syntéza.',
            Role: 'Režie', Nástroje: ['DaVinci Resolve','Premiere Pro'], Předmět: '4ME231 – Základy audiovizuální komunikace', outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=F6IqYw3F4_g',
            thumb: 'https://img.youtube.com/vi/F6IqYw3F4_g/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'game-pale', title: 'Pale Trial - Videohra', category: 'Video&Game',
            description: 'Videohra The Pale Trial – příspěvek k vývoji.',
            Role: 'Vývojář, Animátor', Nástroje: ['Godot','Blender'], Předmět: '4ME383 – Základy herního designu', outcome: 'Cleaner UI and asset pipeline.',
            images: ['assets/PALETRIAL/paletrial.jpg'], thumb: 'assets/PALETRIAL/paletrial.jpg',
            links: { 'Hrát na itch.io': 'https://aristrela.itch.io/the-pale-trial' }
        },
        {
            id: 'anim-printer', title: 'Printer - 3D animace', category: 'Video&Game', categories: ['Video&Game', '3D'],
            description: '3D animace dle originálního námětu.',
            Role: 'Animace, 3D grafik', Nástroje: ['Blender','DaVinci Resolve'], Předmět: '4ME315 – 3D animace (principy a aplikace)', outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=RagS8EM1Puc',
            thumb: 'https://img.youtube.com/vi/RagS8EM1Puc/hqdefault.jpg',
            images: [], links: {}
        }
    ];

    const externalLinks = [
        { id: 'link-doc', title: 'Documentary (directed by me)', href: '#', description: 'Long-form storytelling project.' },
        { id: 'link-report', title: 'Reportage (directed by me)', href: '#', description: 'On-location coverage.' },
        { id: 'link-anim', title: 'Animation (created by me)', href: '#', description: 'Motion study and experiments.' },
        { id: 'link-game', title: 'Videogame (I contributed)', href: '#', description: 'Collaborative dev experience.' },
    ];

    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Theme (no toggle in UI; respect stored preference and allow manual change via devtools)
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    // Rendering helpers
    const workGrid = document.getElementById('work-grid');
    let currentFilter = 'All';

    function el(tag, attrs = {}, children = []) {
        const node = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => {
            if (k === 'class') node.className = v;
            else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
            else if (k in node) node[k] = v; else node.setAttribute(k, v);
        });
        children.forEach(ch => node.append(ch));
        return node;
    }

    function img(src, alt) {
        const i = el('img', { alt: alt || '', loading: 'lazy' });
        i.draggable = false;
        i.src = src || placeholderThumb;
        i.classList.add('skeleton');
        i.addEventListener('load', () => i.classList.remove('skeleton'));
        return i;
    }

    function createCard(item) {
        const card = el('article', { class: 'card', tabindex: 0, role: 'group', 'aria-label': item.title });
        const thumbSrc = item.thumb
            || (item.images && item.images[0])
            || (item.folder ? `${item.folder}/${item.pattern ? item.pattern.replace('{i}', 1) : 1}.${item.extension || 'png'}` : placeholderThumb);
        const cats = item.categories || [item.category];
        const badge = el('span', { class: 'thumb-badge' }, [document.createTextNode(labelFor(cats[0]))]);
        const thumb = el('div', { class: 'thumb' }, [img(thumbSrc, item.title), badge]);
        const body = el('div', { class: 'body' });
        body.append(el('div', { class: 'title' }, [document.createTextNode(item.title)]));
        body.append(el('div', { class: 'meta' }, [document.createTextNode(cats.map(labelFor).join(' · '))]));
        const actions = el('div', { class: 'actions' });
        if (item.links && item.links.website) {
            const extBtn = el('a', { class: 'btn btn-outline', href: item.links.website, target: '_blank', rel: 'noopener' }, [document.createTextNode('Visit')]);
            actions.append(extBtn);
            body.append(actions);
        }
        card.append(thumb, body);
        card.addEventListener('click', () => openModal(item));
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(item); });
        card.addEventListener('mouseenter', () => onCardHover(card));
        return card;
    }

    // Carousel state
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let carouselPaused = reduceMotion;
    let carouselRaf = null;
    let dragMoved = false;
    let dragActive = false;
    let centerSuppressUntil = 0;

    function centerCard(card) {
        const c = workGrid.getBoundingClientRect();
        const k = card.getBoundingClientRect();
        const delta = (k.left + k.width / 2) - (c.left + c.width / 2);
        if (Math.abs(delta) < 2) return;
        centerSuppressUntil = Date.now() + 550;
        workGrid.scrollTo({ left: workGrid.scrollLeft + delta, behavior: 'smooth' });
    }

    function onCardHover(card) {
        // Don't fight a drag, and ignore the cascade of mouseenter events
        // that fire while a smooth centering scroll is animating.
        if (dragActive) return;
        if (Date.now() < centerSuppressUntil) return;
        centerCard(card);
    }

    function startCarousel() {
        if (carouselRaf) { cancelAnimationFrame(carouselRaf); carouselRaf = null; }
        const speed = 0.5; // px per frame
        function step() {
            // Stop the loop entirely while paused so the page can go idle
            if (carouselPaused) { carouselRaf = null; return; }
            const half = workGrid.scrollWidth / 2;
            if (half > 0) {
                workGrid.scrollLeft += speed;
                if (workGrid.scrollLeft >= half) workGrid.scrollLeft -= half;
            }
            carouselRaf = requestAnimationFrame(step);
        }
        carouselRaf = requestAnimationFrame(step);
    }

    function pauseCarousel() { carouselPaused = true; }
    function resumeCarousel() {
        if (reduceMotion) return;
        carouselPaused = false;
        startCarousel();
    }

    function renderWork() {
        const items = portfolioItems.filter(i => {
            if (currentFilter === 'All') return true;
            return (i.categories || [i.category]).includes(currentFilter);
        });
        const track = el('div', { class: 'carousel-track' });
        // Two copies for a seamless infinite loop
        items.forEach(item => track.append(createCard(item)));
        items.forEach(item => track.append(createCard(item)));
        workGrid.classList.remove('grid');
        workGrid.classList.add('carousel');
        workGrid.innerHTML = '';
        workGrid.append(track);
        workGrid.scrollLeft = 0;
        startCarousel();
    }

    // Pause on hover / focus, resume on leave
    (function initCarouselInteractions() {
        workGrid.addEventListener('mouseenter', pauseCarousel);
        workGrid.addEventListener('mouseleave', resumeCarousel);
        workGrid.addEventListener('focusin', pauseCarousel);
        workGrid.addEventListener('focusout', resumeCarousel);

        // Horizontal scroll with the mouse wheel while hovering
        workGrid.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                workGrid.scrollLeft += e.deltaY;
                e.preventDefault();
            }
        }, { passive: false });

        // Drag to browse
        let down = false, startX = 0, startScroll = 0;
        workGrid.addEventListener('pointerdown', (e) => {
            if (e.button !== 0) return;
            down = true; dragActive = false; dragMoved = false;
            startX = e.clientX; startScroll = workGrid.scrollLeft;
            workGrid.classList.add('dragging');
        });
        window.addEventListener('pointermove', (e) => {
            if (!down) return;
            const dx = e.clientX - startX;
            if (Math.abs(dx) > 4) { dragMoved = true; dragActive = true; }
            workGrid.scrollLeft = startScroll - dx;
        });
        window.addEventListener('pointerup', () => {
            down = false;
            workGrid.classList.remove('dragging');
            // Keep suppressing hover-centering briefly after a drag release
            centerSuppressUntil = Date.now() + 200;
            setTimeout(() => { dragActive = false; }, 0);
        });
        // Suppress the click that follows a drag so it doesn't open the modal
        workGrid.addEventListener('click', (e) => {
            if (dragMoved) { e.stopPropagation(); e.preventDefault(); dragMoved = false; }
        }, true);
    })();

    // Projects section removed

    // Photo section removed

    // Links section removed

    // Filters
    document.querySelectorAll('.filters .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filters .chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
            chip.classList.add('active');
            chip.setAttribute('aria-selected', 'true');
            currentFilter = chip.dataset.filter;
            renderWork();
        });
    });

    // Modal logic
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalRole = modal.querySelector('.modal-role');
    const modalTools = modal.querySelector('.modal-tools');
    const modalSubjectRow = modal.querySelector('.modal-subject-row');
    const modalSubject = modal.querySelector('.modal-subject');
    const modalStudyNote = modal.querySelector('.modal-study-note');
    const modalLinks = modal.querySelector('.modal-links');
    const modalGallery = modal.querySelector('.modal-gallery');
    let lastFocus = null;

    function openModal(item) {
        pauseCarousel();
        lastFocus = document.activeElement;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.description;
        modalRole.textContent = item.Role || item.role || '';
        modalTools.textContent = (item.Nástroje || item.tools || []).join(', ');
        const subject = item.Předmět || item.subject || '';
        if (subject) {
            modalSubject.textContent = subject;
            modalSubjectRow.hidden = false;
            modalStudyNote.hidden = false;
        } else {
            modalSubject.textContent = '';
            modalSubjectRow.hidden = true;
            modalStudyNote.hidden = true;
        }
        modalLinks.innerHTML = '';
        if (item.links) {
            Object.entries(item.links).forEach(([key, href]) => {
                const a = el('a', { class: 'btn btn-outline', href, target: '_blank', rel: 'noopener' }, [document.createTextNode(key)]);
                modalLinks.append(a);
            });
        }
        modalGallery.innerHTML = '';

        if (item.videoUrl) {
            // Embed YouTube player and also offer an external open link
            const playLink = el('a', { class: 'btn btn-outline', href: item.videoUrl, target: '_blank', rel: 'noopener' }, [document.createTextNode('Přehrát na YouTube')]);
            modalLinks.append(playLink);

            let embed = item.videoUrl;
            embed = embed.replace('watch?v=', 'embed/');
            embed = embed.replace('youtu.be/', 'www.youtube.com/embed/');

            const iframe = document.createElement('iframe');
            iframe.src = embed;
            iframe.title = item.title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            modalGallery.append(iframe);
        }

        if (item.folder) {
            const filenames = item.files && item.files.length
                ? item.files
                : null;
            if (filenames) {
                filenames.forEach(name => {
                    const src = `${item.folder}/${name}`;
                    const imageEl = img(src, item.title);
                    imageEl.loading = 'eager';
                    modalGallery.append(imageEl);
                    imageEl.addEventListener('error', () => imageEl.remove());
                });
            } else {
                const maxCount = 30;
                for (let i = 1; i <= maxCount; i++) {
                    const filename = item.pattern ? item.pattern.replace('{i}', i) : i;
                    const src = `${item.folder}/${filename}.${item.extension || 'png'}`;
                    const imageEl = img(src, item.title);
                    imageEl.loading = 'eager';
                    modalGallery.append(imageEl);
                    imageEl.addEventListener('error', () => imageEl.remove());
                }
            }
        } else if (!item.videoUrl) {
            (item.images || [placeholderThumb]).forEach(src => {
                const imageEl = img(src, item.title);
                imageEl.loading = 'eager';
                modalGallery.append(imageEl);
            });
        }
        modal.setAttribute('aria-hidden', 'false');
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.focus();
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        resumeCarousel();
        if (lastFocus) lastFocus.focus();
    }

    modal.addEventListener('click', (e) => { if (e.target.matches('[data-close]')) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });

    // Focus trap inside modal
    modal.addEventListener('keydown', (e) => {
        if (modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key !== 'Tab') return;
        const focusables = modal.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0]; const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Contact form: open mailto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const d = new FormData(form);
        const name = encodeURIComponent(d.get('name'));
        const email = encodeURIComponent(d.get('email'));
        const message = encodeURIComponent(d.get('message'));
        const subject = `Portfolio Contact from ${name}`;
        const body = `Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    });

    // Init
    renderWork();
})();
