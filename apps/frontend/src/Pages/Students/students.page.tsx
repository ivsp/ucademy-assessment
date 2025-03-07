import { useState } from 'react';
import { useGetStudents } from '../../Entities/Students/Aplication/use-get-students';
import { StudentFilterQuery } from '../../Entities/Students/Infrastructure/get-students/dto/student.query';
import { Student } from '../../Entities/Students/Domain/students.interface';
import TableBody from '../../components/Tables/table-body';
import LoadingDataComponent from '../../components/Loaders/get-data-loader';
import { StudentsTableTitle } from './component/table/styles/styles';
import TableHeader from '../../components/Tables/table-header';
import { studentsColumns } from './component/table/columns.table';
import ButtonComponent from '../../components/Button/button-component';
import ErrorComponent from '../../components/Error/error-component';
import { PlusCircleOutlined } from '@ant-design/icons';
import TablePagination from '../../components/Tables/table-pagination';

export default function Students() {
  const [filters, setFilters] = useState<StudentFilterQuery>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    page: 1,
    limit: 10,
  });

  const { isLoading, isError, students, pages, totalResults } =
    useGetStudents(filters);

  return (
    <>
      <LoadingDataComponent isLoading={isLoading} />
      <ErrorComponent isError={isError} message="Error al cargar los alumnos" />
      {!isLoading && !isError && (
        <TableHeader>
          <StudentsTableTitle>Alumnos</StudentsTableTitle>
          <ButtonComponent
            message="Nuevo alumno"
            icon={<PlusCircleOutlined />}
            onClickEvent={() => {}}
          />
        </TableHeader>
      )}
      <TableBody<Student>
        columns={studentsColumns}
        data={students as Student[]}
        rowKey={'email'}
      />
      <TablePagination<StudentFilterQuery>
        size="small"
        total={totalResults}
        pages={pages}
        setFilters={setFilters}
      />
    </>
  );
}
