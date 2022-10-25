import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/product/product.actions'
import {ProductState} from '../store/product/types/product.state'
import {TbChevronDown} from 'react-icons/tb'
import {AppDispatch, AppState} from '../store/store'
import ProductList from '../components/product/ProductList'

interface ProductsProps {
  dispatch: AppDispatch
  product: ProductState
}
interface ProductsState {
  page: number
  limit: number
  select: boolean
}

class Products extends React.Component<ProductsProps, ProductsState> {
  state = {
    limit: 12,
    page: 1,
    select: false,
  }

  componentDidMount(): void {
    this.props.dispatch(
      getProducts({page: this.state.page, limit: this.state.limit})
    )
  }

  renderTopbar() {
    return (
      <>
        <h1 className="page-title">Products</h1>
        <div className="hr-products" />
        <div className="products-topbar">
          <input
            className="products-topbar-search"
            type="text"
            placeholder="Search . . ."
          />

          <div
            onClick={() => this.setState((prev) => ({select: !prev.select}))}
            className="products-select"
          >
            {this.state.limit} items
            {this.state.select && (
              <div className="products-select-bar">
                {[12, 16, 20, 24].map((opt) => (
                  <div onClick={() => this.setState({limit: opt})} key={opt}>
                    {opt} items
                  </div>
                ))}
              </div>
            )}
            <TbChevronDown className="products-select-icon" />
          </div>
        </div>
      </>
    )
  }
  renderProducts() {
    return <ProductList products={this.props.product.productPagination.products} />
  }

  render() {
    return (
      <div className="products-page">
        {this.renderTopbar()}
        {this.renderProducts()}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  product: state.product,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
