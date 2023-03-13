import Styles from "./CommandShowcase.module.css"

const showcase = () => {
    return (
        <div className={Styles.main}>
            <h1>Our powerful commands</h1>

            <div className={Styles["command-wrapper"]}>
                <div>/points</div>
                <div>/pomodoro</div>
                <div>/check-session</div>
                <div>/uptime</div>
            </div>

            <p>
                Keep in mind, this bot is currently in an alpha testing stage, expect new commands and updates to be added weekly.
                If you want to be kept in the loop, come back here often to see our latest changes.

                
            </p>
            <p>
            Studium is a project by <span className={Styles.highlighted}> <a href="">TegaBC</a></span>
            </p>
        </div>
    )
}

export default showcase