import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar2 from '../nav-bar/navbar2.js';
import MobileNav from '../mobile-nav/mobile-nav.js';
import ApexSymbol from './Apex.png';
import './header.css';

const menuItems = [
  {"title":"Home", "link" : "", "icon" : "home"},
  {"title":"Who I Am", "link" : "history", "icon" : "user"},
  {"title":"My Skills", "link" : "skills", "icon" : "laptop"},
  {"title":"Games", "link" : "#" , "icon" : "gamepad",
  subMenu : [
    {"title" : "DoorSquare", "link" : "doorsquare"},
    {"title" : "Aintaword", "link" : "aintaword"},
    {"title" : "Dichotiball", "link" : "dichotiball"},
    {"title" : "Colorful Splash", "link" : "colorfulSplash"}
  ]
},
  {"title":"Work History", "link" : "work" , "icon" : "history"},
  {"title":"Contact Me", "link" : "contact" , "icon" : "phone"}
];

class Header extends Component {

  constructor(props) {
    super(props);
    this.state ={

    }
  }
  render() {
    return (
        <div className="header" style={this.props.background && {"backgroundImage" : `url(${this.props.background})`}}>
            <Navbar2 navItems={menuItems}/>
            <MobileNav navItems={menuItems} />
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description} />
                {this.props.ogImage &&
                  <meta name="og:image" content={this.props.ogImage} />
                }
                {!this.props.ogImage &&
                  <meta name="og:image" content={ApexSymbol} />
                }

            </Helmet>
            <h1 
              style={{"paddingTop" : "80px", 
              "textShadow" : "1px 2px 2px black", 
              "backgroundRepeat" : this.props.backgroundRepeat, 
              "backgroundSize" : this.props.bSize}}>
              {this.props.title}
            </h1>
        </div>
    );
  }
}

export default Header;
