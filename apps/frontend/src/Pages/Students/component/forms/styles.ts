import styled from 'styled-components';
import { Button, Input } from 'antd';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
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

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const StyledInput = styled(Input)`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  &:focus {
    border-color: #0abb87;
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;
