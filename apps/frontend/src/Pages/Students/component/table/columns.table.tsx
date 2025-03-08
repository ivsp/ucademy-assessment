import { TableProps } from 'antd';
import { Student } from '../../../../Entities/Students/Domain/students.interface';
import { StudentStatusInfo } from './styles/styles';

export const studentsColumns: TableProps<Student>['columns'] = [
  {
    title: '',
    dataIndex: 'isActive',
    key: 'isActive',

    render: (status: boolean) =>
      status ? (
        <StudentStatusInfo isActive={status}>Activo</StudentStatusInfo>
      ) : (
        <StudentStatusInfo isActive={status}>Inactivo</StudentStatusInfo>
      ),
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
