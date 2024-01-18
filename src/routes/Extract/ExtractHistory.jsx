export default function ExtractHistory() {
    
    const dataObject = localStorage.getItem("bankStatment")
    const data = JSON.parse(dataObject)



    function renderHistory() {
        return (
            <div>
                {data?.map((item, index) => (
                    <div key={index}>
                        <p>{item.type}</p>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        );
    }

    return(
        <>
            <h1>History</h1>
        
            { renderHistory() }
        </>
    )
}