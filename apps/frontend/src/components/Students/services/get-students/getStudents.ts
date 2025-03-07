import { StudentQuery } from './dto/student.query';
import { StudentsResponse } from './dto/studetns.response';

export const fetchStudents = async (
  query?: StudentQuery
): Promise<StudentsResponse> => {
  const queryParams = new URLSearchParams();

  if (query?.name) queryParams.append('name', query.name);
  if (query?.lastName) queryParams.append('lastname', query.lastName);
  if (query?.email) queryParams.append('email', query.email);
  if (query?.phone) queryParams.append('phone', query.phone);
  if (query?.page) queryParams.append('page', query.page.toString());
  if (query?.limit) queryParams.append('limit', query.limit.toString());
  const response = await fetch(
    `http://localhost:3000/api/students?${queryParams}`
  );

  if (!response.ok) {
    throw new Error('Error retrieving students');
  }
  const studentsResponse =
    (await response.json()) as unknown as StudentsResponse;

  return {
    students: studentsResponse.students,
    totalResults: studentsResponse.totalResults,
    totalPages: studentsResponse.totalPages,
  };
};
