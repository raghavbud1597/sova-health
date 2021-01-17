
import './style/App.scss';
import Home from './pages/Home';
import Footer from './common/Footer';
import NavBar from './common/NavBar';
import HowItWorks from './pages/HowItWorks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
