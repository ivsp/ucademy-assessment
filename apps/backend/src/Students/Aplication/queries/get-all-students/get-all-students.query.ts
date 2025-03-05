import { GetAllStudentsRequest } from '../../dto/request/get-all-students-request.dto';

export class GetAllStudentsQuery {
  constructor(public readonly getAllStudentFilters: GetAllStudentsRequest) {}
}
