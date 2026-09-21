import { useShell } from './ShellCtxProvider.js';
import { Outlet } from 'react-router';

import ShellHeader from './ShellHeader.jsx';
import ShellFooter from './ShellFooter.jsx';
import ShellTopMenu from './ShellTopMenu.jsx';
import ShellSideMenu from './ShellSideMenu.jsx';

import './Shell.css';

import appRoutes from './ShellRouteTable.js';

type ShellRoute = {
  meta?: {
    menuOptions?: {
      displayLocation?: string;
    };
  };
};

const topMenuRoutes = appRoutes.filter(
  (route: ShellRoute) => route.meta?.menuOptions?.displayLocation === 'topmenu'
);

const sideMenuRoutes = appRoutes.filter(
  (route: ShellRoute) => route.meta?.menuOptions?.displayLocation === 'sidemenu'
);

export function ShellLayout() {
  const { header, showSideMenu } = useShell()!;
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