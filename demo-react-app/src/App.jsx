import { BrowserRouter, Routes, Route } from 'react-router';
import { ShellLayout } from './_shell/ShellLayout';
import Home from './views/frontend/Home/Home.jsx';
import MyTraining from './views/frontend/MyTraining/MyTraining.jsx';

const menuRoutes = [
  {
    path: "/",
    name: "home",
    componentPath: "./views/frontend/Home/Home.jsx",
    meta: {
      headerMenu: {
        display: true,
        displayLocation: "menu",
        displayOrder: 1,
        menuIcon: "fal fa-home fa-fw"
      },
      tkeys: { menuitem: "app.pageTitle.home" }
    }
  },
  {
    path: "/my-training",
    name: "myTraining",
    componentPath: "./views/frontend/MyTraining/MyTraining.jsx",
    meta: {
      headerMenu: {
        display: true,
        displayLocation: "menu",
        displayOrder: 1,
        menuIcon: "fal fa-book fa-fw"
      },
      tkeys: { menuitem: "app.pageTitle.myTraining" }
    }
  }
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShellLayout routeTable={menuRoutes} />}>
          <Route index element={<Home />} />
          <Route path="my-training"
                 element={<MyTraining />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}