import React from "react";
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

function Cards({title,description,image,value}) {
  
  return (
      
      <Card style={{ marginTop: '100px',width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
        <Rating name="read-only" value={value} readOnly />
      </Card.Body>
    </Card>
      
    
  );
}

export default Cards;