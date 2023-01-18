import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CarView = (props) => {
    const {categorie, image, description} = props
    return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{categorie}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    );
}

export default CarView;
