import React, { Component } from 'react';
import './blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="blog_post text-center">
            <div className="content">
                <h2>{this.props.title}</h2>
                <h3>{this.props.date}</h3>
                <img src={this.props.photo} />
                <p>{this.props.content}</p>
            </div>
        </div>
    );
  }
}


export default Blog;