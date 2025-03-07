import { Student } from '../../../Domain/students.interface';

export interface StudentsResponse {
  students: Student[];
  totalResults: number;
  totalPages: number;
}
