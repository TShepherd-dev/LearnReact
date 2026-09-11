import ShellHeader from './_shell/ShellHeader.jsx';
import ShellFooter from './_shell/ShellFooter.jsx';

import Home from './frontend/views/Home.jsx';

export default function AppShell() {
  return (
    <div className="app-shell">
      <h1>App Shell</h1>

      <ShellHeader />
      <Home />
      <ShellFooter />
    </div>
  );
}