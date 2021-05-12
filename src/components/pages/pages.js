import React, { Component } from 'react';
import {CharacterDetails, CharactersList, EpisodesList } from "../rm-components";
import {ServiceProvider} from "../service-ctx/service-ctx";
import ServiceApi from "../../services/service";
import { withRouter } from 'react-router-dom'

const service = new ServiceApi()

class CharactersPageWithoutRouter extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log(' componentDidCatch')
        this.setState({hasError: true})
    }


    render () {

        const {history, match} = this.props
        const { id } = match.params

    return (
        <div className="row mb2">
            <ServiceProvider value={service}>
            <div className="col-md-6">
                <CharactersList
                    onItemSelected={(id) => {
                        history.push(`/characters/${id}`)
                    }}
                    getData={service.getCharacter}>
                    {(i) => `${i.name} (${i.gender}) - ${i.status}`}
                </CharactersList>
            </div>
            <div className="col-md-6">
                <CharacterDetails itemId={id}/>
            </div>
            </ ServiceProvider>
        </div>
    )
}
}


class EpisodesPageWithoutRouter extends Component {

    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        console.log(' componentDidCatch')
        this.setState({hasError: true})
    }


 render() {
        const { history } = this.props
     return (
         <div className="row mb2">
             <ServiceProvider value={service}>
                 <div className="col-md-6">
                 <EpisodesList
                     onItemSelected={(id) => {
                         history.push(`/episodes/${id}`)
                     }}
                     getData={service.getEpisode}>
                     {(i) => `${i.name} (${i.airDate}) - ${i.episodeNum}`}
                 </EpisodesList>
                 </div>
             </ServiceProvider>
         </div>
     )
 }

}

const EpisodesPage = withRouter(EpisodesPageWithoutRouter)
const CharactersPage = withRouter(CharactersPageWithoutRouter)

export {
    CharactersPage,
    EpisodesPage
}
