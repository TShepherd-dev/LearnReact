import { useShell } from './ShellCtxProvider.jsx';
import { Outlet } from 'react-router';

import ShellHeader from './ShellHeader';
import ShellFooter from './ShellFooter';
import ShellTopMenu from './ShellTopMenu';
import ShellSideMenu from './ShellSideMenu';

import './Shell.css';

import appRoutes from './ShellRouteTable.jsx';

const topMenuRoutes = appRoutes.filter(
  (route) => route.meta?.menuOptions?.displayLocation === 'topmenu'
);

const sideMenuRoutes = appRoutes.filter(
  (route) => route.meta?.menuOptions?.displayLocation === 'sidemenu'
);

export function ShellLayout() {
  const { header, showSideMenu } = useShell();
  return (
    <>
      <ShellHeader showHeader={header} />
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