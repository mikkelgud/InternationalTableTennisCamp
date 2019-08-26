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
import PolandTravel from './components/PolandTravel';
import ChinaTravel from './components/ChinaTravel';
import Safety from './components/Safety';
import Mikkel from './leaders/Mikkel';
import Hilding from './leaders/HildingPersson';
import Fen from './leaders/LiFen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/plan" exact component={AboutUs} />
        <Route path="/leaders" exact component={Leaders} />
        <Route path="/leaders/Mikkel-Gudmundsen" exact component={Mikkel}/>
        <Route path="/leaders/Hilding-Persson" exact component={Hilding}/>
        <Route path="/leaders/Li-Fen" exact component={Fen}/>
        <Route path="/stay" exact component={Stays} />
        <Route path="/expances" exact component={Expences} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/travels" exact component={Travels}/>
        <Route path="/stay/China" exact component={Stay}/>
        <Route path="/stay/Poland" exact component={Stay}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/travels/Poland" exact component={PolandTravel}/>
        <Route path="/travels/China" exact component={ChinaTravel}/>
        <Route path="/safety" exact component={Safety}/>
      </Switch>
    </div>
  );
}

export default App;
