import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import {
  Container,
  Col,
  Jumbotron,
  Row
} from 'reactstrap';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';

class App extends Component {

  state = {
    products: [
      {
        _id: "tv",
        name: "Samsung Smart TV",
        description: "sometext about the TV",
        price: 499.99,
        category: "electrical",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51qxxr9N2XL.jpg"
      },
      {
        _id: "coconut",
        name: "Coconut Oil",
        description: "Some text about coconut oil",
        price: 8.99,
        category: "grocery",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61hNyqGFlaL._SL1500_.jpg"
      }
    ]
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <header>
              <Jumbotron>
                <h1 className="display-3">Bad Basket</h1>
                <p className="lead">Your wallet friendly store</p>
              </Jumbotron>
              <Navigation />
            </header>
          </Col>
        </Row>
        <Row>
          <Col>
            <main>
              <Switch>
                <Route exact path="/"
                  render={({ match }) =>
                    <ProductList products={products} />
                  } /> />
            </Switch>
            </main>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>
              <p><a href="#top"><span role="img" aria-label="Back to top of page">⬆️</span></a></p>
              <p><small>&copy; Bad Basket</small></p>
            </footer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
