import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import WithLayout from '../components/layout/WithLayout'
import Cart from '../pages/Cart'
import Categories from '../pages/Categories'
import CategoryDetails from '../pages/CategoryDetails'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import Wishlist from '../pages/Wishlist'

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route element={<WithLayout />}>
          <Route path="/" element={<Navigate replace to={'/products'} />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>

          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":id" element={<CategoryDetails />} />
          </Route>

          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<Navigate replace to={'/error'} />} />
        </Route>
      </Routes>
    )
  }
}
export default AppRouter
