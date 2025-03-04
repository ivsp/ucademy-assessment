import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllStudentsQuery } from '../get-all-students/get-all-students.query';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentMapper } from '../../mappers/student.mapper';
import { StudentResponse } from '../../dto/response/student-response.dto';

@QueryHandler(GetAllStudentsQuery)
export class GetAllStudentHandler
  implements IQueryHandler<GetAllStudentsQuery>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository
  ) {}
  async execute(): Promise<StudentResponse[]> {
    const students = await this.studentEntityRepository.findAll();
    return StudentMapper.toResponseList(students);
  }
}
