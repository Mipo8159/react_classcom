import React from 'react'
import {connect} from 'react-redux'
import CartPageItem from '../components/cart/CartPageItem'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
import WishlistPageCard from '../components/wishlist/wishlistPageCard'
import {handleCart} from '../store/cart/cart.reducer'
import {CartState} from '../store/cart/types/cart.state'
import {AppDispatch, AppState} from '../store/store'
import {WishlistState} from '../store/wishlist/types/wishlist.state'

interface CartPropsInterface extends WithRouterProps {
  wishlist: WishlistState
  dispatch: AppDispatch
}
interface CartStateInterface {}
class Wishlist extends React.Component<CartPropsInterface, CartStateInterface> {
  render() {
    return (
      <div className="cart-page">
        {/* EMPTY CART */}
        {this.props.wishlist.wish.length === 0 && <div className="cart-empty">wishlist is empty</div>}

        <h1 className="cart-title">wishlist</h1>

        {/* ITEMS */}
        <div className="cart-items-map">
          {this.props.wishlist.wish.map((c) => (
            <WishlistPageCard key={c._id} wishlistItem={c} />
          ))}
        </div>

        {/* MOVE TO CART */}
        <div className="cart-popup-buttons cart-order">
          <button
            onClick={() => {
              this.props.dispatch(handleCart(false))
              this.props.router.navigate('/cart')
              window.scrollTo(0, 0)
            }}
          >
            Move to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  wishlist: state.wishlist,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(Wishlist))
