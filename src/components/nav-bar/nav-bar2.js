import React, { Component } from 'react';
// import logo from './logo.svg';
import './nav-bar.css';
import { Link } from 'react-router-dom';

class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.toggleShow = this.toggleShow.bind(this);
    this.state = {

    };
  }
  toggleShow = (index) => {
    let newState = this.state;
    newState.menuItems[index].show = !newState.menuItems[index].show;
      this.setState(
        {this : newState}
      )
  }
  render() {
    return (
      <div className="navBar">
        <ul>
          {this.props.menuItems.map(item =>
            {item.subMenu? <Link key={item.name} to={item.link}> : <a key={item.name}>}
              <li>{item.name}</li>
            {item.subMenu ? </Link> : </a>}
          )}
        </ul>
      </div>
    );
  }
}


export default Navbar2;
