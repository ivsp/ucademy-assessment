import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllStudentsQuery } from '../get-all-students/get-all-students.query';
import { StudentEntityRepository } from '../../../Domain/repository/students.repository';
import { StudentMapper } from '../../mappers/student.mapper';
import { GetAllQueryFilterType } from '../get-all-students/types/query-filter.type';
import { StudentsResponse } from '../../dto/response/students-response.dto';

@QueryHandler(GetAllStudentsQuery)
export class GetAllStudentHandler
  implements IQueryHandler<GetAllStudentsQuery>
{
  constructor(
    private readonly studentEntityRepository: StudentEntityRepository
  ) {}
  async execute({
    getAllStudentFilters,
  }: GetAllStudentsQuery): Promise<StudentsResponse> {
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
    const studentsFiltered =
      await this.studentEntityRepository.findAllWithQueryAndPagination(
        queryFilter,
        queryOptions
      );
    const students =
      await this.studentEntityRepository.findAllWithQueryAndPagination(
        queryFilter,
        {}
      );
    return {
      students: StudentMapper.toResponseList(studentsFiltered),
      totalResults: StudentMapper.toResponseList(students).length,
      totalPages: Math.ceil(
        StudentMapper.toResponseList(students).length / limit
      ),
    };
  }
}
