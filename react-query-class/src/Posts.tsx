import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { IUser } from './types';
import { sleep } from './sleep';

import { useUsers } from './hooks/useUsers';

export function Posts() {
  const queryClient = useQueryClient();
  const { users } = useUsers();

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: async (): Promise<IUser[]> => {
        await sleep();
        const response = await fetch('http://localhost:3000/users');
        return response.json();
      },
    });
  }

  return (
    <pre>
      Posts
      <br /><br /><br />
      <Link to="/" onMouseEnter={handleMouseEnter}>
        Go to Users
      </Link>
    </pre>
  )
}
