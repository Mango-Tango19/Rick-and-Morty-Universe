import React, { Component } from 'react'

import './catch-error.css'
import Error from "../error";

class CatchError extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return < Error />
        }
        return this.props.children
    }

}

export default CatchError
