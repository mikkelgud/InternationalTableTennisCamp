import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Leaders from './components/generalnfoPages/Leaders';
import AboutUs from './components/generalnfoPages/AboutUs';
import Home from './components/generalnfoPages/Home';
import Stays from './components/Stays';
import SignUp from './components/generalnfoPages/SignUp';
import PolandTravel from './components/camps/polandCamp/PolandTravel';
import ChinaTravel from './components/camps/chinaCamp/ChinaTravel';
import NorwayTravel from './components/camps/norwayCamp/NorwayTravel'
import Safety from './components/generalnfoPages/Safety';
import Mikkel from './components/Leaders/Mikkel';
import Hilding from './components/Leaders/HildingPersson';
import Fen from './components/Leaders/LiFen';
// import Login from './components/Login';
import CampNorway from './components/camps/norwayCamp/CampNorway';
import NorwaySchedule from './components/camps/norwayCamp/NorwaySchedule';
import Maria from './components/Leaders/MariaXiao';
import Rules from './components/generalnfoPages/Rules';
// import CampChina from './components/CampChina';
// import CampPoland from './components/CampPoland';
import Pack from './components/camps/norwayCamp/NorwayPackMyBags';
import Social from './components/camps/norwayCamp/NorwaySocial';
import FacilitiesNorway from './components/camps/norwayCamp/NorwayFacilities';
import NorwayPrices from './components/camps/norwayCamp/NorwayPrices';
import Footer from './components/Footer';
import Eskil from './components/Leaders/EskilLindholm';
import Oscar from './components/Leaders/OscarPerman';
import CampTaiwan from './components/camps/taiwanCamp/CampTaiwan';
import TaiwanSchedule from './components/camps/taiwanCamp/TaiwanSchedule';
import TaiwanTravel from './components/camps/taiwanCamp/TaiwanTravel';
import TaiwanSocial from './components/camps/taiwanCamp/TaiwanSocial';
import TaiwanPrices from './components/camps/taiwanCamp/TaiwanPrices';
import TaiwanPackMyBags from './components/camps/taiwanCamp/TaiwanPackMyBags';
import TaiwanFacilities from './components/camps/taiwanCamp/TaiwanFacilities';
import styled from  'styled-components';


const Container = styled.div`
background-color: #ffffff;


`;

function App() {
  return (
    <div className="App">
      <Container>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />

         {/* HomePageLinks  */}
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/safety" exact component={Safety}/>
        <Route path="/aboutus" exact component={AboutUs} />        
        <Route path="/home" exact component={Home} />
        <Route path="/plan" exact component={AboutUs} />

        {/* leaders  */}
        <Route path="/leaders" exact component={Leaders} />
        <Route path="/leaders/Mikkel-Gudmundsen" exact component={Mikkel}/>
        <Route path="/leaders/Hilding-Persson" exact component={Hilding}/>
        <Route path="/leaders/Maria-Xiao" exact component={Maria}/>
        <Route path="/leaders/Li-Fen" exact component={Fen}/>
        <Route path="/leaders/Eskil-Lindholm" exact component={Eskil}/>
        <Route path="/leaders/Oscar-Perman" exact component={Oscar}/>

        {/* Travels */}
        <Route path="/stay/Poland/travel" exact component={PolandTravel}/>
        <Route path="/stay/China/travel" exact component={ChinaTravel}/>
        <Route path="/stay/Norway/travel" exact component={NorwayTravel}/>
        <Route path="/stay/Taiwan/travel" exact component={TaiwanTravel}/>
      

        {/* camps */}
        <Route path="/stay" exact component={Stays} />

        {/* camp Taiwan */}
        <Route path="/stay/Taiwan" exact component={CampTaiwan} />
        <Route path="/stay/Taiwan/schedule" exact component={TaiwanSchedule} />
        <Route path="/stay/Taiwan/social" exact component={TaiwanSocial} />
        <Route path="/stay/Taiwan/facilities" exact component={TaiwanFacilities} />
        <Route path="/stay/Taiwan/pack-my-bag-please" exact component={TaiwanPackMyBags} />
        <Route path="/stay/Taiwan/prices" exact component={TaiwanPrices} />
        

         {/* camp Norway */}
         <Route path="/stay/Norway" exact component={CampNorway}/>
        <Route path="/stay/Norway/social" exact component={Social}/>
        <Route path="/stay/Norway/schedule" exact component={NorwaySchedule}/>
        <Route path="/stay/rules" exact component={Rules}/>
        <Route path="/pack-my-bag-please" exact component={Home} />
        <Route path="/stay/Norway/pack-my-bag-please" exact component={Pack} />
        <Route path= "/stay/Norway/Facilities" exact component={FacilitiesNorway}/>
        <Route path= "/stay/Norway/Prices" exact component={NorwayPrices}/>
       

        {/* camp China */}
        <Route path="/stay/China" exact component={ChinaTravel}/>

        {/* //Camp Poland */}
        <Route path="/stay/Poland" exact component={PolandTravel}/>

       
      </Switch>
      <Footer/>
      </Container>
    </div>
  );
}

export default App;
