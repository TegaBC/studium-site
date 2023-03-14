import Styles from "./Leaderboard.module.css"
import Board from "./Board"
import { faker } from '@faker-js/faker';

function fakeLeaderData(hours) {
    let data = []

    let min = 30

    for (let i = 0; i < 10; i++) {
        let fakeInfo = []
        
        let newMin = faker.datatype.number({min: min, max: min+200})

        fakeInfo[0] = faker.name.firstName() + "#" + faker.datatype.number({min: 1000, max: 9999})
        fakeInfo[1] = hours ? newMin + "hrs" : newMin 

        min = newMin

        data[9-i] = fakeInfo
    }
    console.log("making fake data....", data)
    return data
}

export default function() {
    return (
        <div className={Styles["leaderboard-wrapper"]}>
            <h1>Leaderboards</h1>
            <div className={Styles["board-container"]}>
                <Board name="Points" data={fakeLeaderData()}/>
                <Board name="Study Time" data={fakeLeaderData(true)}/>
            </div>
        </div>
    )
}