import React from 'react'
import { Redirect } from 'react-router-dom'


const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <p>This page is full of secrets!!</p>
            </div>
        )
    }

    return < Redirect  to="/login" />
}

export default SecretPage
