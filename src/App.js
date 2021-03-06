import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Sidebar from "./modules/common/Sidebar";
import routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Sidebar>
        <Switch>
          {routes.map((route, index) => (
            <Route
              {...(route === "/" && { exact: true })}
              key={index}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Sidebar>
    </>
  );
}

export default App;
