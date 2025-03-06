import { CreateStudentRequest } from '../../dto/request/create-students-request.dto';
export class CreateStudentCommand {
  constructor(public readonly createStudentRequest: CreateStudentRequest) {}
}
