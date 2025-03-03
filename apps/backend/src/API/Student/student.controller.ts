import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentCommand } from '../../Students/Aplication/commands/create-student.command';
import { CreateStudentRequest } from '../../Students/Aplication/dto/request/create-students-request.dto';
import { CommandBus } from '@nestjs/cqrs';
import { StudentResponse } from '../../Students/Aplication/dto/response/create-students-response.dto';

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
  // @Patch(':id')
  // async updateStudent(
  //   @Param('id') studentId: string,
  //   @Body() updateStudentRequest: UpdateStudentRequest
  // ): Promise<void> {}
}
