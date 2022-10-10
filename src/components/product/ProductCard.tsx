import React, {Component} from 'react'
import {ReactComponent as CartIcon} from 'assets/icons/card_empty_cart.svg'

class ProductCard extends Component {
  render() {
    return (
      <div className={`card out-stock-div`}>
        <div className="card-image-box">
          <div className="card-image-box-inner" onClick={() => {}}>
            <div className="card-layer" />
            <img className="card-image" src={''} alt="product" />

            <h3 className="out-of-stock">out of stock</h3>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
            className={`card-cart`}
          >
            <CartIcon />
          </div>
        </div>

        {/* PRICE */}
        <div>
          <p className="card-name">brand</p>
          <span className="card-price">200$</span>
        </div>
      </div>
    )
  }
}
export default ProductCard
