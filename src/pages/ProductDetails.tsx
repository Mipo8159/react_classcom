import React from 'react'
import {ReactComponent as CartIcon} from '../assets/icons/card_empty_cart.svg'
import {ReactComponent as HeartIcon} from '../assets/icons/heart.svg'

class ProductDetails extends React.Component {
  state = {
    image: 0,
    product: {},
  }

  render() {
    return (
      <div className="detailed-page">
        <div className="product-details">
          {/* GALLERY */}
          <div className="gallery">
            <div className="small-img-box">
              <div className="small-img">
                <img src={''} alt="small gallery" />
              </div>
            </div>

            <div className="big-img-box">
              <div className="big-img">
                <img src={''} alt="big gallery" />
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="details">
            {/* HEADER */}
            <div className="header">
              <h1>brand</h1>
              <h3>name</h3>
            </div>

            {/* PRICE */}
            <div className="details-price-box">
              <h3 className="details-price-title">price:</h3>
              <span className="details-price">200$</span>
            </div>

            {/* ADD TO CART */}
            <div className={`details-cart`}>
              <button>
                add to cart
                <div>
                  <CartIcon />
                </div>
              </button>
            </div>

            <div className={`details-wishlist`}>
              <button>
                add to wishlist
                <div>
                  <HeartIcon />
                </div>
              </button>
            </div>

            {/* DESCRIPTION */}
            <div className="details-description">description</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
