import React, {Component} from 'react'
import {CategoryType} from '../../types/category.type'
import CategoryCard from './CategoryCard'

interface CategoryListProps {
  categories: CategoryType[]
}
interface CategoryListState {}

class CategoryList extends Component<CategoryListProps, CategoryListState> {
  render() {
    const {categories} = this.props
    return (
      <div className="category">
        {categories &&
          categories.map((c: CategoryType) => (
            <CategoryCard key={c._id} category={c} />
          ))}
      </div>
    )
  }
}

export default CategoryList
