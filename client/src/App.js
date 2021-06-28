
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import Available from "./pages/Available";
import React from "react";
import "./App.css";

    function App() {
      return (
        <>
          <NavBar/>
          <Container>
            <Switch>
              <Route exact path="/" component={Available}/>
              {/* <Route exact path="/categories" component={Categories} />
              <Route exact path="/products" component={FindProducts} /> */}
            </Switch>
          </Container>
        </>
      );
    }
    
    export default App;