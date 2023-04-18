import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ButtonItem, Content, Icon, Input, PaginationContainer } from "./styles";

export type IPaginationText = {
  totalItems?: number;
  page?: number;
  currentPage?: number;
  handlePagination: (pageNumber: number) => void;
}

export default function PaginationText({
  totalItems,
  page,
  currentPage,
  handlePagination,
}: IPaginationText) {
  const pageInput = React.useRef<HTMLInputElement>();
  const totalPages = Math.ceil(totalItems / page);
  const [inputVal, setIntputVal] = React.useState<any>(currentPage || "1");

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
      setIntputVal(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePagination(currentPage + 1);
      setIntputVal(currentPage + 1);
    }
  };

  const handleInputChange = (e) => {
    setIntputVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    let newVal = parseInt(inputVal, 10);

    if (newVal < 1) {
      newVal = 1;
    }

    if (newVal > totalPages) {
      newVal = totalPages;
    }

    handlePagination(newVal);
    setIntputVal(newVal);

    pageInput.current!.blur();
  };

  return (
    <PaginationContainer onSubmit={handleSubmit}>
      <ButtonItem
        onClick={handlePrevClick}
        aria-label={"Previous"}
        disabled={currentPage <= 1}
      >
       <Icon icon={faChevronLeft} />
      </ButtonItem>
      <Content>
      <span>Página</span>
      <Input
        value={inputVal}
        onChange={handleInputChange}
        ref={pageInput}
        disabled={"true"}
      />
      <span>de </span>
      <span>{totalPages}</span>
      </Content>
      <ButtonItem
        onClick={handleNextClick}
        aria-label={"Next"}
        disabled={currentPage >= totalPages}
      >
        <Icon icon={faChevronRight} />
      </ButtonItem>
    </PaginationContainer>
  );
}
