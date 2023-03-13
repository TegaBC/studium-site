import { useState } from "react"
import NavStyles from "./Navbar.module.css"
import cx from "classnames"

const nav = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={NavStyles.nav}>
            <div className={NavStyles["branding"]}>
                Studium
            </div>
            <div className={toggle ? cx(NavStyles["nav-links"], NavStyles.toggled) : NavStyles["nav-links"]}>
                <a href="https://github.com/TegaBC/studium-study-bot">Github</a>
            </div>
            <svg onClick={() => setToggle(!toggle)} className={toggle ? NavStyles.rotated : ""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
        </nav>

    )
}

export default nav