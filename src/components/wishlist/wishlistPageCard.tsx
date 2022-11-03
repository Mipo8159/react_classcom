import React from 'react'
import {connect} from 'react-redux'
import {CartState} from '../../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../../store/store'
import {ProductType} from '../../types/product.type'
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'
import {decrement, increment, removeFromCart} from '../../store/cart/cart.reducer'
import {FaStar, FaTimes} from 'react-icons/fa'
import {removeFromWishlist} from '../../store/wishlist/wishlist.reducer'

interface ProductDetailsProps extends WithRouterProps {
  wishlistItem: ProductType
  cart: CartState
  dispatch: AppDispatch
}
interface CartPageItemState {
  image: number
}

class WishlistPageCard extends React.Component<ProductDetailsProps, CartPageItemState> {
  state = {
    image: 0,
  }

  render() {
    const {brand, title, price, gallery, body, rating, categories} = this.props.wishlistItem
    return (
      <div className="cart-item">
        {/* HEADER */}
        <div onClick={() => {}} className="cart-item-header">
          <h1>{brand}</h1>
          <h3>{title}</h3>

          <span className="cart-item-price"> {price}$</span>
        </div>

        {/* BODY */}
        <div className="cart-item-body">
          <div className="rating-box">
            {[...Array(5).keys()].map((s) => (
              <div key={s} className={`mx-3 rating ${rating > s ? 'active' : ''}`}>
                <FaStar />
              </div>
            ))}
          </div>
          <p>{body}</p>
        </div>

        {/* GALLERY */}
        <div className="cart-gallery">
          {/* 3-RD LAYER */}
          <div className="prop-img cart-item-image">
            <img
              onClick={() => {
                this.props.router.navigate(`/products/${this.props.wishlistItem._id}`)
              }}
              src={gallery && gallery[this.state.image].imgUrl}
              alt="cart popup"
            />

            <button
              onClick={(e) => {
                e.stopPropagation()
                this.props.dispatch(removeFromWishlist(this.props.wishlistItem._id))
              }}
              className="cart-prop-remove"
            >
              <FaTimes />
            </button>

            <div className="cart-item-callegy-buttons">
              <button
                onClick={() =>
                  this.setState((prev: CartPageItemState) => ({
                    image: prev.image - 1 < 0 ? this.props.wishlistItem.gallery.length - 1 : prev.image - 1,
                  }))
                }
              >
                <ArrowIcon />
              </button>
              <button
                onClick={() =>
                  this.setState((prev: CartPageItemState) => ({
                    image: prev.image + 1 >= this.props.wishlistItem.gallery.length ? 0 : prev.image + 1,
                  }))
                }
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  product: state.product,
  cart: state.cart,
})
const mapDispatachToProp = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatachToProp)(WithRouter(WishlistPageCard))
