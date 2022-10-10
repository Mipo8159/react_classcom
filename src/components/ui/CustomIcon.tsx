import React, {Component} from 'react'

interface CustomIconProps {
  logo: string
  alt: string
  css: string
}

class CustomIcon extends Component<CustomIconProps> {
  render() {
    return (
      <img src={this.props.logo} alt={this.props.alt} className={this.props.css} />
    )
  }
}

export default CustomIcon
