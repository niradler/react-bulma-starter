import React from 'react'
import Image from 'react-graceful-image'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <a className="navbar-item">
            <Image
              style={{
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                marginRight: 15
              }}
              src=""
              width="30px" alt="" />
            <span>Username</span>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
          <NavLink to="/" className="navbar-item">Home</NavLink>
          <NavLink to="/about" className="navbar-item">About</NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                dropdown
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  1
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  2
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" >
                  3
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="">
              right
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header