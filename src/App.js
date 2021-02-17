import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import {Contact} from "./components/Contact";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Aboutus from "./components/Aboutus";
//import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/Aboutus" exact component={Aboutus} />
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
