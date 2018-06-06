import React, { Component } from 'react';
import './description.css';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="description text-center">
            <div className="description_content">
            {this.props.videoembed? 
                <iframe src={this.props.videoembed} frameBorder="0" width="800px" height="350px" ></iframe> :
                null
                 }
                <h2>{this.props.tagline}</h2>
                <p>{this.props.description}</p>
                <div className="feature_list">
                    <ul>
                        {this.props.features && this.props.features.map(feature =>
                        <div className="feature">
                            <h5>{feature.title}</h5>
                            {feature.image &&
                            <img src={feature.image} />
                            }
                            <p>{feature.description}</p>
                        </div>    
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}


export default Description;