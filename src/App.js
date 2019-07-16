import React from "react";
import "./App.css";
import Landing from "../src/Components/Landing/Landing";
import Services from "../src/Components/Services/Services";
import Contact from "../src/Components/Contact/Contact";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
