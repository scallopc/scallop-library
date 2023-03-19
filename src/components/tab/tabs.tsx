import { ReactElement, useState } from "react";
import { Container, Content, ContentBorder } from "./styles";
import { TabHeader } from "./tabHeader";

export type propsTab = {
    children: ReactElement[];
    selectedTabIndex?: number;
    isActive?: boolean;
    styleContentActive?: "default" | "around";
    removeTab?: (i) => void;
};

export function Tabs({
    children,
    selectedTabIndex,
    isActive,
    styleContentActive = "default",
    removeTab,
}: propsTab) {
    const [selectedTab, setSelectedTab] = useState<number>(
        selectedTabIndex || 0
    );

    return (
        <Container>
            <Content
                styleContentActive={styleContentActive}
                isActive={isActive}
            >
                <ContentBorder>
                    {children.map((item, index) => (
                        <TabHeader
                            key={index}
                            title={item.props.title}
                            index={index}
                            isActive={index === selectedTab}
                            styleTabActive={item.props.styleTabActive}
                            setSelectedTab={setSelectedTab}
                            remove={() => removeTab(index)}
                        />
                    ))}
                </ContentBorder>
            </Content>
            {children[selectedTab]}
        </Container>
    );
}
//className="flex overflow-x-auto overflow-y-hidden"
