import styled from 'styled-components';
import { Button } from 'antd';

export const TriggerButton = styled(Button)`
  border: none;
  background: transparent;
  padding: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
`;

export const CancelButton = styled(Button)`
  border: 1px solid #000;
  color: #000;
  &:hover {
    border-color: #000 !important;
    color: #000 !important;
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: #d9534f;
  color: white;
  &:hover {
    background-color: #c9302c !important;
    border-color: #c9302c !important;
    color: #ffffff !important;
  }
`;
