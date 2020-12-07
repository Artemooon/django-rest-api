import React, {Component} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {register} from '../../actions/auth'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {createMessage} from '../../actions/messages'

export class Register extends Component{

  static propTypes = {
    register: PropTypes.func.isRequired,
    IsAuthenticated:PropTypes.bool
  }

  state = {
    username: '',
    email:'',
    password: '',
    password2: '',
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    const {username, email,password, password2} = this.state
    if(password !== password2){
      this.props.createMessage({passDoNotMatch: "Passwords do not match"})
    }
    else{
        const newUser = {
          username,
          password,
          email,
        }
        this.props.register(newUser)
    }
  }

  render(){

    if(this.props.IsAuthenticated){
      return <Redirect to = "/"/>
    }

    const {username,email,password,password2} = this.state


    return(
      <div className = "col-6 m-auto">
        <h2>Register</h2>
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
            Email
            </label>
            <input type = "email" className = "form-control" name = "email"
            onChange = {this.onChange} value = {email}/>
          </div>
          <div className = "form-group">
            <label>
            Password
            </label>
            <input type = "password" className = "form-control" name = "password"
            onChange = {this.onChange} value = {password}/>
          </div>
          <div className = "form-group">
            <label>
            Confirm your password
            </label>
            <input type = "password" className = "form-control" name = "password2"
            onChange = {this.onChange} value = {password2}/>
          </div>
          <div className = "form-group">
            <button className = "btn btn-success" type = "submit">Create New Account</button>
          </div>
          <p><Link to = "/login">I already have an account</Link></p>
        </form>
      </div>

    )
  }

}


const mapStateToProps = state => ({
  IsAuthenticated: state.auth.IsAuthenticated
})


export default connect(mapStateToProps,{register,createMessage})(Register);
