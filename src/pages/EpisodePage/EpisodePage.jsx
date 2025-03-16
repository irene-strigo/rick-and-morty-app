import {useEffect, useState} from "react";
import axios from "axios";
import {LocationEpisodeCard} from "../../common/components/LocationEpisodeCard/LocationEpisodeCard.jsx";


export const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([])
    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setEpisodes(res.data.results)

        })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/episode")
    }, [])
let titles = ['Эпизод:','Название эпизода:','Дата выхода эпизода в эфир:','Список персонажей, которые были замечены в эпизоде:']
    return (
        <>
            <h1 className={"pageTitle"}>EpisodePage</h1>
            {episodes.length&&
                (
                    <div className={"pageContainer"}>
                        {episodes.map((episode) => {
                            return (
                                <LocationEpisodeCard data = {episode} titles = {titles} key={episode.id} data1={episode.episode} data2={episode.name} data3={episode.air_date} data4={episode.characters.length}/>
                            )
                        })}
                    </div>
                )

            }
        </>
    )
}
