import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// without lazy loading
// import { Home } from '@views/pages/Home';
// import { CreateUser } from '@views/pages/CreateUser';

import { lazyLoad } from '@app/utils/lazyLoad';
import { routes } from '@app/Router/routes';

// with lazy
const { Home } = lazyLoad(() => import('@views/pages/Home'));
const { CreateUser } = lazyLoad(() => import('@views/pages/CreateUser'));

export function Router() {
  return (
    <Suspense fallback={<div className="w-10 h-10 rounded-full border-4 border-r-white animate-spin" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.createUser} element={<CreateUser />} />
      </Routes>
    </Suspense>
  );
}
