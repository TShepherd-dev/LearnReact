export default function ShellHeader({ routeTable }) {
  return (
    <header className="shell-header">
      <h1>Shell Header</h1>
      <nav>
        <ul>
          {routeTable.map((route) => (
            <li key={route.name}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}