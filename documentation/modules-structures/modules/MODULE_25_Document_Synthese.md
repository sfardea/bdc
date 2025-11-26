# Module 25 : Production du Document de Synthèse

## Informations Générales

- **Titre** : Production du Document de Synthèse
- **Type** : Module de génération automatique de document
- **Durée estimée** : 15-20 minutes (révision et validation)
- **Objectif** : Générer automatiquement le document de synthèse officiel du bilan de compétences
- **Phase** : Conclusion
- **Public cible** : Tous les bénéficiaires ayant complété leur bilan
- **Format** : Génération automatique avec révision manuelle
- **Particularité** : Module utilisant l'IA pour synthétiser toutes les données

## PAGE DE PRÉSENTATION

### Éléments Visuels
- **Badge du module** : "Module 25"
- **Titre** : "Votre Document de Synthèse"
- **Icône/Emoji** : 📄 (document) ou 🎓 (diplôme)
- **Animation d'entrée** : Fade-in avec effet de compilation

### Contenu
- **Description courte** : "Générez votre document de synthèse officiel"
- **Description détaillée** : "Ce module final compile automatiquement toutes vos réflexions, analyses et décisions prises tout au long du bilan. Un document professionnel sera généré, que vous pourrez réviser avant validation finale."
- **Durée estimée** : 15-20 minutes
- **Type d'activité** : Génération automatique et révision
- **Objectif principal** : "Obtenir votre document de synthèse conforme aux exigences légales"

### Points Clés
- Document officiel conforme au Code du Travail
- Synthèse automatique de tous vos travaux
- Possibilité de révision avant validation
- Export en format Word et PDF

### Message de Préparation
- **Information légale** : "Ce document respecte l'article L6313-4 du Code du Travail"
- **Conseil** : "Prenez le temps de relire et d'ajuster si nécessaire"

### Bouton d'Action
- **Texte** : "Générer mon document"
- **Style** : btn-primary btn-lg
- **Action** : Lancement de la génération

## Architecture Technique du Module

### 1. Collecte des Données

```javascript
class DataCollector {
  constructor() {
    this.modules = [];
    this.phases = [];
    this.notes = [];
  }
  
  async collectAllData() {
    const data = {
      // Informations personnelles
      beneficiary: await this.getBeneficiaryInfo(),
      
      // Données des modules
      module_data: {
        module_01: await this.getModuleData(1), // Faisons connaissance
        module_02: await this.getModuleData(2), // Autoportrait
        module_05: await this.getModuleData(5), // Photo-langage
        module_06: await this.getModuleData(6), // Courbes de vie
        module_07: await this.getModuleData(7), // MBTI
        module_08: await this.getModuleData(8), // 32 figures
        module_09: await this.getModuleData(9), // Ailes du désir
        module_10: await this.getModuleData(10), // Cocktail réussite
        module_11: await this.getModuleData(11), // Portrait chinois
        module_12: await this.getModuleData(12), // Réalisations
        module_13: await this.getModuleData(13), // Motivations
        module_14: await this.getModuleData(14), // Portefeuille compétences
        module_15: await this.getModuleData(15), // Environnement travail
        module_16: await this.getModuleData(16), // RIASEC
        module_17: await this.getModuleData(17), // Réflexion bilan
        module_18: await this.getModuleData(18), // Valeurs travail
        module_19: await this.getModuleData(19), // MétierScope
        module_20: await this.getModuleData(20), // Dépôt Orientation
        module_21: await this.getModuleData(21), // Enquêtes métiers
        module_22: await this.getModuleData(22), // 360°
        module_23: await this.getModuleData(23), // Projet pro
        module_24: await this.getModuleData(24)  // Viabilisation
      },
      
      // Rapports de phases
      phase_reports: {
        phase_1: await this.getPhaseReport(1),
        phase_2: await this.getPhaseReport(2),
        phase_3: await this.getPhaseReport(3),
        phase_4: await this.getPhaseReport(4)
      },
      
      // Notes et annotations
      coach_notes: await this.getCoachNotes(),
      video_sessions: await this.getVideoSessionNotes(),
      
      // Métadonnées
      metadata: {
        start_date: this.getStartDate(),
        end_date: new Date().toISOString(),
        total_hours: this.calculateTotalHours(),
        completion_rate: this.getCompletionRate()
      }
    };
    
    return data;
  }
}
```

### 2. Préparation des Données pour l'IA

