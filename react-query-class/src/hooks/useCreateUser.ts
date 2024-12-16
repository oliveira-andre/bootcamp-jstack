import { useMutation } from '@tanstack/react-query';
import { IUser } from '../types';
import { sleep } from '../sleep';

export function useCreateUser() {
  const { mutateAsync, isPending, data } = useMutation({
    retry: 3,
    // old: mutate (sync)
    mutationFn: async ({ name, email }: { name: string, email: string }): Promise<IUser> => {
      await sleep();

      // throw new Error('Something got wrong');

      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      return response.json();
    },
    onError: (error, variables) => {
      console.log(error.toString());
      console.log('Variables: ', variables);
    },
    onSuccess: (data, variables) => {
      console.log('onSuccess: ', { data, variables });
    },
    onSettled: (data, error) => {
      if (data) {
        console.log('Execution finished succesfully');
      }

      if (error) {
        console.log('Execution finished with error');
      }
    },
  });

  return {
    createUser: mutateAsync,
    isLoadingUser: isPending,
    data,
  }
}
