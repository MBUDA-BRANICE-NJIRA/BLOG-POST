import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NewBlogs from "./Components/New-Blog";
import BlogDetails from "./Components/BlogDetails";

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

            <Route path="/BlogDetails/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
