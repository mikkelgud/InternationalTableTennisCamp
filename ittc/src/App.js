import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import VeiwPagerExportDiv from './components/ViewPagerExportationDiv';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/Leaders';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/leaders" exact component={Leaders} />
        <Route path="/home" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
