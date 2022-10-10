import React, {Component} from 'react'

class CartPopupItem extends Component {
  render() {
    return (
      <div className="cart-prop-item">
        {/* 1-ST LAYER */}
        <div className="cart-prop-details">
          {/* title */}
          <h3 onClick={() => {}}>item</h3>

          {/* prices */}
          <span>200$</span>
        </div>

        {/* 2-ND LAYER */}
        <div className="prop-quantity">
          <button className="prop-plus">+</button>
          <span className="prop-quantity-number">4</span>
          <button className="prop-minus">-</button>
        </div>

        {/* 3-RD LAYER */}
        <div className="prop-img" onClick={() => {}}>
          <img src={''} alt="cart popup" />

          <button
            className="prop-remove"
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            X
          </button>
        </div>
      </div>
    )
  }
}
export default CartPopupItem
