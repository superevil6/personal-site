import React, { Component } from 'react';
import List from '../../components/list/list.js';
import Header from '../../components/header/header.js';
import SiteModal from '../../components/modal/modal.js';
import ZapierForm from 'react-zapier-form';
import contactBackground from './park.jpg';
import './contact.css';

const ContactForm = () => (

<ZapierForm action='https://hooks.zapier.com/hooks/catch/3642109/gqpvyh/'>
   {({ error, loading, success }) => {
      return (
      <div className="form">
        {!success &&
          <div name="contactForm">
          <div className="form_group">
            <label className="form_item">First Name:
              <input type="text" name="firstName" placeholder='First Name' required={true} />
            </label>
            <label className="form_item">Last Name:
              <input type="text" name="lastName" placeholder='Last Name' />
            </label>
          </div>
          <div className="form_group">
            <label className="form_item">Phone Number:
              <input type="text" name="phoneNumber" placeholder="Phone Number to reach you by." />
            </label>
            <label className="form_item">Email:
              <input type="email" name="email" placeholder="Email to reach you by." required={true} />
            </label>
          </div>
          <div className="form_group">
            <label className="form_item">Reason for contact:
              <textarea name="reason" placeholder="Why are you interested in contacting me?" required={true} />
            </label>
          </div>
          <div className="form_group">
              <button className="submit_button" type="submit">Submit</button>
          </div>
        </div>
        }
      
        {loading && <div>Loading...</div>}
        {error && <div>Something went wrong. Please try again later.</div>}
        {success && <div>Thank you for contacting me!</div>}
      </div>
      )
   }}
</ZapierForm>
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
            <Header
            title="Contact Me"
            description="Here are various ways to get in touch with me."
            background={contactBackground}
            />
            <SiteModal buttonText="Contact me" title="Contact me" form={ContactForm()} />
            {/* <List width={ "20" } list={
                {items : [

            ]}
              } /> */}
              <h2>Check out these links:</h2>
              <List size={ "list_item_sm" } list={
                {items : [
                {"title" : "Telephone", "description" : "Please fill out a contact form and I'll call you!", "title" : "Telephone", "icon" : "fa fa-phone"},
                {"title" : "Github", "link" : "https://www.github.com/superevil6", "description" : "Check out my projects", "icon" : "fab fa-github"},
                {"title" : "Linked In", "description" : "It's a new account, have mercy.", "link" : "https://www.linkedin.com/in/alex-cassells", "icon" : "fab fa-linkedin"},
                {"title" : "Appstore", "description" : "There's only one game on there. I need to renew the dev subscription.", "icon" : "fab fa-app-store-ios"},
                {"title" : "Google Play", "description" : "Yep, only DoorSquare. I hope to change that soon.", "link" : "https://play.google.com/store/apps/developer?id=Alex+Cassells", "icon" : "fab fa-google-play"},
                {"title" : "Steam", "description" : "Play games with me!", "link" : "https://steamcommunity.com/id/superevil6", "icon" : "fab fa-steam"},
            ]}
              } />
        </div>
    );
  }
}


export default Contact;
