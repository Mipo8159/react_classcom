import React from 'react'
import {ReactComponent as BrandIcon} from '../../assets/icons/brand.svg'
import {ReactComponent as CartIcon} from '../../assets/icons/empty_cart.svg'
import {ReactComponent as HeartIcon} from '../../assets/icons/heart.svg'
import {ReactComponent as TickIcon} from '../../assets/icons/chevron.svg'
import {Link} from 'react-router-dom'
import {RouteEnum} from '../../router'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'
import {AppDispatch, AppState} from '../../store/store'
import {connect} from 'react-redux'
import {WishlistState} from '../../store/wishlist/types/wishlist.state'
import {CartState} from '../../store/cart/types/cart.state'
import CartPopup from '../cart/CartPopup'
import {handleCart} from '../../store/cart/cart.reducer'

interface NavbarProps extends WithRouterProps {
  wishlist: WishlistState
  cart: CartState
  dispatch: AppDispatch
}
interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  getColor(link: string, type: number) {
    if (this.props.router.location.pathname.split('/')[1] === link) {
      if (type == 1) {
        return 'nav-active'
      } else {
        return 'nav-color'
      }
    }
    return ''
  }

  render() {
    return (
      <nav className="font-raleway navbar">
        {this.props.cart.isOpen && <CartPopup />}

        {/* LINKS */}
        <ul className="nav-links">
          <Link to={'/products'}>
            <li onClick={() => {}} className={`${this.getColor('products', 0)}`}>
              products
              <div className={`line ${this.getColor('products', 1)}`} />
            </li>
          </Link>

          <Link to={'/categories'}>
            <li onClick={() => {}} className={`${this.getColor('categories', 0)}`}>
              categories
              <div className={`line ${this.getColor('categories', 1)}`} />
            </li>
          </Link>
        </ul>

        {/* LOGO */}
        <div onClick={() => {}} className="brand-box">
          <Link to={RouteEnum.PRODUCTS}>
            <BrandIcon />
          </Link>
        </div>

        {/* CART / WISHLIST */}
        <div className="side_part">
          <div className="wishlist-box">
            <HeartIcon />
            {this.props.wishlist.wish.length > 0 && <div className="icon-circle">{this.props.wishlist.wish.length}</div>}
          </div>

          <div
            onClick={() => {
              this.props.dispatch(handleCart(!this.props.cart.isOpen))
            }}
            className="cart-box"
          >
            <CartIcon />
            <TickIcon className="tick" />
            {this.props.cart.cart.length > 0 && (
              <div className="icon-circle icon-circle-2">{this.props.cart.cart.length}</div>
            )}
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  cart: state.cart,
  wishlist: state.wishlist,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(Navbar))
