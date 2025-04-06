import React, { useEffect } from 'react';

const Translate = () => {
  useEffect(() => {
    // Prevent multiple injections of the same script
    const existingScript = document.getElementById('google-translate-script');

    if (!existingScript) {
      // Define global callback
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };

      // Create script tag
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      // If already loaded, just initialize again
      window.googleTranslateElementInit();
    }
  }, []);

  return <div id="google_translate_element" />;
};

export default Translate;
