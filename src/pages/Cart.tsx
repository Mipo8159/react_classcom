import React from 'react'
import {connect} from 'react-redux'
import CartPageItem from '../components/cart/CartPageItem'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
import {handleCart} from '../store/cart/cart.reducer'
import {CartState} from '../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../store/store'

interface CartPropsInterface extends WithRouterProps {
  cart: CartState
  dispatch: AppDispatch
}
interface CartStateInterface {
  tax: number
  totalQuantity: number
}
class Cart extends React.Component<CartPropsInterface, CartStateInterface> {
  state = {
    tax: 0,
    totalQuantity: 0,
  }

  componentDidMount(): void {
    this.setState({
      totalQuantity: this.props.cart.cart.reduce((acc, item) => {
        return acc + item.quantity
      }, 0),
      tax: (this.props.cart.total * 21) / 100,
    })
  }

  componentDidUpdate(prevProps: Readonly<CartPropsInterface>, _: Readonly<CartStateInterface>): void {
    if (prevProps.cart.total !== this.props.cart.total) {
      this.setState({
        totalQuantity: this.props.cart.cart.reduce((acc, item) => {
          return acc + item.quantity
        }, 0),
        tax: (this.props.cart.total * 21) / 100,
      })
    }
  }
  render() {
    return (
      <div className="cart-page">
        {/* EMPTY CART */}
        {this.props.cart.cart.length === 0 && <div className="cart-empty">cart is empty</div>}

        <h1 className="cart-title">cart</h1>

        {/* ITEMS */}
        <div className="cart-items-map">
          {this.props.cart.cart.map((c) => (
            <CartPageItem key={c._id} cartItem={c} />
          ))}
        </div>

        {/* ORDER DETAILS */}
        <div className="cart-order-details">
          <div>
            <span>Tax 21%:</span>
            <span>Quantity:</span>
            <span>Total:</span>
          </div>

          <div>
            <h3>{this.state.tax.toFixed(2)}$</h3>
            <h3>
              {this.props.cart.cart.reduce((acc, item) => {
                return acc + item.quantity
              }, 0)}
            </h3>
            <h3>{this.state.totalQuantity + this.state.tax}$</h3>
          </div>
        </div>

        {/* ORDER */}
        <div className="cart-popup-buttons cart-order">
          <button
            onClick={() => {
              this.props.dispatch(handleCart(false))
              this.props.router.navigate('/')
              window.scrollTo(0, 0)
            }}
          >
            order
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
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(Cart))
