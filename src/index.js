import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import Helmet from 'react-helmet';
import './index.css';
import Home from './pages/home/home.js';
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

          <div className="subBody">
            <Route exact={true} path="/" component={Home}/>
            <Route path="/history" component={History} />
            <Route path="/skills" component={Skills} />
            <Route path="/aintaword" component={Aintaword} />
            <Route path="/dichotiball" component={Dichotiball} />
            <Route path="/doorsquare" component={Doorsquare} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            {/* <Redirect to="/" /> */}
          </div>
        <Footer />
    </div>
</Router>, document.getElementById('root'));
// registerServiceWorker();
unregister();
