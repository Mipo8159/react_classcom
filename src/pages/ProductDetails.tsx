import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as CartIcon} from '../assets/icons/card_empty_cart.svg'
import {ReactComponent as HeartIcon} from '../assets/icons/heart.svg'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
import {getProduct} from '../store/product/product.actions'
import {ProductState} from '../store/product/types/product.state'
import {AppDispatch, AppState} from '../store/store'
import {ProductType} from '../types/product.type'
import parse from 'html-react-parser'

interface ProductDetailsProps extends WithRouterProps {
  product: ProductState
  dispatch: AppDispatch
}
interface ProductDetailsState {
  image: number
  product: ProductType
}

class ProductDetails extends React.Component<ProductDetailsProps, ProductDetailsState> {
  state = {
    image: 0,
    product: {} as ProductType,
  }

  componentDidMount(): void {
    this.props.dispatch(getProduct(this.props.router.params.id!))
  }

  render() {
    const {title, rating, gallery, brand, price, description} = this.props.product.product

    return (
      <div className="detailed-page">
        <div className="product-details">
          {/* GALLERY */}
          <div className="gallery">
            <div className="small-img-box">
              {gallery &&
                gallery.map((g, idx) => (
                  <div
                    key={g._id}
                    onClick={() => this.setState({image: idx})}
                    className={`img-border small-img ${this.state.image === idx ? 'active-img-border' : ''}`}
                  >
                    <img src={g.imgUrl} alt="small gallery" />
                  </div>
                ))}
            </div>

            <div className="big-img-box img-border">
              <div className="big-img">
                <img src={gallery && gallery[this.state.image].imgUrl} alt="big gallery" />
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="details">
            {/* HEADER */}
            <div className="header">
              <h1>{brand}</h1>
              <h3>{title}</h3>
            </div>

            {/* PRICE */}
            <div className="details-price-box">
              <h3 className="details-price-title">price:</h3>
              <span className="details-price">{price}$</span>
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
            <div className="details-description">{description && parse(description)}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  product: state.product,
})
const mapDispatachToProp = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default WithRouter(connect(mapStateToProps, mapDispatachToProp)(ProductDetails))
