import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from './products'; // importing the content of the product.js file
import CardComp from './Card';  // Importing the card component from the file Card.js

const firstName = "Aya"; 

const App = () => {
  return (
    <Container className="mt-5">
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <br></br>
            <CardComp
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          </Col>
        ))}
      </Row>
      <br></br>
      <h1 className="text-center">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h1>
    </Container>
  );
};

export default App;

