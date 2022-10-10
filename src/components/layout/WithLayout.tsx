import React, {Component} from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../ui/Navbar'

export default class WithLayout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
        </div>

        <div className="outlet">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
}
