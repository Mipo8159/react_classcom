import React from 'react'
import {connect} from 'react-redux'
import {getProducts, searchProducts} from '../store/product/product.actions'
import {ProductState} from '../store/product/types/product.state'
import {TbChevronDown} from 'react-icons/tb'
import {AppDispatch, AppState} from '../store/store'
import ProductList from '../components/product/ProductList'
import {Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

interface ProductsProps {
  dispatch: AppDispatch
  product: ProductState
}
interface ProductsState {
  page: number
  limit: number
  select: boolean
  search: string
}

class Products extends React.Component<ProductsProps, ProductsState> {
  state = {
    limit: 8,
    page: 1,
    select: false,
    search: '',
  }

  componentDidMount(): void {
    this.props.dispatch(getProducts({page: this.state.page, limit: this.state.limit}))
  }

  componentDidUpdate(_: ProductsProps, prevState: ProductsState): void {
    if (prevState.search !== this.state.search) {
      this.props.dispatch(searchProducts(this.state.search))
    }
    if (prevState.limit !== this.state.limit) {
      this.props.dispatch(getProducts({page: this.state.page, limit: this.state.limit}))
    }
    if (prevState.page !== this.state.page) {
      this.props.dispatch(getProducts({page: this.state.page, limit: this.state.limit}))
    }
  }

  renderTopbar() {
    return (
      <>
        <h1 className="page-title">Products</h1>
        <div className="hr-products" />
        <div className="products-topbar">
          <div className="products-topbar-search">
            <input
              type="text"
              value={this.state.search}
              onChange={(e) => {
                this.setState({search: e.target.value})
              }}
              placeholder="Search . ."
            />

            {this.state.search && this.props.product.searchProducts.length > 0 && (
              <div className="search-items-box">
                {this.props.product.searchProducts.map((p) => (
                  <Link to={`/products/${p._id}`}>
                    <div key={p._id} className="search-item">
                      <div>
                        <h3>{p.title}</h3>
                        <span>{p.price}$</span>
                      </div>

                      <img className="product-img" src={p.gallery[0].imgUrl} alt="product icon" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div onClick={() => this.setState((prev) => ({select: !prev.select}))} className="products-select">
            {this.state.limit} items
            {this.state.select && (
              <div className="products-select-bar">
                {[4, 8, 12, 16].map((opt) => (
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

  renderPagination() {
    return (
      <div className="pagination">
        <button
          onClick={() => this.setState((prev) => ({page: prev.page - 1}))}
          disabled={this.state.page === 1}
          className="pagination-item"
        >
          <FiChevronLeft />
        </button>
        {this.props.product.productPagination.meta &&
          [...Array(this.props.product.productPagination.meta.lastPage).keys()].map((item) => (
            <div
              onClick={() => this.setState({page: item + 1})}
              key={item + 1}
              className={`pagination-item ${this.state.page === item + 1 ? 'page-active' : ''}`}
            >
              {item + 1}
            </div>
          ))}

        <button
          onClick={() => this.setState((prev) => ({page: prev.page + 1}))}
          disabled={
            this.props.product.productPagination.meta &&
            this.state.page === this.props.product.productPagination.meta.lastPage
          }
          className="pagination-item"
        >
          <FiChevronRight />
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="products-page">
        {this.renderTopbar()}
        {this.renderProducts()}
        {this.renderPagination()}
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
