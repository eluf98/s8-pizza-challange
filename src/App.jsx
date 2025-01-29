import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 


import OrderPizza from "./components/OrderPizza";
import Header from "./components/header";
import Home from "./components/Home";
import './App.css'
import Success from "./components/Success";
import Footer from "./components/Footer";
function App() {

  return (
    <Router>
      <Header/>

        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/OrderPizza" component={OrderPizza}/>
        <Route path="/Success" component={Success} />
       </Switch>
       <Footer />
      </Router>

      
  )
}

export default App