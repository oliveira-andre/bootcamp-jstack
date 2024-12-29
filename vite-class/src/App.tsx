import '@views/styles/App.css'

import { BrowserRouter, Link } from 'react-router-dom';

import { Router } from '@app/Router';
import { routes } from '@app/Router/routes';
import { ThemeProvider } from '@app/contexts/ThemeContext';
import { ThemeSwitcher } from '@views/components/ui/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <BrowserRouter>
        <header className="h-10 border-b pb-6 mb-10 space-x-6">
          <Link to="/">Home</Link>
          <Link to={routes.createUser}>Create User</Link>
        </header>

        <ThemeSwitcher />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
