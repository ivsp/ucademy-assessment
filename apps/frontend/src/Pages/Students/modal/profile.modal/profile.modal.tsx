import { Modal, Switch } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  CloseButton,
  Container,
  FooterSection,
  Header,
  InfoRow,
  InfoSection,
  ProfileImage,
  Tab,
} from './styles';
import ButtonIconComponent from '../../../../components/Button/button-component';
import { Student } from '../../../../Entities/Students/Domain/students.interface';
import { SetStateAction, useState } from 'react';
import { StatusSwitch, InfoData } from './styles';
import useToggleStudentStatus from '../../hooks/use-toggle-status';
import ConfirmActionModal from '../../../../components/Modals/confirm-modal/confirm-action.modal';
import ErrorComponent from '../../../../components/Error/error-component';
import userIcon from '../../../../assets/icons/user-icon.png';
import emailIcon from '../../../../assets/icons/email-icon.png';
import phoneIcon from '../../../../assets/icons/phone-icon.png';
import fileIcon from '../../../../assets/icons/file-icon.png';
import IconComponent from '../../../../components/Icon/icon-component';
import GenericModal from '../../../../components/Modals/base-modal/base.modal';
import StudentForm from '../../component/forms/student.form';
import SuccessModal from '../../../../components/Modals/success-modal/success.modal';
import useEditStudent from '../../../../Entities/Students/Aplication/use-edit-student';
import { delayedExecution } from '../../../../Utils/timeouts/timeouts';

interface StudentProfileModalProps {
  student: Student | null;
  onClose: (e: SetStateAction<Student | null | undefined>) => void;
}

export default function StudentProfileModal({
  student,
  onClose,
}: StudentProfileModalProps) {
  const {
    mutate: changeStatus,
    isPending,
    isError: changeStatusError,
  } = useToggleStudentStatus();
  const [isConfirmActionModalOpen, setIsConfirmActionModalOpen] =
    useState(false);
  const [openEditStudentModal, setOpenEditStudentModal] =
    useState<boolean>(false);
  const [editedStudent, setEditedStudent] = useState<Partial<Student>>(
    {} as Student
  );
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const {
    mutate: editStudent,
    isPending: isEditPending,
    isError: mutateEditError,
  } = useEditStudent();
  const handleToggle = () => {
    if (student?.isActive) {
      setIsConfirmActionModalOpen(true);
    } else {
      handleConfirmToggle();
    }
  };

  const handleConfirmToggle = () => {
    if (student) {
      changeStatus(
        {
          studentId: student.id,
          newStudentStatus: !student.isActive,
        },
        {
          onSuccess: () => {
            setIsConfirmActionModalOpen(false);
            onClose(null);
          },
        }
      );
    }
  };

  const handleOpenEditStudentModal = () => {
    setOpenEditStudentModal(true);
  };
  const handleCloseEditStudentModal = () => {
    setOpenEditStudentModal(false);
    delayedExecution(() => onClose(null), 3000);
  };

  const handleSetNewStudent = (updatedStudent: Partial<Student>) => {
    setEditedStudent(updatedStudent);
  };

  const handleEditStudent = () => {
    editStudent(editedStudent, {
      onSuccess: () => {
        setOpenSuccessModal(true);
        handleCloseEditStudentModal();
      },
    });
  };
  return (
    <>
      {changeStatusError && (
        <ErrorComponent
          isError={true}
          message="Se ha producido un error actualizando el estado del alumno"
        />
      )}
      <SuccessModal
        isOpen={openSuccessModal}
        message="Estudiante editado correctamente"
      />
      <Modal
        open={true}
        onCancel={() => onClose(null)}
        closeIcon={false}
        footer={null}
        width={'30%'}
      >
        <Container>
          <Header>
            <Tab>Perfil</Tab>
            <ButtonIconComponent
              icon={<EditOutlined />}
              message="Editar estudiante"
              onClickEvent={handleOpenEditStudentModal}
            />
          </Header>

          <ProfileImage>
            <IconComponent
              src={fileIcon}
              alt="Imagen de perfil del usuario"
              width="150px"
            />
          </ProfileImage>

          <InfoSection>
            <InfoRow>
              <IconComponent
                src={userIcon}
                alt="Icono de usuario"
                width="25px"
              />
              <InfoData>
                <span>Nombre y apellidos</span>
                <span>
                  {student?.lastName} {student?.name}
                </span>
                <span>Nombre de usuario</span>
                <span>{student?.name}</span>
              </InfoData>
            </InfoRow>
            <InfoRow>
              <IconComponent
                src={emailIcon}
                alt="Icono de usuario"
                width="25px"
              />
              <InfoData>
                <span>Email</span>
                <span>{student?.email}</span>
              </InfoData>
            </InfoRow>
            <InfoRow>
              <IconComponent
                src={phoneIcon}
                alt="Icono de usuario"
                width="25px"
              />
              <InfoData>
                <span>Móvil</span>
                <span>{student?.phone}</span>
              </InfoData>
            </InfoRow>
          </InfoSection>

          <FooterSection>
            <StatusSwitch>
              <Switch
                onClick={handleToggle}
                checked={student?.isActive}
                loading={isPending}
              />
              <span>
                {student?.isActive ? 'Cuenta activa' : 'Cuenta inactiva'}
              </span>
            </StatusSwitch>
            <CloseButton onClick={() => onClose(null)}>Cerrar</CloseButton>
          </FooterSection>
        </Container>
        {student?.isActive && isConfirmActionModalOpen && (
          <ConfirmActionModal
            isOpen={isConfirmActionModalOpen}
            setIsOpen={setIsConfirmActionModalOpen}
            confirmText="Desactivar"
            modalText="¿Seguro que quieres desactivar esta cuenta? El usuario dejará de tener acceso a la plataforma."
            onConfirm={handleConfirmToggle}
            onCancel={() => setIsConfirmActionModalOpen(false)}
          />
        )}
        {openEditStudentModal && (
          <GenericModal
            title="Perfil"
            isOpen={true}
            onClose={handleCloseEditStudentModal}
          >
            <StudentForm
              student={student}
              onChange={handleSetNewStudent}
              cancelButtonText="Cancelar edición"
              onCancel={handleCloseEditStudentModal}
              isLoading={isEditPending}
              isError={mutateEditError}
              onSave={handleEditStudent}
            ></StudentForm>
          </GenericModal>
        )}
      </Modal>
    </>
  );
}
