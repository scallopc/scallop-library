import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ContainerMain } from "./styles";
import {
     MenuLateral,
     PageHome,
     PageTable,
     PageColorPicker,
     PageButtons,
     PageToggle,
     PagePaginator,
     PageCalendar,
     PageToast,
     PageAvatar,
} from "../pages";
import { Header } from "../pages/header/header";
import { HeightComponent } from "../components";
import { menuStore } from "../store";

export default function Routes(props) {
     const {setShowMenu, showMenu} = menuStore()
     const { theme, isChecked, setLanguage, isLanguageCheck } = props;

     useEffect(() => {
          if (window.location.hash == "#/") {
               window.location.href = window.location.origin + "#/home";
          }
     }, []);

     return (
          <>
               <ContainerMain>
                    <Header />
                    {showMenu &&   <MenuLateral
                         isChecked={isChecked}
                         switchTheme={(e) => theme(e?.checked)}
                         setLanguage={() => setLanguage()}
                         isLanguageCheck={isLanguageCheck}
                    />}
                  
                    <HeightComponent>
                         <Switch>
                              <Route path="/home" component={PageHome} />
                              <Route path="/avatar" component={PageAvatar} />
                              <Route path="/button" component={PageButtons} />
                              <Route
                                   path="/calendar"
                                   component={PageCalendar}
                              />
                              <Route
                                   path="/colorpicker"
                                   component={PageColorPicker}
                              />
                              <Route
                                   path="/paginator"
                                   component={PagePaginator}
                              />
                              <Route path="/table" component={PageTable} />
                              <Route path="/toast" component={PageToast} />
                              <Route path="/toggle" component={PageToggle} />
                         </Switch>
                    </HeightComponent>
               </ContainerMain>
          </>
     );
}
