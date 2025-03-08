import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateStudentCommand } from '../../Students/Aplication/commands/create-student/create-student.command';
import { CreateStudentRequest } from '../../Students/Aplication/dto/request/create-student-request.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../Students/Aplication/dto/response/student-response.dto';
import { ChangeStudentStatusRequest } from '../../Students/Aplication/dto/request/change-students-status-request.dto';
import { ChangeStudentStatusCommand } from '../../Students/Aplication/commands/desactivate-student/change-student-status.command';
import { GetAllStudentsQuery } from '../../Students/Aplication/queries/get-all-students/get-all-students.query';
import { GetStudentByIdQuery } from '../../Students/Aplication/queries/get-student-by-id/get-student-by-id.query';
import { GetAllStudentsRequest } from '../../Students/Aplication/dto/request/get-all-students-request.dto';
import { EditStudentRequest } from '../../Students/Aplication/dto/request/edit-student-request.dto';
import { EditStudentCommand } from '../../Students/Aplication/commands/edit-student/edit-student.command';

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
  async getAllStudents(
    @Query('name') name?: string,
    @Query('lastname') lastname?: string,
    @Query('email') email?: string,
    @Query('phone') phone?: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20'
  ): Promise<StudentResponse[]> {
    const getAllStudentQuery: GetAllStudentsRequest = {
      name,
      lastname,
      email,
      phone,
      page: Number(page),
      limit: Number(limit),
    };
    return this.queryBus.execute<GetAllStudentsQuery, StudentResponse[]>(
      new GetAllStudentsQuery(getAllStudentQuery)
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
