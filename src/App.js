import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewBlogs from "./Components/New-Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/New-Blog">
              <NewBlogs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
