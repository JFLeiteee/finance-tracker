import { useState } from "react"
import ExtractForm from "./Extract/ExtractForm"
import ExtractGraphic from "./Extract/ExtractGraphic"
import ExtractHistory from "./Extract/ExtractHistory"


export default function Extract() {

    return(
        <>  
            <ExtractForm />
            <ExtractGraphic />
            <ExtractHistory />
        </>
    )
}