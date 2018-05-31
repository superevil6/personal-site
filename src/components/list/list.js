import React, { Component } from 'react';
import './list.css';


class List extends Component {

  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
  render() {
    return (
        <div className="list">
                {this.props.list.items.map(item =>
                    <div key={item.title} style={{ width : this.props.width + "%"}} className="list_item">
                        <i className={"fa fa-" + item.icon}></i>
                        <h3>{item.title}</h3>
                        <img src={item.image} />
                        <p>{item.description}</p>
                    </div>
                )}
        </div>
    );
  }
}

export default List;