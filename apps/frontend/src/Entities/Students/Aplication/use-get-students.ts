import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from '../Infrastructure/get-students/getStudents';
import { StudentsResponse } from '../Infrastructure/get-students/dto/studetns.response';
import { StudentFilterQuery } from '../Infrastructure/get-students/dto/student.query';

export const useGetStudents = (queryFilters?: StudentFilterQuery) => {
  const { isLoading, isError, data } = useQuery<StudentsResponse>({
    queryKey: ['students', queryFilters],
    queryFn: () => fetchStudents(queryFilters),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
    retry: 2,
  });

  return {
    isLoading,
    isError,
    students: data?.students,
    totalResults: data?.totalResults,
    pages: data?.totalPages,
  };
};
