import { Routes, Route } from 'react-router-dom';

import { Home } from '@views/pages/Home';
import { CreateUser } from '@views/pages/CreateUser';
import { routes } from '@app/Router/routes';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={routes.createUser} element={<CreateUser />} />
    </Routes>
  );
}
