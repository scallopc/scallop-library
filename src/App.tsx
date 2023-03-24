import { ThemeProvider } from "styled-components";
import light from "./globalStyles/themes/light";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyle";
import MainComponents from "./pages/main/main";
import usePersistedState from "./utils/usePersistedState";
import dark from "./globalStyles/themes/dark";

export default function App(props) {
    const [theme, setTheme] = usePersistedState("", light);
    const { children } = props;
    const switchTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <GlobalStyle />
                <MainComponents theme={() => switchTheme()} />
                {children}
            </HashRouter>
        </ThemeProvider>
    );
}
