import { ChangeStudentStatusRequest } from '../../dto/request/change-students-status-request.dto';

export class ChangeStudentStatusCommand {
  constructor(
    public readonly changeStudentStatusRequest: ChangeStudentStatusRequest
  ) {}
}
