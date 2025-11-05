import { authService } from '@services/auth';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export const getMeQueryKey = () => ['me'] as const;

export function useGetMeQuery() {
  const queryClient = useQueryClient();

  const { data, isError, isFetching, isSuccess, refetch } = useQuery({
    queryKey: getMeQueryKey(),
    queryFn: () => authService.getMe(),
    staleTime: Number.POSITIVE_INFINITY,
    retry: 1,
  });

  const removeQuery = useCallback(() => {
    queryClient.removeQueries({ queryKey: getMeQueryKey() });
  }, []);

  return {
    authenticatedUser: data,
    refetchQuery: refetch,
    isSuccess,
    isError,
    isFetching,
    removeQuery,
  };
}
