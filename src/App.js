import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import {Home} from "./components/Home/home";
import {Contact} from "./components/Contactus/Contact";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Sigin/Signin";
import TeacherSignup from "./components/Sigin/TeacherSignup/TeacherSignup";
import TeacherSignin from "./components/Signup/TeacherLogin/TeacherSignin"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Aboutus from "./components/Aboutus/Aboutus";
import TermsAndConditions from "./components/Privacy/TermsAndConditions";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Addcontent from "./components/AddContent/addcontent";

function App() {
  return (
    <div className="App" style={{backgroundColor: "#000000"}}>
    <NavBar />
    <Router>
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/addconent" component={Addcontent} />
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
