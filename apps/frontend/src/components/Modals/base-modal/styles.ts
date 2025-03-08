import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;

export const Tab = styled.div`
  font-weight: bold;
  position: relative;
  padding-bottom: 4px;

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 2px;
    background-color: #0abb87;
    bottom: 0;
    left: 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const CancelButton = styled(Button)`
  border: 1px solid black;
  color: black;
  &:hover {
    border-color: #000 !important;
    color: #000 !important;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #0abb87;
  color: white;
  &:hover {
    background-color: #089b6f;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
`;

export const CloseButton = styled(Button)`
  border-radius: 5px;
  border-color: #000;
  &:hover {
    border-color: #000 !important;
    color: #000 !important;
  }
`;
