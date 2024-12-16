import { useUsers } from './hooks/useUsers';
import { useCreateUser } from './hooks/useCreateUser';

export function Users() {
  const { users, isFetching, isLoading, refetch, error } = useUsers();

  const { createUser, isLoadingUser, data } = useCreateUser();

  console.log({ data });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const elements = event.currentTarget.elements as typeof event.currentTarget.elements & {
      name: HTMLInputElement,
      email: HTMLInputElement,
    }

    try {
      const { id } = await createUser({
        name: elements.name.value,
        email: elements.email.value
      });

      console.log(`Redirecting to /users/${id}`);
    } catch (error) {
      console.log((error as any).toString());
    } finally {
      console.log('Finishing try catch...');
    }
  }

  return (
    <div className="p-4">
      <div className="mb-10">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="outline-none p-1 rounded-md text-zinc-900"
            placeholder="Name"
            type="text"
            name="name"
          />
          <input
            className="outline-none p-1 rounded-md text-zinc-900"
            placeholder="E-mail"
            name="email"
            type="email"
          />
          <button className="bg-blue-400 py-2 text-zinc-950 rounded-md">
            { isLoadingUser ? 'Loading...' : 'SignUp' }
          </button>
        </form>
      </div>
      <button
        type="button"
        className="bg-white text-black px-4 py-2 rounded-lg"
        onClick={() => {refetch()}}
      >
        List Users
      </button>
    { isLoading && <h1>Loading...</h1> }
    { !isLoading && isFetching && <h1>Fetching...</h1> }
    { error && <h1 className="text-red-400">{error.toString()}</h1> }
    {
      users.map(user => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))
    }
  </div>
)
}
