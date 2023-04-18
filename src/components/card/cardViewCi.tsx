import React from "react";
import Heading from "../heading/heading";
import { ICard } from "./card";
import {
  CardViewContainer,
  IconClass,
  TagClass,
  TagCount,
  TagView,
} from "./styles";

export default function CardViewCi({
  type,
  title,
  description,
  icon,
  typeView,
  count,
}: ICard) {
  return (
    <CardViewContainer type={type}>
      <div className="flex flex-column gap-1 align-items-center">
        <IconClass className={icon} />
        {typeView === "view" ? (
          <TagView>{typeView}</TagView>
        ) : (
          <TagClass>{typeView}</TagClass>
        )}
        <TagCount>{count}</TagCount>
      </div>
      <div className="flex flex-column gap-2">
        <Heading type="heading" headingSize="h6">
          {title}
        </Heading>
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
    </CardViewContainer>
  );
}
