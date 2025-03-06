import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllStudentsQuery } from '../get-all-students/get-all-students.query';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentMapper } from '../../mappers/student.mapper';
import { StudentResponse } from '../../dto/response/student-response.dto';
import { GetAllQueryFilterType } from '../get-all-students/types/query-filter.type';

@QueryHandler(GetAllStudentsQuery)
export class GetAllStudentHandler
  implements IQueryHandler<GetAllStudentsQuery>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository
  ) {}
  async execute({
    getAllStudentFilters,
  }: GetAllStudentsQuery): Promise<StudentResponse[]> {
    const { name, lastname, email, phone, page, limit } = getAllStudentFilters;
    const queryFilter = {} as GetAllQueryFilterType;
    if (name) queryFilter.name = { $regex: name, $options: 'i' };
    if (lastname) queryFilter.lastName = { $regex: lastname, $options: 'i' };
    if (email) queryFilter.email = { $regex: email, $options: 'i' };
    if (phone) queryFilter.phone = { $regex: phone, $options: 'i' };
    const queryOptions = {
      page,
      limit,
    };
    const students =
      await this.studentEntityRepository.findAllWithQueryAndPagination(
        queryFilter,
        queryOptions
      );
    return StudentMapper.toResponseList(students);
  }
}
