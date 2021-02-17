import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Aboutus from "./components/Aboutus";


function App() {
  return (
    <Router>
      <NavBar />
       <Switch>
		      <Route exact path="/" component={Home}/>
          {/* <Link to='/home'>Go to Home Page</Link> */}
          <Route path="/Aboutus" exact component={Aboutus} />
	    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
