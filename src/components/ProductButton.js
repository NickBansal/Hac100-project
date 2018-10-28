import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import ProductNews from './ProductNews';

class ProductButton extends Component {

  state = {
    modal: false,
    nestedModal: false,
    closeAll: false
  }

  render() {

    const customStyles = {
      // top: '50%',
      // left: '50%',
      // right: 'auto',
      // bottom: 'auto',
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '800px',
      overflow: 'scroll'
    }
    return (
      <div>

        <Button onClick={this.toggle} color="primary">Don't buy now</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} style={customStyles}>
          <ModalHeader toggle={this.toggle}>Are you sure you want to buy this? - LOL</ModalHeader>
          <ModalBody>
            <ProductNews />

            <Button className="YesPlease" color="danger" onClick={this.toggleNested}>YES, please!</Button>

            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Like... are you proper sure? - LOL</ModalHeader>
              <ModalBody>Banging your head against a wall for an hour burns 150 calories</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            {!this.state.nestedModal && <Button color="danger" onClick={this.toggle} disabled>LOSER</Button>}{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll = () => {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
}

export default ProductButton;