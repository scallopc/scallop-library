export type PaginatorProps = {
     currentPage: number;
     totalPages: number;
     itemsPerPage?: number;
     onChangePage: (page: number) => void;
     text?: boolean;
};
