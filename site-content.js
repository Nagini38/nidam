// Nidam - Système de gestion de contenu côté client
// Stocke et charge le contenu depuis localStorage

const SiteContent = {
    STORAGE_KEY: 'nidam_site_content',

    // Contenu par défaut (celui codé en dur dans le HTML original)
    defaults: {
        // === PAGE ACCUEIL ===
        hero_image: 'https://a0.muscache.com/im/pictures/ce526b31-07d8-41a5-ae85-1c4f5d3c4294.jpg?aki_policy=xx_large',
        hero_title: 'Nidam',
        hero_subtitle: 'Lac de Paladru · Bilieu · Auvergne-Rhône-Alpes',
        hero_rating: '★ 4.95 · 187 avis · Coup de cœur voyageurs',

        intro_title: 'Bienvenue',
        intro_p1: 'Perchée dans les hauteurs de Bilieu, au bord du magnifique lac de Paladru, cette demeure vous offre une expérience unique alliant détente et nature. Avec son spa privatif 6 places et ses 100m² d\'espace de vie soigneusement aménagés, c\'est le refuge idéal pour se ressourcer en famille ou entre amis.',
        intro_p2: 'Le logement comprend une cuisine entièrement équipée, un salon spacieux avec canapé d\'angle convertible, une salle à manger conviviale et trois chambres dont une avec salle de bain privative. Une seconde salle de bain avec douche et baignoire ainsi qu\'un toilette séparé complètent cet ensemble pensé pour votre confort. Chaque espace a été conçu pour créer une atmosphère chaleureuse et accueillante.',
        intro_p3: 'À l\'extérieur, profitez d\'un jardin clos avec terrasse aménagée, table extérieure et plancha à gaz pour vos repas en plein air. Une carte d\'accès au lac est mise à disposition dans le logement pour vos moments de baignade et de détente au bord de l\'eau. Trois places de stationnement sont disponibles sur place. Le ménage, les draps et les serviettes sont inclus dans votre location pour un séjour en toute sérénité.',

        // Images aperçu galerie (page accueil)
        home_gallery: [
            { src: 'https://a0.muscache.com/im/pictures/1757e02b-e8e9-4d9a-a302-90719e342631.jpg?aki_policy=xx_large', alt: 'Vue principale' },
            { src: 'https://a0.muscache.com/im/pictures/05d92282-9f13-4632-bd89-a07bb0835c0d.jpg?aki_policy=xx_large', alt: 'Extérieur' },
            { src: 'https://a0.muscache.com/im/pictures/d8002c3e-8403-4665-812c-1a492c08e844.jpg?aki_policy=xx_large', alt: 'Terrasse' },
            { src: 'https://a0.muscache.com/im/pictures/fc7b92ab-3dd2-4fa3-80ff-14cba8858b44.jpg?aki_policy=xx_large', alt: 'Piscine' },
            { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3NzA0MTM%3D/original/5ffd9676-1243-4511-8782-a3e7345b39f9.jpeg?aki_policy=xx_large', alt: 'Jardin' },
            { src: 'https://a0.muscache.com/im/pictures/58f01b10-5fd7-46f4-8fc5-6405096163ef.jpg?aki_policy=xx_large', alt: 'Vue panoramique' }
        ],

        // === PAGE GALERIE ===
        gallery_title: 'Galerie Photos',
        gallery_subtitle: '12 photos · Découvrez tous les espaces de notre villa au lac de Paladru',
        gallery_images: [
            { src: 'https://a0.muscache.com/im/pictures/ce526b31-07d8-41a5-ae85-1c4f5d3c4294.jpg?aki_policy=xx_large', alt: 'Vue principale de la villa Nidam' },
            { src: 'https://a0.muscache.com/im/pictures/eff396fd-edcd-4806-8bce-57331f722de0.jpg?aki_policy=xx_large', alt: 'Villa vue d\'ensemble' },
            { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3NzA0MTM%3D/original/2e38a0f8-f043-413b-88d6-e9ba2354ac91.jpeg?aki_policy=xx_large', alt: 'Spa privatif 6 places' },
            { src: 'https://a0.muscache.com/im/pictures/1757e02b-e8e9-4d9a-a302-90719e342631.jpg?aki_policy=xx_large', alt: 'Vue nocturne avec éclairage' },
            { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3NzA0MTM%3D/original/64718c90-7e43-42e4-bd2c-002711046b0f.jpeg?aki_policy=xx_large', alt: 'Terrasse extérieure' },
            { src: 'https://a0.muscache.com/im/pictures/d8002c3e-8403-4665-812c-1a492c08e844.jpg?aki_policy=xx_large', alt: 'Chambre principale avec lit queen size' },
            { src: 'https://a0.muscache.com/im/pictures/c24ff741-dc57-4da6-8487-0e153590025a.jpg?aki_policy=xx_large', alt: 'Chambre 2 avec lit queen size' },
            { src: 'https://a0.muscache.com/im/pictures/89bd8afc-0fac-4083-97c0-364c05ba3ba5.jpg?aki_policy=xx_large', alt: 'Chambre 3 avec lits superposés' },
            { src: 'https://a0.muscache.com/im/pictures/05d92282-9f13-4632-bd89-a07bb0835c0d.jpg?aki_policy=xx_large', alt: 'Jardin et espaces verts' },
            { src: 'https://a0.muscache.com/im/pictures/fc7b92ab-3dd2-4fa3-80ff-14cba8858b44.jpg?aki_policy=xx_large', alt: 'Salon spacieux' },
            { src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3NzA0MTM%3D/original/5ffd9676-1243-4511-8782-a3e7345b39f9.jpeg?aki_policy=xx_large', alt: 'Espace détente intérieur' },
            { src: 'https://a0.muscache.com/im/pictures/58f01b10-5fd7-46f4-8fc5-6405096163ef.jpg?aki_policy=xx_large', alt: 'Vue panoramique sur la vallée' }
        ],

        // === PAGE CONTACT ===
        contact_title: 'Réservez votre séjour',
        contact_subtitle: 'Note 4.95/5 ⭐ · 187 avis · Coup de cœur voyageurs',
        contact_address: '51 Impasse des 3 Fontaines<br>38850 Bilieu<br>France',
        contact_rating: '4.95/5 · 187 avis · Top 5%',
        contact_checkin: 'Arrivée : 16h<br>Départ : 11h',
        contact_booking_text: 'Contactez Guillaume et Habiba directement via Airbnb.',
        contact_airbnb_url: 'https://www.airbnb.com/rooms/49770413',
        contact_gites_url: 'https://www.gites-de-france-isere.com/location-vacances-Gite-Nidam-a-Bilieu-38G43106.html',
        contact_map_title: 'Situation géographique',

        // === PAGE LOGEMENT ===
        logement_header_title: 'Le Logement',
        logement_header_subtitle: '100m2 d\'espace de vie et 3 chambres au coeur des hauteurs de Bilieu, au bord du lac de Paladru',
        logement_intro: 'Nidam est un gite de charme de 100m2, idealement situe dans les hauteurs de Bilieu, offrant une vue imprenable sur la vallee et un acces privilegie au lac de Paladru. Chaque espace a ete soigneusement amenage pour creer une atmosphere chaleureuse et accueillante, melant confort moderne et douceur de vivre. Pouvant accueillir jusqu\'a 6 voyageurs, c\'est le refuge ideal pour se ressourcer en famille ou entre amis.',
        logement_rooms: [
            { image: 'https://a0.muscache.com/im/pictures/d8002c3e-8403-4665-812c-1a492c08e844.jpg?aki_policy=xx_large', alt: 'Chambre principale', title: 'Chambre principale', description: 'Spacieuse chambre avec lit queen size et salle de bain privative attenante. Un espace intime et confortable pour des nuits paisibles.', tag: 'Salle de bain privee' },
            { image: 'https://a0.muscache.com/im/pictures/c24ff741-dc57-4da6-8487-0e153590025a.jpg?aki_policy=xx_large', alt: 'Chambre 2', title: 'Chambre Confort', description: 'Deuxieme chambre avec lit queen size, decoration soignee et vue sur le jardin. Un cadre reposant pour profiter pleinement de votre sejour.', tag: 'Lit queen size' },
            { image: 'https://a0.muscache.com/im/pictures/89bd8afc-0fac-4083-97c0-364c05ba3ba5.jpg?aki_policy=xx_large', alt: 'Chambre 3', title: 'Chambre Famille', description: 'Chambre ideale pour les enfants avec lits superposes, amenagee de maniere ludique et pratique pour le plaisir des petits comme des grands.', tag: 'Lits superposes' },
            { image: 'https://a0.muscache.com/im/pictures/fc7b92ab-3dd2-4fa3-80ff-14cba8858b44.jpg?aki_policy=xx_large', alt: 'Salon', title: 'Le Salon', description: 'Vaste salon avec canape d\'angle convertible, parfait pour les moments de convivialite. Un espace lumineux et chaleureux au coeur du logement.', tag: 'Canape convertible' },
            { image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDk3NzA0MTM%3D/original/64718c90-7e43-42e4-bd2c-002711046b0f.jpeg?aki_policy=xx_large', alt: 'Cuisine et salle a manger', title: 'Cuisine & Salle à manger', description: 'Cuisine entierement equipee ouverte sur une salle a manger conviviale. Tout le necessaire pour preparer de bons repas en famille.', tag: 'Entierement equipee' },
            { image: 'https://a0.muscache.com/im/pictures/eff396fd-edcd-4806-8bce-57331f722de0.jpg?aki_policy=xx_large', alt: 'Salle de bain', title: 'Les Salles de bain', description: 'Deux salles de bain dont une avec douche et baignoire, et un toilette separe. Des espaces fonctionnels et soignes pour votre confort quotidien.', tag: 'Douche & baignoire' }
        ],
        logement_features_title: 'Les equipements',
        logement_features: [
            { icon: '🛏', title: '3 Chambres', description: 'Jusqu\'a 6 voyageurs, draps et serviettes inclus' },
            { icon: '📶', title: 'Wifi 220 Mbps', description: 'Connexion haut debit dans tout le logement' },
            { icon: '🚗', title: 'Parking gratuit', description: '3 places de stationnement sur place' },
            { icon: '🏠', title: '100m2', description: 'Espace de vie spacieux et lumineux' },
            { icon: '🧹', title: 'Menage inclus', description: 'Logement propre a votre arrivee et depart' },
            { icon: '🔐', title: 'Arrivee autonome', description: 'Boite a cles securisee, horaires flexibles' },
            { icon: '📺', title: 'Multimedia', description: 'TV connectee, enceinte Bluetooth' },
            { icon: '❄️', title: 'Climatisation', description: 'Chauffage et ventilation dans chaque piece' }
        ],
        logement_cta_title: 'Reservez votre sejour',
        logement_cta_text: 'Note 4.95/5 avec 187 avis. Coup de coeur voyageurs - Top 5% des logements sur Airbnb.',
        logement_cta_url: 'https://www.airbnb.com/rooms/49770413',

        // === PAGE NEWSLETTER ===
        newsletter_title: 'Newsletter',
        newsletter_subtitle: 'Restez informés des dernières actualités de Nidam',
        newsletter_articles: []
    },

    // Charger le contenu (localStorage prioritaire, sinon défauts)
    load() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                return { ...this.defaults, ...JSON.parse(stored) };
            }
        } catch (e) {
            console.warn('Erreur chargement contenu:', e);
        }
        return { ...this.defaults };
    },

    // Sauvegarder le contenu modifié
    save(content) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(content));
            return true;
        } catch (e) {
            console.error('Erreur sauvegarde contenu:', e);
            return false;
        }
    },

    // Récupérer une valeur spécifique
    get(key) {
        const content = this.load();
        return content[key] !== undefined ? content[key] : this.defaults[key];
    },

    // Réinitialiser aux valeurs par défaut
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    // Appliquer le contenu à la page d'accueil
    applyToHome() {
        const c = this.load();

        const heroImg = document.querySelector('.hero-image');
        if (heroImg) heroImg.src = c.hero_image;

        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) heroTitle.textContent = c.hero_title;

        const heroSub = document.querySelector('.hero-subtitle');
        if (heroSub) heroSub.textContent = c.hero_subtitle;

        const ratingBadge = document.querySelector('.rating-badge');
        if (ratingBadge) ratingBadge.innerHTML = c.hero_rating;

        const introTitle = document.querySelector('.intro h2');
        if (introTitle) introTitle.textContent = c.intro_title;

        const introPs = document.querySelectorAll('.intro p');
        if (introPs[0]) introPs[0].textContent = c.intro_p1;
        if (introPs[1]) introPs[1].textContent = c.intro_p2;
        if (introPs[2]) introPs[2].textContent = c.intro_p3;

        // Galerie aperçu
        const galleryPreview = document.querySelector('.gallery-preview');
        if (galleryPreview && c.home_gallery) {
            galleryPreview.innerHTML = '';
            c.home_gallery.forEach((img, i) => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.dataset.index = i;
                div.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
                galleryPreview.appendChild(div);
            });
            // Re-init lightbox
            this._initLightbox();
        }
    },

    // Appliquer le contenu à la page galerie
    applyToGallery() {
        const c = this.load();

        const title = document.querySelector('.page-header h1');
        if (title) title.textContent = c.gallery_title;

        const subtitle = document.querySelector('.page-header p');
        if (subtitle) subtitle.textContent = c.gallery_subtitle;

        const grid = document.querySelector('.gallery-grid');
        if (grid && c.gallery_images) {
            grid.innerHTML = '';
            c.gallery_images.forEach((img, i) => {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.dataset.index = i;
                div.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
                grid.appendChild(div);
            });
            this._initLightbox();
        }
    },

    // Appliquer le contenu à la page contact
    applyToContact() {
        const c = this.load();

        const title = document.querySelector('.page-header h1');
        if (title) title.textContent = c.contact_title;

        const subtitle = document.querySelector('.page-header p');
        if (subtitle) subtitle.innerHTML = c.contact_subtitle;

        const addressP = document.querySelectorAll('.info-content p');
        if (addressP[0]) addressP[0].innerHTML = c.contact_address;

        const ratingInfo = document.querySelectorAll('.info-content p');
        if (ratingInfo[2]) ratingInfo[2].textContent = c.contact_rating;

        const hoursInfo = document.querySelectorAll('.info-content p');
        if (hoursInfo[3]) hoursInfo[3].innerHTML = c.contact_checkin;

        const bookingText = document.querySelector('.contact-booking p');
        if (bookingText) bookingText.textContent = c.contact_booking_text;

        const airbnbLink = document.querySelector('.booking-link-primary');
        if (airbnbLink) airbnbLink.href = c.contact_airbnb_url;

        const gitesLink = document.querySelector('.booking-link-secondary');
        if (gitesLink) gitesLink.href = c.contact_gites_url;

        const mapTitle = document.querySelector('.map-section h2');
        if (mapTitle) mapTitle.textContent = c.contact_map_title;
    },

    // Appliquer le contenu à la page logement
    applyToLogement() {
        const c = this.load();

        const headerTitle = document.querySelector('.page-header h1');
        if (headerTitle) headerTitle.textContent = c.logement_header_title;

        const headerSubtitle = document.querySelector('.page-header p');
        if (headerSubtitle) headerSubtitle.textContent = c.logement_header_subtitle;

        const intro = document.querySelector('.intro p');
        if (intro) intro.textContent = c.logement_intro;

        const roomsGrid = document.querySelector('.rooms-grid');
        if (roomsGrid && c.logement_rooms) {
            roomsGrid.innerHTML = '';
            c.logement_rooms.forEach((room, i) => {
                const div = document.createElement('div');
                div.className = 'room-card';
                div.style.animationDelay = (0.1 * (i + 1)) + 's';

                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'room-card-image';
                const img = document.createElement('img');
                img.src = room.image;
                img.alt = room.alt || room.title;
                imgWrapper.appendChild(img);

                const content = document.createElement('div');
                content.className = 'room-card-content';
                const h3 = document.createElement('h3');
                h3.textContent = room.title;
                const p = document.createElement('p');
                p.textContent = room.description;
                content.appendChild(h3);
                content.appendChild(p);
                if (room.tag) {
                    const span = document.createElement('span');
                    span.className = 'room-tag';
                    span.textContent = room.tag;
                    content.appendChild(span);
                }

                div.appendChild(imgWrapper);
                div.appendChild(content);
                roomsGrid.appendChild(div);
            });
        }

        const featuresTitle = document.querySelector('.features h2');
        if (featuresTitle) featuresTitle.textContent = c.logement_features_title;

        const featuresGrid = document.querySelector('.features-grid');
        if (featuresGrid && c.logement_features) {
            featuresGrid.innerHTML = '';
            c.logement_features.forEach(feature => {
                const div = document.createElement('div');
                div.className = 'feature-item';
                const iconDiv = document.createElement('div');
                iconDiv.className = 'feature-icon';
                iconDiv.textContent = feature.icon;
                const h4 = document.createElement('h4');
                h4.textContent = feature.title;
                const p = document.createElement('p');
                p.textContent = feature.description;
                div.appendChild(iconDiv);
                div.appendChild(h4);
                div.appendChild(p);
                featuresGrid.appendChild(div);
            });
        }

        const ctaTitle = document.querySelector('.cta-section h2');
        if (ctaTitle) ctaTitle.textContent = c.logement_cta_title;

        const ctaText = document.querySelector('.cta-section p');
        if (ctaText) ctaText.textContent = c.logement_cta_text;

        const ctaBtn = document.querySelector('.cta-btn');
        if (ctaBtn) ctaBtn.href = c.logement_cta_url;
    },

    // Appliquer le contenu à la page newsletter
    applyToNewsletter() {
        const c = this.load();

        const title = document.querySelector('.page-header h1');
        if (title) title.textContent = c.newsletter_title;

        const subtitle = document.querySelector('.page-header p');
        if (subtitle) subtitle.textContent = c.newsletter_subtitle;

        const container = document.querySelector('.newsletter-list');
        if (container && c.newsletter_articles) {
            container.innerHTML = '';
            c.newsletter_articles.forEach(article => {
                const div = document.createElement('article');
                div.className = 'newsletter-article';

                let imageHtml = '';
                if (article.image) {
                    imageHtml = '<div class="article-image"><img src="' + article.image + '" alt="' + article.title + '"></div>';
                }

                const date = new Date(article.date);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const dateStr = date.toLocaleDateString('fr-FR', options);

                div.innerHTML =
                    imageHtml +
                    '<div class="article-body">' +
                        '<span class="article-date">' + dateStr + '</span>' +
                        '<h2 class="article-title">' + article.title + '</h2>' +
                        '<p class="article-content">' + article.content + '</p>' +
                    '</div>';
                container.appendChild(div);
            });
        }
    },

    // Init lightbox après rendu dynamique
    _initLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        const lightboxImg = document.getElementById('lightboxImg');
        const galleryItems = document.querySelectorAll('.gallery-item');
        let currentIndex = 0;

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                openLB();
            });
        });

        function openLB() {
            const img = galleryItems[currentIndex].querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            document.getElementById('lightboxCounter').textContent = (currentIndex + 1) + ' / ' + galleryItems.length;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLB() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.getElementById('lightboxClose').onclick = closeLB;
        lightbox.onclick = (e) => { if (e.target === lightbox) closeLB(); };

        document.getElementById('lightboxNext').onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % galleryItems.length;
            openLB();
        };
        document.getElementById('lightboxPrev').onclick = (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            openLB();
        };

        document.onkeydown = (e) => {
            if (!lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLB();
            else if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % galleryItems.length; openLB(); }
            else if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; openLB(); }
        };
    }
};
