import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useSpring, animated } from "react-spring"

export default function Navbar() {

    const [activated, setActivated] = useState([1])

    const fadeIn = useSpring({
        from: { opacity: 0 },
        opacity: 1
    })

    const navigate = useNavigate()

    const highlight = {
        borderBottom: "3px solid #0D21A1",
        fontWeight: "600"
    }

    const { isLogged, setIsLogged, user } = useContext(Context)

    function exit() {
        navigate("/")
        setIsLogged(false)
    }

    function handleClick(id) {
        activated.shift()
        activated.push(id)
        if(id == 1) {
            navigate(isLogged ? "/home" : "/")
        } else if(id == 2){
            navigate("/extract")
        } else if(id == 3) {
            navigate("/goals")
        } else if(id == 4) {
            navigate("/calculator")
        }
    }

    return(
        <animated.nav className="navbar" style={fadeIn}>
            <div className="nav-top">
                <h1 className="nav-title" onClick={() => navigate(isLogged ? "/home" : "/")}>Finance <span className="yellow-highlight">Tracker</span></h1>
                    {
                        !isLogged
                        ?
                            <div>
                                <button onClick={() => navigate('/login')} className="nav-login">Login</button>
                                <button onClick={() => navigate('/signUp')} className="nav-signup">SignUp</button>
                            </div>
                        
                        :
                            <div className="nav-options">
                                <button className={isLogged ? "nav-profile" : "nav-login"}>
                                    <span className="nav-circle">{user.name.substr(0,1)}</span>
                                    Welcome, {user.name.toUpperCase()}!
                                </button>
                                |
                                <button onClick={() => exit()} className="nav-exit">
                                    LOG OUT
                                </button>
                            </div>       
                    }
                    
            </div>

                    {
                        !isLogged
                        ?
                            <></>
                        : 
                            <div className="nav-bottom">
                                <div className="nav-page" onClick={() => handleClick(1)} style={activated.includes(1) ? highlight : null}>
                                    Home
                                </div>

                                <div className="nav-page" onClick={() => handleClick(2)} style={activated.includes(2) ? highlight : null}>
                                    Incomes and Spendings
                                </div>

                                <div className="nav-page" onClick={() => handleClick(3)} style={activated.includes(3) ? highlight : null}>
                                    Goals
                                </div>

                                <div className="nav-page" onClick={() => handleClick(4)} style={activated.includes(4) ? highlight : null}>
                                    Calculator
                                </div>
                            </div>
                    }
        </animated.nav>
    )
}