import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetAllStudentsCommand } from '../commands/get-all-students/get-all-students.command';
import { StudentEntityRepository } from '../../Domain/repository/students.repository';
import { StudentMapper } from '../mappers/student.mapper';
import { StudentResponse } from '../dto/response/student-response.dto';

@CommandHandler(GetAllStudentsCommand)
export class GetAllStudentHandler
  implements ICommandHandler<GetAllStudentsCommand>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository
  ) {}
  async execute(): Promise<StudentResponse[]> {
    const students = await this.studentEntityRepository.findAll();
    return StudentMapper.toResponseList(students);
  }
}
