sed -i '' "s|from '../modules/endocrinologia/dados'|from '../modules/endocrinologia/index.js'|g" src/pages/TelaEspecialidade.jsx
sed -i '' "s|from '../modules/gastroenterologia/dados'|from '../modules/gastroenterologia/index.js'|g" src/pages/TelaEspecialidade.jsx
echo "✅ Corrigido!"
