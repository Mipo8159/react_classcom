import React, {Component} from 'react'
import ProductCard from './ProductCard'

export default class ProductList extends Component {
  render() {
    return (
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    )
  }
}
