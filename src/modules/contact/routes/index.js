import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loader from "../../common/Loader";

const ContactContainer = lazy(() =>
  import("./../containers/ContactContainer").then(module => ({
    default: module.ContactContainer
  }))
);

class ContactRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Loader fullscreen />}>
        <Switch>
          <Route path="/contact" component={ContactContainer} />
        </Switch>
      </Suspense>
    );
  }
}

export default ContactRoutes;
