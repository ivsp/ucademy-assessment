import { Student } from '../../Domain/students.interface';
import { fetchClient } from '../../../../Utils/clients/fetch-client';

export async function fetchEditStudent(
  studentData: Partial<Student>
): Promise<Student> {
  try {
    const response = await fetchClient<Student>({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      url: 'students',
      method: 'PATCH',
      data: studentData,
    });
    return response as Student;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Error al crear el estudiante'
    );
  }
}
