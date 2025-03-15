import s from "./LocationEpisodeCard.module.css"

export const LocationEpisodeCard = (props) => {

    return (
        <div key={props.id} className={"locationEpisodeContainer"}>
            <ul>
                <li> Название локации: <span className={s.boldText}>{props.name}</span></li>
                <li> Тип локации: <span className={"boldText"}>{props.type}</span></li>
                <li> Измерение, в котором находится местоположение: <span className={s.boldText}>{props.dimension}</span></li>
                <li> Количество персонажей, которых видели в данной локации:<span
                    className={s.boldText}>{props.residents}</span></li>
            </ul>
        </div>

    )
}
