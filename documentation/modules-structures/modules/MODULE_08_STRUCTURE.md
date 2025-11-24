# Module 8 : Les 32 figures du destin

## Informations Générales

- **Titre** : Les 32 figures du destin
- **Type** : Sélection interactive d'archétypes professionnels
- **Durée estimée** : 10-15 minutes
- **Nombre de figures** : 32 cartes archétypiques
- **Sélection requise** : 3 figures par ordre de préférence
- **Navigation** : Sélection libre avec validation finale

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 8"
- **Titre Principal** : "Les 32 figures du destin"
- **Sous-titre** : "Découvrez vos archétypes professionnels"
- **Badge de Statut** : "Investigation Personnelle"
- **Barre décorative** : Gradient (primary → secondary → accent)

### 2. Banner Introduction

#### Contenu :
```html
<div style="background: #e8f5e9; border-radius: var(--radius-lg); padding: 0.8rem 1.5rem;">
  <p>Découvrez les 32 archétypes professionnels et sélectionnez vos 3 figures préférées par ordre de préférence.</p>
</div>
```

### 3. Grille des 32 Figures

#### Layout Responsive :
- **Desktop (≥1600px)** : Grille 11×3
- **Desktop Medium (1200-1599px)** : Grille 8×4
- **Desktop Small (1024-1199px)** : Grille 6×6
- **Mobile (<768px)** : Grille 4×8

#### Structure d'une Carte Figure :
```html
<div class="figure-card" data-figure-id="1">
  <div class="card-inner">
    <!-- Face avant : Image -->
    <div class="card-front" style="background-image: url('image.png')"></div>
    
    <!-- Face arrière : Description -->
    <div class="card-back">
      <div class="card-title">PRINCE.SSE</div>
      <div class="card-description">Description de l'archétype...</div>
    </div>
  </div>
</div>
```

### 4. Les 32 Figures du Destin

#### Liste Complète des Archétypes :

1. **PRINCE.SSE**
   - *"Tous les groupes ont besoin d'un leader: une personne qui prend des décisions, répartit les rôles et assume les responsabilités."*

2. **CAPITAINE**
   - *"Seconde le prince. Met en œuvre et fait appliquer ses décisions. Commander, motiver, guider et contrôler."*

3. **SAGE**
   - *"Conseille et cherche à améliorer la vie des autres. Transmettre un savoir, apporter un conseil et un progrès."*

4. **GUÉRISSEUR.SE**
   - *"Soigne les maux physiques et psychiques. Écouter pour soulager, prévenir les maladies et soigner."*

5. **SCIENTIFIQUE**
   - *"Cherche, découvre et invente. Chercher de nouvelles connaissances, expliquer le monde et inventer."*

6. **ALCHIMISTE**
   - *"Analyse et transforme la matière. Analyser et transformer les matières grâce à la science."*

7. **VISIONNAIRE**
   - *"Développe les nouvelles technologies. Imaginer, développer et optimiser des technologies connectées."*

8. **MARCHAND.E**
   - *"Met des personnes en relation. Facilite les échanges de biens et de services entre les personnes."*

9. **ARTISTE**
   - *"Crée de nouvelles façons de penser et d'agir. Créer pour exprimer, faire réfléchir et embellir."*

10. **FORGERON.NE**
    - *"Fabrication, transformation et réparation d'objets du quotidien. Fabriquer, transformer et réparer."*

11. **COMPAGNON.NE**
    - *"Assistant du forgeron. Met en œuvre les techniques de fabrication, transformation et réparation."*

12. **SHÉRIF**
    - *"Fait respecter l'ordre et la loi. Protéger les victimes, arrêter les suspects et éduquer au respect."*

13. **JURISTE**
    - *"Intervient dans les procédures de justice. Rendre des jugements, défendre et appliquer les procédures."*

14. **INTENDANT.E**
    - *"Gère les ressources matérielles, humaines et financières. Allouer, optimiser et contrôler."*

15. **ARCHITECTE**
    - *"Façonne l'environnement. Construire, aménager et embellir les lieux de vie."*

16. **BÂTISSEUR.SE**
    - *"Concrétise les plans de l'architecte. Bâtir et transformer le monde selon les plans."*

17. **SCRIBE**
    - *"Maîtrise l'art de communiquer. Communiquer et influencer auprès d'un grand nombre."*

18. **AUBERGISTE**
    - *"Accueille et offre le confort. Apporter du confort temporaire lors d'un voyage ou d'un dîner."*

19. **CUISINIER.ÈRE**
    - *"Transforme les matières alimentaires. Nourrir en donnant du plaisir."*

20. **AGRICULTEUR.TRICE**
    - *"Exploite les ressources de la nature. Nourrir, fertiliser, semer et cueillir."*

21. **NOURRICE**
    - *"A la charge des jeunes enfants et personnes dépendantes. Nourrir, soigner, éduquer et distraire."*

22. **DRESSEUR.SE**
    - *"Proche des animaux. Élever les animaux, leur apporter des soins, les éduquer et les dresser."*

23. **CHIFFONNIER.ÈRE**
    - *"Récupère et exploite les déchets. Collecter, trier, détruire ou valoriser les déchets."*

24. **MESSAGER.ÈRE**
    - *"Transporte personnes et marchandises. Acheminer d'un point A à un point B en respectant délais et sécurité."*

25. **TRÉSORIER.ÈRE**
    - *"S'occupe de l'argent et des pierres précieuses. Conserver, prêter, placer et faire fructifier l'argent."*

