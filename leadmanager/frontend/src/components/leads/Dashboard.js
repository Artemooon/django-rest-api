import React,{Fragment} from 'react'
import Form from './Form'
import Leads from './Leads'

export default function Dashboard()
{
    return(
      <Fragment>
        <h1 className = "mt-3 text-center mb-2">Dashboard</h1>
        <Form/>
        <Leads/>
      </Fragment>
    )
}
