import React from 'react'
import {connect} from 'react-redux'
import {clearCart, handleCart} from '../../store/cart/cart.reducer'
import {CartState} from '../../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../../store/store'
import {ProductType} from '../../types/product.type'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'
import CartPopupItem from './CartPopupItem'

interface CartPopupProps extends WithRouterProps {
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
          {this.props.cart.cart.length === 0 ? (
            <h3>my bag, no items</h3>
          ) : (
            <h3>my bag, {this.props.cart.cart.length} item(s)</h3>
          )}
        </div>

        {/* ITEMS */}
        <div className="cart-popup-box">
          {this.props.cart.cart.map((c: ProductType) => (
            <CartPopupItem key={c._id} cartItem={c} />
          ))}
        </div>

        {/* TOTAL */}
        {this.props.cart.cart.length > 0 && (
          <div className="cart-popup-total">
            <h3>Total</h3>
            <span>{this.props.cart.total.toFixed(2)}</span>
          </div>
        )}

        {/* BUTTONS */}
        {this.props.cart.cart.length > 0 && (
          <div className="cart-popup-buttons">
            <button
              onClick={() => {
                this.props.dispatch(handleCart(false))
                this.props.router.navigate('/cart')
              }}
            >
              view bag
            </button>
            <button
              onClick={() => {
                this.props.dispatch(clearCart())
              }}
            >
              check out
            </button>
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

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(CartPopup))
