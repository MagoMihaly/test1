import React from 'react';
import { products } from '../data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const SingleProduct = () => {
  return (
    <div className='d-flex flex-wrap gap-3'>
      {products.map(prod =>
        <Card
          key={prod.id}
          style={{ width: '18rem'}}>
          <Card.Img variant="top" src={prod.thumbnail} className='img-fluid'/>
          <Card.Body>
            <Card.Title className="text-center">{prod.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{prod.category}</Card.Subtitle>
            <Card.Text>
              {prod.description}
            </Card.Text>
            <p className='text-end'>Price : ${prod.price} </p>
            <Button className='btn btn-primary w-100'>Add to cart</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}
