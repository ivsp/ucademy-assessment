import { EditStudentRequest } from '../../dto/request/edit-student-request.dto';

export class EditStudentCommand {
  constructor(public readonly editStudentRequest: EditStudentRequest) {}
}
