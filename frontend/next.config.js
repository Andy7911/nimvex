const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    sourceMap: true,
  },
  i18n: {
    locales: ['fr', 'en'], // Liste des langues supportées
    defaultLocale: 'fr',   // Langue par défaut
    localeDetection: false
  },
  webpack(config, { dev }) {
    if (dev) {
      console.log("Chemin d'accès SCSS:", path.join(__dirname, 'styles'));
      config.devtool = 'source-map';
    }
    return config;
  },
};