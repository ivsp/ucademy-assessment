import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchChangeStudentStatus } from '../../../Entities/Students/Infrastructure/change-status/change-status';

export default function useToggleStudentStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['toggleStudentStatus'],
    mutationFn: fetchChangeStudentStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
    },
    onError: (error) => {
      throw new Error('No se ha podido cambiar el estado al alumno');
    },
    throwOnError: () => {
      throw new Error('No se ha podido cambiar el estado al alumno');
    },
  });
}
