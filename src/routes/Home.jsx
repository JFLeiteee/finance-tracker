import { useContext } from "react"
import { Context } from "../context/Context"

export default function Home() {

    const { user } = useContext(Context)

    return(
        <>
            <h1>HOME!</h1>
        </>
    )
}