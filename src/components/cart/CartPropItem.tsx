import {Dispatch} from '@reduxjs/toolkit'
import React from 'react'
import {connect} from 'react-redux'
import {decrement, handleCart, increment, removeFromCart} from '../../store/cart/cart.reducer'
import {CartState} from '../../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../../store/store'
import {ProductType} from '../../types/product.type'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'

interface CartPropItemProps extends WithRouterProps {
  cartItem: ProductType
  cart: CartState
  dispatch: Dispatch
}

class CartPropItem extends React.Component<CartPropItemProps> {
  render() {
    return (
      <div className="cart-prop-item">
        <div className="cart-prop-details">
          {/* title */}
          <h3
            onClick={() => {
              this.props.dispatch(handleCart(false))
              this.props.router.navigate(`/product/${this.props.cartItem._id}`)
            }}
          ></h3>
          <span>100</span>
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
            this.props.router.navigate(`/product/${this.props.cartItem._id}`)
          }}
        >
          <img src={this.props.cartItem.gallery[0].imgUrl} alt="cart popup" />

          <button
            className="prop-remove"
            onClick={(e) => {
              e.stopPropagation()
              this.props.dispatch(removeFromCart(this.props.cartItem._id))
            }}
          >
            X
          </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(CartPropItem))
