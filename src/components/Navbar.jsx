import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../context/Context"

export default function Navbar() {

    const navigate = useNavigate()

    const { isLogged, setIsLogged } = useContext(Context)

    return(
        <nav className="navbar">
            <h1 className="nav-title" onClick={() => navigate(isLogged ? "/home" : "/")}>Finance <span className="yellow-highlight">Tracker</span></h1>

            {
                !isLogged 
                ? <div>
                    <button onClick={() => navigate('/login')} className="nav-login">Login</button>
                    <button onClick={() => navigate('/signUp')} className="nav-signup">SignUp</button>
                </div>

                : <div>
                    <button onClick={() => navigate('/profile')} className="nav-login">Profile</button>
                </div>
        }
        </nav>
    )
}