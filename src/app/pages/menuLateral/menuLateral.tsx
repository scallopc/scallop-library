import { HashRouter } from "react-router-dom";
import { MenuRoutes } from "../../shared/components";
import { ContainerMenuLateral, MenuContainer } from "./styles";

export function MenuLateral(props) {
     const { switchTheme } = props;

     return (
          <HashRouter>
               <ContainerMenuLateral>
                    <MenuContainer>
                         <p onClick={switchTheme}>Tema</p>
                         <MenuRoutes title="Home" to="/home" />
                         {/* <MenuRoutes title="Avatar" to="/avatar" /> */}
                         {/* <MenuRoutes title="Breadcrumb" to="/breadcrumb" /> */}
                         <MenuRoutes title="Button" to="/button" />
                         {/* <MenuRoutes title="Cards" to="/cards" /> */}
                         {/* <MenuRoutes title="ColorPicker" to="/color-picker" /> */}
                         {/* <MenuRoutes title="Colors" to="/colors" /> */}
                         {/* <MenuRoutes title="Dropdown" to="/dropdown" /> */}
                         {/* <MenuRoutes title="Heading" to="/heading" /> */}
                         {/* <MenuRoutes title="Inputs" to="/inputs" /> */}
                         {/* <MenuRoutes title="Line" to="/line" /> */}
                         <MenuRoutes title="Paginator" to="/paginator" />
                         {/* <MenuRoutes title="Progress" to="/progress" /> */}
                         {/* <MenuRoutes title="Radio" to="/radio" /> */}
                         <MenuRoutes title="Table" to="/table" />
                         {/* <MenuRoutes title="Tabs" to="/tabs" /> */}
                         <MenuRoutes
                              title="Toggle Switch"
                              to="/toggle-switch"
                         />
                    </MenuContainer>
               </ContainerMenuLateral>
          </HashRouter>
     );
}
