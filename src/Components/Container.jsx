import { useState } from "react"

function ComponenteHijo({ name }){
    return <h1>Hola, {name}</h1>
}

function Container(){
    const [name, setName] = useState("");

    return(
        <>
            <ComponenteHijo name={name} />
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
        </>
    )
}

export default Container;