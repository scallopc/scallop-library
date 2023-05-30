import MenuLateral from "../menu/menuLateral";
import { ContainerMain } from "./styles";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "../views/home";
import ButtonsPageView from "../views/buttons";

export default function MainComponents(props) {
    const { theme } = props;

    useEffect(() => {
        if (window.location.hash == "#/") {
            window.location.href = window.location.origin + "#/home";
        }
    }, []);

    return (
        <ContainerMain>
            <MenuLateral switchTheme={(e) => theme(e.target.checked)} />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/button" component={ButtonsPageView} />
            </Switch>
        </ContainerMain>
    );
}
