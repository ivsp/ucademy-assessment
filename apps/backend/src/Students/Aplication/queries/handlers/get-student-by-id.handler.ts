import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetStudentByIdQuery } from '../get-student-by-id/get-student-by-id.query';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentMapper } from '../../mappers/student.mapper';
import { StudentResponse } from '../../dto/response/student-response.dto';

@QueryHandler(GetStudentByIdQuery)
export class GetStudentByIdHandler
	implements IQueryHandler<GetStudentByIdQuery>
{
	constructor(
		private readonly studentEntityRepository: StudentEntityRepository
	) {}
	async execute({ studentId }: GetStudentByIdQuery): Promise<StudentResponse> {
		const student = await this.studentEntityRepository.findOneById(studentId);
		return StudentMapper.toResponse(student);
	}
}
