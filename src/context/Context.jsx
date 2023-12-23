import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) =>{ 

    const [signUpMessage, setSignUpMessage] = useState("")
    const [loginMessage, setLoginMessage] = useState("")
    const [isLogged, setIsLogged] = useState(false)

    // WHEN THE SIGNUP FORM IS SUBMITED THE VALUES ARE PASSED TO THE LOCAL STORAGE
    function handleSubmit(event) {
        event.preventDefault()

        const name = document.querySelector("#name").value;
        const username = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        if(password == confirmPassword) {
            let account = {
                name: name,
                username: username,
                email: email,
                password: password,
            };
        
            localStorage.setItem("account", JSON.stringify(account));

            setSignUpMessage("")
            setIsAccountCreated(true)
        } else {
            setSignUpMessage("Password didn't match")
        }
    }

    // GETTING THE VALUES FROM THE LOCAL STORAGE
    const userNoObject = localStorage.getItem("account")
    const user = JSON.parse(userNoObject)

    // WHEN THE LOGIN FORM IS SUBMITTED IT CHECKS IF THE VALUES ARE THE SAME AS IN THE LOCAL STORAGE
    function checkAccount() {
        event.preventDefault()

        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;

        if(user.username == username && user.password == password) {
            setIsLogged(true)
            setLoginMessage("")
        } else {
            setLoginMessage("Username or password is wrong")
        }
    }

    return(
        <Context.Provider 
            value={{
                handleSubmit,
                checkAccount,
                signUpMessage,
                loginMessage,
                isLogged,
                setIsLogged,
                user,
            }}
        >
            {children}
        </Context.Provider>
    )
}