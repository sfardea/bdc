// Script pour réinitialiser le module 5
// Copiez et collez ce code dans la console du navigateur (F12)

// Effacer toutes les données du module 5
localStorage.removeItem('module5_data');
localStorage.removeItem('module5_completed');
localStorage.removeItem('photoLanguageData');
localStorage.removeItem('photoLanguage_visited');

// Effacer toutes les clés qui pourraient être liées au module 5
const keysToRemove = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && (key.includes('module5') || key.includes('photoLanguage') || key.includes('photo-language'))) {
        keysToRemove.push(key);
    }
}

keysToRemove.forEach(key => {
    console.log('Suppression de:', key);
    localStorage.removeItem(key);
});

console.log('✅ Module 5 réinitialisé !');
console.log('Rechargez la page pour recommencer le module.');

// Recharger automatiquement après 1 seconde
setTimeout(() => {
    window.location.reload();
}, 1000);
