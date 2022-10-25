import React from 'react'
import {CategoryType} from '../../types/category.type'
import {Link} from 'react-router-dom'

interface CategoryCardProps {
  category: CategoryType
}
interface CategoryCardState {}

class CategoryCard extends React.Component<CategoryCardProps, CategoryCardState> {
  render() {
    const {category} = this.props
    return (
      <Link to={`/categories/${category._id}`}>
        <div className="category-card">
          <img src={category.image.imgUrl} alt={category.title} />

          <div className="category-innerbox">
            <h3>{category.title}</h3>
            <p>{category.body}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default CategoryCard
