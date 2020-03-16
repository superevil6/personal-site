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
      this.setState({blogPosts : data});
    });    
  }
  render() {
    return (
        <div>
          {this.state.blogPosts &&
           this.state.blogPosts.map((blogPost, index) => {
             return(
              <div className="blog_post text-center">
                <div key={index} className="content">
                  <h2>{blogPost.title}</h2>
                  <h5>{blogPost.date}</h5>
                  <img src={require(`${blogPost.photo}`)} />
                  <br />
                  <span className="image_description">{blogPost.image_description}</span>
                  <p className="blog_content">{blogPost.content}</p>
                </div>
              </div>
              )}
            )})
        </div>
    );
  }
}


export default Blog;
