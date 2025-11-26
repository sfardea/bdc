# Module 13 : Mes Motivations au Travail

## Informations Générales

- **Titre** : Mes Motivations au Travail
- **Type** : Exercice d'exploration et d'analyse des motivations professionnelles
- **Durée estimée** : 40-50 minutes
- **Objectif** : Identifier et hiérarchiser ses motivations professionnelles à travers l'exploration de métiers
- **Méthode** : Projection dans des métiers aimés/détestés pour révéler les besoins fondamentaux
- **Phase** : Investigation - Axe Professionnel
- **Public cible** : Personnes en réflexion sur leur orientation ou reconversion professionnelle

## 🔗 Visualiser Preview

[Lien 1](https://g.co/gemini/share/fd7b5df1e86b)

## Concept de l'Exercice

### Principe
Cet exercice utilise la méthode de projection dans différents métiers pour faire émerger les motivations profondes et les besoins essentiels au bien-être professionnel. En explorant ce qui attire et repousse dans certains métiers, on identifie les éléments clés de satisfaction au travail.

### Objectifs
1. **Explorer** : Découvrir ses attirances et répulsions professionnelles
2. **Analyser** : Identifier les éléments récurrents dans les métiers aimés/détestés
3. **Hiérarchiser** : Construire sa pyramide des besoins professionnels
4. **Prioriser** : Classer ses motivations par ordre d'importance

## Structure de la Page

### 1. Header du Module

#### Éléments :
- **Badge Module** : "Module 13"
- **Titre Principal** : "Mes Motivations au Travail"
- **Sous-titre** : "Explorez ce qui vous anime vraiment dans le monde professionnel"
- **Badge de Statut** : "Investigation Professionnelle"

### 2. Section Liste de Métiers pour Inspiration

```html
<div class="section">
  <h2>Liste de Métiers pour Inspiration</h2>
  <p>Explorez cette liste de métiers variés pour stimuler votre réflexion 
     sur ce qui vous attire ou vous repousse.</p>
  
  <div class="professions-list">
    <!-- 100 métiers organisés alphabétiquement -->
  </div>
</div>
```

#### Liste complète des 100 métiers :
- Acteur, Analyste financier, Architecte, Archéologue, Artisan, Astronome, Avocat
- Bibliothécaire, Biologiste, Boulanger
- Cadreur, Chanteur, Chercheur, Chirurgien, Chocolatier, Clown, Coiffeur, Comédien, Comptable, Conseiller d'orientation, Cuisinier
- Designer, Détective privé, Développeur web, Diplomate, Décorateur d'intérieur
- Écrivain, Écologiste, Ébéniste, Éditeur, Éducateur spécialisé, Électricien, Enseignant, Ergothérapeute, Expert-comptable, Explorateur
- Facteur, Fleuriste
- Géologue, Graphiste, Guide touristique
- Historien, Horticulteur
- Illustrateur, Infirmier, Ingénieur, Interprète
- Journaliste, Juge
- Libraire
- Magicien, Mannequin, Marin, Masseur-kinésithérapeute, Médecin, Menuisier, Météorologue, Microbiologiste, Musicien
- Naturopathe, Notaire, Nutritionniste
- Océanographe, Opticien, Orfèvre, Orthophoniste
- Pâtissier, Paysagiste, Pêcheur, Pharmacien, Philosophe, Photographe, Pilote d'avion, Plombier, Policier, Professeur d'université, Psychologue
- Réalisateur, Réceptionniste, Rédacteur, Reporter, Restaurateur
- Sage-femme, Scénariste, Sculpteur, Secrétaire, Sociologue, Sommelier, Soudeur, Statisticien, Styliste
- Technicien de laboratoire, Traducteur
- Urbaniste
- Vendeur, Vétérinaire, Viticulteur, Volcanologue
- Webmaster
- Zoologiste

### 3. Section Métiers que j'adorerais faire (3 métiers)

#### Structure pour chaque métier aimé :

```html
<div class="job-section">
  <h3>Métier [N]</h3>
  
  <label>Nom du métier :</label>
  <input type="text" placeholder="Ex: Chercheur" />
  
  <label>Ce que j'imagine faire :</label>
  <textarea placeholder="Ex: me creuser les méninges et faire des expériences"></textarea>
  
  <label>Où je me situe :</label>
  <textarea placeholder="Ex: dans un labo"></textarea>
  
  <label>Ce qu'il y a autour de moi :</label>
  <textarea placeholder="Ex: d'autres chercheurs ou étudiants, des PC, du matériel de laboratoire"></textarea>
  
  <label>Ce que j'aime particulièrement :</label>
  <textarea placeholder="Ex: être face à un problème ou un mystère et tenter de l'appréhender, 
                         mieux le connaître, si possible le comprendre"></textarea>
</div>
```

#### Exemples fournis :

**Exemple 1 - Chercheur**
- **Ce que j'imagine faire** : Me creuser les méninges et faire des expériences
- **Où je me situe** : Dans un labo
- **Ce qu'il y a autour** : D'autres chercheurs ou étudiants, des PC, du matériel de laboratoire
- **Ce que j'aime** : Être face à un problème ou un mystère et tenter de l'appréhender

**Exemple 2 - Juge**
- **Ce que j'imagine faire** : Écouter impartialement les différentes parties et trancher
- **Où je me situe** : Dans un tribunal à la place centrale de la cour
- **Ce qu'il y a autour** : Greffiers, agents, prévenus, accusés, témoins, avocats
- **Ce que j'aime** : Devoir trancher avec la loi mais aussi le bon sens et l'humanité

**Exemple 3 - Chocolatier**
- **Ce que j'imagine faire** : Des créations chocolats jolies et fines
- **Où je me situe** : Dans un labo immaculé avec les ingrédients et le matériel
- **Ce qu'il y a autour** : De bonnes odeurs, peut-être 1 assistant, côté boutique 1 vendeur
- **Ce que j'aime** : Le chocolat, la précision, le calme, la gourmandise, les étapes, la créativité

### 4. Section Métiers que je détesterais faire (3 métiers)

#### Structure pour chaque métier détesté :

```html
<div class="job-section">
  <h3>Métier [N]</h3>
  
  <label>Nom du métier :</label>
  <input type="text" placeholder="Ex: Docker" />
  
  <label>Ce que j'imagine faire :</label>
  <textarea placeholder="Ex: porter de lourdes charges"></textarea>
  
  <label>Où je me situe :</label>
  <textarea placeholder="Ex: un port / Dunkerque"></textarea>
  
  <label>Ce qu'il y a autour de moi :</label>
  <textarea placeholder="Ex: des caisses, des bateaux, des containers, des grues"></textarea>
  
  <label>Ce que je n'aime pas :</label>
  <textarea placeholder="Ex: le travail physique"></textarea>
</div>
```

#### Exemples fournis :

**Exemple 1 - Docker**
- **Ce que j'imagine faire** : Porter de lourdes charges
- **Où je me situe** : Un port / Dunkerque
- **Ce qu'il y a autour** : Des caisses, des bateaux, des containers, des grues
- **Ce que je n'aime pas** : Le travail physique

**Exemple 2 - Toiletteur**
- **Ce que j'imagine faire** : Doucher / laver des animaux
- **Où je me situe** : Dans un salon type salon de coiffure
- **Ce qu'il y a autour** : Des miroirs, des bacs de douches, d'autres animaux
- **Ce que je n'aime pas** : Les animaux

**Exemple 3 - Vétérinaire**
- **Ce que j'imagine faire** : Faire des consultations pour les animaux
- **Où je me situe** : Dans un cabinet style cabinet médical
- **Ce qu'il y a autour** : Matériel médical et installations spéciales pour animaux
- **Ce que je n'aime pas** : Les animaux

### 5. Section Analyse - Fil conducteur

```html
<div class="section">
  <h2>Analyse : Fil conducteur et éléments récurrents</h2>
  <p>Quel est le fil conducteur et les éléments récurrents de ces métiers 
     que vous aimez et détestez ?</p>
  <textarea placeholder="Ex: un cadre ou protocole bien défini, sur lequel on peut 
                         et même doit apporter une touche personnelle et créative"></textarea>
</div>
```

### 6. Section Pyramide des Besoins

```html
<div class="pyramid-section">
  <h2>Ma pyramide des besoins</h2>
  <p class="pyramid-definition">
    (Besoin : élément nécessaire au bien-être, au développement et au fonctionnement sain et optimal)
  </p>
  <p>À travers les métiers que vous aimeriez faire, vous allez maintenant identifier 
     les besoins nourris par ces postes. Vous les reporterez ensuite sur cette pyramide 
     en cliquant sur chacune des zones affichées.</p>
  
  <div class="pyramid-container">
    <!-- Pyramide interactive avec 6 niveaux -->
  </div>
</div>
```

#### Exemple de pyramide remplie :
1. **Niveau supérieur** : Cadre
2. **Niveau 2** : Protocole
3. **Niveau 3** : Créativité
4. **Niveau 4** : Résultat visible et concret
5. **Niveau 5** : (À définir)
6. **Niveau base** : (À définir)

### 7. Section Classement des Motivations

```html
<div class="section">
  <h2>Mes motivations au travail - classement</h2>
  <p>Voici une liste de motivations. Réfléchissez à leur importance pour vous.</p>
  
  <ul class="motivation-ranking-list">
    <!-- Liste de 20 motivations à classer -->
  </ul>
</div>
```

#### Les 20 motivations à classer :
1. Stimulation intellectuelle
2. Autonomie
3. Non pénibilité physique
4. Concordance avec mes valeurs personnelles
5. Variété des tâches
6. Environnement de travail
7. Contacts humains
8. Ambiance de travail
9. Valorisation par la hiérarchie
10. Possibilité d'évolution interne
11. Responsabilités humaines et matérielles
12. Non pénibilité psychologique (stress...)
13. Possibilités de formations internes
14. Horaires réguliers et peu contraignants
15. Salaire et avantages
16. Vacances et temps libre
17. Proximité géographique
18. Prestige de la fonction et/ou de l'entreprise
19. Sécurité de l'emploi
20. Sédentarité (pas de déplacements)

### 8. Section Synthèse des Motivations

```html
<div class="input-group">
  <label>Les moteurs/motivations existant aujourd'hui dans mon travail 
         et/ou ma vie personnelle :</label>
  <textarea placeholder="Écrivez ici..."></textarea>
</div>

<div class="input-group">
  <label>Les moteurs/motivations que je souhaite trouver/retrouver/développer 
         dans mon futur professionnel et/ou personnel :</label>
  <textarea placeholder="Écrivez ici..."></textarea>
</div>

<div class="input-group">
  <label>Ce que je dois prendre en considération dans mes choix professionnels :</label>
  <textarea placeholder="Écrivez ici..."></textarea>
</div>
```

## Caractéristiques Techniques

### Interactions
- **Liste de métiers cliquable** : Sélection rapide pour inspiration
- **Pyramide interactive** : Drag & drop ou clic pour placer les besoins
- **Classement par glisser-déposer** : Réorganisation des 20 motivations
- **Auto-analyse** : Suggestions basées sur les patterns détectés
- **Sauvegarde automatique** : À chaque modification

### Fonctionnalités
- **Suggestions intelligentes** : Métiers similaires proposés
- **Analyse comparative** : Mise en évidence des contrastes aimé/détesté
- **Export visuel** : Pyramide et classement en format image
- **Rapport de synthèse** : Document PDF avec analyse complète
- **Mode guidé** : Accompagnement pas à pas avec exemples

### Validation
- **3 métiers aimés** : Obligatoires avec tous les champs
- **3 métiers détestés** : Obligatoires avec tous les champs
- **Analyse du fil conducteur** : Minimum 100 caractères
- **Pyramide** : Au moins 4 besoins identifiés
- **Classement** : Les 10 premières motivations minimum

## Structure CSS Suggérée

```css
/* Liste des métiers */
.professions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
}

.professions-list span {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.professions-list span:hover {
  background: #3b82f6;
  color: white;
  transform: scale(1.05);
}

/* Section métier */
.job-section {
  background: white;
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.job-section h3 {
  color: #1e293b;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #3b82f6;
}

/* Pyramide des besoins */
.pyramid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
  max-width: 600px;
}

.pyramid-segment {
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  width: var(--segment-width);
}

.pyramid-segment:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.pyramid-segment.bottom-segment {
  background: linear-gradient(135deg, #64748b, #475569);
}

/* Liste de classement des motivations */
.motivation-ranking-list {
  list-style: none;
  padding: 0;
}

.motivation-ranking-list li {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: move;
  transition: all 0.2s;
}

.motivation-ranking-list li:hover {
  transform: translateX(4px);
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.motivation-ranking-list li span {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: 700;
}

/* Champs de saisie */
.sub-question {
  display: block;
  font-weight: 600;
  color: #475569;
  margin: 1rem 0 0.5rem;
  font-size: 0.95rem;
}

.response-area {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.response-area:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

textarea.response-area {
  min-height: 80px;
  resize: vertical;
}
```

## Structure JSON Proposée

```json
{
  "module": {
    "id": "module-13",
    "title": "Mes Motivations au Travail",
    "type": "exploration-motivations",
    "phase": "investigation-professionnelle",
    "duration": "40-50 minutes",
    "objectives": [
      "Explorer attirances et répulsions professionnelles",
      "Identifier les besoins fondamentaux",
      "Hiérarchiser les motivations",
      "Clarifier les critères de choix professionnel"
    ],
    "sections": {
      "metiers_inspiration": {
        "count": 100,
        "categories": ["A-Z alphabétique"],
        "interactive": true
      },
      "metiers_aimes": {
        "count": 3,
        "fields": [
          "nom",
          "imagine_faire",
          "ou_situe",
          "autour_de_moi",
          "aime_particulierement"
        ]
      },
      "metiers_detestes": {
        "count": 3,
        "fields": [
          "nom",
          "imagine_faire",
          "ou_situe",
          "autour_de_moi",
          "naime_pas"
        ]
      },
      "analyse": {
        "fil_conducteur": "textarea",
        "elements_recurrents": "extraction_auto"
      },
      "pyramide_besoins": {
        "niveaux": 6,
        "interactive": true,
        "personnalisable": true
      },
      "classement_motivations": {
        "items": 20,
        "drag_drop": true,
        "priorisation": true
      },
      "synthese": {
        "moteurs_actuels": "textarea",
        "moteurs_souhaites": "textarea",
        "considerations_choix": "textarea"
      }
    },
    "features": {
      "suggestions_metiers": true,
      "analyse_comparative": true,
      "pyramide_interactive": true,
      "drag_drop_ranking": true,
      "auto_save": true,
      "export_pdf": true,
      "export_image": true
    },
    "validation": {
      "metiers_aimes_required": 3,
      "metiers_detestes_required": 3,
      "analyse_min_chars": 100,
      "pyramide_min_items": 4,
      "ranking_min_items": 10
    }
  }
}
```

## Notes d'Intégration

- L'exercice utilise la projection pour révéler les motivations inconscientes
- La comparaison aimé/détesté fait ressortir les critères essentiels
- La pyramide des besoins est inspirée de Maslow mais adaptée au contexte professionnel
- Le classement des 20 motivations permet une hiérarchisation fine
- L'analyse du fil conducteur révèle les patterns cachés
- Les exemples fournis guident sans influencer
- La liste de 100 métiers stimule l'imagination et élargit les horizons
- La synthèse finale connecte présent et futur professionnel
- Format adapté pour un bilan de compétences approfondi
