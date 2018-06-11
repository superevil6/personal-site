import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './mobile-nav.css';

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state ={
        showMenu : false,
        showSubNav : false
    }
  }
  toggleShow = () =>{
    this.setState({showMenu : !this.state.showMenu});
  }
  toggleSubNav = () =>{
    this.setState({showSubNav : !this.state.showSubNav});
  }
  render() {
    return (
        <div className="nav">
            <div onClick={ ()=> this.toggleShow()} className="nav_button">
                <i className="fas fa-bars"></i>
                <span>Menu</span>
            </div>
            <div className={this.state.showMenu? "menu_show" : "menu_hide"}>
                <ul>
                {this.props.navItems.map(item =>
                <Link key={item.title} to={item.link}>
                    <li className="nav_item" onClick={item.subMenu? ()=> this.toggleSubNav(): ()=> this.toggleShow()}>
                    <i className={"fa fa-" + item.icon}></i>
                    <span>{item.title}</span>
                    {item.subMenu ? 
                        <div className={this.state.showSubNav? "subnav_show" : "subnav_hidden"}>
                        <ul>
                            {item.subMenu.map(subMenuItem =>
                            <Link key={subMenuItem.title} to={subMenuItem.link}>
                                <li onClick={ ()=> this.toggleShow()}>{subMenuItem.title}</li>
                            </Link>
                            )}
                        </ul>
                        </div>
                    :
                    null
                    }
                    </li>
                </Link>
                )}
                </ul>
            </div>
        </div>
    );
  }
}


export default MobileNav;