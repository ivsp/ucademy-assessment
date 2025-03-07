import { StudentResponse } from './student-response.dto';

export class StudentsResponse {
  students: StudentResponse[];
  totalResults: number;
  totalPages: number;

  constructor(
    students: StudentResponse[],
    totalResults: number,
    totalPages: number
  ) {
    this.students = students;
    this.totalResults = totalResults;
    this.totalPages = totalPages;
  }
}
