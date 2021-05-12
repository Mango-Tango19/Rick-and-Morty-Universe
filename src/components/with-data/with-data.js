import React, {Component} from "react";
import Loader from "../loader";

const WithData = (View, getData) => {
    return class extends Component {
        state = {
            data : []
        }

        componentDidMount() {

            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
                .catch(err => console.log(err.message))
        }


        render() {
            const { data } = this.state

            if (!data) {
                return (
                    < Loader />
                )
            }

            return < View {...this.props} data={data}/>
        }
    }
}

export {
    WithData
}
