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
                <iframe src={this.props.videoembed}></iframe>
                <h2>{this.props.tagline}</h2>
                <p>{this.props.description}</p>
                <div className="feature_list">
                    <ul>
                        {this.props.features.map(feature =>
                        <div className="feature">
                            <h3>{feature.title}</h3>
                            <img src={feature.image} />
                            <p>{feature.description}</p>
                        </div>    
                        )}
                    </ul>
                </div>
                <div className="screenshots">
                    {this.props.images.map(image =>
                        <img src={image.source} />
                    )}
                </div>
            </div>


        </div>
    );
  }
}


export default Description;