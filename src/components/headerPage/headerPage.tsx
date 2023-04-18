import { useState } from "react";
import AppSwitch from "../appSwitch/appSwitch";
import Avatar from "../avatar/avatar";
import AutoComplete from "../input/autoComplete";
import Line from "../line/line";
import Logo from "../logo/logo";
import {
    Container,
    ImageTenant,
    ItemsContainer,
    ServiceContainer,
    ServiceName,
} from "./styles";

export default function HeaderPage() {
    const [selectedTenant, setSelectedTenant] = useState(null);

    const tenant = [
        {
            name: "Custamer 1",
            image: "https://i.pinimg.com/564x/41/98/bf/4198bf83cc056189d055fb4e03eac956.jpg",
            tenants: [
                {
                    tname: "Tenant 1",
                    image: "https://i.pinimg.com/564x/26/d9/d4/26d9d48b6cc679cbd5907081ee76b1f1.jpg",
                },
                {
                    tname: "Tenant 2",
                    image: "https://i.pinimg.com/564x/2f/4e/6e/2f4e6ef1984b4edad8b3d26c54580f5d.jpg",
                },
                {
                    tname: "Tenant 3",
                    image: "https://i.pinimg.com/564x/f8/cf/2b/f8cf2be5a99f425d46fc1e226c394f40.jpg",
                },
                {
                    tname: "Tenant 4",
                    image: "https://i.pinimg.com/564x/5d/be/16/5dbe16681a19f1bca1c634de20e56a06.jpg",
                },
                {
                    tname: "Tenant 5",
                    image: "https://i.pinimg.com/564x/49/b9/7a/49b97afce8ae27098ea1213cba91f52e.jpg",
                },
                {
                    tname: "Tenant 6",
                    image: "https://i.pinimg.com/564x/4c/5e/a4/4c5ea4d3f9ba2b6ae86b5d777313cbfd.jpg",
                },
            ],
        },
        {
            name: "Custamer 2",
            image: "https://i.pinimg.com/564x/da/da/b5/dadab5c1a08117d7c7d22c27da788a55.jpg",
            tenants: [
                {
                    tname: "Tenant 1",
                    image: "https://i.pinimg.com/564x/2f/fc/9a/2ffc9a37a1e7bf1b4fdd697babdbb375.jpg",
                },
                {
                    tname: "Tenant 2",
                    image: "https://i.pinimg.com/564x/df/10/21/df10216dddb769c83b82dd14760e7208.jpg",
                },
                {
                    tname: "Tenant 3",
                    image: "https://i.pinimg.com/564x/3c/35/8b/3c358bbc82acfecfc707a025f21ca8a6.jpg",
                },
            ],
        },
    ];

    const citiesBrazil = [
        { id: 1, name: "Brasilia" },
        { id: 2, name: "Goiana" },
        { id: 3, name: "Cuiaba" },
        { id: 4, name: "Campo Grande" },
        { id: 5, name: "São Paulo" },
        { id: 6, name: "Rio de Janeiro" },
        { id: 7, name: "Belo Horizonte" },
        { id: 8, name: "Vitória" },
        { id: 9, name: "Florianópolis" },
        { id: 10, name: "Curitiba" },
        { id: 11, name: "Porto Alegre" },
        { id: 12, name: "Teste 1" },
        { id: 13, name: "Teste 2" },
        { id: 14, name: "Teste 3" },
        { id: 15, name: "Teste 4" },
        { id: 16, name: "Teste 5" },
        { id: 17, name: "Teste 6" },
        { id: 18, name: "Teste 7" },
        { id: 19, name: "Teste 8" },
        { id: 20, name: "Teste 9" },
        { id: 21, name: "Teste 10" },
        { id: 22, name: "Teste 11" },
        { id: 23, name: "Teste 12" },
    ];

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex gap-2">
                {option.tenants && <ImageTenant src={option.image} />}
                {option.tname && <ImageTenant src={option.image} />}
                <span>{option.tname || option.name}</span>
            </div>
        );
    };

    const onTenetChange = (e) => {
        setSelectedTenant(
            <div className="flex gap-2">
                {e.value.image && <ImageTenant src={e.value.image} />}
                <span>{e.value.tname}</span>
            </div>
        );
    };

    const menu = [
        {
            id: 1,
            name: "Dashboard",
            icon: "fa-duotone fa-chart-tree-map",
            route: "/dashboard",
            color: "#913535",
        },
        {
            id: 2,
            name: "Console",
            icon: "fa-duotone fa-dice-d6",
            route: "/console",
            color: "#e65600",
        },
        {
            id: 3,
            name: "Topology",
            icon: "fak fa-topology-solid",
            route: "/topology",
            color: "#128f01",
        },
        {
            id: 4,
            name: "Help Desk",
            icon: "fa-duotone fa-comments-question",
            route: "/help",
            color: "#353b91",
        },
        {
            id: 5,
            name: "CMDB",
            icon: "fa-duotone fa-file-contract",
            route: "/cmdb",
            color: "#601c1c",
        },
        {
            id: 1,
            name: "AppSample",
            icon: "fa-duotone fa-square-question",
            route: "/app",
            color: "#131317",
        },
        {
            id: 6,
            name: "AppSample",
            icon: "fa-duotone fa-square-question",
            route: "/app",
            color: "#131317",
        },
    ];

    return (
        <>
            <Container>
                <ItemsContainer>
                    <AppSwitch
                        menu={menu}
                        handleClick={(e) => console.log("menu", e)}
                    />

                    <ServiceContainer>
                        <Line direction="vertical" />
                        <ServiceName>Service Topology</ServiceName>
                    </ServiceContainer>

                    <AutoComplete
                        placeholder="Pesquise algo aqui"
                        data={citiesBrazil}
                        selected={(item: any) => console.log(item)}
                        handlerChange={(item: any) => console.log(item)}
                    />
                    <Avatar
                        size="small"
                        image="https://avatars.githubusercontent.com/u/39253660?v=4"
                        active="on"
                    />
                </ItemsContainer>
            </Container>
            <Line direction="horizontal" />
        </>
    );
}
