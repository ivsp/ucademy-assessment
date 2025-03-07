import { useState } from 'react';
import { useGetStudents } from './hooks/use-get-students';
import { StudentQuery } from './services/get-students/dto/student.query';
import { Pagination, PaginationProps, TableProps } from 'antd';
import { Student } from './interfaces/students.interface';
import TableBody from '../Shared/Tables/table-body';
import LoadingDataComponent from '../Shared/Loaders/get-data-loader';
import { StudentsTableTitle } from './UI/styles/table.styles';
import TableHeader from '../Shared/Tables/table-header';
import CreateStudent from './UI/component/create-student';

export default function Students() {
  const [filters, setFilters] = useState<StudentQuery>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    page: 1,
    limit: 10,
  });

  const { isLoading, isError, students, pages, totalResults } =
    useGetStudents(filters);
  const studentsColumns: TableProps<Student>['columns'] = [
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

  return (
    <>
      <LoadingDataComponent isLoading={isLoading} isError={isError} />
      {!isLoading && !isError && (
        <TableHeader>
          <StudentsTableTitle>Alumnos</StudentsTableTitle>
          <CreateStudent />
        </TableHeader>
      )}
      <TableBody<Student>
        columns={studentsColumns}
        data={students as Student[]}
        rowKey={'email'}
      />
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
