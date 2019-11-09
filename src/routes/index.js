import DashboardRoute from "../modules/dashboard/routes";
import AboutContainer from "./../modules/about/containers/AboutContainer";
import ContactRoutes from "./../modules/contact/routes";

const routes = [
  {
    path: "/paaponda/home",
    component: DashboardRoute
  },
  {
    path: "/paaponda/about",
    component: AboutContainer
  },
  {
    path: "/paaponda/contact",
    component: ContactRoutes
  },
  { path: "/paaponda/", component: DashboardRoute, exact: true }
];

export default routes;
