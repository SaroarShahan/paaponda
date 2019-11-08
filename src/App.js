import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import routes from "./routes";

function App() {
  return (
    <>
      <Header />

      <Sidebar>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Sidebar>

      <Footer />
    </>
  );
}

export default App;
