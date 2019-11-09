import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../common/Loader";

const DashboardContainer = lazy(() =>
  import("./../containers/DashboardContainer").then(module => ({
    default: module.DashboardContainer
  }))
);

class DashboardRoute extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route exact path="/paaponda/home" component={DashboardContainer} />
          <Redirect exact from="/paaponda/" to="/paaponda/home" />
        </Switch>
      </Suspense>
    );
  }
}

export default DashboardRoute;
