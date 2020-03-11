import React, { Component } from 'react';
import {animateScroll} from 'react-scroll';
import { Link } from 'react-router-dom';
import './navbar.css';


class Navbar2 extends Component {

  constructor(props) {
    super(props);
    this.state ={
      showSubNav : false
    }
  }

  toggleSubNav = () =>{
    this.setState({showSubNav : !this.state.showSubNav});
  }
  render() {
    return (
        <div className="navbar">
          <ul>
            {this.props.navItems.map(item =>
              <Link key={item.title} to={item.link}>
                <li className="navbar_item" onClick={item.subMenu? ()=> this.toggleSubNav():null}>
                <i className={"fa fa-" + item.icon}></i>
                  {item.title}
                  {item.subMenu ? 
                    <div className={this.state.showSubNav? "subnav_show" : "subnav_hidden"}>
                      <ul>
                        {item.subMenu.map(subMenuItem =>
                          <Link key={subMenuItem.title} to={subMenuItem.link}>
                            <li>{subMenuItem.title}</li>
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
          <li className='navbar_item' onClick={ ()=> {animateScroll.scrollToBottom({containerID : 'chatbox'})}}>
            <i className="fa fa-comment"></i>
            <span>Chat</span>
          </li>
          </ul>
        </div>
    );
  }
}

export default Navbar2;
