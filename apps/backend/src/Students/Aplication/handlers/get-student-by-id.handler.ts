import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { GetStudentByIdCommand } from '../commands/get-student-by-id/get-student-by-id.command';
import { StudentEntityRepository } from '../../Domain/repository/students.repository';
import { StudentMapper } from '../mappers/student.mapper';
import { StudentResponse } from '../dto/response/student-response.dto';

@CommandHandler(GetStudentByIdCommand)
export class GetStudentByIdHandler
  implements ICommandHandler<GetStudentByIdCommand>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository
  ) {}
  async execute({
    studentId,
  }: GetStudentByIdCommand): Promise<StudentResponse> {
    const student = await this.studentEntityRepository.findOneById(studentId);
    return StudentMapper.toResponse(student);
  }
}
