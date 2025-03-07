import { Student } from '../../../interfaces/students.interface';

export interface StudentsResponse {
  students: Student[];
  totalResults: number;
  totalPages: number;
}
