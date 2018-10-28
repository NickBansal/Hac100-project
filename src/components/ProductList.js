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
    const { products } = this.props;
    return (
      <div>
        <CardColumns>

          {
            products.map(product => {
              return (
                <Card key={product._id}>
                  <CardImg top width="100%"
                    src={product.imgUrl}
                    alt={product.name} />
                  <CardBody>
                    <CardTitle>
                      {product.name}
                    </CardTitle>
                    <CardSubtitle>
                      &pound;{product.price}
                    </CardSubtitle>
                    <CardText>
                      {product.description}
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary">
                      Don't Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              )
            })
          }
        </CardColumns>
      </div>
    );
  }
}

export default ProductList;