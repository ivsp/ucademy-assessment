import { Student } from '../students.interface';

export type StudentStatus = Pick<Student, 'isActive'>;
