import '@views/styles/App.css'

import { BrowserRouter, Link } from 'react-router-dom';

import { Router } from '@app/Router';
import { routes } from '@app/Router/routes';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to={routes.createUser}>Create User</Link>
      <Router />
    </BrowserRouter>
  )
}

export default App
