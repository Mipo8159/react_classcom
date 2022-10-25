import React from 'react'
import {ProductType} from '../../types/product.type'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: ProductType[]
}
interface ProductListState {}

export default class ProductList extends React.Component<
  ProductListProps,
  ProductListState
> {
  render() {
    const {products} = this.props
    return (
      <div className="products">
        {products &&
          products.map((p: ProductType) => <ProductCard key={p._id} product={p} />)}
      </div>
    )
  }
}
