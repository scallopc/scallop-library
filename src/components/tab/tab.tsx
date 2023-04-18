import { useEffect, useState } from "react";
import {
    BorderFull,
    HeaderTitle,
    IconCloseTab,
    Title,
    TitleStaticCenter,
} from "./styles";

export type propsTab = {
    isClosable?: boolean;
    isStatic?: boolean;
    selectedTabIndex?: number;
    tabs: any;
    styleContentActive?: "default" | "around";
    closeTab?: (i) => void;
    mountContent: any;
    mountName: any;
};

export default function Tab({
    closeTab,
    tabs,
    isClosable,
    isStatic,
    selectedTabIndex,
}: propsTab) {
    const [indexSelected, setIndexSelected] = useState<number>(0);

    useEffect(() => {
        setIndexSelected(selectedTabIndex);
    }, [selectedTabIndex]);

    useEffect(() => {
        const index = tabs.length - 1;
        if (isStatic) {
            setIndexSelected(0);
        } else {
            setIndexSelected(index);
        }
    }, [tabs]);

    const handleCloseTab = (event: any, index) => {
        event.stopPropagation();
        closeTab(index);
    };
    return (
        <>
            <div className="flex flex-column gap-3">
                <div className="overflow-x-auto overflow-y-hidden">
                    <div className="flex mb-1" id="header">
                        {tabs.map((item, index) => {
                            return (
                                <HeaderTitle
                                    key={index}
                                    onClick={() => setIndexSelected(index)}
                                    className={`${
                                        indexSelected == index
                                            ? "active-border"
                                            : ""
                                    }`}
                                >
                                    {isStatic ? (
                                        <TitleStaticCenter>
                                            {item.title}
                                        </TitleStaticCenter>
                                    ) : (
                                        <Title>{item.title}</Title>
                                    )}

                                    {isClosable && (
                                        <IconCloseTab
                                            onClick={(e) =>
                                                handleCloseTab(e, index)
                                            }
                                            className="fa-solid fa-xmark"
                                        />
                                    )}
                                </HeaderTitle>
                            );
                        })}
                        <BorderFull id="border"></BorderFull>
                    </div>
                </div>
                <div className="w-full overflow-x-auto" id="content">
                    {tabs.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    display:
                                        indexSelected == index
                                            ? "block"
                                            : "none",
                                }}
                            >
                                {item.content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
