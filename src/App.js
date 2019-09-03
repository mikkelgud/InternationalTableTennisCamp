import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/Leaders';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Travels from './components/Travels';
import Stays from './components/Stays';
import SignUp from './components/SignUp';
import PolandTravel from './components/PolandTravel';
import ChinaTravel from './components/ChinaTravel';
import NorwayTravel from './components/NorwayTravel'
import Safety from './components/Safety';
import Mikkel from './Leaders/Mikkel';
import Hilding from './Leaders/HildingPersson';
import Fen from './Leaders/LiFen';
// import Login from './components/Login';
import CampNorway from './components/CampNorway';
import NorwaySchedule from './components/NorwaySchedule';
import Maria from './Leaders/MariaXiao';
import Rules from './components/Rules';
// import CampChina from './components/CampChina';
// import CampPoland from './components/CampPoland';
import Pack from './components/PackMyBags';
import Social from './components/Social';
import FacilitiesNorway from './components/NorwayFacilities';
import NorwayPrices from './components/NorwayPrices';
import Footer from './components/Footer';
import Eskil from './Leaders/EskilLindholm';


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
        <Route path="/leaders/Maria-Xiao" exact component={Maria}/>
        <Route path="/leaders/Li-Fen" exact component={Fen}/>
        <Route path="/leaders/Eskil-Lindholm" exact component={Eskil}/>
        <Route path="/stay" exact component={Stays} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/travels" exact component={Travels}/>
        <Route path="/stay/China" exact component={ChinaTravel}/>
        <Route path="/stay/Poland" exact component={PolandTravel}/>
        <Route path="/stay/Norway" exact component={CampNorway}/>
        <Route path="/stay/Norway/social" exact component={Social}/>
        <Route path="/stay/Norway/schedule" exact component={NorwaySchedule}/>
        <Route path="/stay/rules" exact component={Rules}/>
        <Route path="/pack-my-bag-please" exact component={Home} />
        <Route path="/stay/Norway/pack-my-bag-please" exact component={Pack} />
        <Route path= "/stay/Norway/Facilities" exact component={FacilitiesNorway}/>
        <Route path= "/stay/Norway/Prices" exact component={NorwayPrices}/>
        {/* HomePageLinks  */}
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/safety" exact component={Safety}/>
        {/* Travels */}
        <Route path="/travels/Poland" exact component={PolandTravel}/>
        <Route path="/travels/China" exact component={ChinaTravel}/>
        <Route path="/travels/Norway" exact component={NorwayTravel}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
