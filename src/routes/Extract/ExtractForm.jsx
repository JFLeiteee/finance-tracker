import { useState, useEffect } from "react"

export default function ExtractForm() {

    const [checked, setChecked] = useState("income")
    const [selected, setSelected] = useState("other")
    const [value, setValue] = useState(0.0)
    const [bankStatment, setBankStatment] = useState([])

    useEffect(() => {
        const storedBank = localStorage.getItem("bankStatment");
        if (storedBank) {
            setBankStatment(JSON.parse(storedBank))
        }
    }, [])


    function handleChange() {
        setChecked(event.target.value)
    }

    function handleSelected(value) {
        setSelected(value)
        console.log(selected)
    }

    function handleSubmit() {
        event.preventDefault()
  
        const data = {
            value: value,
            category: selected,
            type: checked,
            date: new Date()
        }

        setBankStatment(prevBank => [...prevBank, data])

        localStorage.removeItem("bankStatment")
        localStorage.setItem("bankStatment", JSON.stringify(bankStatment))
    }

    return(
        <form className="extract-form" onSubmit={() => handleSubmit()}>
            <div className="extract-spendings">
                <label> 
                    <input type="radio" value="income" checked={checked == "income"} onChange={() => handleChange()} className="input-radio"/>
                    Income
                </label>
                <label> 
                    <input type="radio" value="expense" checked={checked == "expense"} onChange={() => handleChange()} className="input-radio"/>
                    Expense
                </label>
            </div>

            <div>
                <label>R$: </label>
                <input type="number" className="extract-input-value" value={value} onChange={() => setValue(event.target.value)} required/>
            </div>

            <div className="extract-category">
                <label>Category:</label>
                <select className="extract-select-input" value={selected} onChange={(e) => handleSelected(e.target.value)} required>
                    <option value="trip">Trip</option>  
                    <option value="food">Food</option>
                    <option value="leisure">Leisure</option>
                    <option value="other">Others</option>
                </select>
            </div>

            <input type="submit" value={"SUBMIT"} className="extract-submit"/>
        </form>
    )
}