// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

const translations = {
    en: {
        name: 'My name is Kuruvilla',
        busstop: 'Get off at Chittethukara Bus Stop',
        arrival: 'KSRTC Bus arriving in 20 minutes',
    },
    mal: {
        name: 'എൻ്റെ പേര് കുരുവിള',
        busstop: 'ചിറ്റേത്തുകര ബസ് സ്റ്റോപ്പിൽ ഇറങ്ങുക',
        arrival: 'KSRTC ബസ് 20 മിനിറ്റിനുള്ളിൽ എത്തും',
    }
};

const i18n = new I18n(translations);
const initialLocale = Localization.getLocales();
i18n.locale = initialLocale;
i18n.enableFallback = true;

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(initialLocale);

    const changeLocale = (newLocale) => {
        i18n.locale = newLocale;
        setLocale(newLocale);
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
