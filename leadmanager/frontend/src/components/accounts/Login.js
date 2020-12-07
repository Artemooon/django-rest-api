import React, {Component} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../actions/auth'

export class Login extends Component{

  state = {
    username: '',
    password: '',
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    IsAuthenticated:PropTypes.bool
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username,this.state.password)
  }

  render(){

    if(this.props.IsAuthenticated){
      return <Redirect to = ""/>
    }

    const {username,password} = this.state


    return(
      <div className = "col-6 m-auto">
        <h2>Login</h2>
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <label>
            Username
            </label>
            <input type = "text" className = "form-control" name = "username"
            onChange = {this.onChange} value = {username}/>
          </div>
          <div className = "form-group">
            <label>
            Password
            </label>
            <input type = "password" className = "form-control" name = "password"
            onChange = {this.onChange} value = {password}/>
          </div>
          <div className = "form-group">
            <button className = "btn btn-primary" type = "submit">Login</button>
          </div>
          <p><Link to = "/register">I don't have an account</Link></p>
        </form>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  IsAuthenticated: state.auth.IsAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
