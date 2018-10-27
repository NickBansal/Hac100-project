import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';

class ProductList extends Component {
  render() {
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
              <Button color="primary">Don't buy now</Button>
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
              <Button color="primary">Don't buy now</Button>
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
              <Button color="primary">Don't buy now</Button>
            </CardFooter>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default ProductList;