import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Student } from '../Domain/students.interface';
import { fetchEditStudent } from '../Infrastructure/edit/edit';

export default function useEditStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['editStudent'],
    mutationFn: async (studentData: Partial<Student>) => {
      return fetchEditStudent(studentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}
