import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import './gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
 
  render() {
    return (
        <div className="gallery text-center">
            {this.props.photos && 
            this.props.photos.map(photo =>
                <div key={photo.image}className="photo_container">
                    <ReactFancyBox className="photo" image={photo.image} caption={photo.description} />
                    <h6 className="image-description">{photo.description}</h6>
                </div>
                )    
            }
        </div>
    );
  }
}


export default Gallery;