import React from 'react';
import { Modal } from 'antd';
import {
  CloseButton,
  Container,
  FooterSection,
  FormContainer,
  Header,
  Tab,
} from './styles';

interface GenericModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function GenericModal({
  title,
  isOpen,
  onClose,
  children,
}: GenericModalProps) {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={'30%'}
      closable={false}
    >
      <Container>
        <Header>
          <Tab>{title}</Tab>
        </Header>

        <FormContainer>{children}</FormContainer>

        <FooterSection>
          <CloseButton onClick={onClose}>Cerrar</CloseButton>
        </FooterSection>
      </Container>
    </Modal>
  );
}
