import React, { Component } from 'react';
import ProductNews from './ProductNews';
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class ProductList extends Component {
  
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
      width: '400px',
      height: '400px', 
      overflow: 'scroll' 
    }

    return (
      <div>
        <CardColumns>
          {/* for each product */}
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Product Name</CardTitle>
              <CardSubtitle>&pound;199.99</CardSubtitle>
              <CardText>Here's some info about this product</CardText>
            </CardBody>
            <CardFooter>
              <Button onClick={this.toggle} color="primary">Don't buy now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Product Name</CardTitle>
              <CardSubtitle>&pound;199.99</CardSubtitle>
              <CardText>Here's some info about this product</CardText>
            </CardBody>
            <CardFooter>
              <Button onClick={this.toggle} color="primary">Don't buy now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Product Name</CardTitle>
              <CardSubtitle>&pound;199.99</CardSubtitle>
              <CardText>Here's some info about this product</CardText>
            </CardBody>
            <CardFooter>
              <Button onClick={this.toggle} color="primary">Don't buy now</Button>
            </CardFooter>
          </Card>
        </CardColumns>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={customStyles}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <ProductNews />
            
            <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>

            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>Nested Modal title</ModalHeader>
              <ModalBody>Stuff and things</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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

export default ProductList;