import React from 'react'

class ProductDetails extends React.Component {
  state = {
    image: 0,
    product: {},
  }

  render() {
    return (
      <div className="detailed-page">
        {this.state.product && (
          <div className="product-details">
            {/* GALLERY */}
            <div className="gallery">
              <div className="small-img-box">
                <div onClick={() => {}} className="small-img">
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
              <div onClick={() => {}} className={`details-cart`}>
                <button>add to cart / no stock</button>
              </div>

              {/* DESCRIPTION */}
              <div className="details-description">description</div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ProductDetails
