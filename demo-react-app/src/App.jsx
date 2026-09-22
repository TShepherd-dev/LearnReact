import { BrowserRouter, Routes, Route } from 'react-router';
import RequireAuth from './auth/RequireAuth.jsx';

import { ShellLayout } from './_shell/ShellLayout';
import { ShellCtxProvider } from './_shell/ShellCtxProvider.jsx';

import appRoutes from './_shell/ShellRouteTable';

const publicRoutes = appRoutes.filter((route) => !route.meta.requiresAuth);
const protectedRoutes = appRoutes.filter((route) => route.meta.requiresAuth);

export default function App() {
  return (
    <ShellCtxProvider>
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          {publicRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}

          {/* protected routes inside the shell layout */}
          <Route element={<RequireAuth />}>
            <Route element={<ShellLayout />}>
              {protectedRoutes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ShellCtxProvider>
  );
}