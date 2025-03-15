import {useEffect, useState} from "react";
import axios from "axios";


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

    return (
        <>
            <h1 className={"pageTitle"}>EpisodePage</h1>
            {episodes.length&&
                (
                    <div className={"pageContainer"}>
                        {episodes.map((episode) => {
                            return (
                                <div key={episode.id} className={"locationEpisodeContainer"}>
                                    <ul>
                                        <li> Эпизод: <span className={"boldText"}>{episode.episode}</span></li>
                                        <li> Название эпизода: <span className={"boldText"}> {episode.name}</span></li>
                                        <li> Дата выхода эпизода в эфир: <span className={"boldText"}>{episode.air_date}</span></li>
                                        <li> Список персонажей, которые были замечены в эпизоде:<span
                                            className={"boldText"}> {episode.characters.length}</span></li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                )

            }
        </>
    )
}
