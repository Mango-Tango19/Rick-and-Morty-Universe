import React from 'react'
import CatchError from "../catch-error";

import './item-list.css'

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props

    const items = data.map((item) => {
        const { id } = item
        const label = renderLabel(item)

        return (
            <CatchError key={id}>
            <li className="list-group-item"
                onClick={() => onItemSelected(id)}
            >{label}
            </li>
            </CatchError>
                )
            })

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        )


}

export default ItemList
