import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';


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
            <Home />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/Signin">
            <Signin />
          </Route>
          
      </Switch>

        

      </Router>
     
    </div>
  );
}

export default App;
