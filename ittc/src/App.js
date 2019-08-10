import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/Leaders';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home}/>
        <Route path="/leaders" exact component={Leaders} />
      </Switch>
    </div>
  );
}

export default App;
