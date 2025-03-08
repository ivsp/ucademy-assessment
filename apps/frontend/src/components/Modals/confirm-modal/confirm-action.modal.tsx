import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ModalContent,
} from './styles';

interface ConfirmActionModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  confirmText: string;
  modalText: string;
  children?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmActionModal({
  isOpen,
  setIsOpen,
  confirmText,
  modalText,
  children,
  onConfirm,
  onCancel,
}: ConfirmActionModalProps) {
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      closable={false}
      footer={null}
      width={400}
    >
      <ModalContent>
        <ExclamationCircleOutlined
          style={{ fontSize: '24px', color: '#faad14' }}
        />
        <p>{modalText}</p>

        <ButtonContainer>
          <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
          <ConfirmButton onClick={handleConfirm}>{confirmText}</ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
}
