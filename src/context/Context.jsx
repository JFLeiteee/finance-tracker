import { createContext, useState, useEffect } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) =>{ 

    const [signUpMessage, setSignUpMessage] = useState("")
    const [loginMessage, setLoginMessage] = useState("")
    const [isLogged, setIsLogged] = useState(false)
    const [isAccountCreated, setIsAccountCreated] = useState(false)

    useEffect(() => {
        const storedIsLogged = localStorage.getItem("isLogged");
        if (storedIsLogged) {
            setIsLogged(JSON.parse(storedIsLogged))
        }
    }, [])

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
                isActivated: false
            };
        
            localStorage.setItem("account", JSON.stringify(account));
            setIsAccountCreated(true)
            setSignUpMessage("")
        } else {
            setSignUpMessage("Password didn't match")
        }
    }

    
    // WHEN THE LOGIN FORM IS SUBMITTED IT CHECKS IF THE VALUES ARE THE SAME AS IN THE LOCAL STORAGE
    function checkAccount() {
        event.preventDefault()
        
        setIsLogged(true);

        // GETTING THE VALUES FROM THE LOCAL STORAGE
        const userNoObject = localStorage.getItem("account")
        const user = JSON.parse(userNoObject)

        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;

        if(user.username == username && user.password == password) {
            //  SETTING THE STATUS TO ACTIVE
            localStorage.clear()
            localStorage.setItem('isLogged', JSON.stringify(true));
            localStorage.setItem("account", JSON.stringify(user))
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
                isAccountCreated
            }}
        >
            {children}
        </Context.Provider>
    )
}