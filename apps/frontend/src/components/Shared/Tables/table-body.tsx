import { Table, TableProps } from 'antd';
import { TableInterface } from './interfaces/table.interface';

interface TableBodyProps<T> {
  columns: TableProps<T>['columns'];
  data: T[];
  rowKey: keyof T;
}

export default function TableBody({
  columns,
  data,
  rowKey,
}: TableBodyProps<TableInterface>) {
  return (
    <Table<TableInterface>
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      pagination={false}
    />
  );
}
