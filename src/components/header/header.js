import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ApexSymbol from './Apex.png';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state ={
     
    }
  }
  render() {
    return (
        <div>
            <Helmet>
                <title>{this.props.title}</title>
                <meta name="description" content={this.props.description} />
                {this.props.ogImage &&
                  <meta name="og:image" content={this.props.ogImage} />
                }
                {!this.props.ogImage &&
                  <meta name="og:image" content={ApexSymbol} />
                }
                
            </Helmet>
            <h1>{this.props.title}</h1>
        </div>
    );
  }
}

export default Header;