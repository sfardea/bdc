#!/bin/bash
# Crée les packages SCORM

echo "📦 Création des packages SCORM..."

cd modules/module-01-presentons-nous
zip -r ../../BC_Module_01_SCORM.zip * -x "*.DS_Store"
echo "✅ BC_Module_01_SCORM.zip créé"

cd ../module-02-autoportrait
zip -r ../../BC_Module_02_SCORM.zip * -x "*.DS_Store"
echo "✅ BC_Module_02_SCORM.zip créé"

cd ../..
echo ""
echo "🎉 Packages SCORM prêts pour Zoho Learn !"
