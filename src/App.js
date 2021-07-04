import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import {Home} from "./components/home";
import {Contact} from "./components/Contact";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import TeacherSignup from "./components/TeacherSignup";
import TeacherSignin from "./components/TeacherSignin"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Aboutus from "./components/Aboutus";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
function App() {
  useEffect(() => {
    document.title = "Easy Education"
  }, [])
  return (
    <div className="App" style={{backgroundColor: "#000000"}}>
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route path="/Aboutus" exact component={Aboutus} />
        <Route path="/teacherSignup" exact component={TeacherSignup} />
        <Route path="/teacherSignin" exact component={TeacherSignin} />
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Signin" component={Signin}/>
        <Route path="/Terms-and-Conditions" exact component={TermsAndConditions} />
        <Route path="/Privacy-policy" exact component={PrivacyPolicy} />
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
