import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentCommand } from '../../../../Students/Aplication/commands/create-student/create-student.command';
import { CreateStudentRequest } from '../../../../Students/Aplication/dto/request/create-student-request.dto';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../../../Students/Aplication/dto/response/student-response.dto';

@Controller('students')
export class StudentAdminPostController {
  constructor(public readonly commandBus: CommandBus) {}

  @Post()
  async createStudent(
    @Body() createStudentRequest: CreateStudentRequest
  ): Promise<StudentResponse> {
    const student = await this.commandBus.execute<
      CreateStudentCommand,
      StudentResponse
    >(new CreateStudentCommand(createStudentRequest));
    return student;
  }
}