```javascript
class DataPreparator {
  prepareForLLM(rawData) {
    return {
      // Section 1: Contexte et parcours
      context: {
        parcours_formation: this.extractEducation(rawData),
        parcours_professionnel: this.extractProfessionalPath(rawData),
        parcours_extra_professionnel: this.extractExtraProfessional(rawData)
      },
      
      // Section 2: Analyse personnelle
      personal_analysis: {
        valeurs: this.extractValues(rawData.module_13, rawData.module_18),
        motivations: this.extractMotivations(rawData.module_13),
        personnalite: {
          mbti: rawData.module_07.result,
          figure_destin: rawData.module_08.selected_figure,
          traits: this.extractPersonalityTraits(rawData)
        },
        competences: this.extractSkills(rawData.module_14),
        realisations: this.extractAchievements(rawData.module_12)
      },
      
      // Section 3: Projets professionnels
      projects: {
        principal: this.extractMainProject(rawData.module_23, rawData.module_24),
        securisation: this.extractBackupProject(rawData.module_24),
        pistes_ecartees: this.extractDiscardedOptions(rawData),
        viability_analysis: rawData.module_24.viability_score
      },
      
      // Section 4: Environnement recherché
      desired_environment: {
        criteres: rawData.module_15.criteria,
        riasec_profile: rawData.module_16.result,
        conditions_travail: this.extractWorkConditions(rawData)
      },
      
      // Section 5: Plan d'action
      action_plan: {
        court_terme: rawData.module_24.action_plan.immediate,
        moyen_terme: rawData.module_24.action_plan.medium_term,
        long_terme: rawData.module_24.action_plan.long_term,
        formations: this.extractTrainingNeeds(rawData),
        ressources: this.extractResources(rawData)
      },
      
      // Section 6: Feedback 360
      feedback_360: {
        strengths_self: rawData.module_22.strengths_self,
        improvements_self: rawData.module_22.improvements_self,
        external_feedback: rawData.module_22.external_feedback
      },
      
      // Notes du coach
      coach_insights: {
        observations: rawData.coach_notes,
        recommendations: this.extractRecommendations(rawData),
        key_moments: rawData.video_sessions.key_insights
      }
    };
  }
}
```

### 3. Génération via LLM

```javascript
class SynthesisGenerator {
  constructor() {
    this.llmEndpoint = window.N8N_CONFIG?.webhookUrl || 'https://n8n.example.com/webhook/synthesis';
    this.template = this.loadTemplate();
  }
  
  async generateSynthesis(preparedData) {
    const prompt = this.buildPrompt(preparedData);
    
    try {
      const response = await fetch(this.llmEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'generate_synthesis',
          data: preparedData,
          prompt: prompt,
          template_sections: this.getTemplateSections()
        })
      });
      
      const result = await response.json();
      return result.synthesis;
      
    } catch (error) {
      console.error('Erreur génération:', error);
      return this.generateFallbackSynthesis(preparedData);
    }
  }
  
  buildPrompt(data) {
    return `
      En tant que consultant en bilan de compétences, générez une synthèse professionnelle 
      et personnalisée basée sur les données suivantes.
      
      INSTRUCTIONS:
      1. Adoptez un ton professionnel mais bienveillant
      2. Mettez en valeur les points forts du bénéficiaire
      3. Soyez précis et concret dans les recommandations
      4. Structurez selon le template fourni
      5. Personnalisez avec les données spécifiques du parcours
      
      SECTIONS À COMPLÉTER:
      - Origine de la demande (contexte initial)
      - Attentes du bénéficiaire 
      - Objectifs principaux et opérationnels
      - Synthèse du parcours (formation, professionnel, extra-pro)
      - Projet principal avec analyse ROME
      - Projet de sécurisation
      - Compétences et ressources
      - Plan d'action détaillé
      - Conclusion personnalisée
      
      DONNÉES DU BÉNÉFICIAIRE:
      ${JSON.stringify(data, null, 2)}
    `;
  }
  
  getTemplateSections() {
    return {
      header: this.template.header,
      deontologie: this.template.deontologie,
      modalites: this.template.modalites,
      sections: [
        'origine_demande',
        'attentes',
        'objectifs',
        'parcours',
        'investigation',
        'projet_principal',
        'projet_securisation',
        'pistes_ecartees',
        'plan_action',
        'ressources',
        'conclusion'
      ]
    };
  }
}
```

### 4. Interface de Révision

