import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudentResponse } from '../../dto/response/student-response.dto';
import { EditStudentCommand } from '../edit-student/edit-student.command';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentMapper } from '../../mappers/student.mapper';

@CommandHandler(EditStudentCommand)
export class EditStudentHandler implements ICommandHandler<EditStudentCommand> {
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository,
    private readonly eventPublisher: EventPublisher
  ) {}
  async execute({
    editStudentRequest,
  }: EditStudentCommand): Promise<StudentResponse> {
    const { id, name, lastName, phone } = editStudentRequest;
    const student = this.eventPublisher.mergeObjectContext(
      await this.studentEntityRepository.findOneById(id)
    );
    student.updateProperties({ name, lastName, phone });
    await this.studentEntityRepository.findOneAndReplaceById(id, student);
    student.commit();
    return StudentMapper.toResponse(student);
  }
}
