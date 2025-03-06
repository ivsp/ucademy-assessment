import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ChangeStudentStatusCommand } from '../desactivate-student/change-student-status.command';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentResponse } from '../../dto/response/student-response.dto';
import { StudentMapper } from '../../mappers/student.mapper';

@CommandHandler(ChangeStudentStatusCommand)
export class ChangeStudentStatusHandler
  implements ICommandHandler<ChangeStudentStatusCommand>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository,
    private readonly eventPublisher: EventPublisher
  ) {}
  async execute({
    changeStudentStatusRequest,
  }: ChangeStudentStatusCommand): Promise<StudentResponse> {
    const student = this.eventPublisher.mergeObjectContext(
      await this.studentEntityRepository.findOneById(
        changeStudentStatusRequest.studentId
      )
    );
    student.changeStatus(changeStudentStatusRequest.newStudentStatus);
    await this.studentEntityRepository.findOneAndReplaceById(
      changeStudentStatusRequest.studentId,
      student
    );
    student.commit();
    return StudentMapper.toResponse(student);
  }
}
