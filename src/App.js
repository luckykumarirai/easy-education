import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from './components/Signup';
import Signin from './components/Signin';

import NavBar from "./components/navbar";
import Footer from "./components/Footer";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Implemented React-Router for navigating to different routes.
function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
          <Route exact path="/">
            <NavBar />
            <Footer />
          </Route>
          <Route exact path="/Signup">
             <NavBar />
            <Signup />
            <Footer />
          </Route>
          <Route exact path="/Signin">
          <NavBar />
            <Signin />
            <Footer />
          </Route>
          
      </Switch>

        

      </Router>
     
    </div>
  );
}

export default App;
