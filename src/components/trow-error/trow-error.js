import React, {Component} from 'react'

export default class TrowError extends Component {

    state = {
        isError: false
    }


    render() {

        if(this.state.isError) {
            this.foo.bar = 0
        }
        return (
            <button type="button" className="btn btn-danger"
            onClick={() => this.setState({isError: true})}>
                throw error</button>
        )
    }
}
