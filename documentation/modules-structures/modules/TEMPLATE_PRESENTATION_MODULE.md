# TEMPLATE : Écran de Présentation du Module

## Description
Template standard pour l'écran de bienvenue/présentation de chaque module. 
Cet écran apparaît au début de chaque module pour introduire l'activité.


```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module 1 - Faisons Connaissance</title>
    
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Color Variables */
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --primary-light: #818cf8;
            --secondary: #ec4899;
            --secondary-dark: #db2777;
            --accent: #f59e0b;
            --accent-light: #fbbf24;
            --success: #10b981;
            --info: #3b82f6;
            --warning: #f59e0b;
            --danger: #ef4444;
            --dark: #1f2937;
            --gray: #6b7280;
            --light: #f3f4f6;
            --white: #ffffff;
            
            /* Gradients */
            --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            --gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-warm: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            
            /* Shadows */
            --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: var(--dark);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow-x: hidden;
        }

        /* Container */
        .presentation-container {
            background: var(--white);
            border-radius: 20px;
            box-shadow: var(--shadow-xl);
            max-width: 900px;
            width: 100%;
            overflow: hidden;
            animation: slideUp 0.6s ease-out;
        }

        /* Header */
        .module-header {
            background: var(--gradient-primary);
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .module-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }

        .module-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 8px 20px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 20px;
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 1;
        }

        .module-title {
            color: white;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            position: relative;
            z-index: 1;
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .module-emoji {
            font-size: 4rem;
            margin-bottom: 20px;
            animation: wave 1s ease-in-out infinite;
            display: inline-block;
        }

        .module-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            font-weight: 300;
            position: relative;
            z-index: 1;
            animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Content */
        .module-content {
            padding: 40px;
        }

        .description-section {
            margin-bottom: 40px;
        }

        .description-title {
            color: var(--primary);
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .description-text {
            color: var(--gray);
            line-height: 1.8;
            margin-bottom: 20px;
        }

        /* Info Cards */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .info-card {
            background: var(--light);
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid var(--primary);
            transition: all 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .info-label {
            color: var(--gray);
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }

        .info-value {
            color: var(--dark);
            font-size: 1.1rem;
            font-weight: 600;
        }

        /* Objectives */
        .objectives-section {
            background: linear-gradient(135deg, var(--light) 0%, rgba(99, 102, 241, 0.05) 100%);
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 40px;
        }

        .objectives-title {
            color: var(--dark);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .objectives-list {
            list-style: none;
        }

        .objective-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            padding: 15px;
            background: white;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .objective-item:hover {
            transform: translateX(10px);
            box-shadow: var(--shadow-md);
        }

        .objective-icon {
            color: var(--success);
            font-size: 1.5rem;
            margin-right: 15px;
            flex-shrink: 0;
        }

        .objective-text {
            color: var(--dark);
            line-height: 1.6;
        }

        /* Key Points */
        .key-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .key-point {
            text-align: center;
            padding: 25px;
            background: white;
            border-radius: 15px;
            border: 2px solid var(--light);
            transition: all 0.3s ease;
        }

        .key-point:hover {
            border-color: var(--primary);
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }

        .key-point-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .key-point-title {
            color: var(--dark);
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .key-point-desc {
            color: var(--gray);
            font-size: 0.95rem;
        }

        /* Preparation Message */
        .preparation-box {
            background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
            border: 2px solid var(--accent);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 40px;
        }

        .preparation-title {
            color: var(--accent-dark);
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .preparation-text {
            color: #92400e;
            line-height: 1.6;
        }

        /* Action Button */
        .action-section {
            text-align: center;
            padding: 20px 0;
        }

        .btn-start {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--gradient-primary);
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 18px 40px;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
            position: relative;
            overflow: hidden;
        }

        .btn-start::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn-start:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn-start:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-xl);
        }

        .btn-start:active {
            transform: translateY(-1px);
        }

        .btn-text {
            position: relative;
            z-index: 1;
        }

        .btn-icon {
            position: relative;
            z-index: 1;
            font-size: 1.3rem;
        }

        /* Progress Indicator */
        .progress-indicator {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
        }

        .progress-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--light);
            transition: all 0.3s ease;
        }

        .progress-dot.active {
            background: var(--primary);
            transform: scale(1.3);
        }

        /* Animations */
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes wave {
            0%, 100% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(-10deg);
            }
            75% {
                transform: rotate(10deg);
            }
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        /* Loading Animation */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.95);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .loading-overlay.active {
            display: flex;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid var(--light);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .module-header {
                padding: 30px 20px;
            }

            .module-title {
                font-size: 2rem;
            }

            .module-content {
                padding: 30px 20px;
            }

            .info-grid {
                grid-template-columns: 1fr;
            }

            .btn-start {
                padding: 15px 30px;
                font-size: 1.1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Loading Overlay -->
    <div class="loading-overlay" id="loadingOverlay">
        <div class="spinner"></div>
    </div>

    <!-- Main Container -->
    <div class="presentation-container">
        <!-- Header -->
        <div class="module-header">
            <div class="module-emoji">👋</div>
            <span class="module-badge">Module 1</span>
            <h1 class="module-title">Faisons Connaissance</h1>
            <p class="module-subtitle">Prenons le temps de nous connaître</p>
        </div>

        <!-- Content -->
        <div class="module-content">
            <!-- Description Section -->
            <div class="description-section">
                <h2 class="description-title">
                    <span>🎯</span>
                    <span>À propos de ce module</span>
                </h2>
                <p class="description-text">
                    Ce module vous permet de vous présenter et de partager vos informations personnelles 
                    et professionnelles essentielles. C'est le point de départ de votre parcours de bilan 
                    de compétences, où nous allons apprendre à mieux vous connaître pour personnaliser 
                    votre expérience.
                </p>
            </div>

            <!-- Info Grid -->
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-label">Durée estimée</div>
                    <div class="info-value">⏱️ 15 minutes</div>
                </div>
                <div class="info-card">
                    <div class="info-label">Type d'activité</div>
                    <div class="info-value">📝 Formulaire interactif</div>
                </div>
                <div class="info-card">
                    <div class="info-label">Difficulté</div>
                    <div class="info-value">⭐ Facile</div>
                </div>
            </div>

            <!-- Objectives Section -->
            <div class="objectives-section">
                <h2 class="objectives-title">📋 Objectifs du module</h2>
                <ul class="objectives-list">
                    <li class="objective-item">
                        <span class="objective-icon">✅</span>
                        <span class="objective-text">Créer votre profil personnel complet</span>
                    </li>
                    <li class="objective-item">
                        <span class="objective-icon">✅</span>
                        <span class="objective-text">Partager vos informations essentielles de manière structurée</span>
                    </li>
                    <li class="objective-item">
                        <span class="objective-icon">✅</span>
                        <span class="objective-text">Établir les bases pour personnaliser votre parcours</span>
                    </li>
                </ul>
            </div>

            <!-- Key Points -->
            <div class="key-points">
                <div class="key-point">
                    <div class="key-point-icon">👤</div>
                    <div class="key-point-title">Informations personnelles</div>
                    <div class="key-point-desc">Présentez-vous simplement</div>
                </div>
                <div class="key-point">
                    <div class="key-point-icon">💼</div>
                    <div class="key-point-title">Parcours professionnel</div>
                    <div class="key-point-desc">Partagez votre expérience</div>
                </div>
                <div class="key-point">
                    <div class="key-point-icon">🎯</div>
                    <div class="key-point-title">Objectifs</div>
                    <div class="key-point-desc">Exprimez vos attentes</div>
                </div>
            </div>

            <!-- Preparation Box -->
            <div class="preparation-box">
                <h3 class="preparation-title">
                    <span>💡</span>
                    <span>Conseil de préparation</span>
                </h3>
                <p class="preparation-text">
                    Répondez spontanément aux questions. Il n'y a pas de bonnes ou de mauvaises réponses. 
                    L'important est d'être authentique pour que nous puissions vous accompagner au mieux 
                    dans votre démarche. Prévoyez environ 15 minutes dans un endroit calme.
                </p>
            </div>

            <!-- Action Section -->
            <div class="action-section">
                <button class="btn-start" id="startButton">
                    <span class="btn-text">Commencer l'activité</span>
                    <span class="btn-icon">→</span>
                </button>
            </div>

            <!-- Progress Indicator -->
            <div class="progress-indicator">
                <div class="progress-dot active"></div>
                <div class="progress-dot"></div>
                <div class="progress-dot"></div>
                <div class="progress-dot"></div>
                <div class="progress-dot"></div>
            </div>


        </div>
    </div>

    <script>
        // Module 1 configuration with real data
        const modulePresentation = {
            numero: 1,
            titre: "Faisons Connaissance",
            description_courte: "Prenons le temps de nous connaître",
            description_detaillee: "Ce module vous permet de vous présenter et de partager vos informations personnelles et professionnelles essentielles.",
            duree: 15,
            type: "Formulaire interactif",
            objectif: "Créer votre profil personnel",
            conseil: "Répondez spontanément aux questions",
            icone: "👋"
        };

        // Initialize module on page load
        document.addEventListener('DOMContentLoaded', function() {
            initializeModule();
            setupEventListeners();
            animateElements();
            updateProgressBar();
        });

        // Initialize module content
        function initializeModule() {
            // Store module start time
            const startTime = new Date().toISOString();
            sessionStorage.setItem(`module_${modulePresentation.numero}_start`, startTime);
            
            // Check if returning user
            const hasSeenModule = localStorage.getItem(`module_${modulePresentation.numero}_seen`);
            
            if (!hasSeenModule) {
                // First visit - show welcome animation
                showWelcomeAnimation();
            }
            
            // Mark module as seen
            localStorage.setItem(`module_${modulePresentation.numero}_seen`, 'true');
        }

        // Welcome animation
        function showWelcomeAnimation() {
            const emoji = document.querySelector('.module-emoji');
            emoji.style.transform = 'scale(1.5)';
            setTimeout(() => {
                emoji.style.transform = 'scale(1)';
            }, 500);
        }

        // Setup event listeners
        function setupEventListeners() {
            const startButton = document.getElementById('startButton');
            
            startButton.addEventListener('click', handleStartClick);
            
            // Add keyboard shortcut
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    handleStartClick();
                }
            });
            
            // Add hover sound effect (optional)
            document.querySelectorAll('.info-card, .key-point').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    playHoverSound();
                });
            });
        }

        // Handle start button click
        function handleStartClick() {
            const loadingOverlay = document.getElementById('loadingOverlay');
            
            // Show loading
            loadingOverlay.classList.add('active');
            
            // Log module start
            logModuleEvent('started', modulePresentation.numero);
            
            // Simulate loading and redirect
            setTimeout(() => {
                // Save progress
                saveModuleProgress();
                
                // In production, redirect to actual module content
                // window.location.href = `/modules/module-${modulePresentation.numero}/form`;
                
                // For demo, show success message
                loadingOverlay.classList.remove('active');
                showSuccessMessage();
            }, 1500);
        }

        // Save module progress
        function saveModuleProgress() {
            const progress = {
                moduleId: modulePresentation.numero,
                moduleTitle: modulePresentation.titre,
                status: 'in_progress',
                startedAt: sessionStorage.getItem(`module_${modulePresentation.numero}_start`),
                lastAccessed: new Date().toISOString()
            };
            
            // Get existing progress
            let allProgress = JSON.parse(localStorage.getItem('bilanProgress') || '{}');
            
            // Update module 1 progress
            allProgress[`module_${modulePresentation.numero}`] = progress;
            
            // Save back
            localStorage.setItem('bilanProgress', JSON.stringify(allProgress));
        }

        // Show success message
        function showSuccessMessage() {
            const container = document.querySelector('.module-content');
            
            const successDiv = document.createElement('div');
            successDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                z-index: 2000;
                text-align: center;
                animation: scaleIn 0.3s ease;
            `;
            
            successDiv.innerHTML = `
                <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
                <h2 style="color: var(--success); margin-bottom: 10px;">Module démarré!</h2>
                <p style="color: var(--gray);">Vous allez maintenant accéder au formulaire interactif.</p>
                <button onclick="this.parentElement.remove()" style="
                    margin-top: 20px;
                    padding: 10px 30px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;
                ">Continuer</button>
            `;
            
            document.body.appendChild(successDiv);
        }

        // Animate elements on scroll
        function animateElements() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.objective-item, .key-point, .info-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }

        // Update progress bar
        function updateProgressBar() {
            const totalModules = 25;
            const completedModules = getCompletedModulesCount();
            const percentage = (completedModules / totalModules) * 100;
            
            // Update visual progress
            const dots = document.querySelectorAll('.progress-dot');
            dots.forEach((dot, index) => {
                if (index < completedModules) {
                    dot.classList.add('active');
                }
            });
        }

        // Get completed modules count
        function getCompletedModulesCount() {
            const progress = JSON.parse(localStorage.getItem('bilanProgress') || '{}');
            return Object.values(progress).filter(p => p.status === 'completed').length;
        }

        // Log module events for analytics
        function logModuleEvent(action, moduleId) {
            const event = {
                action: action,
                moduleId: moduleId,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            // In production, send to analytics
            console.log('Module Event:', event);
            
            // Store locally for offline sync
            let events = JSON.parse(localStorage.getItem('moduleEvents') || '[]');
            events.push(event);
            localStorage.setItem('moduleEvents', JSON.stringify(events));
        }

        // Play hover sound (optional)
        function playHoverSound() {
            // Create audio context for hover sound
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.05;
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.05);
        }

        // Add CSS for visible class
        const style = document.createElement('style');
        style.textContent = `
            .visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            @keyframes scaleIn {
                from {
                    transform: translate(-50%, -50%) scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        // Add ripple effect to buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    left: ${x}px;
                    top: ${y}px;
                    animation: rippleEffect 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes rippleEffect {
                from {
                    transform: scale(0);
                    opacity: 1;
                }
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);
    </script>
</body>
</html>
```

## Notes d'Implémentation

1. **Cohérence** : Utiliser exactement la même structure pour tous les modules
2. **Performance** : Précharger les assets du module suivant
3. **Analytics** : Tracker le temps passé sur la présentation
