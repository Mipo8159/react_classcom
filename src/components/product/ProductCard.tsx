import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/icons/card_empty_cart.svg'
import {ReactComponent as HeartIcon} from '../../assets/icons/heart.svg'
import {ProductType} from '../../types/product.type'
import {Link} from 'react-router-dom'

interface ProductCardProps {
  product: ProductType
}
interface ProductCardState {}

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  render() {
    const {product} = this.props
    const [cover] = product.gallery

    return (
      <div className="card">
        <Link to={`/products/${product._id}`}>
          <div className="card-image-box">
            <div className="card-layer" />
            <img className="card-image" src={cover.imgUrl} alt="product" />
          </div>
        </Link>

        <Link to={`products/${product._id}`}>
          <div>
            <p className="card-name">brand {product.brand}</p>
            <span className="card-price">{product.price}$</span>
          </div>
        </Link>

        <div className={`card-wishlist`}>
          <HeartIcon />
        </div>
        <div className={`card-cart`}>
          <CartIcon />
        </div>
      </div>
    )
  }
}
export default ProductCard
