import { ThemeProvider } from "styled-components";
import light from "./globalStyles/themes/light";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyle";
import dark from "./globalStyles/themes/dark";
import usePersistedState from "./shared/hooks/usePersistedState";
import Routes from "./routes/routes";

export default function App(props) {
     const [theme, setTheme] = usePersistedState("", light);
     const { children } = props;
     const switchTheme = () => {
          setTheme(theme.title === "light" ? dark : light);
     };
     return (
          <div>
               <ThemeProvider theme={dark}>
                    <HashRouter>
                         <GlobalStyle />
                         <Routes theme={() => switchTheme()} />
                         {children}
                    </HashRouter>
               </ThemeProvider>
          </div>
     );
}
