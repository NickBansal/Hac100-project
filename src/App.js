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
import ProductNews from './components/ProductNews';

class App extends Component {

  render() {

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
                    <ProductList />
                  } /> />
            </Switch>
            <ProductNews />
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
