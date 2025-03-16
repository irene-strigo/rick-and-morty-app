import s from "./LocationEpisodeCard.module.css"

export const LocationEpisodeCard = (props) => {

    return (
        <div key={props.data.id} className={s.locationEpisodeContainer}>
            <ul>
                <li> {props.titles[0]} <span className={"boldText"}>{props.data1}</span></li>
                <li> {props.titles[1]} <span className={"boldText"}>{props.data2}</span></li>
                <li> {props.titles[2]}<span className={"boldText"}>{props.data3}</span></li>
                <li> {props.titles[3]}<span
                    className={"boldText"}>{props.data4}</span></li>
            </ul>
        </div>

    )
}
