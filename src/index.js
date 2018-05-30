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
import App from './App';
import Home from './pages/home/home.js';
import Navbar from './components/nav-bar/nav-bar.js';
import Footer from './components/footer/footer.js';
import History from './pages/history/history.js';
import Skills from './pages/skills/skills.js';
import Aintaword from './pages/games/aintaword.js';
import Dichotiball from './pages/games/dichotiball.js';
import Doorsquare from './pages/games/doorsquare.js';
import Work from './pages/work/work.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router> 
    <div className="body">
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/skills" component={Skills} />
        <Route path="/aintaword" component={Aintaword} />
        <Route path="/dichotiball" component={Dichotiball} />
        <Route path="/doorsquare" component={Doorsquare} />
        <Route path="/work" component={Work} />
        <Footer />

    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
