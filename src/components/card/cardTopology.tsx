import React from "react";
import Heading from "../heading/heading";
import { ICard } from "./card";
import {
  BorderColor,
  CardTopologyContainer
} from "./styles";

export default function CardTopology({
  type,
  title,
  description,
  borderColor,
  group,
  children,
}: ICard) {
  return (
    <CardTopologyContainer type={type}>
      <BorderColor borderColor={borderColor} />
      <div style={{ opacity: "0.7" }}>
        <Heading type="text" textSize="sm">
          {group}
        </Heading>
      </div>
      <div>
        <div
          style={{
            fontWeight: "600",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            width: "220px",
            overflow: "hidden",
          }}
        >
          <Heading type="text" textSize="sm" fontWeight="bold">
            {title}
          </Heading>
        </div>
        <div
          style={{
            height: "38px",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Heading type="text" textSize="sm">
            {description}
          </Heading>
        </div>
      </div>
      {children}
    </CardTopologyContainer>
  );
}
