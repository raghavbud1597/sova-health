import React, { useEffect } from "react";
import './style/App.scss';
import Home from './pages/Home';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import HowItWorks from './pages/HowItWorks';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 60,
      delay: 100,
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);


  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/howitworks">
            <HowItWorks />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
