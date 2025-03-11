import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../../../AdminBC/Students/Aplication/dto/response/student-response.dto';
import { GetStudentByIdQuery } from '../../../../AdminBC/Students/Aplication/queries/get-student-by-id/get-student-by-id.query';
@Controller('students')
export class StudentAdminGetController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':studentId')
  async getStudentById(
    @Param('studentId') studentId: string
  ): Promise<StudentResponse> {
    return this.queryBus.execute<GetStudentByIdQuery, StudentResponse>(
      new GetStudentByIdQuery(studentId)
    );
  }
}
