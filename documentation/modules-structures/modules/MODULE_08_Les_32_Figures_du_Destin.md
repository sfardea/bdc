# Module 8 : Les 32 figures du destin

## Informations Générales

- **Titre** : Les 32 figures du destin professionnel
- **Type** : Outil d'introspection - Sélection interactive d'archétypes professionnels
- **Durée estimée** : 10-15 minutes
- **Nombre de figures** : 32 cartes archétypiques représentant des facettes de l'existence
- **Sélection requise** : 3 figures par ordre de préférence
- **Navigation** : Sélection intuitive avec validation finale
- **Objectif** : Favoriser l'accès à l'intuition et comprendre les motivations profondes

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 8"
- **Titre Principal** : "Les 32 figures du destin"
- **Sous-titre** : "Découvrez vos archétypes professionnels"
- **Badge de Statut** : "Investigation Personnelle"
- **Barre décorative** : Gradient (primary → secondary → accent)

### 2. Section Introduction Conceptuelle

#### Le Principe :
> L'activité "Les 32 Figures du Destin" est un outil d'introspection puissant, utilisant un ensemble de cartes ou de symboles représentant diverses facettes de l'existence, des défis, des opportunités et des chemins de vie. Elle vous invite à explorer votre situation actuelle, vos aspirations et les dynamiques qui influencent votre parcours professionnel et personnel.

#### Comment ça marche ?

**🎯 Tirage des figures** : Vous serez invité(e) à choisir intuitivement une ou plusieurs figures parmi les 32 proposées, en fonction de ce qui résonne le plus avec votre questionnement.

**💭 Interprétation personnelle** : Pour chaque figure choisie, décrivez ce qu'elle évoque pour vous. Quels liens faites-vous avec votre vie professionnelle, vos défis, vos ressources ?

**👥 Échange et approfondissement** : Nous discuterons ensemble de vos interprétations. Cette discussion permettra de mettre en lumière des éléments clés pour votre bilan et la construction de votre projet.

#### Banner Introduction :
```html
<div style="background: #e8f5e9; border-radius: var(--radius-lg); padding: 0.8rem 1.5rem;">
  <p>Découvrez les 32 archétypes professionnels et sélectionnez vos 3 figures préférées par ordre de préférence.</p>
</div>
```

#### Note importante :
*Le nom des figures est parfois écrit seulement au masculin. Ceci est lié à l'histoire de la construction des mots et aux règles d'usage dans la langue française, mais ces figures peuvent bien évidemment être tout autant incarnées par des femmes.*

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

### 4. Les 32 Figures du Destin Professionnel

#### Liste Complète des Archétypes avec leurs Rôles :

1. **PRINCE (PRINCESSE)**
   - **Description** : *"Tous les groupes ont besoin d'un leader: une personne qui prend des décisions, répartit les rôles et assume les responsabilités."*
   - **Rôles principaux** : Décider, représenter, assumer les responsabilités
   - **Exemples de métiers** : Entrepreneur(se), Dirigeant(e) d'entreprise, Directeur(trice) d'association, Directeur(trice) d'hôpital, Maire, Préfet(e)

2. **CAPITAINE**
   - **Description** : *"Seconde le prince (la princesse). Il (elle) est celui qui met en œuvre et fait appliquer ses décisions."*
   - **Rôles principaux** : Commander, motiver, guider, contrôler
   - **Exemples de métiers** : Manager(euse), Assistant(e) de direction, Directeur(trice) adjoint, Chef(fe) de service, Attaché(e) parlementaire

3. **SAGE**
   - **Description** : *"Conseille. Il (elle) cherche à améliorer la vie des autres et à les faire progresser."*
   - **Rôles principaux** : Transmettre un savoir, apporter un conseil, apporter un progrès dans la réflexion
   - **Exemples de métiers** : Professeur, Éducateur(trice), Consultant(e), Formateur(trice), Coach, Conseiller(ère), Conférencier(ère), Médiateur(trice)

4. **GUÉRISSEUR (GUÉRISSEUSE)**
   - **Description** : *"Soigne les maux physiques et psychiques qui touchent ses semblables."*
   - **Rôles principaux** : Écouter pour soulager les souffrances, prévenir les maladies, soigner les malades
   - **Exemples de métiers** : Médecin, Infirmier(ère), Vétérinaire, Kinésithérapeute, Psychologue, Pharmacien(ne), Sophrologue, Naturopathe

