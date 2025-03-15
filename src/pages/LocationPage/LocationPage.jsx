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
    return (
        <>
            <h1 className={"pageTitle"}>LocationPage</h1>
            {locations.length&&
                (
                    <div className={"pageContainer"}>
                        {locations.map((location) => {
                            {console.log(location.id,location.name,location.dimension)}
                            return (
                                    <LocationEpisodeCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length}/>
                            )
                        })}
                    </div>
                )

            }
        </>
    )
}
