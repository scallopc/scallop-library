import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerMain } from "./styles";
import { ButtonsPageView, Home, TablePageView, MenuLateral } from "../pages";
import PagePaginator from "../pages/pagePaginator/pagePaginator";
import PageToggleSwitch from "../pages/pageToggleSwitch/pageToggleSwitch";

export default function Routes(props) {
     const { theme, isChecked } = props;

     useEffect(() => {
          if (window.location.hash == "#/") {
               window.location.href = window.location.origin + "#/home";
          }
     }, []);

     return (
          <ContainerMain>
               <MenuLateral
                    isChecked={isChecked}
                    switchTheme={(e) => theme(e?.checked)}
               />
               <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/button" component={ButtonsPageView} />
                    <Route path="/paginator" component={PagePaginator} />
                    <Route path="/table" component={TablePageView} />
                    <Route path="/table" component={TablePageView} />
                    <Route path="/toggle-switch" component={PageToggleSwitch} />
               </Switch>
          </ContainerMain>
     );
}
