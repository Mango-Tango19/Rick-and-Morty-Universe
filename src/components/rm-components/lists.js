
import ItemList from "../item-list/index"
import WithData from "../with-data"
import ServiceApi from "../../services/service";

const service = new ServiceApi()

const {
    getMultipleCharacters,
    getAllEpisodes
} = service

const CharactersList = WithData(ItemList, getMultipleCharacters)
const EpisodesList = WithData(ItemList, getAllEpisodes)

export {
    CharactersList,
    EpisodesList
}
