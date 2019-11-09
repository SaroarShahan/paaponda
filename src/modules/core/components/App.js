import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../../common/Sidebar";
import routes from "./../routes/index";

function App() {
  return (
    <>
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
