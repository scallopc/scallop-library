import { ContainerHeaderTab, Title } from "./styles";

export type props = {
    title: string;
    index: number;
    setSelectedTab: (index: number) => void;
    isActive?: boolean;
    closable?: boolean;
    styleTabActive?: "default" | "around";
    remove: any;
};

export function TabHeader({
    title,
    setSelectedTab,
    index,
    isActive,
    styleTabActive = "default",
    remove,
}: props) {
    const handleCloseTab = (event: any) => {
        event.stopPropagation();
        remove();
    };

    return (
        <ContainerHeaderTab
            styleTabActive={styleTabActive}
            isActive={isActive}
            onClick={() => setSelectedTab(index)}
        >
            <Title>{title}</Title>
            <i onClick={handleCloseTab} className="fa-solid fa-xmark" />
        </ContainerHeaderTab>
    );
}
