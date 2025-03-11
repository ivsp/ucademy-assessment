import { CreateStudentRequest } from '../../dto/request/create-student-request.dto';

export class CreateStudentCommand {
  constructor(public readonly createStudentRequest: CreateStudentRequest) {}
}
