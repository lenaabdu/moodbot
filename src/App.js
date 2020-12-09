import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./output.css";
import Home from "./components/Home"
import Header from "./components/Header";
import About from "./components/About"


const App = () => (
    <>

    <div className="container">

        <Router>
        <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>

        </Router>

    </div>
</>
)
export default App;
