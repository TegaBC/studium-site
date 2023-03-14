import Styles from "./Splash.module.css"

const Splash = () => {

    return (
        <>
            <div className={Styles.main}>
                <h1>The only bot you'll need to make studying easy.</h1>
                <p>
                    A brand new feature rich study <span className={Styles.highlighted}>focused</span> bot, built 
                    for <span className={Styles.highlighted}>optimizing</span> work output and 
                    <span className={Styles.highlighted}> maximising</span> rewards to the user.
                </p>
                <div>
                    <button>Invite To Server</button>
                </div>
            </div>

        </>
    )
}

export default Splash