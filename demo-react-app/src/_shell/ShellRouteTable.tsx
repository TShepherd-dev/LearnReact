export type MenuLocation = "topmenu" | "sidemenu";

export type AppRoute = {
  path: string;
  name: string;
  componentPath: string;
  meta: {
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
    path: "/",
    name: "home",
    componentPath: "../views/frontend/Home/Home.jsx",
    meta: {
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
    componentPath: "../views/frontend/MyTraining/MyTraining.jsx",
    meta: {
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
    componentPath: "../views/admin/Admin/Admin.jsx",
    meta: {
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
    componentPath: "../views/admin/Dashboard/Dashboard.jsx",
    meta: {
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