import * as React from "react";
import { Router, browserHistory, IndexRoute, Route } from "react-router";

import MainPage from "./components";

import Page404 from "./components/Page404";

export default class RootRoutes extends React.Component<{}, {}> {

  public render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainPage}>
          <IndexRoute component={MainPage} />
          <Route path="*" component={Page404} />
        </Route>
      </Router>
    );
  }
}

