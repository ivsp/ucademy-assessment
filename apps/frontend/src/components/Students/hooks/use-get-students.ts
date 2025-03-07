import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '../services/get-students/getStudents';
import { StudentsResponse } from '../services/get-students/dto/studetns.response';
import { StudentQuery } from '../services/get-students/dto/student.query';

export const useGetStudents = (queryFilters?: StudentQuery) => {
  console.log('filters;;', queryFilters);
  const { isLoading, isError, data } = useQuery<StudentsResponse>({
    queryKey: ['students', queryFilters],
    queryFn: () => fetchStudents(queryFilters),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    retry: 2,
  });
  console.log('data::', data);

  return {
    isLoading,
    isError,
    students: data?.students,
    totalResults: data?.totalResults,
    pages: data?.totalPages,
  };
};
