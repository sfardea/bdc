# TEMPLATE : Écran de Présentation du Module

## Description
Template standard pour l'écran de bienvenue/présentation de chaque module. 
Cet écran apparaît au début de chaque module pour introduire l'activité.

## Structure de la Page

### 1. Container Principal
```html
<div class="module-presentation-container">
```
- **Style** : Centré, max-width: 800px, padding généreux
- **Animation** : Fade-in au chargement

### 2. Badge du Module
```html
<div class="module-badge">Module [NUMERO]</div>
```
- **Position** : Centré en haut
- **Style** : Badge arrondi avec couleur de la phase
- **Couleurs par phase** :
  - Phase Préliminaire (Modules 1-4) : `#4a90e2`
  - Phase Investigation Personnel (Modules 5-11) : `#7b68ee`
  - Phase Investigation Professionnel I (Modules 12-18) : `#50c878`
  - Phase Investigation Professionnel II (Modules 19-25) : `#ff6b6b`

### 3. Titre Principal
```html
<h1 class="module-title">[TITRE_DU_MODULE]</h1>
```
- **Style** : Grand titre centré, police principale
- **Taille** : 2.5rem desktop, 2rem mobile
- **Animation** : Slide-up avec délai de 0.2s

### 4. Icône ou Illustration
```html
<div class="module-icon">
  [EMOJI ou IMAGE représentatif]
</div>
```
- **Taille** : 120px × 120px
- **Animation** : Pulse subtil ou rotation légère
- **Exemples** :
  - Module 1 : 👋 (salutation)
  - Module 2 : 🎨 (créativité)
  - Module 3 : 📊 (présentation)
  - Module 4 : 🎯 (objectifs)
  - Module 5 : 📸 (photos)
  - Module 6 : 📈 (courbes)
  - Module 7 : 🧠 (personnalité)
  - Module 8 : 🎭 (archétypes)
  - Module 9 : 🦢 (envol)
  - Module 10 : 🍹 (cocktail)
  - Module 11 : 🏮 (portrait chinois)
  - Module 12 : 🏆 (réalisations)
  - Module 13 : 💡 (motivations)
  - Module 14 : 💼 (portefeuille)

### 5. Description de l'Activité
```html
<div class="module-description">
  <p class="lead">[DESCRIPTION_COURTE]</p>
  <p>[DESCRIPTION_DETAILLEE]</p>
</div>
```
- **Lead** : Phrase d'accroche en gras ou plus grande
- **Description** : 2-3 phrases expliquant l'objectif et le déroulement
- **Style** : Texte centré, line-height généreux

### 6. Informations Pratiques
```html
<div class="module-info">
  <div class="info-item">
    <i class="icon-clock"></i>
    <span>Durée estimée : [DUREE] minutes</span>
  </div>
  <div class="info-item">
    <i class="icon-tasks"></i>
    <span>Type : [TYPE_ACTIVITE]</span>
  </div>
  <div class="info-item">
    <i class="icon-target"></i>
    <span>Objectif : [OBJECTIF_PRINCIPAL]</span>
  </div>
</div>
```
- **Layout** : Flex ou Grid, icônes alignées
- **Style** : Fond légèrement coloré, bordure subtile
- **Icônes** : Font Awesome ou similaire

### 7. Points Clés (Optionnel)
```html
<div class="key-points">
  <h3>Ce que vous allez découvrir :</h3>
  <ul>
    <li>[POINT_1]</li>
    <li>[POINT_2]</li>
    <li>[POINT_3]</li>
  </ul>
</div>
```
- **Style** : Liste avec puces personnalisées (✓ ou →)
- **Animation** : Apparition séquentielle des items

### 8. Message de Préparation
```html
<div class="preparation-message">
  <p>💡 Conseil : [CONSEIL_PREPARATION]</p>
</div>
```
- **Exemples de conseils** :
  - "Installez-vous dans un endroit calme"
  - "Prévoyez 15 minutes sans interruption"
  - "Répondez spontanément, sans trop réfléchir"
  - "Munissez-vous d'un papier et d'un crayon"

### 9. Bouton de Démarrage
```html
<div class="action-buttons">
  <button class="btn btn-primary btn-lg start-module">
    Commencer l'activité
    <i class="icon-arrow-right"></i>
  </button>
</div>
```
- **Style** : Bouton large et visible
- **Animation** : Effet hover avec scale ou glow
- **Action** : Navigation vers la première étape du module

### 10. Navigation Secondaire
```html
<div class="secondary-nav">
  <a href="#" class="back-link">
    <i class="icon-arrow-left"></i>
    Retour au menu
  </a>
</div>
```
- **Position** : En bas à gauche ou en haut
- **Style** : Lien discret mais accessible

## Animations et Transitions

### Entrée de Page
```css
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
```
- Tous les éléments apparaissent avec un délai progressif
- Durée totale : 1-1.5 secondes

### Effet du Bouton
```css
.start-module:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
```

## Responsive Design

### Mobile (< 768px)
- Container : padding réduit
- Titre : taille réduite
- Icône : 80px au lieu de 120px
- Bouton : width: 100%

### Tablette (768px - 1024px)
- Container : max-width: 600px
- Layout optimal pour lecture

## Accessibilité

- **ARIA Labels** : Sur tous les éléments interactifs
- **Rôles** : role="main" sur le container
- **Navigation clavier** : Tab order logique
- **Contraste** : Minimum WCAG AA (4.5:1)

## Variables Dynamiques

Les éléments suivants doivent être remplacés dynamiquement :
- `[NUMERO]` : Numéro du module (1-25)
- `[TITRE_DU_MODULE]` : Titre complet
- `[DESCRIPTION_COURTE]` : Phrase d'accroche
- `[DESCRIPTION_DETAILLEE]` : Description complète
- `[DUREE]` : Durée en minutes
- `[TYPE_ACTIVITE]` : Type d'exercice
- `[OBJECTIF_PRINCIPAL]` : Objectif principal
- `[CONSEIL_PREPARATION]` : Conseil contextuel

## Intégration SCORM

```javascript
// Tracking de la vue de présentation
SCORM.SetValue('cmi.interactions.n.id', 'module_[NUMERO]_presentation');
SCORM.SetValue('cmi.interactions.n.type', 'other');
SCORM.SetValue('cmi.interactions.n.timestamp', new Date().toISOString());
```

## Exemple d'Implémentation

```javascript
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
```

## Notes d'Implémentation

1. **Cohérence** : Utiliser exactement la même structure pour tous les modules
2. **Performance** : Précharger les assets du module suivant
3. **Analytics** : Tracker le temps passé sur la présentation
4. **A/B Testing** : Possibilité de tester différentes formulations
5. **Personnalisation** : Adapter le message si l'utilisateur revient
