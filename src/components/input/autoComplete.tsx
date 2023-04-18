import {
  Container,
  InputArea,
  IconRight,
  IconLeft,
  AutoCompleteContainer,
  AutoCompleteItem,
  AutoCompleteItemButton,
  AutoCompleteArea,
  InputContainer,
  ContainerBadge,
  Badge,
  AutoCompleteItemWithTag,
  ItemDescription,
  AutoCompleteHeader,
  NoFound,
} from "./styles";
import React, { useState, useEffect, useRef } from "react";

export type AutoCompleteProps = {
  id?: string;
  name?: string;
  label?: string;
  tags?: boolean
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  register?: any;
  value?: any;
  onChange?: any;
  children?: React.ReactNode;
  data?: any;
  clean?: boolean;
  selected?: (e: any) => void;
  handlerChange?: (e: any) => void;
};

//Autocomplet
export interface IData {
  name: string;
  img: string;
  id: number;
}

export default function AutoComplete({
  placeholder,
  children,
  data,
  tags = true,
  selected,
  handlerChange,
}: AutoCompleteProps) {
  const [search, setSearch] = useState("");
  const [searchApi, setSearchApi] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  let ref = useRef<any>();
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const onTextChanged = (e: any) => {
    const value = e;
    let suggestionsTemp = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestionsTemp = data.sort().filter((v: IData) => regex.test(v.name));
    }
    setIsComponentVisible(true);
    setSuggestions(suggestionsTemp);
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsComponentVisible(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [isComponentVisible]);

  useEffect(() => {
    if (isComponentVisible) {
      onTextChanged(search);
    }
  }, [search]);

  useEffect(() => {
    if (isComponentVisible) {
      searchApi.length == 0 && setIsComponentVisible(false);
    }
  }, [searchApi]);

  const handleAutoComplete = () => {
    if (tags) {
      return (
        <InputArea>
          <IconLeft className="fa-regular fa-search" />
          <InputContainer
            ref={ref}
            placeholder={placeholder}
            tags={tags}
            value={searchApi}
            onChange={(e: any) => {
              e.target.value.length < 0
                ? setSuggestions(data)
                : setSearch(e.target.value);
            }}
            onFocus={() => {
              setSuggestions(data);
              setIsComponentVisible(true);
            }}
          />
          <IconRight
            className="fa-regular fa-xmark"
            onClick={() => {
              setSearchApi("");
              setIsComponentVisible(false);
            }}
          />
          {isComponentVisible && (
            <AutoCompleteArea>
              <AutoCompleteContainer>
                {suggestions?.map((item: any) => (
                  <AutoCompleteItemWithTag
                    key={item.name}
                    onClick={() => console.log(item)}
                  >
                    <AutoCompleteHeader>
                      {item.name}{" "}
                      <ItemDescription> - {item.description} </ItemDescription>
                    </AutoCompleteHeader>
                    <ContainerBadge>
                      {item?.tags?.map((tag, i) => {
                        return <Badge key={i}>{tag}</Badge>;
                      })}
                    </ContainerBadge>
                  </AutoCompleteItemWithTag>
                ))}
              </AutoCompleteContainer>
            </AutoCompleteArea>
          )}
        </InputArea>
      );
    } else {
      return (
        <InputArea>
          <IconLeft className="fa-regular fa-magnifying-glass" />
          <InputContainer
            ref={ref}
            placeholder={placeholder}
            value={search}
            onChange={(e: any) => {
              e.target.value.length < 0
                ? setSuggestions(data)
                : setSearch(e.target.value);
            }}
            onFocus={() => {
              setSuggestions(data);
              setIsComponentVisible(true);
            }}
          />
          <IconRight
            className="fa-solid fa-xmark"
            onClick={() => {
              setSearch("");
              setIsComponentVisible(false);
            }}
          />

          {isComponentVisible && (
            <AutoCompleteArea>
              {!suggestions.length ? (
                setIsComponentVisible(false)
              ) : (
                <AutoCompleteContainer>
                  {suggestions.map((item: any) => (
                    <AutoCompleteItem key={item.name}>
                      <AutoCompleteItemButton
                        key={item.name}
                        onClick={() => {
                          setSearch(item.name);
                          selected(item);
                          setIsComponentVisible(false);
                        }}
                      >
                        {item.name}
                      </AutoCompleteItemButton>
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteContainer>
              )}
            </AutoCompleteArea>
          )}
        </InputArea>
      );
    }
  };

  return <Container>{handleAutoComplete()}</Container>;
}
