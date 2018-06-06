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
                    <div key={item.title} style={{ width : this.props.width + "%"}} className="list_item text-center">
                        {item.icon?
                        <i className={item.icon}></i> :
                          null
                        }
                        <h3>{item.title}</h3>
                        {item.image? 
                          <img alt={item.imageDescription} src={item.image} /> :
                          null
                        }
                        {item.imageDescription? 
                          <span className="image_description">{item.imageDescription}</span>  : null }
                        {item.link? 
                          <a href={item.link}>{item.hyperlink}</a>
                            :
                          null
                        }
                        <p>{item.description}</p>
                    </div>
                )}
        </div>
    );
  }
}

export default List;