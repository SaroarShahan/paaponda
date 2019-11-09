import DashboardRoute from "../modules/dashboard/routes";
import AboutContainer from "./../modules/about/containers/AboutContainer";
import ContactRoutes from "./../modules/contact/routes";

const routes = [
  {
    path: "/home",
    component: DashboardRoute
  },
  {
    path: "/about",
    component: AboutContainer
  },
  {
    path: "/contact",
    component: ContactRoutes
  },
  { path: "/", component: DashboardRoute, exact: true }
];

export default routes;
