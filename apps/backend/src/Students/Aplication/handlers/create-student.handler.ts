import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateStudentCommand } from '../commands/create-student.command';
import { StudentFactory } from '../../Domain/factory/student.factory';
import { StudentResponse } from '../dto/response/create-students-response.dto';

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
    return {
      id: student.getId(),
      name: student.getName(),
      lastName: student.getLastName(),
      email: student.getEmail(),
      phone: student.getPhone(),
      isActive: student.getIsActive(),
    };
  }
}
