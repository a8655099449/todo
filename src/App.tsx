import React, { useState } from "react";

import BaseLayout from "./Layout/BaseLayout";

import {
  Switch,
  HashRouter as Router,
  Route,
  useHistory,
  HashRouterProps,
  RouterProps,
  LinkProps,
} from "react-router-dom";

import "./App.css";
import router from "./router";

function App(props: RouterProps) {
  // const { history } = props;
  const history  = useHistory()
  const test = () => {
    console.log('👴2021-07-02 17:18:40 App.tsx line:22',history)
    history.push({
      pathname:'/test1',
      
    })

  };
  history?.listen((...args) => {
    console.log("👴2021-07-02 17:13:31 App.tsx line:21", args);
  });
  return (
    <div className="App">
      <BaseLayout>
        <button onClick={test}>按钮1</button>

        <Switch>
          {router.map((r) => {
            return (
              <Route path={r.path} component={r.component} exact key={r.path} />
            );
          })}
        </Switch>
      </BaseLayout>
    </div>
  );
}

export default App;
