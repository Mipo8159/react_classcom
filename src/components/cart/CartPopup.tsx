import {Dispatch} from '@reduxjs/toolkit'
import React from 'react'

class CartPopup extends React.Component {
  state = {
    total: 0,
  }

  render() {
    return (
      <div onClick={(e) => e.stopPropagation()} className={`cart-popup active`}>
        {/* EMPTY CART */}
        <div
          className={`cart-prop-details cart-popup-text${'prop-cart-empty cart-popup-text '}`}
        >
          <h3>my bag,</h3>
          <span>5 items</span>
        </div>

        {/* ITEMS */}
        {/* <div className="cart-popup-box">
          {this.props.state.cart.cart.map((c) => (
            <CartPropItem key={c.mark} cartItem={c} />
          ))}
        </div> */}

        {/* TOTAL */}
        {/* {this.props.state.cart.cart.length > 0 && (
          <div className="cart-popup-total">
            <h3>Total</h3>
            <span>
              {this.state.total.toFixed(2)}
              {this.props.state.currency.curr.symbol}
            </span>
          </div>
        )} */}

        {/* BUTTONS */}
        {/* {this.props.state.cart.cart.length > 0 && (
          <div className="cart-popup-buttons">
            <button onClick={() => {}}>view bag</button>
            <button onClick={() => {}}>
              check out
            </button>
          </div>
        )} */}
      </div>
    )
  }
}

export default CartPopup
