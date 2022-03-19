import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";


/****site route*****/
//  Home page
const Home = lazy(() => import("./pages"));

const loader = (
  <div style={{
    width: '100vw',
    height: "100vh",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <div className="reverse-spinner" />
  </div>
);

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Suspense fallback={loader}>
          <Route exact path="/" component={Home} />
        </Suspense>
      </Switch>
    </React.Fragment>
  );
};

export default AppRouter;
