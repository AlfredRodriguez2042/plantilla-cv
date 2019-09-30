import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({component: Component, ...rest }) => {
    return (
        <>
        if(isAuth){  
       <Route {...rest} component={Component}/>
       
        }else{
         <Redirect to="/login"/>
        }
        </>
    )
}

export default Protected
