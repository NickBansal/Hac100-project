import React, { Component } from 'react';
import ProductNews from './ProductNews';
import './ProductNews.css'
import {
  Card,
  CardBody,
  CardColumns,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';
import ProductButton from './ProductButton';

class ProductList extends Component {

  state = {
    modal: false,
    nestedModal: false,
    closeAll: false
  }

  render() {
    const { products } = this.props;
    return (
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
                  <ProductButton productId={product._id} />
                </CardFooter>
              </Card>
            )
          })
        }
      </CardColumns>
    );
  }
}

export default ProductList;