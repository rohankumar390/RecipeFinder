// import "./App.css";

import React, { useState } from "react";
import Recipe from "./Components/Recipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const apiKey = "6d2ac43a24b3a3fb87c21d003c9eaaff%09";
  const apiId = "8e61d206";
  console.log(apiKey);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/pizza">
            <Recipe            
              apiKey={apiKey}
              apiId={apiId}
              category="pizza"
            />
          </Route>
          <Route exact path="/burger">
            <Recipe
              apiKey={apiKey}
              apiId={apiId}
              category="burger"
            />
          </Route>

          <Route exact path="/bread">
            <Recipe
              
              apiKey={apiKey}
              apiId={apiId}
              category="bread"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
