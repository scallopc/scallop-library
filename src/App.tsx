import { ThemeProvider } from "styled-components";
import light from "./globalStyles/themes/light";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./globalStyles/globalStyle";
import Home from "./pages/views/home";
import MainComponents from "./pages/main/main";

export default function App(props) {
    const theme: any = light;
    const { children } = props;

    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <GlobalStyle />
                <MainComponents />
                {children}
            </HashRouter>
        </ThemeProvider>
    );
}
