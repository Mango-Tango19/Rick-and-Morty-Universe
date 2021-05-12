import React, { Component } from 'react'
import ServiceApi from '../../services/service'

import Error from "../error";

import Loader from "../loader";

import './random-character.css'

export default class RandomCharacter extends Component {

    rmServiceApi = new ServiceApi();

    state = {
        character: {},
        loading: true,
        error: false
    }

    componentDidMount () { 
        this.updateEpisode()
        this.interval = setInterval(this.updateEpisode, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onCharacterLoaded = (character) => {
        this.setState( {
            character,
            loading: false,
            error: false
        })
    }

    updateEpisode = () => {
        let id = Math.floor(Math.random()* 671)
        this.rmServiceApi
            .getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render () {

        const { character, loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <Error/> : null;
        const loadingView = loading ? <Loader /> : null
        const characterView = hasData ? <CharacterView character={character}/> : null
        return (
            <div className="random-character">
                { loadingView }
                { characterView }
                { errorMessage }
            </div>
        )

    }

}

const CharacterView = ({ character }) => {

    const  {name, gender, image, status, species, created} = character

    return (
        <React.Fragment>
            <img className="character-image"
                 src={ image }
                 alt={ name }
            />
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Status: </span>
                        <span>{ status }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Gender: </span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Species: </span>
                        <span>{ species }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Created: </span>
                        <span>{ created }</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
