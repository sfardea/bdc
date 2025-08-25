// Configuration pour l'analyse du blason avec Claude Vision
// À intégrer dans un node Function de n8n

const blasonAnalysisConfig = {
  // Configuration de l'analyse visuelle
  analysisPrompt: `
    Analyse ce blason personnel créé dans le cadre d'un bilan de compétences.
    
    Structure du blason (4 quadrants):
    - Haut gauche : Valeurs
    - Haut droite : Forces 
    - Bas gauche : Aspirations
    - Bas droite : Essence
    
    Pour ton analyse, observe et décris:
    
    1. ÉLÉMENTS VISUELS
    - Symboles utilisés dans chaque quadrant
    - Couleurs dominantes et leur signification psychologique
    - Style de dessin (précis/spontané, simple/complexe)
    - Équilibre et harmonie générale
    
    2. INTERPRÉTATION PSYCHOLOGIQUE
    - Cohérence entre les quadrants
    - Thèmes récurrents
    - Messages symboliques
    - Niveau d'investissement dans la création
    
    3. INSIGHTS PROFESSIONNELS
    - Valeurs professionnelles exprimées
    - Forces mises en avant
    - Aspirations de carrière suggérées
    - Essence/identité professionnelle
    
    4. RECOMMANDATIONS
    - Points forts à valoriser
    - Axes de développement
    - Pistes professionnelles cohérentes
    
    Format de réponse : JSON structuré
  `,

  // Fonction de préparation de l'image pour l'API
  prepareImageForAnalysis: function(base64Image) {
    // Nettoyer le préfixe data:image si présent
    const cleanBase64 = base64Image.replace(/^data:image\/[a-z]+;base64,/, '');
    
    // Vérifier la taille (max 10MB pour Claude)
    const sizeInBytes = (cleanBase64.length * 3) / 4;
    if (sizeInBytes > 10 * 1024 * 1024) {
      // Compresser si nécessaire
      return compressImage(cleanBase64);
    }
    
    return cleanBase64;
  },

  // Fonction de traitement de la réponse Claude
  processClaudeResponse: function(claudeResponse, userData) {
    try {
      const analysis = JSON.parse(claudeResponse);
      
      return {
        visualElements: {
          symbols: analysis.symbols || [],
          colors: analysis.colors || [],
          style: analysis.style || 'non défini',
          balance: analysis.balance || 'non évalué'
        },
        
        psychologicalInterpretation: {
          coherence: analysis.coherence || 0,
          themes: analysis.themes || [],
          messages: analysis.messages || [],
          investment: analysis.investment || 'moyen'
        },
        
        professionalInsights: {
          values: analysis.professional_values || [],
          strengths: analysis.highlighted_strengths || [],
          aspirations: analysis.career_aspirations || [],
          identity: analysis.professional_identity || ''
        },
        
        recommendations: {
          strengths_to_leverage: analysis.strengths_to_leverage || [],
          development_areas: analysis.development_areas || [],
          career_paths: analysis.suggested_paths || []
        },
        
        // Ajouter des méta-données
        metadata: {
          analysisDate: new Date().toISOString(),
          userId: userData.userId,
          moduleId: 'BC_Module_02',
          confidence: analysis.confidence || 0.8
        }
      };
    } catch (error) {
      console.error('Error parsing Claude response:', error);
      return {
        error: 'Failed to parse analysis',
        rawResponse: claudeResponse
      };
    }
  },

  // Fonction pour générer des suggestions basées sur le profil
  generateBlasonSuggestions: function(profileData) {
    const suggestions = {
      symbols: [],
      colors: [],
      themes: []
    };
    
    // Suggestions de symboles basées sur les plaisirs
    if (profileData.plaisirs) {
      const symbolMap = {
        'nature': ['🌳', '🌿', '🏔️', '🌊'],
        'sport': ['⚽', '🏃', '💪', '🏆'],
        'art': ['🎨', '🖌️', '🎭', '🖼️'],
        'musique': ['🎵', '🎸', '🎹', '🎤'],
        'voyage': ['✈️', '🗺️', '🧭', '🌍'],
        'lecture': ['📚', '📖', '✍️', '📜'],
        'cuisine': ['🍳', '👨‍🍳', '🥘', '🍽️'],
        'technologie': ['💻', '🚀', '⚡', '🔧'],
        'animaux': ['🐾', '🦋', '🐕', '🐈'],
        'cinema': ['🎬', '📽️', '🎞️', '🍿'],
        'jeux': ['🎮', '🎲', '♟️', '🃏'],
        'social': ['👥', '🤝', '💬', '❤️']
      };
      
      profileData.plaisirs.forEach(plaisir => {
        if (symbolMap[plaisir]) {
          suggestions.symbols.push(...symbolMap[plaisir]);
        }
      });
    }
    
    // Suggestions de couleurs basées sur le profil émotionnel
    if (profileData.peurs) {
      const avgFear = Object.values(profileData.peurs).reduce((a, b) => a + b, 0) / 5;
      
      if (avgFear < 4) {
        suggestions.colors.push('#4ECDC4', '#45B7D1', '#96CEB4'); // Couleurs apaisantes
        suggestions.themes.push('Sérénité', 'Confiance', 'Équilibre');
      } else if (avgFear < 7) {
        suggestions.colors.push('#F7DC6F', '#F8B500', '#FF6F61'); // Couleurs énergiques
        suggestions.themes.push('Énergie', 'Transformation', 'Courage');
      } else {
        suggestions.colors.push('#BB8FCE', '#85C1F2', '#F8BBD0'); // Couleurs douces
        suggestions.themes.push('Douceur', 'Protection', 'Évolution');
      }
    }
    
    // Suggestions basées sur les qualités
    if (profileData.qualites) {
      if (profileData.qualites.includes('Créatif')) {
        suggestions.symbols.push('🎨', '💡', '✨', '🌈');
      }
      if (profileData.qualites.includes('Leader')) {
        suggestions.symbols.push('👑', '🦅', '⭐', '🏔️');
      }
      if (profileData.qualites.includes('Empathique')) {
        suggestions.symbols.push('❤️', '🤝', '🕊️', '🌸');
      }
    }
    
    return suggestions;
  },

  // Configuration pour stocker les blasons dans une galerie
  galleryConfig: {
    storage: {
      type: 'mongodb', // ou 's3', 'cloudinary'
      collection: 'blason_gallery',
      public: false,
      metadata: true
    },
    
    thumbnail: {
      generate: true,
      width: 200,
      height: 250,
      quality: 80
    },
    
    categorization: {
      byTheme: true,
      byDate: true,
      byProfile: true
    }
  },

  // Fonction pour créer un rapport visuel
  generateVisualReport: function(blasonAnalysis, profileData) {
    return {
      title: `Analyse du Blason - ${profileData.prenom} ${profileData.nom}`,
      sections: [
        {
          title: 'Vue d\'ensemble',
          content: {
            image: profileData.blason,
            caption: 'Blason personnel créé le ' + new Date().toLocaleDateString('fr-FR')
          }
        },
        {
          title: 'Analyse des quadrants',
          content: {
            valeurs: blasonAnalysis.visualElements.symbols.filter(s => s.quadrant === 1),
            forces: blasonAnalysis.visualElements.symbols.filter(s => s.quadrant === 2),
            aspirations: blasonAnalysis.visualElements.symbols.filter(s => s.quadrant === 3),
            essence: blasonAnalysis.visualElements.symbols.filter(s => s.quadrant === 4)
          }
        },
        {
          title: 'Interprétation psychologique',
          content: blasonAnalysis.psychologicalInterpretation
        },
        {
          title: 'Recommandations professionnelles',
          content: blasonAnalysis.recommendations
        }
      ],
      
      exportFormats: ['pdf', 'png', 'json']
    };
  }
};

// Fonction utilitaire pour compresser l'image si nécessaire
function compressImage(base64String) {
  // Implémentation de la compression
  // (utiliser une bibliothèque comme pica ou sharp en production)
  return base64String; // Placeholder
}

// Export pour utilisation dans n8n
return blasonAnalysisConfig;