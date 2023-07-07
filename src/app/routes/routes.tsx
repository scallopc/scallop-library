import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerMain } from "./styles";
import { ButtonsPageView, Home, TablePageView, MenuLateral } from "../pages";
import PagePaginator from "../pages/pagePaginator/pagePaginator";

export default function Routes(props) {
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
                    <Route path="/table" component={TablePageView} />
                    <Route path="/paginator" component={PagePaginator} />
               </Switch>
          </ContainerMain>
     );
}
