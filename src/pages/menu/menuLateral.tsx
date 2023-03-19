import { ContainerMenuLateral, MenuContainer } from "./styles";
import { HashRouter } from "react-router-dom";
import MenuRoutes from "../../components/menuRoutes/menuRoutes";

export default function MenuLateral() {
    return (
        <HashRouter>
            <ContainerMenuLateral>
                <MenuContainer>
                    <MenuRoutes title="Home" to="/home" />
                    <MenuRoutes title="Avatar" to="/avatar" />
                    <MenuRoutes title="Breadcrumb" to="/breadcrumb" />
                    <MenuRoutes title="Button" to="/button" />
                    <MenuRoutes title="Cards" to="/cards" />
                    <MenuRoutes title="ColorPicker" to="/color-picker" />
                    <MenuRoutes title="Colors" to="/colors" />
                    <MenuRoutes title="Dropdown" to="/dropdown" />
                    <MenuRoutes title="Heading" to="/heading" />
                    <MenuRoutes title="Inputs" to="/inputs" />
                    <MenuRoutes title="Line" to="/line" />
                    <MenuRoutes title="Pagination" to="/pagination" />
                    <MenuRoutes title="Progress" to="/progress" />
                    <MenuRoutes title="Radio" to="/radio" />
                    <MenuRoutes title="Table" to="/table" />
                    <MenuRoutes title="Tabs" to="/tabs" />
                    <MenuRoutes title="Toggle Switch" to="/toggle-switch" />
                </MenuContainer>
            </ContainerMenuLateral>
        </HashRouter>
    );
}
