import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Components from "./pages/components/Components";
import About from "./pages/about/About";
import Release from "./pages/release/Release";
import Navbar from "./Navbar";

const App = () => {

  return (
    <>
      <Router>
        
        <Navbar/>

        <Switch>

          <Route exact path={"/"}>
            <Landing />
          </Route>

          <Route exact path={"/components"}>
            <Components />
          </Route>

          <Route exact path={"/release"}>
            <Release />
          </Route>
          
          <Route exact path={"/about"}>
            <About />
          </Route>

        </Switch>
      </Router>
    </>
  );
};

export default App;
