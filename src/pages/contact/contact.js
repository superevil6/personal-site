import React, { Component } from 'react';
import List from '../../components/list/list.js';
import Header from '../../components/header/header.js';
import SiteModal from '../../components/modal/modal.js';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import './contact.css';

const ContactForm = () => (
  <Form render={({
    submitForm
  }) => (
    <div className="form">
      <form onSubmit={submitForm}>
        <div className="form_group">
          <label className="form_item">First Name:
            <Text field="firstName" placeholder='First Name' />
          </label>
          <label className="form_item">Last Name:
            <Text field="lastName" placeholder='Last Name' /> 
          </label>
        </div>
        <div className="form_group">
          <label className="form_item">Phone Number:
            <Text field="phoneNumber" placeholder="Phone Number to reach you by." />
          </label>
          <label className="form_item">Email:
            <Text field="email" placeholder="Email to reach you by." />
          </label>
        </div>
        <div className="form_group">
          <label className="form_item">Reason for contact:
            <TextArea field="reason" placeholder="Why are you interested in contacting me?" />
          </label>
        </div>
        <div className="form_group">
            <button className="submit_button" type="submit">Submit</button>
        </div>            
      </form>
    </div>
  )} />
)

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state ={

    };

  }
  
  render() {
    return (
        <div className="text-center">
            <Header title="Contact Me" description="Here are various ways to get in touch with me." />
            <SiteModal buttonText="Contact me" title="Contact me" form={ContactForm()} />
            {/* <List width={ "20" } list={
                {items : [
                {"title" : "Telephone", "title" : "Telephone", "link" : "tel:+1-(913)-480-6401", "hyperlink" : "+1-(913)-480-6401", "icon" : "fa fa-phone"},
                {"title" : "Email", "link" : "mailto:apex.xp@gmail.com", "hyperlink" : "apex.xp@gmail.com", "icon" : "fa fa-envelope"},
            ]}
              } /> */}
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