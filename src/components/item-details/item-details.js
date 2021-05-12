import React, {Component} from 'react'
import ServiceApi from "../../services/service";
import TrowError from "../trow-error/trow-error";
import Loader from "../loader";
import CatchError from "../catch-error";

import './item-details.css'


const Record = ({ field, label, item}) => {

    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
}



export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        image: null
    }

    rmServiceApi = new ServiceApi()

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) { /// обязательно условие!!!
            this.updateCharacter()
        }
    }

    componentDidMount() {
        this.updateCharacter()
    }

    updateCharacter() {
        const {itemId ,getData, getImageUrl } = this.props;
        if (!itemId) {
            return < Loader />
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                })
            })

    }


    render() {

        const {item, loading, image} = this.state

        if (!item) {
            return (
                <span>Select character from the list</span>
            )
        }

        if (loading) {
            return < Loader />
        }

        const { name } = item

        return (
            <CatchError>
            <div className="person-details card">
                <img className="person-image"
                     src={image} alt={name}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        { React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        }) }
                        < TrowError />
                    </ul>
                </div>

            </div>
            </CatchError>
        )

    }

}
