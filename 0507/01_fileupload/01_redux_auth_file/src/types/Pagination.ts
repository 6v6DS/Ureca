export interface PaginationProps {
  currentPage: number;
  total: number;
  navigationSize: number;
  onPageChange: (page: number) => void;
}
