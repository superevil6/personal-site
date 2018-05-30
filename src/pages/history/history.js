import React, { Component } from 'react';
import SubNav from '../../components/sub-nav/sub-nav.js';
import List from '../../components/list/list.js';
import './history.css';

class History extends Component {
  constructor(props) {
    super(props);
    this.state ={
      events: [
        {"title" : "Upbringings",
        "description" : "Lorem ipsum dolor sit amet, ei unum mnesarchum complectitur pro, malorum mentitum consulatu no vim. Ullamcorper concludaturque ius in. Pri te iudico dolores, et splendide definiebas suscipiantur mea. Cum verear bonorum voluptaria ut, ea qui commodo evertitur definitionem."},
        {"title" : "College",
        "description" : "Lorem ipsum dolor sit amet, elitr appareat mel in, cu eligendi luptatum usu, sed soleat mentitum perpetua ne. Nec eius omnes verear no. Natum fabellas vel te, cu usu nisl dolorum consequuntur, tota offendit salutatus no his. Ut vel altera nostro, detraxit deserunt assueverit sit an."},
        {"title" : "Living Abroad",
        "description" : "No cum ubique graeco. In iudico gloriatur dissentias duo, vix no nulla tollit. Decore quaeque mel ut, at agam iusto comprehensam est. Mei dolorum honestatis at. Omnis partem philosophia ius ad, duis antiopam accommodare ius id. Mei at commodo temporibus liberavisse, ne mea reque oratio decore."},
        {"title" : "The Return",
        "description" : "Et pri dolor feugait, eu quo quod ipsum forensibus. His brute verterem praesent ut, verterem petentium eu usu. Cu sea quis tritani detracto. Id nusquam urbanitas vis, at assum deleniti facilisi est, sed no gloriatur definitiones."},
      ]
    }
  }
 
  render() {
    return (
        <div id="history" className="container text-center">
          <SubNav items={ {items : [{"name" : "My History", "link" : "#history"}, {"name" : "Hobbies", "link" : "#hobbies"}, {"name" : "Goals", "link" : "#goals"}]} } />
          <h1>The History of my Life</h1>
              <p>Content goes here</p>
              <div className="history_cards">
                {this.state.events.map(event =>
                  <div className="history_card">
                    <h3>{event.title}</h3>
                    <div>{event.description}</div>
                  </div>
                )} 
              </div>
              <h2 id="hobbies">Hobbies</h2>
              <List width={ "30" } list={
                {items : [
                {"title" : "Guitar", "description" : "I like to play the guiatar", "icon" : "music"},
                {"title" : "Video Games", "description" : "I beat Sonic the Hedgehog 2 when I was 3.", "icon" : "gamepad"},
                {"title" : "Art", "description" : "I absolutely love drawing, and animation as well. I used to make Flash cartoons.", "icon" : "paint-brush"},
                {"title" : "Movies", "description" : "I watch as many films as I can. I love great movies, and I love terrible movies. That being said, I'm not too big a fan of modern movies, they seem too cash grabby.", "icon" : "film"},
                {"title" : "Programming", "description" : "I like doing it, which is good because it's my job.", "icon" : "code"},
                {"title" : "Studying", "description" : "No, really. I love learning new things. Right now this mostly involves studying Programing and Japanese.", "icon" : "book"},

                ]}
              } />
              <h2 id="goals">Goals</h2>
              <List width={ "45" } list={
                  {items : [
                  {"title" : "Have a family!", "description" : "That sounds fun!"},
                  {"title" : "Learn how to create AI.", "description" : "It's not that I want to make SkyNet, I just feel a little compelled."},
                  {"title" : "Make More Games", "description" : "I've got a bunch of ideas, and given the time I think I can make some really good stuff."},
                  
                ]}
              } />
        </div>
    );
  }
}


export default History;