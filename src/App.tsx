import React from 'react'
import {connect} from 'react-redux'
import AppRouter from './router/AppRouter'
import {handleCart, setCartOnLoad} from './store/cart/cart.reducer'
import {CartState} from './store/cart/types/cart.state'
import {AppDispatch, AppState} from './store/store'
import {setWishlistOnLoad} from './store/wishlist/wishlist.reducer'
import './styles/main.scss'
import MessengerCustomerChat from 'react-messenger-customer-chat'

interface AppPropsInterface {
  cart: CartState
  dispatch: AppDispatch
}
interface AppStateInterface {}

class App extends React.Component<AppPropsInterface, AppStateInterface> {
  componentDidMount() {
    this.props.dispatch(
      setCartOnLoad(JSON.parse(localStorage.getItem('cart')!) ? JSON.parse(localStorage.getItem('cart')!) : [])
    )
    this.props.dispatch(
      setWishlistOnLoad(JSON.parse(localStorage.getItem('wish')!) ? JSON.parse(localStorage.getItem('wish')!) : [])
    )
  }

  render() {
    return (
      <div
        onClick={() => {
          this.props.dispatch(handleCart(false))
        }}
        style={{
          height: '100vh',
          overflowY: `${this.props.cart.isOpen ? 'hidden' : 'scroll'}`,
        }}
      >
        <AppRouter />

        {/* @ts-ignore */}
        <MessengerCustomerChat pageId="100066578245102" appId="502538522017862" />
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
