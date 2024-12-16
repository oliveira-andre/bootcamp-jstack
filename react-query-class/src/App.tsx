import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Users } from './Users';
import { Posts } from './Posts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      retry: false,
      gcTime: 10 * 60 & 1000, // 10 minutes
    },
    mutations: {
      retry: 2,
    }
  }
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <ReactQueryDevtools buttonPosition="bottom-left" position="left" />
      </BrowserRouter>
    </QueryClientProvider>
  );
};
