import React, {Component} from 'react'
import {connect} from 'react-redux'
import {WithRouter, WithRouterProps} from '../components/layout/WithRouter'
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

  render() {
    return (
      <div>
        <h1 className="page-title">categories {}</h1>
        <div className="hr-categories" />
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