5. **SCIENTIFIQUE**
   - **Description** : *"Cherche, découvre et invente."*
   - **Rôles principaux** : Chercher de nouvelles connaissances, expliquer le fonctionnement du monde, inventer de nouvelles machines
   - **Exemples de métiers** : Chercheur(euse) au CNRS, Professeur des Universités, Maître de conférences, Ingénieur(e) R&D, Inventeur(trice), Sociologue

6. **ALCHIMISTE**
   - **Description** : *"Analyse et transforme la matière."*
   - **Rôles principaux** : Analyser les matières et les matériaux (air, eau, bois, métaux etc.), transformer les matières grâce à la science
   - **Exemples de métiers** : Technicien(ne) de laboratoire, Technicien(ne) chimiste, Chargé(e) étude qualité de l'air, Chargé(e) étude qualité de l'eau

7. **VISIONNAIRE**
   - **Description** : *"Manipule, développe les nouvelles technologies de l'information pour faciliter la vie des gens."*
   - **Rôles principaux** : Imaginer, développer et optimiser des technologies connectées
   - **Exemples de métiers** : Webdéveloppeur(euse), Créateur(trice) d'applications, Ingénieur(e) systèmes d'informations, Domoticien(ne), Ingénieur(e) robotique

8. **MARCHAND (MARCHANDE)**
   - **Description** : *"Passe son temps à mettre des personnes en relation. Il (elle) souhaite offrir un service ou une marchandise à son client."*
   - **Rôles principaux** : Faciliter les échanges de biens et de services entre les personnes
   - **Exemples de métiers** : Commercial(e), Responsable de boutique, Négociant(e), Chargé(e) d'affaires, Responsable de centre de profit, Vendeur(euse)

9. **ARTISTE**
   - **Description** : *"Crée de nouvelles façons de penser, d'agir et de voir le monde. Il crée de nouveaux objets ou de nouveaux concepts."*
   - **Rôles principaux** : Créer pour amuser, créer pour faire réfléchir, créer pour embellir
   - **Exemples de métiers** : Romancier(ère), Scénariste, Peintre, Photographe, Comique, Sculpteur(trice), Illustrateur(trice), Réalisateur(trice)

10. **FORGERON (FORGERONNE)**
    - **Description** : *"A en charge la fabrication, la transformation et la réparation de tous les objets que les personnes utilisent dans leur vie quotidienne."*
    - **Rôles principaux** : Fabriquer, transformer, réparer
    - **Exemples de métiers** : Chef(fe) d'atelier de confection textile, Responsable d'une chaîne de montage, Menuisier, Relieur(se), Horloger(ère), Plombier(ère)

11. **COMPAGNON (COMPAGNONNE)**
    - **Description** : *"Assistant du forgeron. Il (elle) met en œuvre les techniques du forgeron et l'assiste dans ses tâches."*
    - **Rôles principaux** : Fabriquer, transformer et réparer des objets du quotidien
    - **Exemples de métiers** : Agent de maintenance, Agent de fabrication, Conducteur(trice) d'installation en usine, Opérateur(trice) sur chaîne de montage, Artisan, Ouvrier(ère)

12. **SHÉRIF**
    - **Description** : *"Fait respecter l'ordre et la loi dans la société."*
    - **Rôles principaux** : Protéger les victimes, arrêter les suspects, éduquer les citoyen(ne)s au respect de la loi
    - **Exemples de métiers** : Policier(ière), Agent de sécurité, Militaire, Commissaire de police, Gardien(ne) de prison, Éducateur(trice) spécialisé(e)

13. **JURISTE**
    - **Description** : *"Intervient dans toutes les procédures qui impliquent le recours à la justice."*
    - **Rôles principaux** : Rendre des jugements, défendre les intérêts de ses clients, appliquer les procédures de justice
    - **Exemples de métiers** : Juge aux affaires familiales, Avocat(e) d'affaires, Notaire, Huissier(ère) de justice, Député(e), Greffier(ère)

