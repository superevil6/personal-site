import React, { Component } from 'react';
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
            <span>Copyright {new Date().getFullYear()} - Alex Cassells</span>
        </div>
    );
  }
}


export default Footer;