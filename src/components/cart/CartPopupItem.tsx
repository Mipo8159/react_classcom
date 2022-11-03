import {Dispatch} from '@reduxjs/toolkit'
import React from 'react'
import {connect} from 'react-redux'
import {decrement, handleCart, increment, removeFromCart} from '../../store/cart/cart.reducer'
import {CartState} from '../../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../../store/store'
import {ProductType} from '../../types/product.type'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'
import {FaTimes} from 'react-icons/fa'

interface CartPropItemProps extends WithRouterProps {
  cartItem: ProductType
  cart: CartState
  dispatch: Dispatch
}

class CartPopupItem extends React.Component<CartPropItemProps> {
  render() {
    return (
      <div className="cart-prop-item">
        <button
          className="prop-remove"
          onClick={(e) => {
            e.stopPropagation()
            this.props.dispatch(removeFromCart(this.props.cartItem._id))
          }}
        >
          <FaTimes />
        </button>

        <div className="cart-prop-details">
          {/* title */}
          <h3
            onClick={() => {
              this.props.dispatch(handleCart(false))
              this.props.router.navigate(`/products/${this.props.cartItem._id}`)
            }}
          >
            {this.props.cartItem.title}
          </h3>
          <p>{this.props.cartItem.body}$</p>
          <span> {this.props.cartItem.price}$</span>
        </div>

        <div className="prop-quantity">
          <button onClick={() => this.props.dispatch(increment(this.props.cartItem._id))} className="prop-plus">
            +
          </button>
          <span className="prop-quantity-number">{this.props.cartItem.quantity}</span>
          <button onClick={() => this.props.dispatch(decrement(this.props.cartItem._id))} className="prop-minus">
            -
          </button>
        </div>

        <div
          className="prop-img"
          onClick={() => {
            this.props.dispatch(handleCart(false))
            this.props.router.navigate(`/products/${this.props.cartItem._id}`)
          }}
        >
          <img src={this.props.cartItem.gallery[0].imgUrl} alt="cart popup" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(CartPopupItem))
