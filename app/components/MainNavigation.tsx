import { NavLink } from "@remix-run/react"

export default function MainNavigation(){
    return(
        <nav id="main-navigation"  style={{ textAlign: 'center' }}>
            <ul>
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/notes">My Notes</NavLink>
                </li>
            </ul>
        </nav>
    )
}