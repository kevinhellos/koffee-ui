import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Components from "./pages/components/Components";
import About from "./pages/about/About";
import Release from "./pages/release/Release";
import Navbar from "./shared/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Utilities from "./pages/utilities/Utilities";
import Container from "./pages/sandbox/Container";
// import { useEffect } from "react";

const App = () => {

  return (
    <>
      <Router>
        
        <Navbar/>

        <Switch>

          <Route exact path={"/"}>
            <Landing />
          </Route>

          <Route exact path={"/explore/components"}>
            <Components />
          </Route>

          <Route exact path={"/explore/utilities"}>
            <Utilities />
          </Route>

          <Route exact path={"/release"}>
            <Release />
          </Route>
          
          <Route exact path={"/about"}>
            <About />
          </Route>

          <Route exact path={"/sandbox/container"}>
            <Container />
          </Route>

          <Route exact path={"*"}>
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </>
  );
};

export default App;
