import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Components from "./pages/components/Components";
import About from "./pages/about/About";
import Release from "./pages/release/Release";
import Navbar from "./shared/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Utilities from "./pages/utilities/Utilities";
import Container from "./pages/sandbox/Container";
import { useEffect } from "react";
import Updates from "./pages/release/Updates";

const App = () => {

  useEffect(() => {
    const currentSiteUrl = location.origin;
    if (currentSiteUrl !== "http://localhost:5173") {
      if (currentSiteUrl !== "https://koffee.kevin.com.se") {
        console.log("Redirecting to new website...");
        window.location.href = "https://koffee.kevin.com.se";
      }
    }
    else {
      console.log(`Environment: local @ ${currentSiteUrl}`);
    }
  });

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

          <Route exact path={"/updates"}>
            <Updates />
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
