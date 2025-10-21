// === SCRIPT DE RÉINITIALISATION DU MODULE 5 ===
// Copiez et collez ce code dans la console du navigateur (F12)

console.log('🔄 Réinitialisation du module 5...');

// 1. Effacer TOUTES les données du module 5
const keysToRemove = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.includes('module5') || key.includes('module-5') || 
                key.includes('photoLanguage') || key.includes('photo-language') ||
                key.includes('photo_language'))) {
        keysToRemove.push(key);
    }
}

keysToRemove.forEach(key => {
    console.log('  ❌ Suppression de:', key);
    localStorage.removeItem(key);
});

// 2. Forcer la suppression des clés spécifiques
const specificKeys = [
    'module5_data',
    'module5_completed',
    'module5_selected_photos',
    'module5_form_data',
    'module5_current_step',
    'photoLanguageData',
    'photoLanguage_visited',
    'photo-language-completed'
];

specificKeys.forEach(key => {
    if (localStorage.getItem(key) !== null) {
        console.log('  ❌ Suppression spécifique de:', key);
        localStorage.removeItem(key);
    }
});

console.log('✅ Données effacées !');
console.log('🔄 Rechargement de la page...');

// 3. Recharger la page après 1 seconde
setTimeout(() => {
    window.location.reload(true); // Force le rechargement depuis le serveur
}, 1000);

console.log('📝 Le module devrait maintenant démarrer depuis le début avec le modal d\'introduction.');
