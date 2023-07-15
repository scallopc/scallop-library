import Routes from "./routes/routes";
import GlobalStyle from "./globalStyles/globalStyle";
import { dark, light } from "./globalStyles/themes";
import { usePersistedState } from "./shared/hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App(props) {
     //const [theme, setTheme] = useState(light);
     const [theme, setTheme] = usePersistedState("theme", light);
     const { children } = props;
     const switchTheme = () => {
          setTheme(theme.title === "light" ? dark : light);
     };

     return (
          <div>
               <ThemeProvider theme={light}>
                    <HashRouter>
                         <GlobalStyle />
                         <Routes
                              theme={() => switchTheme()}
                              isChecked={theme}
                         />
                         {children}
                    </HashRouter>
               </ThemeProvider>
          </div>
     );
}
