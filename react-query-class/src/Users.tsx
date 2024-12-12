import { useUsers } from './hooks/useUsers';

export function Users() {
  const { users, isFetching, isLoading, refetch, error } = useUsers();
  return (
    <div className="p-4">
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
