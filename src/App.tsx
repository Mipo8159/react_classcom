import React from 'react'
import AppRouter from './router/AppRouter'
import './styles/main.scss'

class App extends React.Component {
  render() {
    return (
      <div
        onClick={() => {}}
        style={{
          height: '100vh',
          // overflowY: `${this.props.state.cart.isOpen ? 'hidden' : 'scroll'}`,
        }}
      >
        <AppRouter />
      </div>
    )
  }
}

export default App
