// next.config.js
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    i18n: {
        locales: ['en', 'fr'],  // Add both English and French locales
        defaultLocale: 'en',    // Set default locale to English
      },  });

  