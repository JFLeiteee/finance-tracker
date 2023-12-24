import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const navigate = useNavigate();

    const { user, setIsLogged, isLogged } = useContext(Context)

    const [editMode, setEditMode] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showExitModal, setShowExitModal] = useState(false)

    function exit() {
        navigate("/")
        setIsLogged(false)
    }
    
    function handleUpdate() {
        event.preventDefault()

        const value = event.target.value 

        console.log(value)
        
        const name = document.querySelector("#name").value
        const username = document.querySelector("#username").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const confirmPassword = document.querySelector("#confirm-password").value
    
        if(password == confirmPassword) {
            user.name = name;
            user.username = username;
            user.email = email;
            user.password = password;
    
            localStorage.clear()
            localStorage.setItem("account", JSON.stringify(user))
    
            console.log(user)
        }
    
        setEditMode(!editMode)
    }

    function openExitModal() {
        setShowExitModal(true)
    }

    return (
        <>
            <div className="profile-container" style={{filter: showExitModal ? "blur(.1rem)" : "none"}}>
                <div className="profile-info">
                        {
                            !editMode
                            ? <>
                                <p><span id={"name"}>{user.name}</span></p>
                                <p><span id={"username"}>{user.username}</span></p>
                                <p><span id={"email"}>{user.email}</span></p>
                                <p><span id={"password"}>{user.password}</span></p>
                                <button onClick={() => setEditMode(!editMode)}>EDIT</button>
                            </>


                            :  <form onSubmit={() => handleUpdate()}>
                                <input type="text" placeholder="name" id="name" defaultValue={user.name}/>
                                <input type="text" placeholder="username" id="username" defaultValue={user.username}/>
                                <input type="email" placeholder="email" id="email" defaultValue={user.email}/>
                                <input type="checkbox" onChange={() => setShowPassword(!showPassword)}/>
                                <input type={ showPassword ? "text" : "password"} placeholder="new password" id="password" defaultValue={user.password}/>
                                <input type={ showPassword ? "text" : "password"} placeholder="confirm new password" id="confirm-password" defaultValue={user.password}/>
                                <input type="submit" value="UPDATE"/>
                                <button onClick={() => setEditMode(!editMode)}>CANCEL</button>
                            </form>
                        }
                        <button onClick={() => openExitModal()} className="nav-exit">Exit</button>
                </div>
            </div>

            <div className="exit-modal" style={{display: showExitModal ? "flex" : "none"}}>
                <p>You want to leave?</p>
                <div className="buttons">
                    <button onClick={() => setShowExitModal(false)} className="nav-login">No, I don't want to log out</button>
                    <button onClick={() => exit()} className="nav-exit">Yes, I Want to log out</button>
                </div>
            </div>
        </>
    )
}