14. **INTENDANT (INTENDANTE)**
    - **Description** : *"Gère les ressources matérielles, humaines et financières d'une entreprise, d'une administration ou d'un État."*
    - **Rôles principaux** : Allouer, optimiser, contrôler
    - **Exemples de métiers** : Responsable des Ressources Humaines, Responsable financier, Comptable, Administrateur(trice) de biens, Magasinier(ère), Chef(fe) d'entrepôt

15. **ARCHITECTE**
    - **Description** : *"Façonne l'environnement. Il (elle) construit, redessine, ou aménage les lieux où vivent les femmes et les hommes."*
    - **Rôles principaux** : Construire, aménager, embellir
    - **Exemples de métiers** : Architecte, Urbaniste, Paysagiste, Designer d'intérieur et d'espace, Ingénieur(e) des Ponts

16. **BÂTISSEUR (BÂTISSEUSE)**
    - **Description** : *"Concrétise les plans de l'architecte : l'architecte pense, le bâtisseur agit."*
    - **Rôles principaux** : Bâtir et transformer le monde en fonction des plans de l'architecte
    - **Exemples de métiers** : Conducteur(trice) de travaux, Métreur(se), Peintre en bâtiment, Couvreur(se), Conducteur(trice) d'engins de chantier, Électricien(ne)

17. **SCRIBE**
    - **Description** : *"Maîtrise l'art de communiquer, que cela soit par le biais du texte ou par les images, auprès d'un grand nombre de personnes."*
    - **Rôles principaux** : Communiquer, influencer
    - **Exemples de métiers** : Journaliste, Chargé(e) de communication, Attaché(e) de presse, Écrivain public, Ingénieur(e) pédagogique, Consultant(e) V.A.E

18. **AUBERGISTE**
    - **Description** : *"Accueille : il (elle) offre à manger, à boire et un endroit confortable pour dormir."*
    - **Rôles principaux** : Apporter du confort à des personnes de façon temporaire
    - **Exemples de métiers** : Maître d'hôtel, Restaurateur(trice), Serveur(se), Responsable d'un hôtel, Responsable d'un SPA, Hôte(sse) d'accueil, Responsable d'un parc d'attraction

19. **CUISINIER (CUISINIÈRE)**
    - **Description** : *"Celui qui transforme les matières alimentaires en mets destinés à émerveiller les papilles et remplir les estomacs."*
    - **Rôles principaux** : Nourrir en donnant du plaisir
    - **Exemples de métiers** : Chef(fe) de cuisine, Boulanger(ère), Boucher(ère), Charcutier(ière), Traiteur, Chocolatier(ière) confiseur(se), Pâtissier(ière), Gérant(e) d'un salon de thé

20. **AGRICULTEUR (AGRICULTRICE)**
    - **Description** : *"Exploite les ressources offertes par la nature et notamment par la terre."*
    - **Rôles principaux** : Fertiliser, semer, cueillir
    - **Exemples de métiers** : Exploitant(e) agricole, Éleveur(se) de bovins, Marin/Pêcheur, Maraîcher(ère), Horticulteur(trice), Exploitant(e) forestier(ère), Apiculteur(trice), Fromager(ère), Berger(ère)

21. **NOURRICE**
    - **Description** : *"A la charge des jeunes enfants, des personnes âgées et des personnes souffrant d'un handicap lourd."*
    - **Rôles principaux** : Nourrir, apporter des soins, éduquer, distraire
    - **Exemples de métiers** : Auxiliaire de puériculture, Infirmier(ère) puériculteur(trice), Assistant(e) de vie aux familles, Assistant(e) médico-psychologique, Assistant(e) maternelle

22. **DRESSEUR (DRESSEUSE)**
    - **Description** : *"Est proche des animaux domestiques ou sauvages. Il (elle) les élève, prend soin d'eux et les dresse."*
    - **Rôles principaux** : Élever les animaux, leur apporter des soins, les éduquer et les dresser
    - **Exemples de métiers** : Dresseur(se) de chiens, Conducteur(trice) de chiens de traîneaux, Gérant(e) de chenil, Zoologiste, Psychologue pour animaux, Éthologue, Toiletteur(euse)