```html
<div class="synthesis-review-container">
  <div class="review-header">
    <h1>Révision de votre Document de Synthèse</h1>
    <div class="generation-status">
      <span class="status-icon">✓</span>
      <span class="status-text">Document généré avec succès</span>
    </div>
  </div>
  
  <div class="document-preview">
    <div class="preview-toolbar">
      <button class="btn-zoom-in">🔍+</button>
      <button class="btn-zoom-out">🔍-</button>
      <button class="btn-fullscreen">⛶</button>
      <select class="view-mode">
        <option value="edit">Mode édition</option>
        <option value="preview">Mode aperçu</option>
        <option value="split">Vue partagée</option>
      </select>
    </div>
    
    <div class="document-content" contenteditable="true">
      <!-- Document généré injecté ici -->
      <div class="editable-section" data-section="origine_demande">
        <h2>🔹 ORIGINE DE LA DEMANDE</h2>
        <p>[Contenu généré par l'IA, éditable]</p>
      </div>
      
      <div class="editable-section" data-section="attentes">
        <h2>🔹 ATTENTES DU BÉNÉFICIAIRE</h2>
        <p>[Contenu généré par l'IA, éditable]</p>
      </div>
      
      <!-- Autres sections... -->
    </div>
    
    <div class="revision-sidebar">
      <h3>Sections du document</h3>
      <ul class="section-navigator">
        <li class="nav-item completed">
          <span class="icon">✓</span> Informations générales
        </li>
        <li class="nav-item in-progress">
          <span class="icon">✏️</span> Origine et attentes
        </li>
        <li class="nav-item">
          <span class="icon">○</span> Parcours
        </li>
        <!-- Autres sections -->
      </ul>
      
      <div class="ai-suggestions">
        <h3>Suggestions d'amélioration</h3>
        <div class="suggestion">
          <p>💡 Ajoutez plus de détails sur vos motivations principales</p>
          <button class="apply-suggestion">Appliquer</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="validation-section">
    <div class="validation-checklist">
      <h3>Vérification finale</h3>
      <label class="check-item">
        <input type="checkbox" id="check_infos">
        <span>Informations personnelles correctes</span>
      </label>
      <label class="check-item">
        <input type="checkbox" id="check_parcours">
        <span>Parcours complet et à jour</span>
      </label>
      <label class="check-item">
        <input type="checkbox" id="check_projets">
        <span>Projets bien définis</span>
      </label>
      <label class="check-item">
        <input type="checkbox" id="check_plan">
        <span>Plan d'action réaliste</span>
      </label>
    </div>
    
    <div class="action-buttons">
      <button class="btn btn-secondary" onclick="saveAsDraft()">
        💾 Sauvegarder brouillon
      </button>
      <button class="btn btn-primary" onclick="validateDocument()">
        ✓ Valider le document
      </button>
    </div>
  </div>
</div>
```

### 5. Export et Finalisation

```javascript
class DocumentExporter {
  constructor() {
    this.formats = ['docx', 'pdf', 'html'];
  }
  
  async exportDocument(content, format = 'docx') {
    switch(format) {
      case 'docx':
        return this.exportToWord(content);
      case 'pdf':
        return this.exportToPDF(content);
      case 'html':
        return this.exportToHTML(content);
      default:
        throw new Error('Format non supporté');
    }
  }
  
  async exportToWord(content) {
    // Utilisation de docx.js ou similaire
    const doc = new Document({
      sections: [{
        properties: {},
        children: this.convertToWordElements(content)
      }]
    });
    
    const blob = await Packer.toBlob(doc);
    this.downloadFile(blob, 'synthese-bilan-competences.docx');
  }
  
  async exportToPDF(content) {
    // Utilisation de jsPDF ou html2pdf
    const element = document.getElementById('document-content');
    const opt = {
      margin: 1,
      filename: 'synthese-bilan-competences.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  }
  
  convertToWordElements(content) {
    // Conversion du HTML en éléments Word
    const elements = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Parcours et conversion des éléments
    doc.body.childNodes.forEach(node => {
      if (node.tagName === 'H1') {
        elements.push(new Paragraph({
          text: node.textContent,
          heading: HeadingLevel.HEADING_1
        }));
      } else if (node.tagName === 'H2') {
        elements.push(new Paragraph({
          text: node.textContent,
          heading: HeadingLevel.HEADING_2
        }));
      } else if (node.tagName === 'P') {
        elements.push(new Paragraph({
          text: node.textContent
        }));
      }
      // Autres conversions...
    });
    
    return elements;
  }
}
```

## PAGE DE SUCCÈS

