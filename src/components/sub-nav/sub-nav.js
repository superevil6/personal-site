import React, { Component } from 'react';
import './sub-nav.css';

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="sub_nav">
            <ul>
                {this.props.items.items.map(item =>
                <a href={item.link}>
                    <li className="sub_nav_item">{item.name}</li>
                </a>
                )}
            </ul>
        </div>
    );
  }
}


export default SubNav;