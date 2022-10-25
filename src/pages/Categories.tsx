import React from 'react'
import {connect} from 'react-redux'
import CategoryList from '../components/category/CategoryList'
import {getCategories} from '../store/category/category.action'
import {CategoryState} from '../store/category/types/category.state'
import {AppDispatch, AppState} from '../store/store'

interface CategoriesProps {
  dispatch: AppDispatch
  category: CategoryState
}
interface CategoriesState {}

class Categories extends React.Component<CategoriesProps, CategoriesState> {
  componentDidMount(): void {
    this.props.dispatch(getCategories())
  }

  renderCategories() {
    return <CategoryList categories={this.props.category.categories} />
  }

  render() {
    return (
      <div>
        <h1 className="page-title">categories</h1>
        <div className="hr-categories" />

        {this.renderCategories()}
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
export default connect(mapStateToProps, mapDispatchToProps)(Categories)
