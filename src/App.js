import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
    <Router>
       <Switch>
		      <Route exact path="/home" component={Home}/>
          <Link to='/home'>Go to Home Page</Link>
	    </Switch>
    </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
