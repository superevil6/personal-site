import React, { Component } from 'react';
import XMPP from '../xmpp/XMPP.js';
// import Converse from '../converse/converse-component';
import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="footer text-center">
          <div id='chatbox'>
          <h2>Chatbox</h2>
              <XMPP 
                chatName='Alex Chat!'
                server="https://conference.alexcassells.com:5281/http-bind"
                domain='alexcassells.com'
                MUC='conference.alexcassells.com' 
                mainColor='#000000' 
                secondaryColor='#00FF00' 
                textColor='#FFFFFF'
                width='100%'
                />
            <span>Copyright {new Date().getFullYear()} - Alex Cassells</span>
          </div>
        </div>
    );
  }
}


export default Footer;