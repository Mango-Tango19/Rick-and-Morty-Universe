export default class ServiceApi {

    _apiBase = 'https://rickandmortyapi.com/api'

    async getData(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status} `)
        }
        return await res.json()

    }

    _getMultipleCharactersId = () => {
       return this._getMultipleData(671)
    }


    _getMultipleEpisodes = () => {
        return this._getMultipleData(41)
    }

    _getMultipleLocations = () => {
        return this._getMultipleData(108)
    }

    _getMultipleData = (n) => {
        let arr = []
        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * n))
        }
        return arr
    }



    getMultipleCharacters = async () => {
        const charactersIdArr = this._getMultipleCharactersId()
        const characters = await this.getData(`/character/${charactersIdArr}`)
        return characters.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        let character = await this.getData(`/character/${id}`)
        return this._transformCharacter(character)
    }

    _transformCharacter = (character) => {
        return {
            id: character.id,
            image: character.image,
            name: character.name,
            gender: character.gender,
            status: character.status,
            species: character.species,
            created: character.created
        }
    }

    getAllEpisodes = async () => {
        const episodesArr = this._getMultipleEpisodes()
        const episodes = await this.getData(`/episode/${episodesArr}`)
        return episodes.map(this._transformEpisode)
    }

    getEpisode = async (id) => {
        const episode = await this.getData(`/episode/${id}`)
        return this._transformEpisode(episode)
    }


    _transformEpisode = (episode) => {
        return {
            id: episode.id,
            name: episode.name,
            airDate: episode.air_date,
            episodeNum: episode.episode,
            created: episode.created,
            characters: episode.characters

        }
    }

    getCharacterImage = ({id}) => {
        return `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
    }


    getAllLocations = async () => {
        const locationArr = this._getMultipleLocations()
        const locations = await this.getData(`/location/${locationArr}`)
        return locations.map(this._formatLocation)
    }

    getLocation = async (id) => {
        const location = await this.getData(`/location/${id}`)
        return this._formatLocation(location)
    }

    _formatLocation = (location) => {
        return {
            id: location.id,
            name: location.name,
            type: location.type,
            dimension: location.dimension
        }
    }

}
