import { Body, Controller, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../../../AdminBC/Students/Aplication/dto/response/student-response.dto';
import { EditStudentRequest } from '../../../../AdminBC/Students/Aplication/dto/request/edit-student-request.dto';
import { EditStudentCommand } from '../../../../AdminBC/Students/Aplication/commands/edit-student/edit-student.command';

@Controller('students')
export class StudentAdminPutController {
  constructor(public readonly commandBus: CommandBus) {}

  @Patch('/edit')
  async editStudent(
    @Body() editStudentRequest: EditStudentRequest
  ): Promise<StudentResponse> {
    const student = await this.commandBus.execute<
      EditStudentCommand,
      StudentResponse
    >(new EditStudentCommand(editStudentRequest));
    return student;
  }
}
