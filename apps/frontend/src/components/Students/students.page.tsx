import { useEffect, useState } from 'react';
import { useGetStudents } from './hooks/use-get-students';
import { StudentQuery } from './services/get-students/dto/student.query';
import { Pagination, PaginationProps, Table, TableProps } from 'antd';
import { Student } from './interfaces/students.interface';
// import TableBody from '../Shared/Tables/table-body';

export default function Students() {
  const [filters, setFilters] = useState<StudentQuery>({
    name: 'iv',
    lastName: '',
    email: '',
    phone: '',
    page: 1,
    limit: 10,
  });

  const { isLoading, isError, students, pages, totalResults } =
    useGetStudents(filters);
  const columns: TableProps<Student>['columns'] = [
    {
      title: '',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (text: boolean) => (text ? 'Active' : 'Inactive'),
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Usuario',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Móvil',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];
  const showTotal: PaginationProps['showTotal'] = (totalResults) =>
    `Total ${totalResults} items`;

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

  useEffect(() => {
    console.log(isLoading, isError, students, pages, totalResults);
  }, [isError, isLoading, pages, students, totalResults]);
  return (
    <>
      <Table<Student>
        columns={columns}
        dataSource={students}
        rowKey={'email'}
        pagination={false}
      />
      {/* <TableBody columns={columns} dataSource={students} rowKey={'email'} /> */}
      <Pagination
        size="small"
        total={totalResults}
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
    </>
  );
}
