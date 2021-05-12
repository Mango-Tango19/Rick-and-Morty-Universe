import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";

import {ServiceConsumer} from "../service-ctx/service-ctx";

const CharacterDetails = ({itemId}) => {

    return (
        <ServiceConsumer>
            {
                ( {getCharacter, getCharacterImage} ) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getCharacter}
                                     getImageUrl={getCharacterImage}>
                            <Record field="name" label="Name"/>
                            <Record field="gender" label="Gender"/>
                            <Record field="status" label="Status"/>
                            <Record field="species" label="Species"/>

                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>
    )
}

const EpisodeDetails = ({itemId}) => {
    return (

        <ServiceConsumer>
            {
                ({ getEpisode, getCharacterImage}) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getEpisode}
                                     getImageUrl={getCharacterImage}>
                            <Record field="name" label="Name:"/>
                            <Record field="airDate" label="Air Date:"/>
                            <Record field="episodeNum" label="Episode Number:"/>
                        </ItemDetails>
                    )
                }
            }
        </ServiceConsumer>

    )
}


export {
    CharacterDetails,
    EpisodeDetails
}
