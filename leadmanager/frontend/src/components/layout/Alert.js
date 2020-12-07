import React,{ Component,Fragment } from 'react'
import {withAlert} from 'react-alert'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Alert extends Component{
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  }
  componentDidUpdate(prevProps){
    const {error,alert,message} = this.props
    if(error !== prevProps.error){
      if(error.message.name){
        alert.error(`Name: ${error.message.name.join()}`)
      }
      if(error.message.email){
        alert.error(`Email: ${error.message.email.join()}`)
      }
      if(error.message.message){
        alert.error(`Message: ${error.message.message.join()}`)
      }

      if(error.message.non_field_errors){
        alert.error(error.message.non_field_errors.join())
      }

      if(error.message.username){
        alert.error(`Username: ${error.message.username.join()}`)
      }

      if(error.message.password){
        alert.error(`Password: ${error.message.password.join()}`)
      }

    }

    if(message !== prevProps.message){
      if(message.addLead) alert.success(message.addLead)
    }
    if(message !== prevProps.message){
      if(message.deleteLead) alert.success(message.deleteLead)
    }
    if(message !== prevProps.message){
      if(message.passDoNotMatch) alert.error(message.passDoNotMatch)
    }
  }

  render(){
    return <Fragment/>
  }
}

const mapStateToProps = state => ({
  error:state.errors,
  message:state.messages
})

export default connect(mapStateToProps)(withAlert()(Alert))
