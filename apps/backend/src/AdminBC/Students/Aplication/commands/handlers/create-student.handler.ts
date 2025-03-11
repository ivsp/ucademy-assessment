import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateStudentCommand } from '../create-student/create-student.command';
import { StudentFactory } from '../../../Domain/factory/student.factory';
import { StudentResponse } from '../../dto/response/student-response.dto';
import { StudentMapper } from '../../mappers/student.mapper';

@CommandHandler(CreateStudentCommand)
export class CreateStudentHandler
  implements ICommandHandler<CreateStudentCommand>
{
  constructor(
    private readonly studentFactory: StudentFactory,
    private readonly eventPublisher: EventPublisher
  ) {}
  async execute({
    createStudentRequest,
  }: CreateStudentCommand): Promise<StudentResponse> {
    const { name, lastName, email, phone, isActive } = createStudentRequest;
    const student = this.eventPublisher.mergeObjectContext(
      await this.studentFactory.create(name, lastName, email, phone, isActive)
    );
    student.commit();
    return StudentMapper.toResponse(student);
  }
}
