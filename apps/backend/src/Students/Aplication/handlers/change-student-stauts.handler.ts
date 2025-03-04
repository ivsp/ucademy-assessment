import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ChangeStudentStatusCommand } from '../commands/desactivate-student/change-student-status.command';
import { ChangeStudentStatusResponse } from '../dto/response/change-students-status-response.dto';
import { StudentEntityRepository } from '../../Domain/repository/students.repository';

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
  }: ChangeStudentStatusCommand): Promise<ChangeStudentStatusResponse> {
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
    return {
      id: student.getId(),
      name: student.getName(),
      lastName: student.getLastName(),
      email: student.getEmail(),
      isActive: student.getIsActive(),
    };
  }
}
