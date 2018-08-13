import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.css';


const customStyles = {
    content : {
      width                 : '85%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'black',
      display               : 'flex',
      flexFlow              : 'column',
    }
  };

class SiteModal extends Component {
  constructor(props) {
    super(props);
    this.state ={
     modalIsOpen : false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal(){
    this.subtitle.style.color = '#333333';
  }
  closeModal(){
      this.setState({modalIsOpen : false});

  }


  render() {
    return (
        <div>
            <button className="modal_button" onClick={this.openModal}>
            {this.props.buttonText}
            </button>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="">
                <div className="top_bar">
                    <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>
                    <a onClick={this.closeModal}><i className="fas fa-window-close"></i></a>
                </div>
                {this.props.form &&
                    this.props.form
                }
            </Modal>
        </div>
    );
  }
}


export default SiteModal;
