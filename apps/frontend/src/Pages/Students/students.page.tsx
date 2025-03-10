import { useState } from 'react';
import { useGetStudents } from '../../Entities/Students/Aplication/use-get-students';
import { StudentFilterQuery } from '../../Entities/Students/Infrastructure/get-students/dto/student.query';
import { Student } from '../../Entities/Students/Domain/students.interface';
import TableBody from '../../components/Tables/table-body';
import LoadingDataComponent from '../../components/Loaders/get-data-loader';
import {
  StudentsContainer,
  StudentsTableTitle,
} from './component/table/styles/styles';
import TableHeader from '../../components/Tables/table-header';
import { studentsColumns } from './component/table/columns.table';
import ButtonComponent from '../../components/Button/button-component';
import ErrorComponent from '../../components/Error/error-component';
import { PlusCircleOutlined } from '@ant-design/icons';
import TablePagination from '../../components/Tables/table-pagination';
import StudentProfileModal from './modal/profile.modal/profile.modal';
import GenericModal from '../../components/Modals/base-modal/base.modal';
import StudentForm from './component/forms/student.form';
import useCreateStudent from '../../Entities/Students/Aplication/use-create-student';
import SuccessModal from '../../components/Modals/success-modal/success.modal';

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
  const {
    mutate: createStudent,
    isPending,
    isError: mutateError,
  } = useCreateStudent();

  const [selectedSudent, setSelectedStudent] = useState<Student | null>();
  const [newStudent, setNewStudent] = useState<Partial<Student>>({} as Student);
  const [openMutateModal, setOpenMutateModal] = useState<{
    student: Student | null;
    isOpen: boolean;
  }>({ student: null, isOpen: false });
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const handleOnCloseMutateModal = () => {
    setOpenMutateModal({ student: null, isOpen: false });
  };
  const handleSetNewStudent = (updatedStudent: Partial<Student>) => {
    setNewStudent(updatedStudent);
  };
  const handleOpenMutateModal = () => {
    setOpenMutateModal({ student: {} as Student, isOpen: true });
  };

  const handleSaveStudent = () => {
    createStudent(newStudent, {
      onSuccess: () => {
        setOpenSuccessModal(true);
        handleOnCloseMutateModal();
      },
    });
  };

  return (
    <>
      <ErrorComponent isError={isError} message="Error al cargar los alumnos" />
      <StudentsContainer>
        {!isLoading && !isError && (
          <TableHeader>
            <StudentsTableTitle>Alumnos</StudentsTableTitle>
            <ButtonComponent
              message="Nuevo alumno"
              icon={<PlusCircleOutlined />}
              onClickEvent={handleOpenMutateModal}
            />
          </TableHeader>
        )}
        <TableBody<Student>
          columns={studentsColumns}
          data={students as Student[]}
          rowKey={'email'}
          onRowClick={setSelectedStudent}
        />
        <LoadingDataComponent isLoading={isLoading} />
        <TablePagination<StudentFilterQuery>
          size="small"
          total={totalResults}
          pages={pages}
          setFilters={setFilters}
        />
      </StudentsContainer>
      <SuccessModal
        isOpen={openSuccessModal}
        message="Estudiante creado correctamente"
      />
      {selectedSudent && (
        <StudentProfileModal
          onClose={setSelectedStudent}
          student={selectedSudent}
        />
      )}

      {openMutateModal.isOpen && (
        <GenericModal
          title="Perfil"
          isOpen={true}
          onClose={handleOnCloseMutateModal}
        >
          <StudentForm
            student={openMutateModal.student ? selectedSudent : ({} as Student)}
            onChange={handleSetNewStudent}
            cancelButtonText="Cancelar creación"
            onCancel={handleOnCloseMutateModal}
            isLoading={isPending}
            isError={mutateError}
            onSave={handleSaveStudent}
          ></StudentForm>
        </GenericModal>
      )}
    </>
  );
}
