import React, { Component } from 'react';
import List from '../../components/list/list.js';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="text-center">
            <h1>Contact Me</h1>
            <List width={ "20" } list={
                {items : [
                {"title" : "Telephone", "title" : "Telephone", "link" : "tel:+1-(913)-480-6401", "hyperlink" : "+1-(913)-480-6401", "icon" : "fa fa-phone"},
                {"title" : "Email", "link" : "mailto:apex.xp@gmail.com", "hyperlink" : "apex.xp@gmail.com", "icon" : "fa fa-envelope"},
            ]}
              } />
              <h2>Check out these links:</h2>
              <List width={ "20" } list={
                {items : [
                {"title" : "Github", "link" : "https://www.github.com/superevil6", "hyperlink" : "Github/superevil6", "description" : "Check out my projects", "icon" : "fab fa-github"},
                {"title" : "Steam", "description" : "Play games with me!", "link" : "https://steamcommunity.com/id/superevil6", "hyperlink" : "superevil6", "icon" : "fab fa-steam"},
                {"title" : "Linked In", "description" : "It's a new account, have mercy.", "link" : "www.linkedin.com/in/alex-cassells", "hyperlink" : "Link with me", "icon" : "fab fa-linkedin"},
                {"title" : "Appstore", "description" : "There's only one game on there. I need to renew the dev subscription.", "icon" : "fab fa-app-store-ios"},
                {"title" : "Google Play", "description" : "Yep, only DoorSquare. I hope to change that soon.", "link" : "https://play.google.com/store/apps/developer?id=Alex+Cassells", "hyperlink" : "Alex Cassells", "icon" : "fab fa-google-play"},



            ]}
              } />
        </div>
    );
  }
}


export default Contact;