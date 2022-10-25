import React from 'react'
import {ReactComponent as BrandIcon} from '../../assets/icons/brand.svg'
import {ReactComponent as CartIcon} from '../../assets/icons/empty_cart.svg'
import {ReactComponent as TickIcon} from '../../assets/icons/chevron.svg'
import {Link} from 'react-router-dom'
import {RouteEnum} from '../../router'
import {WithRouter, WithRouterProps} from '../layout/WithRouter'

interface NavbarProps extends WithRouterProps {}
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
        {/* <CartPopup /> */}

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

// @ts-ignore
export default WithRouter(Navbar)
