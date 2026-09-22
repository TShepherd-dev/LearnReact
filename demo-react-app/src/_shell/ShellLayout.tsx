import { useShell } from './ShellCtxProvider.js';
import { Outlet } from 'react-router';

import ShellHeader from './ShellHeader.jsx';
import ShellFooter from './ShellFooter.jsx';
import ShellTopMenu from './ShellTopMenu.jsx';
import ShellSideMenu from './ShellSideMenu.jsx';

import './Shell.css';

import appRoutes from './ShellRouteTable.js';
import { useAuth } from '../auth/AuthProvider.jsx';

type AuthVisibility = 'always' | 'authenticated' | 'anonymous';

type ShellRoute = {
  meta?: {
    authVisibility?: AuthVisibility;
    menuOptions?: {
      displayLocation?: string;
    };
  };
};

function isMenuVisible(route: ShellRoute, isAuthenticated: boolean): boolean {
  const visibility = route.meta?.authVisibility ?? 'always';
  if (visibility === 'authenticated') return isAuthenticated;
  if (visibility === 'anonymous') return !isAuthenticated;
  return true;
}

export function ShellLayout() {
  const { header, showSideMenu } = useShell()!;
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const topMenuRoutes = appRoutes.filter(
    (route: ShellRoute) =>
      route.meta?.menuOptions?.displayLocation === 'topmenu' &&
      isMenuVisible(route, isAuthenticated)
  );

  const sideMenuRoutes = appRoutes.filter(
    (route: ShellRoute) =>
      route.meta?.menuOptions?.displayLocation === 'sidemenu' &&
      isMenuVisible(route, isAuthenticated)
  );

  return (
    <>
      <ShellHeader routeTable={appRoutes} showHeader={header} />
      <ShellTopMenu routeTable={topMenuRoutes} />
      <div id="shell-body">
        <ShellSideMenu routeTable={sideMenuRoutes} showMenu={showSideMenu} />

        <main id="maincontent">
          <Outlet /> {/* matched page here */}
        </main>
      </div>
      <ShellFooter />
    </>
  );
}