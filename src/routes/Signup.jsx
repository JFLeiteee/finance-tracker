import { useNavigate } from "react-router-dom"
import { animated, useSpring } from "react-spring";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

export default function SignUp() {

    const navigate = useNavigate();

    const { handleSubmit, signUpMessage, isAccountCreated } = useContext(Context);

    const fade = useSpring({
        from: { transform: "scale(1.1)", opacity: 0 },
        to: { transform: "scale(1)", opacity: 1 }
    })

    useEffect(() => {
        navigate("/login")
    }, [isAccountCreated])

    return(
        <div className="login-background">
            <animated.div className="login-container" style={fade}>
                <h1 className="login-title">Sign Up</h1>

                <form id="login-form" onSubmit={(event) => handleSubmit(event)}>
                    <input type="text" id="name" className="login-username-input" placeholder="Name" required/>
                    <input type="text" id="username" className="login-username-input" placeholder="Username" required/>
                    <input type="text" id="email" className="login-username-input" placeholder="Email" required/>
                    <input type="password" id="password" className="login-password-input" placeholder="Password" required/>
                    <input type="password" id="confirm-password" className="login-password-input" placeholder="Confirm Password" required/>
                    <input type="submit" className="login-button" value={"CREATE ACCOUNT"} />
                </form>

                <p style={{color: "red"}}>{signUpMessage}</p>

                <hr className="login-line"/>

                <p>Already have an account? <span className="login-navigate" onClick={() => navigate('/login')}>Login</span></p>
            </animated.div>
        </div>
    )
}