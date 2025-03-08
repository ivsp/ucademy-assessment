import { ChangeStudentStatusHandler } from './handlers/change-student-stauts.handler';
import { CreateStudentHandler } from './handlers/create-student.handler';
import { EditStudentHandler } from './handlers/edit-student.handler';

export const StudentCommandHandler = [
  CreateStudentHandler,
  ChangeStudentStatusHandler,
  EditStudentHandler,
];
