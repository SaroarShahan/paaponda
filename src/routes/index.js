import React from "react";
import DashboardContainer from "../components/dashboard/containers/DashboardContainer";
import AboutContainer from "../components/about/containers/AboutContainer";
import ContactContainer from "../components/contact/containers/ContactContainer";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <DashboardContainer />
  },
  {
    path: "/about",
    main: () => <AboutContainer />
  },
  {
    path: "/contact",
    main: () => <ContactContainer />
  }
];

export default routes;
