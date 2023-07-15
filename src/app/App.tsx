import Routes from "./routes/routes";
import GlobalStyle from "./globalStyles/globalStyle";
import { dark, light } from "./globalStyles/themes";
import { usePersistedState } from "./shared/hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./i18n/index";
import { useTranslation } from "react-i18next";

export default function App(props) {
     const { children } = props;
     const {
          t,
          i18n: { changeLanguage, language },
     } = useTranslation();
     const [theme, setTheme] = usePersistedState("theme", light);
     const [currentLanguage, setCurrentLanguage] = useState(language);

     const handleTheme = () => {
          setTheme(theme.title === "light" ? dark : light);
     };

     const handleLanguage = () => {
          const newLanguage = currentLanguage === "en" ? "ptBR" : "en";
          changeLanguage(newLanguage);
          setCurrentLanguage(newLanguage);
     };

     return (
          <div>
               <ThemeProvider theme={light}>
                    <HashRouter>
                         <GlobalStyle />
                         <Routes
                              theme={() => handleTheme()}
                              isChecked={theme}
                              setLanguage={() => handleLanguage()}
                              isLanguageCheck={currentLanguage}
                         />
                         {children}
                    </HashRouter>
               </ThemeProvider>
          </div>
     );
}
