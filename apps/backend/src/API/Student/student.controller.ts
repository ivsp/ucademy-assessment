import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStudentCommand } from '../../Students/Aplication/commands/create-student/create-student.command';
import { CreateStudentRequest } from '../../Students/Aplication/dto/request/create-students-request.dto';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../Students/Aplication/dto/response/student-response.dto';
import { ChangeStudentStatusRequest } from '../../Students/Aplication/dto/request/change-students-status-request.dto';
import { ChangeStudentStatusCommand } from '../../Students/Aplication/commands/desactivate-student/change-student-status.command';
import { GetAllStudentsCommand } from '../../Students/Aplication/commands/get-all-students/get-all-students.command';
import { GetStudentByIdCommand } from '../../Students/Aplication/commands/get-student-by-id/get-student-by-id.command';

@Controller('students')
export class StudentsController {
  constructor(public readonly commandBus: CommandBus) {}
  @Get(':studentId')
  async getStudentById(
    @Param('studentId') studentId: string
  ): Promise<StudentResponse> {
    return this.commandBus.execute<GetStudentByIdCommand, StudentResponse>(
      new GetStudentByIdCommand(studentId)
    );
  }
  @Get()
  async getAllStudents(): Promise<StudentResponse[]> {
    return this.commandBus.execute<GetAllStudentsCommand, StudentResponse[]>(
      new GetAllStudentsCommand()
    );
  }
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
