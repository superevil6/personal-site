import React, { Component } from 'react';
// import logo from './logo.svg';
import './nav-bar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleShow = this.toggleShow.bind(this);
    this.state = {
      menuItems  : [
        { "name" : "Home",
          "link" : "/home"},
        { "name" : "Who I am",
          "link" : "/history"},
        { "name" : "What I do",
          "link" : "/skills" },
        { "name" : "Games",
          "show": false,
          "subMenuItems" : [
            {"name" : "DoorSquare",
            "link" : "doorsquare"},
            {"name" : "AintaWord",
            "link" : "aintaword"},
            {"name" : "DichotiBall",
            "link" : "dichotiball"},
          ]
       },
        { "name" : "Work History",
          "link" : "/work" },
        { "name" : "Links",
          "show" : false,          
          "subMenuItems" : [
            {"name" : "GitHub",
            "link" : "https://github.com/superevil6"},
            {"name" : "AintaWord",
            "link" : "aintaword"},
            {"name" : "DichotiBall",
            "link" : "dichotiball"},
          ] },
      ],
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
        <ul className="navBar_list">
          {this.state.menuItems.map((menuItem, index) =>
            <li key={menuItem.name} onClick={()=> this.toggleShow(index)} className="navBar_button">
            {
              menuItem.link? 
              <Link to={menuItem.link}>{menuItem.name}</Link> : 
              <a  >{menuItem.name}</a>
            }              
              {
                menuItem.subMenuItems ? 
                <SubMenu {...menuItem} /> : null
              }
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const SubMenu = (menuItem) =>{
  return(
    <ul className={menuItem.show?"dropdown_active":"dropdown_inactive"}>
      {menuItem.subMenuItems.map(item =>
      <li key={item.name}>
        <Link to={item.link}>{item.name}</Link>
      </li> 
      )}
    </ul>
  )
}

export default Navbar;