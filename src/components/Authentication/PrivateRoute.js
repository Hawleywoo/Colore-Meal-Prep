import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function PrivateRoute({ component: Compenent, ...rest}) {

    const { currentUser } = useAuth()

    return (
        <Route {...rest} render={props => {
            return currentUser 
                ? <Compenent {...props} />
                : <Redirect to="/login" />
        }}>
            
        </Route>
    )
}

export default PrivateRoute
