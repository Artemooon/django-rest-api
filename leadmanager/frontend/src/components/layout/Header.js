import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logoutUser} from '../../actions/auth'

class Header extends Component{

  static propTypes = {
    auth:PropTypes.object.isRequired,
    logoutUser:PropTypes.func.isRequired,
  }

  render(){

    const {IsAuthenticated, user} = this.props.auth

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className = "mt-1 mr-3">{user ?`Hello, ${user.username}` : ""}</span>
        <button className = "nav-item btn btn-danger btn-sm" onClick = {this.props.logoutUser}>Logout</button>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className = "nav-item"><Link className = "nav-link" to = "/login">Login</Link></li>
        <li className = "nav-item"><Link className = "nav-link" to = "/register">Register</Link></li>
      </ul>
    )

    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className = "container">
<a className="navbar-brand" href="">Lead Manager</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  {IsAuthenticated ? authLinks : guestLinks}
</div>
</div>
</nav>
    )
  }
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps, {logoutUser})(Header)
