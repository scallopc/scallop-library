import Routes from "./routes/routes";
import GlobalStyle from "./globalStyles/globalStyle";
import { dark, light } from "./globalStyles/themes";
import { usePersistedTheme, usePersistedLanguage } from "./hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import "./i18n/index";
import { useTranslation } from "react-i18next";
import { themeStore } from "./store";
import { useEffect } from "react";

export default function App(props) {
     const { children } = props;
     //const { theme, setTheme } = themeStore();
     const {
          t,
          i18n: { changeLanguage, language },
     } = useTranslation();
     const [theme, setTheme] = usePersistedTheme("Theme", light);
     const [currentLanguage, setCurrentLanguage] = usePersistedLanguage(
          "Language",
          language
     );

     const handleTheme = () => {
          setTheme(theme.title === "light" ? dark : light);
     };

     const handleLanguage = () => {
          const newLanguage = currentLanguage === "en" ? "ptBR" : "en";
          changeLanguage(newLanguage);
          setCurrentLanguage(newLanguage);
     };

     useEffect(() => {
          console.log(theme);
     }, []);

     return (
          <>
               <ThemeProvider theme={theme}>
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
          </>
     );
}
