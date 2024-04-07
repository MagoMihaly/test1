import React from 'react'
import { SingleProduct } from './SingleProduct'

export const Products = () => {
  return (
    <section className='container shadow'>
      <h3 className='p-3'>Our Products</h3>
      <div className='d-flex flex-wrap p-2'>
        <SingleProduct />
      </div>
    </section>
  )
}

