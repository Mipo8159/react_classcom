import React from 'react'
import {ReactComponent as BrandIcon} from 'assets/icons/brand.svg'
import {ReactComponent as CartIcon} from 'assets/icons/empty_cart.svg'
import {ReactComponent as TickIcon} from 'assets/icons/chevron.svg'

import CartPopup from '../cart/CartPopup'
import {Link} from 'react-router-dom'
import {RouteEnum} from '../../router'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="font-raleway navbar">
        <CartPopup />

        {/* LINKS */}
        <ul className="nav-links">
          <li onClick={() => {}} className={`nav-color`}>
            category
            <div className={`line nav-active`} />
          </li>
        </ul>

        {/* LOGO */}
        <div onClick={() => {}} className="brand-box">
          <Link to={RouteEnum.PRODUCTS}>
            <BrandIcon />
          </Link>
        </div>

        {/* CART / CURRENCY */}
        <div className="cart-box">
          <div onClick={(e) => {}} className="currency-box">
            <TickIcon className="tick" />
          </div>
          <div onClick={(e) => {}} className="cart-icon">
            <CartIcon />

            {/* {this.props.state.cart.cart.length > 0 && (
              <div className="cart-icon-circle">
                {this.props.state.cart.cart.length}
              </div>
            )} */}
          </div>
        </div>
      </nav>
    )
  }
}
