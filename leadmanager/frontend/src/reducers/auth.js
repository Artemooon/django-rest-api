import {USER_LOADED,USER_LOADING,AUTH_ERROR,
        LOGIN_SUCCESS, LOGIN_ERROR,LOGOUT_SUCCESS,
        REGISTER_ERROR,REGISTER_SUCCESS} from '../actions/types'

const initialState = {
  token:localStorage.getItem('token'),
  IsAuthenticated:null,
  isLoading:false,
  user:null
}

export default function(state = initialState, action){
  switch(action.type){
    case USER_LOADED:
      return{
        ...state,
        IsAuthenticated:true,
        isLoading:false,
        user:action.payload,
      }
    case USER_LOADING:
        return{
          ...state,
          isLoading:true,
        }
    case AUTH_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
        localStorage.removeItem('token')
        return{
          ...state,
          IsAuthenticated:false,
          isLoading:false,
          user:null,
          token:null,
          }
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token')
      return{
        ...state,
        leads: [],
        IsAuthenticated:false,
        isLoading:false,
        user:null,
        token:null,
        }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token)
        return{
          ...state,
          ...action.payload,
          IsAuthenticated:true,
          isLoading:false,
          }
    default:
      return state;
  }
}
