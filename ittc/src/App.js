import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/Leaders';
import AboutUs from './components/AboutUs';
import Plan from './components/Plan';
import Stay from './components/Stay';
import Expences from './components/Expences';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Plan} />
        <Route path="/home" exact component={Plan} />
        <Route path="/plan" exact component={AboutUs} />
        <Route path="/leaders" exact component={Leaders} />
        <Route path="/stay" exact component={Stay} />
        <Route path="/expances" exact component={Expences} />
        <Route path="/aboutus" exact component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
