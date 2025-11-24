/**
 * Script de réinitialisation complète du cache pour l'application Bilan de Compétences
 * 
 * UTILISATION:
 * 1. Ouvrez la console du navigateur (F12 > Console)
 * 2. Copiez-collez ce script et appuyez sur Entrée
 * 3. L'application sera rechargée avec un cache complètement vidé
 * 
 * Ce script va:
 * - Vider tout le localStorage
 * - Vider tout le sessionStorage
 * - Désinscrire tous les Service Workers
 * - Vider tous les caches du navigateur
 * - Forcer un rechargement complet de la page
 */

(async function resetAllCache() {
    console.log('🧹 Début de la réinitialisation complète du cache...');
    
    try {
        // 1. Vider le localStorage
        console.log('📦 Suppression du localStorage...');
        const localStorageKeys = Object.keys(localStorage);
        localStorageKeys.forEach(key => {
            console.log(`  - Suppression de: ${key}`);
            localStorage.removeItem(key);
        });
        console.log(`✅ ${localStorageKeys.length} éléments supprimés du localStorage`);
        
        // 2. Vider le sessionStorage
        console.log('📦 Suppression du sessionStorage...');
        const sessionStorageKeys = Object.keys(sessionStorage);
        sessionStorageKeys.forEach(key => {
            console.log(`  - Suppression de: ${key}`);
            sessionStorage.removeItem(key);
        });
        console.log(`✅ ${sessionStorageKeys.length} éléments supprimés du sessionStorage`);
        
        // 3. Désinscrire tous les Service Workers
        console.log('👷 Désinstallation des Service Workers...');
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let registration of registrations) {
                const success = await registration.unregister();
                console.log(`  - Service Worker désinstallé: ${success ? '✅' : '❌'}`);
            }
            console.log(`✅ ${registrations.length} Service Workers désinstallés`);
        }
        
        // 4. Vider tous les caches
        console.log('🗑️ Suppression des caches du navigateur...');
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (let cacheName of cacheNames) {
                await caches.delete(cacheName);
                console.log(`  - Cache supprimé: ${cacheName}`);
            }
            console.log(`✅ ${cacheNames.length} caches supprimés`);
        }
        
        // 5. Vider les IndexedDB (si utilisés)
        console.log('🗄️ Suppression des bases IndexedDB...');
        if ('indexedDB' in window) {
            const databases = await indexedDB.databases();
            for (let db of databases) {
                indexedDB.deleteDatabase(db.name);
                console.log(`  - Base de données supprimée: ${db.name}`);
            }
            console.log(`✅ ${databases.length} bases IndexedDB supprimées`);
        }
        
        // 6. Afficher un résumé
        console.log('');
        console.log('🎉 RÉINITIALISATION TERMINÉE !');
        console.log('================================');
        console.log('✅ localStorage vidé');
        console.log('✅ sessionStorage vidé');
        console.log('✅ Service Workers désinstallés');
        console.log('✅ Caches navigateur supprimés');
        console.log('✅ IndexedDB supprimées');
        console.log('================================');
        console.log('');
        console.log('🔄 Rechargement de la page dans 2 secondes...');
        
        // 7. Recharger la page après 2 secondes
        setTimeout(() => {
            // Force un rechargement complet en ignorant le cache
            window.location.reload(true);
        }, 2000);
        
    } catch (error) {
        console.error('❌ Erreur lors de la réinitialisation:', error);
    }
})();


/**
 * VERSION COURTE (copier-coller rapide):
 * 
 * localStorage.clear(); sessionStorage.clear(); caches.keys().then(names => names.forEach(name => caches.delete(name))); navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(reg => reg.unregister())); setTimeout(() => location.reload(true), 500);
 */


/**
 * FONCTION POUR RESET SEULEMENT UN MODULE SPÉCIFIQUE:
 */
function resetModule(moduleNumber) {
    const keysToDelete = [];
    
    // Chercher toutes les clés liées à ce module
    for (let key in localStorage) {
        if (key.includes(`module${moduleNumber}`) || 
            key.includes(`module-${moduleNumber}`) ||
            key.includes(`Module${moduleNumber}`)) {
            keysToDelete.push(key);
        }
    }
    
    // Supprimer les clés trouvées
    keysToDelete.forEach(key => {
        console.log(`Suppression de: ${key}`);
        localStorage.removeItem(key);
    });
    
    console.log(`✅ Module ${moduleNumber} réinitialisé (${keysToDelete.length} éléments supprimés)`);
    
    // Recharger la page
    location.reload();
}

// Exemple d'utilisation: resetModule(6); // Pour réinitialiser le module 6


/**
 * FONCTION POUR VOIR CE QUI EST STOCKÉ:
 */
function showStorageInfo() {
    console.log('📊 ÉTAT DU STOCKAGE LOCAL');
    console.log('========================');
    
    const storage = {};
    let totalSize = 0;
    
    for (let key in localStorage) {
        const value = localStorage.getItem(key);
        const size = new Blob([value]).size;
        totalSize += size;
        
        storage[key] = {
            size: `${(size / 1024).toFixed(2)} KB`,
            preview: value.substring(0, 100) + (value.length > 100 ? '...' : '')
        };
    }
    
    console.table(storage);
    console.log(`Taille totale: ${(totalSize / 1024).toFixed(2)} KB`);
    console.log(`Nombre d'éléments: ${Object.keys(storage).length}`);
    
    return storage;
}

// Exemple d'utilisation: showStorageInfo();
