import Styles from "./Leaderboard.module.css"

function showData(info, pos) {
    return (
        <div className={Styles.placement}>
            <p>{pos+1}</p>
            <h3>{info[0]}</h3>
            <p>{info[1]}</p>
        </div>)
}

export default function( { name, data } ) {
    console.log(data)
    return (
    <div className={Styles.board}>
        <h1>{name}</h1>
        {data.map((info, pos) => showData(info,pos))}
    </div>)
}