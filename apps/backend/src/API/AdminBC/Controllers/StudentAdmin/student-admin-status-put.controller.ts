import { Body, Controller, Patch } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../../../Students/Aplication/dto/response/student-response.dto';
import { ChangeStudentStatusRequest } from '../../../../Students/Aplication/dto/request/change-students-status-request.dto';
import { ChangeStudentStatusCommand } from '../../../../Students/Aplication/commands/desactivate-student/change-student-status.command';

@Controller('students')
export class StudentAdminStatusPutController {
  constructor(public readonly commandBus: CommandBus) {}

  @Patch('/change-status')
  async changeStudentStatus(
    @Body() changeStudentStatusRequest: ChangeStudentStatusRequest
  ): Promise<StudentResponse> {
    const student = await this.commandBus.execute<
      ChangeStudentStatusCommand,
      StudentResponse
    >(new ChangeStudentStatusCommand(changeStudentStatusRequest));
    return student;
  }
}
