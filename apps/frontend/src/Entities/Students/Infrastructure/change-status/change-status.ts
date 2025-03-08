import { Student } from '../../Domain/students.interface';
import { fetchClient } from '../../../../Utils/clients/fetch-client';

interface ChangeStudentStatusProps {
  studentId: string;
  newStudentStatus: boolean;
}

export async function fetchChangeStudentStatus({
  studentId,
  newStudentStatus,
}: ChangeStudentStatusProps): Promise<Student> {
  const response = await fetchClient<Student>({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    url: `students/change-status`,
    method: 'PATCH',
    data: { studentId, newStudentStatus },
  });

  return response as Student;
}
