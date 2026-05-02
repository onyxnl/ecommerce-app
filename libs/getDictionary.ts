export const getDictionary = async (locale: string) => {
    const lang = locale?.split('-')[0]; // handles en-US → en
    console.log(lang);
    const dictionaries = {
      en: () =>
        import('../locales/en/common.json').then((m) => m.default),
      es: () =>
        import('../locales/es/common.json').then((m) => m.default),
      fr: () =>
        import('../locales/fr/common.json').then((m) => m.default),
    };
  
    const loader = dictionaries[lang as 'en' | 'es' | 'fr'];
  
    if (!loader) {
      return dictionaries.en(); // fallback
    }
  
    return loader();
  };