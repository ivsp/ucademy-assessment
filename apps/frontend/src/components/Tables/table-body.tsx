import { Table } from 'antd';
import { TableProps } from 'antd/es/table';

interface TableBodyProps<T> {
  columns: TableProps<T>['columns'];
  data: T[];
  rowKey: string;
}

export default function TableBody<T>({
  columns,
  data,
  rowKey,
}: TableBodyProps<T>) {
  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      rowKey={rowKey as string}
      pagination={false}
      loading={false}
      locale={{ emptyText: null }}
    />
  );
}
