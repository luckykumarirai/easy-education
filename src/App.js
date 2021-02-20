import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import {Contact} from "./components/Contact";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Aboutus from "./components/Aboutus";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/Aboutus" exact component={Aboutus} />
        <Route path="/Terms-and-Conditions" exact component={TermsAndConditions} />
        <Route path="/Privacy-policy" exact component={PrivacyPolicy} />
      </Switch>
    </Router>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
