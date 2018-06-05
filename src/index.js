import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import './index.css';
import Home from './pages/home/home.js';
import Navbar2 from './components/nav-bar/navbar2.js';
import MobileNav from './components/mobile-nav/mobile-nav.js';
import Footer from './components/footer/footer.js';
import History from './pages/history/history.js';
import Skills from './pages/skills/skills.js';
import Aintaword from './pages/games/aintaword.js';
import Dichotiball from './pages/games/dichotiball.js';
import Doorsquare from './pages/games/doorsquare.js';
import Work from './pages/work/work.js';
import Contact from './pages/contact/contact.js';

//images


import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
<Router>
    <div className="body">
        <Navbar2 navItems={
            [
              {"title":"Home", "link" : "home", "icon" : "home"},
              {"title":"Who I Am", "link" : "history", "icon" : "user"},
              {"title":"What I Do", "link" : "skills", "icon" : "laptop"},
              {"title":"Games", "link" : "#" , "icon" : "gamepad",
              subMenu : [
                {"title" : "DoorSquare", "link" : "doorsquare"},
                {"title" : "Aintaword", "link" : "aintaword"},
                {"title" : "Dichotiball", "link" : "dichotiball"}
              ]
            },
              {"title":"Work History", "link" : "work" , "icon" : "history"},
              {"title":"Contact Me", "link" : "contact" , "icon" : "phone"}
            ]
          } />
          <MobileNav navItems={
            [
              {"title":"Home", "link" : "home", "icon" : "home"},
              {"title":"Who I Am", "link" : "history", "icon" : "user"},
              {"title":"What I Do", "link" : "skills", "icon" : "laptop"},
              {"title":"Games", "link" : "#" , "icon" : "gamepad",
              subMenu : [
                {"title" : "DoorSquare", "link" : "doorsquare"},
                {"title" : "Aintaword", "link" : "aintaword"},
                {"title" : "Dichotiball", "link" : "dichotiball"}
              ]
            },
              {"title":"Work History", "link" : "work" , "icon" : "history"},
              {"title":"Contact Me", "link" : "contact" , "icon" : "phone"}
            ]
          } />
          <div className="subBody">
            <Redirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/skills" component={Skills} />
            <Route path="/aintaword" component={Aintaword} />
            <Route path="/dichotiball" component={Dichotiball} />
            <Route path="/doorsquare" component={Doorsquare} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />

            
          </div>
        
        <Footer />

    </div>
</Router>, document.getElementById('root'));
// registerServiceWorker();
unregister();
