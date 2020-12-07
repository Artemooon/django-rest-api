import React,{ Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addLead} from '../../actions/leads'

class Form extends Component{
  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  state = {
    name: '',
    email: '',
    message: '',

  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    const {name,email,message} = this.state
    const lead = {name:name,email:email,message:message}
    this.props.addLead(lead)
    this.setState({
      name:'',
      email:'',
      message:'',
    })
  }

  render(){
    const {name,email,message} = this.state
    return(
      <div>
        <h2>Add New Lead</h2>
        <form method = "POST" id = "myForm" onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <label>Name</label>
            <input className = "form-control" type = "text" name = "name" value = {name} onChange = {this.onChange}/>
          </div>
          <div className = "form-group">
            <label>Email</label>
            <input className = "form-control" type = "email" name = "email" value = {email} onChange = {this.onChange}/>
          </div>
          <div className = "form-group">
            <label>Message</label>
            <textarea className = "form-control" name = "message" value = {message} onChange = {this.onChange}></textarea>
          </div>
          <div className = "form-group">
            <button type = "submit" className = "btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect(null, {addLead})(Form);
