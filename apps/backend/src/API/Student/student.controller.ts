import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateStudentCommand } from '../../Students/Aplication/commands/create-student/create-student.command';
import { CreateStudentRequest } from '../../Students/Aplication/dto/request/create-students-request.dto';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../Students/Aplication/dto/response/create-students-response.dto';
import { ChangeStudentStatusRequest } from '../../Students/Aplication/dto/request/change-students-status-request.dto';
import { ChangeStudentStatusResponse } from '../../Students/Aplication/dto/response/change-students-status-response.dto';
import { ChangeStudentStatusCommand } from '../../Students/Aplication/commands/desactivate-student/change-student-status.command';

@Controller('students')
export class StudentsController {
  constructor(public readonly commandBus: CommandBus) {}
  // @Get(':id')
  // async getStudent(@Param('id') id: string): Promise<void> {}
  @Get()
  async getStudents(): Promise<void> {}
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
  @Patch('/change-status') //TODO mandar el id en el body
  async changeStudentStatus(
    @Body() changeStudentStatusRequest: ChangeStudentStatusRequest
  ): Promise<ChangeStudentStatusResponse> {
    const student = await this.commandBus.execute<
      ChangeStudentStatusCommand,
      ChangeStudentStatusResponse
    >(new ChangeStudentStatusCommand(changeStudentStatusRequest));
    return student;
  }
}
