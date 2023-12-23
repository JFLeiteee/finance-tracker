import { useContext } from "react"
import { Context } from "../context/Context"

export default function Profile() {

    const { user } = useContext(Context)    

    return (
        <>
            <p>Name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
        </>
    )
}