26. **ASSUREUR.SE**
    - *"Évalue les risques et dédommage. Évaluer les risques, assurer les biens et les personnes."*

27. **NATURALISTE**
    - *"Étudie et préserve la nature. Étudier, préserver et sensibiliser à la protection de la nature."*

28. **SAUVEUR.SE**
    - *"A en charge les marginaux et exclus. Nourrir et protéger, écouter et dialoguer, éduquer et réinsérer."*

29. **TAILLEUR.SE**
    - *"Crée et fabrique les vêtements. Créer des patrons, fabriquer et adapter aux demandes des clients."*

30. **SOLDAT.E**
    - *"Combat pour défendre ou conquérir. Attaquer, défendre et maintenir la paix."*

31. **GUIDE**
    - *"A en charge les voyageurs. Organiser les voyages, faire découvrir curiosités et nouvelles contrées."*

32. **EMBAUMEUR.SE**
    - *"A en charge les morts. Conserver et embellir les corps, conduire la sépulture et protéger les tombes."*

### 5. Section de Validation

#### Éléments :
- **Bouton principal** : "Valider mes figures du destin"
- **État désactivé** : "Sélectionnez encore X figure(s)"
- **Texte d'aide** : "Sélectionnez 3 figures pour continuer"
- **Activation** : Après sélection de exactement 3 figures

### 6. Message de Succès

#### Contenu après validation :
```html
<div class="success-message">
  <div style="font-size: 4rem;">🎭</div>
  <h2>Figures du destin sélectionnées !</h2>
  <p>Vos 3 figures révèlent vos aspirations professionnelles profondes</p>
  
  <!-- Affichage des 3 figures sélectionnées -->
  <div class="selected-figures-grid">
    <div>#1 PRINCE.SSE</div>
    <div>#2 ARCHITECTE</div>
    <div>#3 SAGE</div>
  </div>
  
  <button>Continuer vers le module 9</button>
</div>
```

## Caractéristiques Techniques

### Interactions des Cartes
- **Effet 3D Flip** : Rotation Y de 180° au hover
- **Face avant** : Image de l'archétype
- **Face arrière** : Nom et description
- **Sélection** : Overlay vert semi-transparent
- **Limite** : Maximum 3 sélections
- **Ordre** : Conserve l'ordre de sélection

### Animations
- **Card flip** : Transform rotateY avec preserve-3d
- **Hover effect** : Élévation avec z-index augmenté
- **Selection feedback** : Overlay animé en fade
- **Success animation** : Scale et slide-up

### Layout Optimisé
- **Full viewport** : Utilise toute la hauteur disponible
- **Overflow hidden** : Évite le scroll non désiré
- **Flexbox layout** : Distribution optimale de l'espace
- **Grid responsive** : Adapte le nombre de colonnes selon l'écran

### Sauvegarde des Données
```javascript
{
  selectedFigures: [
    {
      id: 1,
      name: "PRINCE.SSE",
      description: "...",
      selectionOrder: 1
    },
    // ... 2 autres figures
  ],
  timestamp: "2025-01-15T10:30:00.000Z"
}
```

## Structure HTML Suggérée

```html
<!-- Grille principale -->
<div class="figures-grid" id="figuresGrid">
  <!-- Génération dynamique des 32 cartes -->
  <div class="figure-card" data-figure-id="1">
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">
        <div class="card-title">PRINCE.SSE</div>
        <div class="card-description">Description...</div>
      </div>
    </div>
  </div>
</div>

<!-- Zone de validation -->
<div class="validation-section">
  <button id="validateBtn" disabled>
    Valider mes figures du destin
  </button>
  <p>Sélectionnez 3 figures pour continuer</p>
</div>
```

## Styles CSS Spécifiques

```css
/* Effet 3D des cartes */
.figure-card {
  perspective: 1000px;
  z-index: 1;
}

.figure-card:hover {
  z-index: 100;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.figure-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
}

/* Indicateur de sélection */
.figure-card.selected::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(76, 175, 80, 0.3);
  border-radius: 8px;
  pointer-events: none;
}
```

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-08",
    "title": "Les 32 figures du destin",
    "type": "selection-interactive",
    "phase": "investigation-personnelle",
    "duration": "10-15 minutes",
    "figures": [
      {
        "id": 1,
        "name": "PRINCE.SSE",
        "description": "Tous les groupes ont besoin d'un leader...",
        "image": "prince.png",
        "category": "leadership",
        "roles": ["décider", "représenter", "assumer"]
      }
    ],
    "selection": {
      "required": 3,
      "ordered": true,
      "allow_change": true
    },
    "layout": {
      "desktop_large": "11x3",
      "desktop_medium": "8x4",
      "desktop_small": "6x6",
      "mobile": "4x8"
    },
    "animations": {
      "card_flip": true,
      "hover_elevation": true,
      "selection_overlay": true
    }
  }
}
```

## Notes d'Intégration

- Les images des figures sont stockées dans `/modules/module-08/images/`
- Le module utilise un système de rotation des images disponibles
- L'effet 3D nécessite le support de `transform-style: preserve-3d`
- Le layout est optimisé pour éviter le scroll (full viewport)
- La sélection conserve l'ordre pour l'analyse ultérieure
- Les archétypes sont basés sur des modèles psychologiques professionnels
- Chaque figure représente un ensemble de rôles et motivations
- L'interface privilégie l'exploration visuelle et ludique
