import { Link } from 'react-router';
import { useShellDispatch } from './ShellCtxProvider.jsx';

export default function ShellTopMenu({ routeTable }) {
  const dispatch = useShellDispatch();
  return (
    <div id="topmenu" className="topmenu">
      <nav>
        <ul>
          {routeTable.map((route) => (
            <li key={route.name}>
              <Link
                to={route.path}
                onClick={() =>
                  dispatch({
                    type: 'setSideMenu',
                    show: route.meta?.menuOptions?.showSideMenu ?? false,
                  })
                }
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
