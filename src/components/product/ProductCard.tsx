import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/icons/card_empty_cart.svg'
import {ReactComponent as HeartIcon} from '../../assets/icons/heart.svg'
import {ProductType} from '../../types/product.type'
import {Link} from 'react-router-dom'
import {AppDispatch, AppState} from '../../store/store'
import {connect} from 'react-redux'
import {WishlistState} from '../../store/wishlist/types/wishlist.state'
import {CartState} from '../../store/cart/types/cart.state'
import {addToWishlist} from '../../store/wishlist/wishlist.reducer'
import {addToCart} from '../../store/cart/cart.reducer'
import {inStore} from '../../utils/util'

interface ProductCardProps {
  product: ProductType
  wishlist: WishlistState
  cart: CartState
  dispatch: AppDispatch
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

        <Link to={`/products/${product._id}`}>
          <div>
            <p className="card-name">{product.title}</p>
            <span className="card-price">{product.price}$</span>
          </div>
        </Link>

        <div
          onClick={() => this.props.dispatch(addToWishlist(product))}
          className={`card-wishlist ${inStore(this.props.wishlist.wish, product._id) ? 'disabled' : ''}`}
        >
          <HeartIcon />
        </div>
        <div
          onClick={() => this.props.dispatch(addToCart(product))}
          className={`card-cart ${inStore(this.props.cart.cart, product._id) ? 'disabled' : ''}`}
        >
          <CartIcon />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
  wishlist: state.wishlist,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
