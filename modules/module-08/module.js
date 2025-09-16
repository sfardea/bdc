/**
 * Module 8 - Les 32 figures du destin professionnel
 * Sélection de 3 figures archétypiques par ordre de préférence
 */

class FiguresDestinModule {
    constructor() {
        this.selectedFigures = [];
        this.maxSelections = 3;
        this.figures = this.initializeFigures();
        this.init();
    }

    initializeFigures() {
        return [
            { id: 1, name: 'PRINCE.SSE', subtitle: '', icon: '👑', description: 'Tous les groupes ont besoin d\'un leader: une personne qui prend des décisions, répartit les rôles et assume les responsabilités. Le prince (la princesse) se rend utile et donne sens à sa vie au travers de trois grands rôles : décider, représenter et assumer les responsabilités.' },
            { id: 2, name: 'CAPITAINE', subtitle: '', icon: '⚓', description: 'Le capitaine (la capitaine) seconde le prince (la princesse). Il (elle) est celui qui met en œuvre et fait appliquer ses décisions. Il (elle) se rend utile et donne sens à sa vie au travers de quatre grands rôles : commander, motiver, guider et contrôler.' },
            { id: 3, name: 'SAGE', subtitle: '', icon: '🧙', description: 'Le sage (la sage) conseille. Il (elle) cherche à améliorer la vie des autres et à les faire progresser. Il (elle) se rend utile et donne sens à sa vie au travers de trois grands rôles : transmettre un savoir, apporter un conseil et apporter un progrès dans la réflexion.' },
            { id: 4, name: 'GUÉRISSEUR.SE', subtitle: '', icon: '⚕️', description: 'Le guérisseur (la guérisseuse) soigne les maux physiques et psychiques qui touchent ses semblables. Le guérisseur (la guérisseuse) se rend utile et donne sens à sa vie au travers de trois grands rôles : écouter pour soulager les souffrances, prévenir les maladies et soigner les malades.' },
            { id: 5, name: 'SCIENTIFIQUE', subtitle: '', icon: '🔬', description: 'Le scientifique (la scientifique) cherche, découvre et invente. Il (elle) se rend utile et donne sens à sa vie au travers de trois grands rôles : chercher de nouvelles connaissances, expliquer le fonctionnement du monde et inventer de nouvelles machines.' },
            { id: 6, name: 'ALCHIMISTE', subtitle: '', icon: '🧪', description: 'L\'alchimiste analyse et transforme la matière. L\'alchimiste se rend utile et donne sens à sa vie à travers deux grands rôles : analyser les matières et les matériaux (air, eau, bois, métaux etc.) et transformer les matières et les matériaux grâce à la science.' },
            { id: 7, name: 'VISIONNAIRE', subtitle: '', icon: '🔮', description: 'Le visionnaire (la visionnaire) manipule, développe les nouvelles technologies de l\'information pour faciliter la vie des gens. Le visionnaire (la visionnaire) se rend utile et donne du sens à sa vie à travers trois grands rôles : imaginer, développer et optimiser des technologies connectées.' },
            { id: 8, name: 'MARCHAND.E', subtitle: '', icon: '🏪', description: 'Le marchand (la marchande) passe son temps à mettre des personnes en relation. Il (elle) souhaite offrir un service ou une marchandise à son client. Le marchand (la marchande) se rend utile et donne du sens à sa vie en facilitant les échanges de biens et de services entre les personnes.' },
            { id: 9, name: 'ARTISTE', subtitle: '', icon: '🎨', description: 'L\'artiste crée de nouvelles façons de penser, d\'agir et de voir le monde. Il crée de nouveaux objets ou de nouveaux concepts. L\'artiste se rend utile et donne du sens à sa vie au travers de trois grands rôles : créer pour exprimer, créer pour faire réfléchir et créer pour embellir.' },
            { id: 10, name: 'FORGERON.NE', subtitle: '', icon: '🔨', description: 'Le forgeron (la forgeronne) a en charge la fabrication, la transformation et la réparation de tous les objets que les personnes utilisent dans leur vie quotidienne. Le forgeron (la forgeronne) trouve son utilité et donne sens à sa vie au travers de trois grands rôles : fabriquer, transformer et réparer.' },
            { id: 11, name: 'COMPAGNON.NE', subtitle: '', icon: '🔧', description: 'Le compagnon (la compagnonne) est l\'assistant du forgeron. Il (elle) met en œuvre les techniques du forgeron (la forgeronne) et l\'assiste dans ses tâches de fabrication, de transformation et de réparation. Il (elle) trouve son utilité et donne du sens à sa vie en fabriquant, transformant et en réparant des objets du quotidien.' },
            { id: 12, name: 'SHÉRIF', subtitle: '', icon: '🤠', description: 'Le shérif (la shérif) fait respecter l\'ordre et la loi dans la société. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : protéger les victimes, arrêter les suspects et éduquer les citoyen(ne)s au respect de la loi et des règlements.' },
            { id: 13, name: 'JURISTE', subtitle: '', icon: '⚖️', description: 'Le juriste (la juriste) intervient dans toutes les procédures qui impliquent le recours à la justice. Il (elle) trouve son utilité et donne sens à sa vie au travers de trois grands rôles : rendre des jugements, défendre les intérêts de ses clients et appliquer les procédures de justice.' },
            { id: 14, name: 'INTENDANT.E', subtitle: '', icon: '📊', description: 'L\'intendant (l\'intendante) gère les ressources matérielles, humaines et financières d\'une entreprise, d\'une administration ou d\'un État. L\'intendant (l\'intendante) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : allouer, optimiser et contrôler.' },
            { id: 15, name: 'ARCHITECTE', subtitle: '', icon: '📐', description: 'L\'architecte façonne l\'environnement. Il (elle) construit, redessine, ou aménage les lieux où vivent les femmes et les hommes. L\'architecte trouve son utilité et donne du sens à sa vie à travers trois grands rôles : construire, aménager et embellir.' },
            { id: 16, name: 'BÂTISSEUR.SE', subtitle: '', icon: '🏗️', description: 'Le bâtisseur (la bâtisseuse) concrétise les plans de l\'architecte : l\'architecte pense, le bâtisseur (la bâtisseuse) agit. Le bâtisseur (la bâtisseuse) trouve son utilité et donne du sens à sa vie au travers d\'un rôle central : bâtir et transformer le monde en fonction des plans de l\'architecte.' },
            { id: 17, name: 'SCRIBE', subtitle: '', icon: '📜', description: 'Le scribe (la scribe) maîtrise l\'art de communiquer, que cela soit par le biais du texte ou par les images, auprès d\'un grand nombre de personnes. Il (elle) trouve son utilité et donne du sens à sa vie au travers de deux grands rôles : communiquer et influencer.' },
            { id: 18, name: 'AUBERGISTE', subtitle: '', icon: '🏨', description: 'L\'aubergiste accueille : il (elle) offre à manger, à boire et un endroit confortable pour dormir. Il (elle) trouve son utilité et donne du sens à sa vie en apportant du confort à des personnes de façon temporaire lors d\'un voyage ou en temps d\'un dîner.' },
            { id: 19, name: 'CUISINIER.ÈRE', subtitle: '', icon: '👨‍🍳', description: 'Le cuisinier (la cuisinière) est celui qui transforme les matières alimentaires en mets destinés à émerveiller les papilles et remplir l\'estomac de ses clients. Il (elle) trouve son utilité et donne du sens à sa vie au travers d\'un rôle central : nourrir en donnant du plaisir.' },
            { id: 20, name: 'AGRICULTEUR.TRICE', subtitle: '', icon: '🚜', description: 'L\'agriculteur (l\'agricultrice) exploite les ressources offertes par la nature et notamment par la terre. Il (elle) se rend utile et donne du sens à sa vie en nourrissant autrui. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : nourrir, fertiliser, semer et cueillir.' },
            { id: 21, name: 'NOURRICE', subtitle: '', icon: '👶', description: 'La nourrice a la charge des jeunes enfants, des personnes âgées et des personnes souffrant d\'un handicap lourd. Elle trouve son utilité et donne du sens à sa vie au travers de quatre grands rôles : nourrir, apporter des soins, éduquer et distraire.' },
            { id: 22, name: 'DRESSEUR.SE', subtitle: '', icon: '🐎', description: 'Le dresseur (la dresseuse) est proche des animaux domestiques ou sauvages. Il (elle) les élève, prend soin d\'eux et les dresse. Il (elle) trouve son utilité et donne du sens à sa vie au travers de quatre grands rôles : élever les animaux, leur apporter des soins, les éduquer et les dresser.' },
            { id: 23, name: 'CHIFFONNIER.ÈRE', subtitle: '', icon: '♻️', description: 'Le chiffonnier (la chiffonnière) récupère, trie et exploite les déchets de la société. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : collecter les déchets, trier les déchets, détruire ou valoriser les déchets.' },
            { id: 24, name: 'MESSAGER.ÈRE', subtitle: '', icon: '📬', description: 'Le messager (la messagère) transporte les femmes, les hommes, les animaux et/ou les marchandises. Il (elle) trouve son utilité et donne du sens à sa vie en acheminant les femmes, les hommes, les animaux et/ou les marchandises d\'un point A à un point B en respectant les délais et la sécurité.' },
            { id: 25, name: 'TRÉSORIER.ÈRE', subtitle: '', icon: '💰', description: 'Le trésorier (la trésorière) s\'occupe de tout ce qui a trait à l\'argent et aux pierres précieuses. Il (elle) trouve son utilité et donne du sens à sa vie au travers de quatre grands rôles : conserver l\'argent, prêter de l\'argent, placer de l\'argent et le faire fructifier.' },
            { id: 26, name: 'ASSUREUR.SE', subtitle: '', icon: '🛡️', description: 'L\'assureur (l\'assureuse) évalue les risques d\'accidents ou de catastrophes et dédommage les personnes quand survient un sinistre. Il (elle) donne du sens à sa vie au travers de trois grands rôles : évaluer les risques, assurer les biens et les personnes et les dédommager.' },
            { id: 27, name: 'NATURALISTE', subtitle: '', icon: '🌿', description: 'Le naturaliste (la naturaliste) étudie la nature et agit pour la préserver des méfaits de l\'Homme. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : étudier la nature, préserver la nature et sensibiliser à la protection de la nature.' },
            { id: 28, name: 'SAUVEUR.SE', subtitle: '', icon: '🤲', description: 'Le sauveur (la sauveuse) a en charge les pauvres, les marginaux et ceux qui ont commis des actes répréhensibles au sein de la société. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : nourrir et protéger, écouter et dialoguer, éduquer et réinsérer.' },
            { id: 29, name: 'TAILLEUR.SE', subtitle: '', icon: '✂️', description: 'Le tailleur (la tailleuse) crée et fabrique les vêtements et tous les objets en tissu. Il sait manipuler les tissus et les peaux. Il trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : créer des patrons et des modèles, fabriquer les vêtements et les objets en tissus et les adapter aux demandes de ses clients.' },
            { id: 30, name: 'SOLDAT.E', subtitle: '', icon: '⚔️', description: 'Le soldat (la soldate) combat pour défendre son pays, annexer de nouveaux territoires ou faire régner l\'ordre dans d\'autres pays ou dans certaines régions. Le soldat (la soldate) donne du sens à sa vie au travers de trois grands rôles : attaquer, défendre et maintenir la paix.' },
            { id: 31, name: 'GUIDE', subtitle: '', icon: '🧭', description: 'Le guide (la guide) a en charge les voyageurs qui viennent visiter son pays ou souhaitent se rendre dans des pays étrangers. Il (elle) donne du sens à sa vie au travers de trois grands rôles : organiser les voyages, faire découvrir des curiosités et faire découvrir de nouvelles contrées.' },
            { id: 32, name: 'EMBAUMEUR.SE', subtitle: '', icon: '🏺', description: 'L\'embaumeur (l\'embaumeuse) a en charge les morts. Il (elle) trouve son utilité et donne du sens à sa vie au travers de trois grands rôles : conserver et embellir le corps des morts, conduire la sépulture des défunts et protéger leur tombe ou leurs cendres.' }
        ];
    }

