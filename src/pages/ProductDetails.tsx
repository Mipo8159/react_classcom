import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as CartIcon} from '../assets/icons/card_empty_cart.svg'
import {ReactComponent as HeartIcon} from '../assets/icons/heart.svg'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
import {getProduct} from '../store/product/product.actions'
import {ProductState} from '../store/product/types/product.state'
import {AppDispatch, AppState} from '../store/store'
import parse from 'html-react-parser'
import {addToWishlist} from '../store/wishlist/wishlist.reducer'
import {addToCart} from '../store/cart/cart.reducer'
import {FaStar} from 'react-icons/fa'
import {inStore} from '../utils/util'
import {CartState} from '../store/cart/types/cart.state'
import {WishlistState} from '../store/wishlist/types/wishlist.state'

interface ProductDetailsProps extends WithRouterProps {
  product: ProductState
  cart: CartState
  wishlist: WishlistState
  dispatch: AppDispatch
}
interface ProductDetailsState {
  image: number
}

class ProductDetails extends React.Component<ProductDetailsProps, ProductDetailsState> {
  state = {
    image: 0,
  }

  componentDidMount(): void {
    this.props.dispatch(getProduct(this.props.router.params.id!))
  }

  componentDidUpdate(prevProps: ProductDetailsProps, _: ProductDetailsState): void {
    if (prevProps.product.product._id !== this.props.router.params.id) {
      this.props.dispatch(getProduct(this.props.router.params.id!))
    }
  }

  render() {
    const {_id, title, rating, gallery, brand, price, description} = this.props.product.product

    return (
      <div className="detailed-page">
        <div className="product-details">
          {/* GALLERY */}
          <div className="gallery">
            <div className="small-img-box">
              {gallery &&
                gallery.map((g, idx) => (
                  <div
                    key={g._id}
                    onClick={() => this.setState({image: idx})}
                    className={`img-border small-img ${this.state.image === idx ? 'active-img-border' : ''}`}
                  >
                    <img src={g.imgUrl} alt="small gallery" />
                  </div>
                ))}
            </div>

            <div className="big-img-box img-border">
              <div className="big-img">
                <img src={gallery && gallery[this.state.image].imgUrl} alt="big gallery" />
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="details">
            {/* HEADER */}
            <div className="header">
              <h1>{brand}</h1>
              <h3>{title}</h3>
            </div>

            {/* PRICE */}
            <div className="details-price-box">
              <span className="details-price">{price}$</span>

              <div className="rating-box">
                {[...Array(5).keys()].map((s) => (
                  <div key={s} className={`mx-3 rating ${rating > s ? 'active' : ''}`}>
                    <FaStar />
                  </div>
                ))}
              </div>
            </div>

            {/* ADD TO CART */}
            <div className={`details-cart`}>
              <button
                onClick={() => this.props.dispatch(addToCart(this.props.product.product))}
                disabled={inStore(this.props.cart.cart, _id)}
                className={`${inStore(this.props.cart.cart, _id) ? 'disabled' : ''}`}
              >
                {inStore(this.props.cart.cart, _id) ? 'already in cart' : 'add to cart'}
                <div>
                  <CartIcon />
                </div>
              </button>
            </div>

            <div className={`details-wishlist`}>
              <button
                onClick={() => this.props.dispatch(addToWishlist(this.props.product.product))}
                disabled={inStore(this.props.wishlist.wish, _id)}
                className={`${inStore(this.props.wishlist.wish, _id) ? 'disabled' : ''}`}
              >
                {inStore(this.props.wishlist.wish, _id) ? 'already in wishlist' : 'add to wishlist'}
                <div>
                  <HeartIcon />
                </div>
              </button>
            </div>

            {/* DESCRIPTION */}
            <div className="details-description">{description && parse(description)}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  product: state.product,
  cart: state.cart,
  wishlist: state.wishlist,
})
const mapDispatachToProp = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default WithRouter(connect(mapStateToProps, mapDispatachToProp)(ProductDetails))
