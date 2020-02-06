import React, {useState,useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './api/auth'

//HOC design may seems very confusing 
const ProtectedRoute = ({component:PageComponent,user, ...rest}) => {
      
        return (
            <Route 
            {...rest} 
            render={
                (props) => {    
                    if(user) {
                        return <PageComponent user={user} {...props} />
                    }else{
                        return  <Redirect to="/unauthorised" />
                    }
                }
            }
            />
        )
    }

export default ProtectedRoute