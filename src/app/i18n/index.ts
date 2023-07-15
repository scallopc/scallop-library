import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ptBR from "./translations/ptBR.json";
import fr from "./translations/fr.json";

i18n.use(initReactI18next).init({
     lng: "en",
     interpolation: {
          escapeValue: false,
     },
     resources: {
          en: en,
          ptBR: ptBR,
     },
});

export default i18n;
