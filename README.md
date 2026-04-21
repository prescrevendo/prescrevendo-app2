# Prescrevendo App

App médico de prescrições para web, iOS e Android.

## Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Setup Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build
npm run preview
```

O app estará disponível em `http://localhost:5173`

## Capacitor (Android/iOS)

### Setup Inicial

```bash
# Adicionar iOS
npm run capacitor:add:ios

# Adicionar Android
npm run capacitor:add:android

# Sincronizar código
npm run capacitor:sync
```

### Desenvolvimento

```bash
# Abrir iOS
npm run capacitor:open:ios

# Abrir Android
npm run capacitor:open:android
```

## Estrutura de Pastas
## Deploy

### Vercel (Web)

```bash
git push origin main
```

Vercel fará deploy automático.

### App Store / Play Store

Após gerar builds iOS/Android, fazer upload nas lojas.

## Roadmap

- [ ] Converter PDFs em conteúdo HTML/Markdown
- [ ] Integração com Capacitor completa
- [ ] Build iOS e Android
- [ ] Publicação nas lojas
- [ ] Funcionalidade de favoritos
- [ ] Busca de medicamentos

