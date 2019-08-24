import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/Leaders';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Stay from './components/Stay';
import Expences from './components/Expences';
import Travels from './components/Travels';
import Stays from './components/Stays';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/plan" exact component={AboutUs} />
        <Route path="/leaders" exact component={Leaders} />
        <Route path="/stay" exact component={Stays} />
        <Route path="/expances" exact component={Expences} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/travels" exact component={Travels}/>
        <Route path="/stay/China" exact component={Stay}/>
        <Route path="/stay/Poland" exact component={Stay}/>
        <Route path="/signup" exact component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
