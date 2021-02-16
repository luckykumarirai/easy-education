import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import {Contact} from "./components/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
    <Router>
      <Switch>
      <Route exact path="/contact" component={Contact}/>
          <Link to='/contact'>Go to Contact Page</Link>
      </Switch>
    </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
