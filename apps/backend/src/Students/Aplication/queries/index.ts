import { GetAllStudentHandler } from './handlers/get-all-student.handler';
import { GetStudentByIdHandler } from './handlers/get-student-by-id.handler';

export const StudentQueryHandler = [
  GetAllStudentHandler,
  GetStudentByIdHandler,
];
