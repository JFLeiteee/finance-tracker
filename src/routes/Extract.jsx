import { useState } from "react"

export default function Extract() {
    const date = new Date()
    const day = date.getUTCDate()
    const month = date.getMonth()

    const months = ["January", "February", "March", 
        "April", "May", "June", 
        "July", "August", "September", 
        "October", "November", "December"
    ]

    const [checked, setChecked] = useState('')

    const expenses = []
    const incomes = []

    function handleChange() {
        setChecked(event.target.value)
    }

    return(
        <>  
            <p>{months[month]}</p>
            <form>
                <label> 
                    <input type="radio" value="income" checked={checked == "income"} onChange={() => handleChange()}/>
                    Income
                </label>
                <label> 
                    <input type="radio" value="expense" checked={checked == "expense"} onChange={() => handleChange()}/>
                    Expense
                </label>
                <label>R$: </label><input type="number" />
            </form>
        </>
    )
}