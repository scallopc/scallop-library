import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./dropdown.scss";
import React, { useEffect, useRef, useState } from "react";
import {
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";

type IDropdown = {
  placeholder: string;
  options: any;
  isMulti?: boolean;
  isImage?: any;
  isIcon?: any;
  isFilterable?: boolean;
  onChange: (e) => void;
};

export function Dropdown({
  placeholder,
  options,
  isMulti,
  isFilterable,
  onChange,
  isImage,
  isIcon
}: IDropdown) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any>(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<any>();
  const shoeMenuRef = useRef<any>();

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e) => {
      if (shoeMenuRef.current && !shoeMenuRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const getDisplayImage = () => {
    return (
      <div>
        <div className="dropdown-tag-item-image">
          {selectedValue.image && (
            <div className="image">
              <img src={selectedValue.image} />
            </div>
          )}
        
          {selectedValue.label}
        </div>
      </div>
    );
  };

const getDisplayMulti = () => {
  return (
    <div className="dropdown-tags" onClick={(e) => e.stopPropagation()}>
      {selectedValue?.map((option, i) => (
        <div key={i} className="dropdown-tag-item">
          {option.image && (
            <div className="image">
              <img src={option.image} />
            </div>
          )}
          {option.label}
          <span
            onClick={(e) => onTagRemove(e, option)}
            className="dropdown-tag-close"
          >
            <FontAwesomeIcon className="xmark" icon={faXmark} />
          </span>
        </div>
      ))}
    </div>
  );
 }

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder;
    }
    if (isMulti) {
     return getDisplayMulti()
    }
    // if (isImage) {
    //   return getDisplayImage();
    // }
    return selectedValue?.label;
  };

  const removeOption = (option) => {
    return selectedValue?.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onItemClick = (option) => {
    setShowMenu(false);
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = (e) => {
    e.stopPropagation();
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div ref={shoeMenuRef} className="dropdown-container">
      <div onClick={() => setShowMenu(!showMenu)} className="dropdown-input">
        <span className="dropdown-selected-value">{getDisplay()}</span>
        {showMenu ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {isFilterable && (
            <div className="search-box">
              <input onChange={onSearch} value={searchValue} />
              <FontAwesomeIcon className="icon-search" icon={faSearch} />
            </div>
          )}
          {getOptions().map((option, i) => (
            <div
              onClick={() => onItemClick(option)}
              key={i}
              className={`dropdown-item ${isSelected(option) && "selected"}`}
            >
              {option.image && (
                <div className="image">
                  <img src={option.image} />
                </div>
              )}
              {option.icon &&  <i className={option.icon}></i>}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
