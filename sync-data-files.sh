#!/bin/bash
# Sync shared data files from root to Developer folder
# Since the React app uses relative paths, it needs these files in its own folder
# But we maintain a single source of truth at root level

echo "🔄 Sincronizando arquivos de dados compartilhados..."

# Copy shared data files to Developer folder
cp portfolio_shared_data.json Developer/
cp res_primaryLanguage.json Developer/
cp res_secondaryLanguage.json Developer/
cp manifest.json Developer/

echo "✅ Arquivos sincronizados com sucesso!"
echo ""
echo "Arquivos sincronizados:"
echo "  - portfolio_shared_data.json"
echo "  - res_primaryLanguage.json"
echo "  - res_secondaryLanguage.json"
echo "  - manifest.json"
echo ""
echo "💡 Dica: Execute este script antes de cada deploy para garantir consistência."
