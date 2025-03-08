import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../../../Students/Aplication/dto/response/student-response.dto';
import { GetAllStudentsQuery } from '../../../../Students/Aplication/queries/get-all-students/get-all-students.query';
import { GetAllStudentsRequest } from '../../../../Students/Aplication/dto/request/get-all-students-request.dto';

@Controller('students')
export class StudentsAdminGetController {
  constructor(private readonly queryBus: QueryBus) {}

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
}
