import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/Aboutus" exact component={Aboutus} />
      <Footer />
    </Router>
  );
}

export default App;
