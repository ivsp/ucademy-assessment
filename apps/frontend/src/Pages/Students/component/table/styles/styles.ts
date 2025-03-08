import styled from 'styled-components';
import { StudentStatus } from '../../../../../Entities/Students/Domain/types/students.types';

export const StudentsContainer = styled.section`
  padding: 0 27px;
`;

export const StudentsTableTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: start;
  width: auto;
`;

export const StudentTableHeaderStyle = {
  backgroundColor: '#f0f0f0',
  fontWeight: 'bold',
  textAlign: 'center',
};

export const StudentStatusInfo = styled.p<StudentStatus>`
  background-color: ${({ isActive }) => (isActive ? '#90E8BE' : '#CAD6DC')};
  color: #262d34;
  text-align: center;
  width: max-content;
  padding: 0 7px;
  border-radius: 5px;
`;
