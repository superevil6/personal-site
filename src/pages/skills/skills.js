import React, { Component } from 'react';
import fetch from 'node-fetch';
import './skills.css';
import Header from '../../components/header/header.js';
import skillsBackground from './beach.jpg';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    };
  }

  render() {
    return (
        <div className="text-center">
          <Header 
          title="My Skills"
          titleColor = "black" 
          description="Yo yo yo, check out my skills." 
          background={skillsBackground}
          />
          <div className="container text-center">
            <div className="skill_holder">
              <Skill/>
            </div>
          </div>
        </div>
    );
  }

}
export default Skills;

class Skill extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewMore : null,
      skills: []
    };
    this.toggleShow = this.toggleShow.bind(this);

  }
  componentDidMount(){
    fetch('https://www.alexcassells.com/api/skills')
    .then(results => {
      return results.json();
    }).then(data => {
      let skills = data[0].array_to_json;
      this.setState({skills : skills});
    });    
  }
  toggleShow = (index) =>{
    this.setState( { viewMore : index, skills : this.state.skills } );
  }

render(){
  return(
    <div className="skill_holder">
      {this.state.skills && 
      this.state.skills.map((skill_set, index) => {
        return(
            <div key={index} className="skill">              
              <h2>{skill_set.skill_name}</h2>
              <div className="skill_bar">
                <div className="skill_bar_filling" style={{'width' : skill_set.width}}></div>
              </div>
              <button className="skillButton" onClick={() => this.toggleShow(index)}>View Summary</button>
                {skill_set.skills && 
                  <ul className={this.state.viewMore == index ? "show_summary":"hide_summary"}> 
                    {skill_set.skills.map((skill, index) =>
                      <li key={index}>{skill}</li>
                    )}
                  </ul> 
              } 
            </div>
          )})      
      }
    </div>
    );
  };
}