export type PaginatorProps = {
     currentPage: number;
     totalPages?: number;
     itemsPerPage?: number;
     data?: any;
     onChangePage: (page: number) => void;
     text?: boolean;
};
