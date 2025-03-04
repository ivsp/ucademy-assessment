import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStudentCommand } from '../../Students/Aplication/commands/create-student/create-student.command';
import { CreateStudentRequest } from '../../Students/Aplication/dto/request/create-students-request.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../Students/Aplication/dto/response/student-response.dto';
import { ChangeStudentStatusRequest } from '../../Students/Aplication/dto/request/change-students-status-request.dto';
import { ChangeStudentStatusCommand } from '../../Students/Aplication/commands/desactivate-student/change-student-status.command';
import { GetAllStudentsQuery } from '../../Students/Aplication/queries/get-all-students/get-all-students.query';
import { GetStudentByIdQuery } from '../../Students/Aplication/queries/get-student-by-id/get-student-by-id.query';

@Controller('students')
export class StudentsController {
  constructor(
    public readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}
  @Get(':studentId')
  async getStudentById(
    @Param('studentId') studentId: string
  ): Promise<StudentResponse> {
    return this.queryBus.execute<GetStudentByIdQuery, StudentResponse>(
      new GetStudentByIdQuery(studentId)
    );
  }
  @Get()
  async getAllStudents(): Promise<StudentResponse[]> {
    return this.queryBus.execute<GetAllStudentsQuery, StudentResponse[]>(
      new GetAllStudentsQuery()
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
