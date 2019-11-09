import DashboardContainer from "./../../dashboard/containers/DashboardContainer";
import AboutContainer from "./../../about/containers/AboutContainer";
import ContactContainer from "./../../contact/containers/ContactContainer";

const routes = [
  {
    path: "/home",
    component: DashboardContainer
  },
  {
    path: "/about",
    component: AboutContainer
  },
  {
    path: "/contact",
    component: ContactContainer
  },
  { path: "/", component: DashboardContainer, exact: true }
];

export default routes;
