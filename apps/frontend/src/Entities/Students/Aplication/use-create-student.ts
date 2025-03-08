import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreateStudent } from '../Infrastructure/create/create';
import { Student } from '../Domain/students.interface';

export default function useCreateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createStudent'],
    mutationFn: async (studentData: Partial<Student>) => {
      return fetchCreateStudent(studentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
  });
}
