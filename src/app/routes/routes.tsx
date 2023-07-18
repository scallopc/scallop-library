import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerMain } from "./styles";
import {
     MenuLateral,
     PageHome,
     PageTable,
     PageColorPicker,
     PageButtons,
     PageToggleSwitch,
     PagePaginator,
} from "../pages";

export default function Routes(props) {
     const { theme, isChecked, setLanguage, isLanguageCheck } = props;

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
                    setLanguage={() => setLanguage()}
                    isLanguageCheck={isLanguageCheck}
               />
               <Switch>
                    <Route path="/home" component={PageHome} />
                    <Route path="/button" component={PageButtons} />
                    <Route path="/colorpicker" component={PageColorPicker} />
                    <Route path="/paginator" component={PagePaginator} />
                    <Route path="/table" component={PageTable} />
                    <Route path="/toggle-switch" component={PageToggleSwitch} />
               </Switch>
          </ContainerMain>
     );
}