### Éléments Visuels
- **Animation** : Confettis dorés
- **Icône** : 🎓 animé
- **Titre** : "Votre Bilan est Complet !"
- **Sous-titre** : "Document de synthèse finalisé"

### Message de Félicitations
```html
<div class="success-message">
  <h2>Félicitations ! 🎉</h2>
  <p class="lead">
    Vous avez terminé avec succès votre bilan de compétences.
    Votre document de synthèse est maintenant disponible.
  </p>
</div>
```

### Récapitulatif
```html
<div class="completion-summary">
  <div class="summary-stats">
    <div class="stat">
      <span class="stat-value">25</span>
      <span class="stat-label">Modules complétés</span>
    </div>
    <div class="stat">
      <span class="stat-value">[X]h</span>
      <span class="stat-label">Temps investi</span>
    </div>
    <div class="stat">
      <span class="stat-value">100%</span>
      <span class="stat-label">Progression</span>
    </div>
  </div>
  
  <div class="key-outcomes">
    <h3>Vos acquis principaux</h3>
    <ul>
      <li>✓ Projet professionnel défini et validé</li>
      <li>✓ Compétences identifiées et valorisées</li>
      <li>✓ Plan d'action structuré</li>
      <li>✓ Document de synthèse officiel</li>
    </ul>
  </div>
</div>
```

### Actions Disponibles
```html
<div class="final-actions">
  <button class="btn btn-primary btn-lg" onclick="downloadDocument('docx')">
    📄 Télécharger en Word
  </button>
  <button class="btn btn-secondary btn-lg" onclick="downloadDocument('pdf')">
    📑 Télécharger en PDF
  </button>
  <button class="btn btn-outline-primary" onclick="emailDocument()">
    ✉️ Envoyer par email
  </button>
  <button class="btn btn-outline-secondary" onclick="printDocument()">
    🖨️ Imprimer
  </button>
</div>
```

### Prochaines Étapes
```html
<div class="next-steps">
  <h3>Et maintenant ?</h3>
  <div class="steps-timeline">
    <div class="step">
      <span class="step-number">1</span>
      <p>Conservez précieusement votre document de synthèse</p>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <p>Partagez-le avec votre conseiller CEP si souhaité</p>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <p>Lancez votre plan d'action</p>
    </div>
    <div class="step">
      <span class="step-number">4</span>
      <p>Restez en contact pour un suivi (optionnel)</p>
    </div>
  </div>
</div>
```

## Configuration N8N pour la Génération

### Workflow N8N
```json
{
  "name": "Synthesis Document Generator",
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "synthesis-generator",
        "responseMode": "onReceived",
        "options": {}
      }
    },
    {
      "name": "Data Validator",
      "type": "n8n-nodes-base.function",
      "parameters": {
        "functionCode": "// Validation des données reçues\nconst data = items[0].json;\nif (!data.beneficiary || !data.module_data) {\n  throw new Error('Données incomplètes');\n}\nreturn items;"
      }
    },
    {
      "name": "OpenAI GPT-4",
      "type": "n8n-nodes-base.openAi",
      "parameters": {
        "operation": "completion",
        "model": "gpt-4-turbo",
        "prompt": "={{$json.prompt}}",
        "maxTokens": 8000,
        "temperature": 0.7
      }
    },
    {
      "name": "Format Response",
      "type": "n8n-nodes-base.function",
      "parameters": {
        "functionCode": "// Formatage de la réponse\nconst synthesis = items[0].json.choices[0].text;\nreturn [{\n  json: {\n    success: true,\n    synthesis: synthesis,\n    generated_at: new Date().toISOString()\n  }\n}];"
      }
    },
    {
      "name": "Error Handler",
      "type": "n8n-nodes-base.function",
      "parameters": {
        "functionCode": "// Gestion d'erreur avec fallback\nreturn [{\n  json: {\n    success: false,\n    error: items[0].json.error,\n    fallback: true\n  }\n}];"
      }
    }
  ]
}
```

## Fonctionnalités Avancées

### 1. Révision Collaborative
```javascript
class CollaborativeReview {
  enableCoachReview(documentId) {
    // Permet au coach de commenter
    return {
      shareLink: this.generateShareLink(documentId),
      permissions: ['read', 'comment'],
      expiresIn: '7days'
    };
  }
  
  trackChanges(documentId, changes) {
    // Historique des modifications
    this.history.push({
      documentId,
      timestamp: new Date(),
      changes,
      author: this.getCurrentUser()
    });
  }
}
```