23. **CHIFFONNIER (CHIFFONNIÈRE)**
    - **Description** : *"Récupère, trie et exploite les déchets de la société."*
    - **Rôles principaux** : Collecter les déchets, trier les déchets, détruire ou valoriser les déchets
    - **Exemples de métiers** : Gestionnaire de déchets, Conducteur(trice) d'incinérateur, Ripper, Agent de recyclage, Ingénieur(e) traitement des déchets nucléaires

24. **MESSAGER (MESSAGÈRE)**
    - **Description** : *"Transporte les femmes, les hommes, les animaux et/ou les marchandises."*
    - **Rôles principaux** : Acheminer d'un point A à un point B en respectant les délais et la sécurité
    - **Exemples de métiers** : Conducteur(trice) de taxis, Chauffeur(e) de cars de tourisme, Chauffeur(e) de poids lourds, Conducteur(trice) de train, Capitaine de bateau, Pilote de ligne, Chauffeur(e) VTC

25. **TRÉSORIER (TRÉSORIÈRE)**
    - **Description** : *"S'occupe de tout ce qui a trait à l'argent et aux pierres précieuses."*
    - **Rôles principaux** : Conserver l'argent, prêter de l'argent, placer de l'argent et le faire fructifier
    - **Exemples de métiers** : Conseiller(ère) clientèle, Investisseur, Trader, Gestionnaire de patrimoine, Concepteur(trice) de produits financiers, Analyste de risques, Analyse fusion et acquisition

26. **ASSUREUR (ASSUREUSE)**
    - **Description** : *"Évalue les risques d'accidents ou de catastrophes et dédommage les personnes quand survient un sinistre."*
    - **Rôles principaux** : Évaluer les risques, assurer les biens et les personnes, dédommager
    - **Exemples de métiers** : Gestionnaire de sinistre, Actuaire, Expert(e) en assurances, Souscripteur(trice), Agent général d'assurances, Courtier(ère) en assurances

27. **NATURALISTE**
    - **Description** : *"Étudie la nature et agit pour la préserver des méfaits de l'Homme."*
    - **Rôles principaux** : Étudier la nature, préserver la nature, sensibiliser à la protection de la nature
    - **Exemples de métiers** : Responsable de parc régional, Ingénieur(e) des eaux et forêts, Océanologue, Agent d'entretien de l'espace rural, Technicien(ne) de rivières, Entomologiste, Botaniste

28. **SAUVEUR (SAUVEUSE)**
    - **Description** : *"A en charge les pauvres, les marginaux et ceux qui ont commis des actes répréhensibles au sein de la société."*
    - **Rôles principaux** : Nourrir et protéger, écouter et dialoguer, éduquer et réinsérer
    - **Exemples de métiers** : Assistant(e) de service social, Conseiller(ère) d'insertion et de probation, Conseiller(ère) en économie sociale et familiale, Responsable chantier d'insertion, Éducateur(trice) spécialisé(e)

29. **TAILLEUR (TAILLEUSE)**
    - **Description** : *"Crée et fabrique les vêtements et tous les objets en tissu. Il sait manipuler les tissus et les peaux."*
    - **Rôles principaux** : Créer des patrons et des modèles, fabriquer les vêtements et les objets en tissus, adapter aux demandes des clients
    - **Exemples de métiers** : Styliste de mode, Créateur(trice) de vêtements, Créateur(trice) de bijoux, Couturier(ère), Modéliste, Sourceur(se) de matériaux de création

30. **SOLDAT (SOLDATE)**
    - **Description** : *"Combat pour défendre son pays, annexer de nouveaux territoires ou faire régner l'ordre."*
    - **Rôles principaux** : Attaquer, défendre, maintenir la paix
    - **Exemples de métiers** : Soldat(e), Tireur(euse) d'élite, Conducteur(trice) de char, Pilote d'avion de chasse, Artilleur, Capitaine d'infanterie, Sous-marinier, Mercenaire

31. **GUIDE**
    - **Description** : *"A en charge les voyageurs qui viennent visiter son pays ou souhaitent se rendre dans des pays étrangers."*
    - **Rôles principaux** : Organiser les voyages, faire découvrir des curiosités, faire découvrir de nouvelles contrées
    - **Exemples de métiers** : Guide interprète, Guide dans un musée, Conseiller(ère) voyage, Guide de haute montagne, Moniteur(trice) de ski, Moniteur(trice) de sport

