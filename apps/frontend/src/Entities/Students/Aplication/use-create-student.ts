import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateStudentDTO } from '../Infrastructure/create/dto/create.dto';
import { fetchCreateStudent } from '../Infrastructure/create/create';

export default function useCreateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['createStudent'],
    mutationFn: async (studentData: CreateStudentDTO) => {
      return fetchCreateStudent(studentData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: (error) => {
      console.error('Error al crear el estudiante:', error);
    },
  });
}
