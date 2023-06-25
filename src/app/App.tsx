import Routes from "./routes/routes";
import GlobalStyle from "./globalStyles/globalStyle";
import { dark, light } from "./globalStyles/themes";
import { usePersistedState } from "./shared/hooks";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

export default function App(props) {
     const [theme, setTheme] = usePersistedState("", light);
     const { children } = props;
     const switchTheme = () => {
          setTheme(theme.title === "light" ? dark : light);
     };
     return (
          <div>
               <ThemeProvider theme={theme}>
                    <HashRouter>
                         <GlobalStyle />
                         <Routes theme={() => switchTheme()} />
                         {children}
                    </HashRouter>
               </ThemeProvider>
          </div>
     );
}
