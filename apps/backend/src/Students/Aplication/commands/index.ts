import { ChangeStudentStatusHandler } from '../handlers/change-student-stauts.handler';
import { CreateStudentHandler } from '../handlers/create-student.handler';
import { GetAllStudentHandler } from '../handlers/get-all-student.handler';
import { GetStudentByIdHandler } from '../handlers/get-student-by-id.handler';

export const StudentCommandHandler = [
  CreateStudentHandler,
  ChangeStudentStatusHandler,
  GetAllStudentHandler,
  GetStudentByIdHandler,
];
