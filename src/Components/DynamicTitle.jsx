import { useEffect, useState } from "react";

function DynamicTitle(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        // document.title = `Clic ${count} veces`
        document.title = "Clic " + count + " veces"
    }, [count])

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Incrementar</button>
        </div>
    )
}

export default DynamicTitle;