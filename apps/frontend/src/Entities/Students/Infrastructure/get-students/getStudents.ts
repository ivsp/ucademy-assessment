import { StudentFilterQuery } from './dto/student.query';
import { StudentsResponse } from './dto/studetns.response';
import { fetchClient } from '../../../../Utils/clients/fetch-client';

export const fetchStudents = async (
  query?: StudentFilterQuery
): Promise<StudentsResponse> => {
  const queryParams = new URLSearchParams();

  if (query?.name) queryParams.append('name', query.name);
  if (query?.lastName) queryParams.append('lastname', query.lastName);
  if (query?.email) queryParams.append('email', query.email);
  if (query?.phone) queryParams.append('phone', query.phone);
  if (query?.page) queryParams.append('page', query.page.toString());
  if (query?.limit) queryParams.append('limit', query.limit.toString());
  const response = await fetchClient<StudentsResponse>({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/',
    url: `students?${queryParams}`,
    method: 'GET',
  });
  const studentsResponse = response as StudentsResponse;

  return {
    students: studentsResponse.students,
    totalResults: studentsResponse.totalResults,
    totalPages: studentsResponse.totalPages,
  };
};
