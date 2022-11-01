import {Dispatch} from '@reduxjs/toolkit'
import React from 'react'
import {connect} from 'react-redux'
import {CartState} from '../../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../../store/store'
import {ProductType} from '../../types/product.type'
import CartPropItem from './CartPropItem'

interface CartPopupProps {
  cart: CartState
  dispatch: AppDispatch
}
interface CartPopupState {
  total: number
}
class CartPopup extends React.Component<CartPopupProps, CartPopupState> {
  state = {
    total: 0,
  }

  render() {
    return (
      <div onClick={(e) => e.stopPropagation()} className={`cart-popup active`}>
        {/* EMPTY CART */}
        <div className={`cart-prop-details cart-popup-text ${'prop-cart-empty cart-popup-text'}`}>
          <h3>my bag,</h3>
          {this.props.cart.cart.length === 0 && <span>Cart is empty</span>}
        </div>

        {/* ITEMS */}
        <div className="cart-popup-box">
          {this.props.cart.cart.map((c: ProductType) => (
            <CartPropItem key={c._id} cartItem={c} />
          ))}
        </div>

        {/* TOTAL */}
        {this.props.cart.cart.length > 0 && (
          <div className="cart-popup-total">
            <h3>Total</h3>
            <span>{this.state.total.toFixed(2)}</span>
          </div>
        )}

        {/* BUTTONS */}
        {this.props.cart.cart.length > 0 && (
          <div className="cart-popup-buttons">
            <button onClick={() => {}}>view bag</button>
            <button onClick={() => {}}>check out</button>
          </div>
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(CartPopup)
