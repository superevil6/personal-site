import React, { Component } from 'react';
import fetch from 'node-fetch';
import './blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state ={
     blogPosts: []
    }
  }
  componentDidMount(){
    fetch('https://www.alexcassells.com/api/blogPosts')
    .then(results => {
      return results.json();
    }).then(data => {
      let blogPosts = data.map((blogPost, index) => {
        return(
            <div key={index} className="content">
              <h2>{blogPost.title}</h2>
              <h5>{blogPost.date}</h5>
              <img src={require(`${blogPost.photo}`)} />
              <br />
              <span className="image_description">{blogPost.image_description}</span>
              <p className="blog_content">{blogPost.content}</p>
            </div>
          )
      })
      this.setState({blogPosts : blogPosts});
    });    
  }
  render() {
    return (
        <div className="blog_post text-center">
          {this.state.blogPosts}
        </div>
    );
  }
}


export default Blog;
