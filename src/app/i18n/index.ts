import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import ptBr from "./translations/ptBR.json";
import fr from "./translations/fr.json";

i18n.use(initReactI18next).init({
     fallbackLng: "en",
     interpolation: {
          escapeValue: false,
     },
     resources: {
          en: en,
          ptBR: ptBr,
          fr: fr,
     },
});

export default i18n;
