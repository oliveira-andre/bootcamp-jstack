import { useQuery } from '@tanstack/react-query';

import { IUser } from '../types';
import { sleep } from '../sleep';

export function useUsers() {
  const  { data, isFetching, isLoading, refetch, error } = useQuery({
    enabled: true,
    queryKey: ['users'],
    gcTime: 5000,
    refetchInterval: 10000,
    retry: 10,
    retryDelay: 1000,
    queryFn: async (): Promise<IUser[]> => {
      // throw new Error('Something got wrong!!');
      await sleep();
      const response = await fetch('http://localhost:3000/users');
      return response.json();
    },
  });

  return {
    users: data ?? [],
    isFetching,
    isLoading,
    refetch,
    error
  };
}
