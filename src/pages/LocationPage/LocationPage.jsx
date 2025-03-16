import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router";
import {LocationEpisodeCard} from "../../common/components/LocationEpisodeCard/LocationEpisodeCard.jsx";

export const LocationPage = () => {
    const [locations, setLocations] = useState([])
    const fetchData = (url) => {
        axios.get(url).then((res) => {
            setLocations(res.data.results)

        })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/location")
    }, [])
    let titles = ['Название локации:','Тип локации:','Измерение, в котором находится местоположение:','Количество персонажей, которых видели в данной локации:']


    return (
        <>
            <h1 className={"pageTitle"}>LocationPage</h1>
            {locations.length&&
                (
                    <div className={"pageContainer"}>
                        {locations.map((location) => {
                            return (
                            <LocationEpisodeCard data = {location} titles = {titles} key={location.id} data1={location.name} data2={location.type} data3={location.dimension} data4={location.residents.length}/>
                            )
                        })}
                    </div>
                )

            }
        </>
    )
}
