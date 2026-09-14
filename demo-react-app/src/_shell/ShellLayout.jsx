import { Outlet } from 'react-router';
import ShellHeader from './ShellHeader';
import ShellFooter from './ShellFooter';

export function ShellLayout({ routeTable }) {
  return (
    <>
      <ShellHeader routeTable={routeTable} />
      <main id="maincontent">
        <Outlet /> {/* matched page here */}
      </main>
      <ShellFooter />
    </>
  );
}