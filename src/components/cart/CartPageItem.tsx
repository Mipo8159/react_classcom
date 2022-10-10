import {Dispatch} from '@reduxjs/toolkit'
import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ArrowIcon} from '../assets/icons/arrow.svg'

class CartPageItem extends React.Component {
  state = {
    image: 0,
  }

  render() {
    return (
      <div className="cart-item">
        {/* DETAILS */}
        <div className="details">
          {/* HEADER */}
          <div onClick={() => {}} className="cart-item-header">
            <h1>adidas</h1>
            <h3>boots</h3>
          </div>

          {/* PRICE */}
          <div className="details-price-box">
            <span className="cart-item-price">200$</span>
          </div>

          {/* GALLERY */}
          <div className="cart-gallery">
            {/* 2-ND LAYER */}
            <div className="prop-quantity cart-quantity">
              <button onClick={() => {}} className="prop-plus">
                +
              </button>
              <span className="prop-quantity-number">5</span>
              <button onClick={() => {}} className="prop-minus">
                -
              </button>
            </div>

            {/* 3-RD LAYER */}
            <div className="prop-img cart-item-image">
              <img onClick={() => {}} src="" alt="cart popup" />

              <button className="prop-remove" onClick={(e) => {}}>
                X
              </button>

              <div className="cart-item-callegy-buttons">
                <button onClick={(e) => {}}>
                  <ArrowIcon />
                </button>
                <button onClick={(e) => {}}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartPageItem
