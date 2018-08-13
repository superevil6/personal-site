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
          <a key={item.title} href={item.link} className={`list_item text-center ${ this.props.size}`}>
            <div>
              {item.icon && <i className={item.icon}></i>}
              <h3>{item.title}</h3>
              {item.image && <img alt={item.imageDescription} src={item.image} />}
              <br />
              {item.imageDescription && <span className="image_description">{item.imageDescription}</span>}
              <p>{item.description}</p>
            </div>
          </a>
        )}
      </div>
    );
  }
}

export default List;
