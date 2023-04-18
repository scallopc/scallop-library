import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  ButtonItem,
  Icon,
  PaginationContainer,
  Separator,
} from "./styles";

export interface PaginationNumber {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

export default function PaginationNumber({
  page,
  totalPages,
  handlePagination,
}: PaginationNumber) {

  return (
    <PaginationContainer>
      {page !== 1 && (
        <Icon icon={faChevronLeft} onClick={() => handlePagination(page - 1)} />
      )}
      <ButtonItem onClick={() => handlePagination(1)}>{1}</ButtonItem>

      {page === totalPages && totalPages > 3 && (
        <ButtonItem onClick={() => handlePagination(page - 2)}>
          {page - 2}
        </ButtonItem>
      )}

      {page > 2 && (
        <ButtonItem onClick={() => handlePagination(page - 1)}>
          {page - 1}
        </ButtonItem>
      )}

      {page !== 1 && page !== totalPages && (
        <ButtonItem onClick={() => handlePagination(page)}>{page}</ButtonItem>
      )}

      {page < totalPages - 1 && (
        <ButtonItem onClick={() => handlePagination(page + 1)}>
          {page + 1}
        </ButtonItem>
      )}

      {page === 1 && totalPages > 4 && (
        <ButtonItem onClick={() => handlePagination(page + 2)}>
          {page + 2}
        </ButtonItem>
      )}

      {page < totalPages - 2 && <Separator />}

      <ButtonItem onClick={() => handlePagination(totalPages)}>
        {totalPages}
      </ButtonItem>
      {page !== totalPages && (
        <Icon
          icon={faChevronRight}
          onClick={() => handlePagination(page - 1)}
        />
      )}
    </PaginationContainer>
  );
}
