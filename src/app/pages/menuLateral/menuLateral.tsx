import { HashRouter } from "react-router-dom";
import { MenuRoutes, Toggle } from "../../components";
import { ContainerMenuLateral, MenuContainer } from "./styles";
import { menuStore } from "../../store";

export function MenuLateral(props) {
     const { switchTheme, isChecked, setLanguage, isLanguageCheck } = props;
     const {setShowMenu, showMenu} = menuStore  ()
     const check = isChecked.title === "dark" ? true : false;
     const checkLanguage = isLanguageCheck === "en" ? true : false;

     return (
          <HashRouter>
               <ContainerMenuLateral>
                    <MenuContainer showMenu={showMenu}>
                         <div className="flex gap-3">
                              <p>Dark</p>
                              <Toggle checked={check} onChange={switchTheme} />
                         </div>
                         <div className="flex gap-3">
                              <p>en</p>
                              <Toggle
                                   checked={checkLanguage}
                                   onChange={setLanguage}
                              />
                         </div>

                         <MenuRoutes title="Home" to="/home" />
                     <MenuRoutes title="Avatar" to="/avatar" />
                         {/* <MenuRoutes title="Breadcrumb" to="/breadcrumb" /> */}
                         <MenuRoutes title="Button" to="/button" />
                         <MenuRoutes title="Calendar" to="/calendar" inProgress={true}/>
                         {/* <MenuRoutes title="Cards" to="/cards" /> */}
                         <MenuRoutes title="ColorPicker" to="/colorpicker" inProgress={true}/>
                         {/* <MenuRoutes title="Colors" to="/colors" /> */}
                         {/* <MenuRoutes title="Dropdown" to="/dropdown" /> */}
                         {/* <MenuRoutes title="Heading" to="/heading" /> */}
                         {/* <MenuRoutes title="Inputs" to="/inputs" /> */}
                         {/* <MenuRoutes title="Line" to="/line" /> */}
                         <MenuRoutes title="Paginator" to="/paginator" />
                         {/* <MenuRoutes title="Progress" to="/progress" /> */}
                         {/* <MenuRoutes title="Radio" to="/radio" /> */}
                         <MenuRoutes title="Table" to="/table" inProgress={true}/>
                         <MenuRoutes title="Toast" to="/toast" />
                         {/* <MenuRoutes title="Tabs" to="/tabs" /> */}
                         <MenuRoutes title="Toggle" to="/toggle" />
                    </MenuContainer>
               </ContainerMenuLateral>
          </HashRouter>
     );
}