### 2. Validation Multi-étapes
```javascript
class ValidationProcess {
  stages = [
    { id: 'draft', name: 'Brouillon' },
    { id: 'review', name: 'En révision' },
    { id: 'validated', name: 'Validé' },
    { id: 'final', name: 'Finalisé' }
  ];
  
  validateStage(documentId, stage) {
    const validations = {
      draft: this.validateCompleteness,
      review: this.validateContent,
      validated: this.validateLegal,
      final: this.validateFinal
    };
    
    return validations[stage](documentId);
  }
}
```

### 3. Templates Personnalisables
```javascript
class TemplateManager {
  templates = {
    standard: 'template-standard.html',
    executive: 'template-executive.html',
    detailed: 'template-detailed.html',
    simplified: 'template-simplified.html'
  };
  
  selectTemplate(userPreference, dataComplexity) {
    if (userPreference) return this.templates[userPreference];
    
    // Sélection automatique selon la complexité
    if (dataComplexity > 0.8) return this.templates.detailed;
    if (dataComplexity < 0.3) return this.templates.simplified;
    return this.templates.standard;
  }
}
```

## Intégration SCORM

```javascript
// Finalisation du bilan
SCORM.SetValue('cmi.completion_status', 'completed');
SCORM.SetValue('cmi.success_status', 'passed');
SCORM.SetValue('cmi.score.scaled', 1.0);

// Sauvegarde du document
const documentData = {
  synthesis: synthesisContent,
  generated_at: new Date().toISOString(),
  format: 'docx',
  checksum: calculateChecksum(synthesisContent)
};

SCORM.SetValue('cmi.comments', JSON.stringify(documentData));
SCORM.Commit();
SCORM.Terminate();
```

## Responsive Design

### Mobile
- Interface simplifiée de révision
- Scroll vertical pour le document
- Actions principales en bas fixe

### Desktop
- Vue côte à côte (document + outils)
- Barre d'outils flottante
- Navigation par sections

## Sécurité et Conformité

### Protection des Données
```javascript
class DataProtection {
  encryptSensitiveData(data) {
    // Chiffrement AES-256
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.getEncryptionKey()
    ).toString();
  }
  
  anonymizeForArchive(document) {
    // Anonymisation pour archivage
    const anonymized = { ...document };
    delete anonymized.beneficiary.name;
    delete anonymized.beneficiary.contact;
    anonymized.id = this.generateAnonymousId();
    return anonymized;
  }
}
```

### Conformité RGPD
- Consentement explicite pour le traitement
- Droit à l'effacement
- Portabilité des données
- Durée de conservation limitée

## Structure JSON du Document Final

```json
{
  "document": {
    "version": "2.0",
    "type": "synthesis",
    "metadata": {
      "generated_at": "2024-01-15T10:30:00Z",
      "generator_version": "1.0",
      "template": "standard",
      "language": "fr"
    },
    "content": {
      "header": {
        "title": "Synthèse de Bilan de Compétences",
        "beneficiary": {},
        "consultant": {},
        "dates": {}
      },
      "sections": [
        {
          "id": "deontologie",
          "title": "Rappel Déontologique",
          "content": "...",
          "required": true
        },
        {
          "id": "modalites",
          "title": "Modalités du Déroulement",
          "content": "..."
        },
        {
          "id": "origine_demande",
          "title": "Origine de la Demande",
          "content": "...",
          "editable": true
        },
        {
          "id": "projet_principal",
          "title": "Projet Principal",
          "content": "...",
          "subsections": [
            "description",
            "competences",
            "analyse_marche"
          ]
        }
      ],
      "annexes": [
        {
          "type": "test_results",
          "title": "Résultats des tests",
          "data": {}
        }
      ]
    },
    "validation": {
      "status": "validated",
      "validated_by": "beneficiary",
      "validated_at": "2024-01-15T11:00:00Z",
      "signature": "hash"
    }
  }
}
```

## Notes d'Implémentation

1. **Performance** : Génération asynchrone avec indicateur de progression
2. **Fiabilité** : Système de fallback si l'IA est indisponible
3. **Personnalisation** : Adaptation au profil et parcours
4. **Accessibilité** : Interface de révision accessible
5. **Archivage** : Conservation sécurisée 3 ans minimum
6. **Traçabilité** : Logs de toutes les actions
7. **Multi-format** : Export Word, PDF, HTML
8. **Collaboration** : Révision possible par le coach