32. **EMBAUMEUR (EMBAUMEUSE)**
    - **Description** : *"A en charge les morts."*
    - **Rôles principaux** : Conserver et embellir le corps des morts, conduire la sépulture des défunts, protéger leur tombe ou leurs cendres
    - **Exemples de métiers** : Thanatopracteur(trice), Médecin légiste, Maître(sse) de cérémonie, Entrepreneur(se) des pompes funèbres, Rédacteur(trice) de faire-part de décès

### 5. Section de Validation

#### Éléments :
- **Bouton principal** : "Valider mes figures du destin"
- **État désactivé** : "Sélectionnez encore X figure(s)"
- **Texte d'aide** : "Sélectionnez 3 figures pour continuer"
- **Activation** : Après sélection de exactement 3 figures

### 6. Message de Succès et Zone de Prise de Notes

#### Contenu après validation :
```html
<div class="success-message">
  <div style="font-size: 4rem;">🎭</div>
  <h2>Figures du destin sélectionnées !</h2>
  <p>Vos 3 figures révèlent vos aspirations professionnelles profondes et vos motivations</p>
  
  <!-- Affichage des 3 figures sélectionnées -->
  <div class="selected-figures-grid">
    <div>#1 PRINCE (PRINCESSE)</div>
    <div>#2 ARCHITECTE</div>
    <div>#3 SAGE</div>
  </div>
  
  <!-- Zone de notes pour l'utilisateur -->
  <div class="notes-section">
    <h3>Notez ici vos trois figures du destin par ordre de préférence :</h3>
    <input type="text" placeholder="Figure du destin n°1 : ..." />
    <input type="text" placeholder="Figure du destin n°2 : ..." />
    <input type="text" placeholder="Figure du destin n°3 : ..." />
    
    <h3>Notez les métiers correspondant qui ont retenu votre intérêt :</h3>
    <input type="text" placeholder="Métier n°1 : ..." />
    <input type="text" placeholder="Métier n°2 : ..." />
    <input type="text" placeholder="Métier n°3 : ..." />
    <input type="text" placeholder="Métier n°4 : ..." />
    <input type="text" placeholder="Métier n°5 : ..." />
  </div>
  
  <button>Continuer vers le module 9</button>
</div>
```

#### L'objectif de cette activité :
> "Les 32 Figures du Destin" favorise l'accès à votre intuition et à des compréhensions profondes de vos motivations et de vos freins. C'est un moyen ludique et symbolique d'explorer votre potentiel et de clarifier vos orientations.

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

## Exemples de Figures (Placeholders visuels)

Dans l'interface, les figures sont représentées par des cartes visuelles. Voici quelques exemples disponibles dans le dossier `/documentation/32 figures/` :

- **Le Chemin** (carte visuelle disponible)
- **L'Arbre** (carte visuelle disponible)
- **La Montagne** (carte visuelle disponible)
- **La Boussole** (carte visuelle disponible)
- **Le Pont** (carte visuelle disponible)
- **L'Étoile** (carte visuelle disponible)

*Ces figures sont des exemples. L'ensemble complet sera présenté lors de l'activité.*

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-08",
    "title": "Les 32 figures du destin professionnel",
    "type": "selection-interactive-introspection",
    "phase": "investigation-personnelle",
    "duration": "10-15 minutes",
    "objectif": "Favoriser l'accès à l'intuition et comprendre les motivations profondes",
    "figures": [
      {
        "id": 1,
        "name": "PRINCE",
        "name_feminine": "PRINCESSE",
        "description": "Tous les groupes ont besoin d'un leader...",
        "roles": ["décider", "représenter", "assumer les responsabilités"],
        "image": "prince.png",
        "category": "leadership",
        "metiers": [
          "Entrepreneur(se)",
          "Dirigeant(e) d'entreprise",
          "Directeur(trice) d'association",
          "Directeur(trice) d'hôpital",
          "Maire",
          "Préfet(e)"
        ]
      }
    ],
    "selection": {
      "required": 3,
      "ordered": true,
      "allow_change": true,
      "save_notes": true,
      "save_metiers_interest": true
    },
    "interaction": {
      "tirage_intuitif": true,
      "interpretation_personnelle": true,
      "echange_approfondissement": true
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
