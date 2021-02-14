import React, { Component } from 'react';
import NavBar from "./navbar";
import Footer from "./Footer";

// Home component shows the home screen even if the user has not logged in to the account. It will display some basic content
// of the website that is accessible to everyone (without login). It will have a Navbar & Footer.
class Home extends Component {
    render() {
        return (
            <>
            <NavBar />

            <Footer />

            </>
        )
    }
}

export default Home;