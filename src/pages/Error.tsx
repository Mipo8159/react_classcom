import React from 'react'
import {Link} from 'react-router-dom'
import CustomIcon from '../components/ui/CustomIcon'
import img from '../assets/icons/not-found.svg'

class Error extends React.Component {
  render() {
    return (
      <section className="full-page">
        <div>
          <CustomIcon logo={img} alt={'not found'} css={''} />

          <h3>Ohh! Page Not Found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">back home</Link>
        </div>
      </section>
    )
  }
}

export default Error
