// This file contains all of the 4 components

import { Card } from 'react-bootstrap';

const CardComp = ({ name, price, description, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{price}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardComp;
