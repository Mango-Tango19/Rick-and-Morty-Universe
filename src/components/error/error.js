import React from 'react'
import icon from './bomb.svg'

import './error.css'

const Error = () => {

    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>
        something has gone terribly wrong
      </span>
            <span>
        (but we already sent Morthy to fix it)
      </span>
        </div>
    );
}

export default Error