    init() {
        this.renderFigures();
        this.bindEvents();
        this.loadSavedData();
        
        // Initialiser SCORM si disponible
        if (typeof initSCORM !== 'undefined') {
            initSCORM();
        }
    }

    renderFigures() {
        const grid = document.getElementById('figuresGrid');
        
        // Utiliser les images locales disponibles
        const getBackgroundImage = (figure) => {
            // Liste des images disponibles
            const availableImages = [
                'ChatGPT Image Sep 11, 2025, 07_34_16 PM.png',
                'ChatGPT Image Sep 11, 2025, 07_34_23 PM.png',
                'ChatGPT Image Sep 11, 2025, 07_56_42 PM.png',
                'ChatGPT Image Sep 11, 2025, 07_56_44 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_39_50 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_39_54 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_43_50 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_43_56 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_54_42 PM.png',
                'ChatGPT Image Sep 15, 2025, 04_59_45 PM.png',
                'ChatGPT Image Sep 15, 2025, 05_26_12 PM.png'
            ];
            
            // Utiliser une image différente pour chaque figure en rotation
            const imageIndex = (figure.id - 1) % availableImages.length;
            const imageName = availableImages[imageIndex];
            
            // Retourner le chemin relatif vers l'image
            return `/modules/module-08/images/${encodeURIComponent(imageName)}`;
        };
        
        grid.innerHTML = this.figures.map(figure => `
            <div class="figure-card" data-figure-id="${figure.id}" onclick="figuresModule.selectFigure(${figure.id})">
                <div class="card-inner">
                    <div class="card-front" style="background-image: url('${getBackgroundImage(figure)}');"></div>
                    <div class="card-back">
                        <div class="card-title">${figure.name}</div>
                        <div class="card-description">${figure.description}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    selectFigure(figureId) {
        const figure = this.figures.find(f => f.id === figureId);
        if (!figure) return;

        const existingIndex = this.selectedFigures.findIndex(f => f.id === figureId);
        
        if (existingIndex !== -1) {
            this.selectedFigures.splice(existingIndex, 1);
            this.updateFigureDisplay(figureId, false);
        } else if (this.selectedFigures.length < this.maxSelections) {
            this.selectedFigures.push({
                ...figure,
                selectionOrder: this.selectedFigures.length + 1
            });
            this.updateFigureDisplay(figureId, true, this.selectedFigures.length);
        } else {
            this.showNotification(`Vous pouvez sélectionner au maximum ${this.maxSelections} figures.`, 'warning');
            return;
        }

        this.updateSelectionPanel();
        this.updateValidationButton();
        this.saveData();
    }

    updateFigureDisplay(figureId, selected, order = null) {
        const card = document.querySelector(`[data-figure-id="${figureId}"]`);
        if (!card) return;

        card.classList.toggle('selected', selected);
    }

    updateSelectionPanel() {
        // Plus de panneau de sélection visible
    }

    removeFigure(figureId) {
        const index = this.selectedFigures.findIndex(f => f.id === figureId);
        if (index !== -1) {
            this.selectedFigures.splice(index, 1);
            
            // Réorganiser les ordres
            this.selectedFigures.forEach((figure, idx) => {
                figure.selectionOrder = idx + 1;
            });

            this.updateFigureDisplay(figureId, false);
            this.updateAllSelectionOrders();
            this.updateSelectionPanel();
            this.updateValidationButton();
            this.saveData();
        }
    }

    updateAllSelectionOrders() {
        this.figures.forEach(figure => {
            const selected = this.selectedFigures.find(f => f.id === figure.id);
            if (selected) {
                this.updateFigureDisplay(figure.id, true, selected.selectionOrder);
            }
        });
    }

    updateValidationButton() {
        const validateBtn = document.getElementById('validateBtn');
        const isComplete = this.selectedFigures.length === this.maxSelections;
        
        validateBtn.disabled = !isComplete;
        
        if (isComplete) {
            validateBtn.textContent = 'Valider mes figures du destin';
        } else {
            const remaining = this.maxSelections - this.selectedFigures.length;
            validateBtn.textContent = `Sélectionnez encore ${remaining} figure${remaining > 1 ? 's' : ''}`;
        }
    }

    bindEvents() {
        const validateBtn = document.getElementById('validateBtn');
        validateBtn.addEventListener('click', () => this.validateAndSubmit());
    }

    validateAndSubmit() {
        if (this.selectedFigures.length !== this.maxSelections) {
            this.showNotification(`Veuillez sélectionner exactement ${this.maxSelections} figures.`, 'error');
            return;
        }

        this.saveData();
        
        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module8_selected_figures', JSON.stringify(this.selectedFigures));
            setSCORMData('module8_completed', 'true');
            setSCORMComplete();
        }

        this.showSuccessMessage();
    }

    showSuccessMessage() {
        const mainContainer = document.querySelector('.figures-container');
        
        const successHtml = `
            <div class="success-message" style="
                background: linear-gradient(135deg, var(--success), var(--secondary-dark));
                color: var(--white);
                padding: 3rem 2rem;
                border-radius: var(--radius-2xl);
                text-align: center;
                animation: successAnimation 0.8s ease-out;
                margin: 2rem auto;
                max-width: 800px;
                box-shadow: var(--shadow-xl);
            ">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">🎭</div>
                <h2 style="color: var(--white); font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem;">
                    Figures du destin sélectionnées !
                </h2>
                <p style="opacity: 0.95; margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.6;">
                    Vos 3 figures révèlent vos aspirations professionnelles profondes et vos motivations archétypiques.
                </p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0; max-width: 700px; margin-left: auto; margin-right: auto;">
                    ${this.selectedFigures.map((figure, index) => `
                        <div style="background: rgba(255, 255, 255, 0.2); padding: 1.5rem; border-radius: var(--radius-lg); backdrop-filter: blur(10px);">
                            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${figure.icon}</div>
                            <div style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">#${index + 1}</div>
                            <strong style="display: block; margin-bottom: 0.5rem;">${figure.name}</strong>
                            <div style="font-size: 0.9rem; opacity: 0.9;">${figure.subtitle}</div>
                        </div>
                    `).join('')}
                </div>
                <p style="font-size: 1rem; opacity: 0.9; margin-top: 2rem;">
                    Ces archétypes guideront votre réflexion sur votre orientation professionnelle.
                </p>
            </div>
            
            <style>
                @keyframes successAnimation {
                    0% { transform: scale(0.9) translateY(20px); opacity: 0; }
                    50% { transform: scale(1.02) translateY(-5px); }
                    100% { transform: scale(1) translateY(0); opacity: 1; }
                }
            </style>
        `;
        
        mainContainer.innerHTML = successHtml;

        setTimeout(() => {
            if (typeof parent !== 'undefined' && parent.postMessage) {
                parent.postMessage({
                    type: 'module-completed',
                    module: 'module-08',
                    data: {
                        selectedFigures: this.selectedFigures,
                        completed: true
                    }
                }, '*');
            }
        }, 5000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        const bgColor = type === 'error' ? 'var(--error)' : type === 'warning' ? 'var(--warning)' : 'var(--info)';
        
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; padding: 1rem 1.5rem;
            background: ${bgColor}; color: var(--white); border-radius: var(--radius);
            box-shadow: var(--shadow-lg); z-index: 1000; max-width: 350px;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 4000);
    }

    saveData() {
        const data = {
            selectedFigures: this.selectedFigures,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('module8_data', JSON.stringify(data));

        if (typeof setSCORMData !== 'undefined') {
            setSCORMData('module8_selected_figures', JSON.stringify(this.selectedFigures));
        }
    }

    loadSavedData() {
        let savedData = null;
        
        if (typeof getSCORMData !== 'undefined') {
            const scormData = getSCORMData('module8_selected_figures');
            if (scormData) {
                savedData = { selectedFigures: JSON.parse(scormData) };
            }
        }

        if (!savedData) {
            const localData = localStorage.getItem('module8_data');
            if (localData) {
                savedData = JSON.parse(localData);
            }
        }

        if (savedData && savedData.selectedFigures) {
            this.selectedFigures = savedData.selectedFigures;
            
            this.selectedFigures.forEach(figure => {
                this.updateFigureDisplay(figure.id, true, figure.selectionOrder);
            });
            
            this.updateSelectionPanel();
            this.updateValidationButton();
        }
    }
}

// Initialiser le module au chargement de la page
let figuresModule;
document.addEventListener('DOMContentLoaded', () => {
    figuresModule = new FiguresDestinModule();
});
