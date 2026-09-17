import { Link } from 'react-router';

export default function ShellSideMenu({ routeTable, showMenu }) {
  if (!showMenu) return null;
  return (
    <div id="sidemenu" className="sidemenu">
      <nav>
        <ul>
          {routeTable.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}