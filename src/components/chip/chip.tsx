import { useState } from "react";
import { ChipDefault } from "./chipDefault";
import { ChipStatus } from "./chipStatus";

export type IPropsChip = {
  type: "status";
  severity?: any;
  label?: any;
  removable?: boolean;
};

export function Chip({ severity, type, label, removable }: IPropsChip) {
  const [visibleItem, setVisibleItem] = useState(true);

  const handleCard = () => {
    switch (type) {
      case "status":
        return (
          <>
            {visibleItem && (
              <ChipStatus
                severity={severity}
                label={label}
                removable={removable}
                onRemoveItem={(e) => setVisibleItem(false)}
              />
            )}
          </>
        );
      default:
        return <>
        {visibleItem && (
          <ChipDefault
            label={label}
            removable={removable}
            onRemoveItem={(e) => setVisibleItem(false)}
          />
        )}
      </>;
    }
  };

  return <div>{handleCard()}</div>;
}
