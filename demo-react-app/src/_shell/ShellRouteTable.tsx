import type { ComponentType } from 'react';

import Login from '../views/frontend/Auth/Login.jsx';
import LoggedOut from '../views/frontend/Auth/LoggedOut.jsx';
import Home from '../views/frontend/Home/Home.jsx';
import MyTraining from '../views/frontend/MyTraining/MyTraining.jsx';
import Admin from '../views/admin/Admin/Admin.jsx';
import AdminDashboard from '../views/admin/Dashboard/Dashboard.jsx';

export type MenuLocation = "topmenu" | "sidemenu";

export type AuthVisibility = 'always' | 'authenticated' | 'anonymous';

export type AppRoute = {
  path: string;
  name: string;
  component: ComponentType;
  meta: {
    requiresAuth: boolean;
    authVisibility: AuthVisibility;
    menuOptions: {
      display: boolean;
      displayLocation: MenuLocation;
      displayOrder: number;
      menuIcon: string;
      showSideMenu: boolean;
    };
    tkeys: { menuitem: string };
  };
};

const appRoutes: AppRoute[] = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
      authVisibility: 'anonymous',
      menuOptions: {
        display: true,
        displayLocation: "topmenu",
        displayOrder: 1,
        menuIcon: "fal fa-home fa-fw",
        showSideMenu: false
      },
      tkeys: { menuitem: "app.pageTitle.home" }
    }
  },
  {
    path: "/auth-logout",
    name: "auth-logout",
    component: LoggedOut,
    meta: {
      requiresAuth: false,
      authVisibility: 'authenticated',
      menuOptions: {
        display: true,
        displayLocation: "topmenu",
        displayOrder: 99,
        menuIcon: "fal fa-home fa-fw",
        showSideMenu: false
      },
      tkeys: { menuitem: "app.pageTitle.home" }
    }
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true,
      authVisibility: 'authenticated',
      menuOptions: {
        display: true,
        displayLocation: "topmenu",
        displayOrder: 1,
        menuIcon: "fal fa-home fa-fw",
        showSideMenu: false
      },
      tkeys: { menuitem: "app.pageTitle.home" }
    }
  },
  {
    path: "/my-training",
    name: "myTraining",
    component: MyTraining,
    meta: {
      requiresAuth: true,
      authVisibility: 'authenticated',
      menuOptions: {
        display: true,
        displayLocation: "topmenu",
        displayOrder: 2,
        menuIcon: "fal fa-book fa-fw",
        showSideMenu: false
      },
      tkeys: { menuitem: "app.pageTitle.myTraining" }
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: {
      requiresAuth: true,
      authVisibility: 'authenticated',
      menuOptions: {
        display: true,
        displayLocation: "topmenu",
        displayOrder: 99,
        menuIcon: "fal fa-book fa-fw",
        showSideMenu: true
      },
      tkeys: { menuitem: "app.pageTitle.myTraining" }
    }
  },
  ///////////// admin routes
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    component: AdminDashboard,
    meta: {
        requiresAuth: true,
        authVisibility: 'authenticated',
        menuOptions : {
        display: true,
        displayLocation: "sidemenu",
        displayOrder: 1,
        menuIcon: "fal fa-home fa-fw",
        showSideMenu: true
      },
      tkeys: { menuitem: "app.pageTitle.adminDashboard" }
    }
  }

];

export default appRoutes;