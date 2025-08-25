#!/bin/bash
# Vérifie si les fichiers ont été complétés

echo "🔍 Vérification des fichiers..."
echo "=============================="

check_file() {
    if grep -q "COPIER ICI" "$1" || grep -q "À REMPLACER" "$1"; then
        echo "❌ $1 - Non complété"
        return 1
    else
        echo "✅ $1 - Complété"
        return 0
    fi
}

completed=0
total=0

for file in modules/*/index.html modules/*/imsmanifest.xml n8n-workflows/*.json n8n-workflows/*.js documentation/*.md scripts/export-artifacts.js; do
    if [ -f "$file" ]; then
        ((total++))
        if check_file "$file"; then
            ((completed++))
        fi
    fi
done

echo ""
echo "📊 Résultat : $completed/$total fichiers complétés"

if [ $completed -eq $total ]; then
    echo "🎉 Tous les fichiers sont prêts !"
else
    echo "⚠️  Il reste des fichiers à compléter"
fi
