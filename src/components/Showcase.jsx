import Styles from "./Showcase.module.css"

function classToUse(bool) {
    if (!bool) {
        return "no-padding"
    }
}

const showcase = ({ heading, features,  paragraph, headingPadding }) => {
    return (
        <div className={Styles.main}>
            <h1 className={Styles[classToUse(headingPadding)]}>{heading}</h1>
            <div className={Styles["feature-wrapper"]}>
                {features.map(feature => (<div> {feature} </div>))}
            </div>
            <p> {paragraph} </p>
        </div>
    )
}

export default showcase