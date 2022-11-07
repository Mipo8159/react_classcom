import React, {Component} from 'react'
import {connect} from 'react-redux'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
import ProductList from '../components/product/ProductList'
import {getCategory} from '../store/category/category.action'
import {CategoryState} from '../store/category/types/category.state'
import {AppDispatch, AppState} from '../store/store'

interface CategoryDetailsProps extends WithRouterProps {
  category: CategoryState
  dispatch: AppDispatch
}
interface CategoryDetailsState {}

class CategoryDetails extends Component<CategoryDetailsProps, CategoryDetailsState> {
  componentDidMount(): void {
    this.props.dispatch(getCategory(this.props.router.params.id!))
  }

  renderProducts() {
    return <ProductList products={this.props.category.category.products} />
  }

  render() {
    return (
      <div className="category-details">
        <h1 className="page-title"> {this.props.category.category.title}</h1>
        <div className="hr-categories" />
        {this.renderProducts()}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  category: state.category,
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  dispatch,
})

// @ts-ignore
export default WithRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryDetails))
