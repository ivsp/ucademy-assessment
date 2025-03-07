import { TableProps } from 'antd';
import { Student } from '../../interfaces/students.interface';

export const studentsColumns: TableProps<Student>['columns'] = [
  {
    title: '',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (text: boolean) => (text ? 'Active' : 'Inactive'),
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
