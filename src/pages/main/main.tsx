import MenuLateral from "../menu/menuLateral";
import { ContainerMain } from "./styles";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "../views/home";
import Avatar from "../../components/avatar/avatar";

export default function MainComponents() {
    useEffect(() => {
        if (window.location.hash == "#/") {
            window.location.href = window.location.origin + "#/home";
        }
    }, []);

    return (
        <ContainerMain>
            <MenuLateral />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/avatar" component={Avatar} />
            </Switch>
        </ContainerMain>
    );
}
