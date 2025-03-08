import { PaginationProps } from 'rc-pagination';
import { Pagination } from 'antd';
import { TablePaginationContainer } from './styles/styles';
interface TablePaginationProps<TFilters> {
  size?: 'small' | 'default';
  total: number | undefined;
  pages: number | undefined;
  setFilters: (
    filters: TFilters | ((prevFilters: TFilters) => TFilters)
  ) => void;
}

export default function TablePagination<TFilters>({
  size = 'small',
  total,
  pages,
  setFilters,
}: TablePaginationProps<TFilters>) {
  const showTotal: PaginationProps['showTotal'] = (totalResults) =>
    `${totalResults} elementos`;

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (
    page,
    limit
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page,
      limit,
    }));
  };

  return (
    <TablePaginationContainer>
      <Pagination
        size={size}
        total={total}
        showTotal={showTotal}
        defaultPageSize={pages}
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        onChange={(page) =>
          setFilters((prevFilters) => ({
            ...prevFilters,
            page,
          }))
        }
      />
    </TablePaginationContainer>
  );
}
