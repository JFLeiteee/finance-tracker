import { useNavigate } from "react-router-dom"
import { animated, useSpring } from "react-spring";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Login() {

    const navigate = useNavigate();

    const { checkAccount, loginMessage, isLogged } = useContext(Context);

    const fade = useSpring({
        from: { transform: "scale(1.1)", opacity: 0 },
        to: { transform: "scale(1)", opacity: 1 }
    })

    function goToHome(){
        if(isLogged) {
            navigate("/home")
        } 
    }

    goToHome()

    return(
        <div className="login-background">
            <animated.div className="login-container" style={fade}>
                <h1 className="login-title">Login</h1>

                <form action="" id="login-form">
                    <input type="text" className="login-username-input" placeholder="Username" id="login-username"/>
                    <input type="password" className="login-password-input" placeholder="Password" id="login-password"/>
                    <input type="submit" className="login-button" onClick={() => checkAccount()} value={"LOGIN"} />
                </form>

                <p style={{color: "red"}}>{loginMessage}</p>

                <hr className="login-line"/>

                <p>Doesn't have an account yet? <span className="login-navigate" onClick={() => navigate('/signup')}>Sign Up</span></p>
            </animated.div>
        </div>
    )
}