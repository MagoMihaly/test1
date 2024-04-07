import React from 'react'
import { FeaturedProducts } from './FeaturedProducts'

export const Home = () => {
  return (
    <section>
      <header>
        <h1 className='text-primary text-center p-2'>Welcome to our Online Store</h1>
        <p className='text-center text-secondary'>Discover our featured products and find the perfect items for you.</p>
      </header>
      <main>
        <h2 className='text-primary p-3 border-top'>Featured Products</h2>
        <FeaturedProducts />
      </main>
      <footer>
        <p className='text-secondary text-center border-top m-2'>2023 Our Online Store. All rights reserved.</p>
      </footer>
    </section>
  )
}

