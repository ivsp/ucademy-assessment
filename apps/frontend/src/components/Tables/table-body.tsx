import { Table } from 'antd';
import { TableProps } from 'antd/es/table';

interface TableBodyProps<T> {
  columns: TableProps<T>['columns'];
  data: T[];
  rowKey: string;
  onRowClick: (record: T) => void;
}

export default function TableBody<T>({
  columns,
  data,
  rowKey,
  onRowClick,
}: TableBodyProps<T>) {
  return (
    <Table<T>
      columns={columns}
      dataSource={data}
      rowKey={rowKey as string}
      pagination={false}
      loading={false}
      locale={{ emptyText: null }}
      bordered={true}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => onRowClick(record),
        };
      }}
    />
  );
}
