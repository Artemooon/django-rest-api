import axios from 'axios'
import {createMessage,returnErrors} from './messages'
import {tokenConfig} from './auth'

import {GET_LEADS,DELETE_LEAD, CREATE_LEAD,} from './types'

//GET_LEADS

export const getLeads = () => (dispatch,getState) => {
  axios.get('/api/leads/', tokenConfig(getState))
    .then(response => {
      dispatch({
        type:GET_LEADS,
        payload:response.data
      })
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)))
}

//DELETE_LEADS

export const deleteLead = (id) => (dispatch,getState) => {
  axios.delete(`/api/leads/${id}`, tokenConfig(getState))
    .then(response => {
      dispatch(createMessage({ deleteLead: "lead deleted successfully" }));
      dispatch({
        type:DELETE_LEAD,
        payload:id
      })
    }).catch(error => console.log(error))
}

export const updateLead = (id) => (dispatch,getState) => {
  axios.put(`/api/leads/${id}`, tokenConfig(getState))
    .then(response => {
      dispatch(createMessage({ updateLead: "lead updated successfully" }));
      dispatch({
        type:UPDATE_LEAD,
        payload:id
      })
    }).catch(error => console.log(error))
}


export const addLead = (lead) => (dispatch,getState) => {
  axios.post("/api/leads/", lead, tokenConfig(getState))
    .then(response => {
      dispatch(createMessage({ addLead: "lead added successfully" }));
      dispatch({
        type:CREATE_LEAD,
        payload:response.data
      })
    }).catch(error => dispatch(returnErrors(error.response.data, error.response.status)))
}
