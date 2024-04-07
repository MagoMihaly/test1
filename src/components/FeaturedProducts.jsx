import React from 'react'
import {featuredProducts} from '../data'
import Card from 'react-bootstrap/Card';


export const FeaturedProducts = () => {
  return (
    <div className='container shadow mw800 bg-custom d-flex justify-content-evenly flex-wrap'> 
      {featuredProducts.map(prod => 
        <Card
          className="m-2 text-center"
          key={prod.id} 
          style={{ width: '18rem' }}
        >
        <Card.Body>
          <Card.Title className="text-primary">{prod.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={prod.thumbnail} />
      </Card>
      )}
    </div>
  )
}
