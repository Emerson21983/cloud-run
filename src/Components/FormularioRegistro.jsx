import { useState } from "react";

function Inputs({label, type, value, onChange}){
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    )
}

function ButtonSubmit({onClick}){
    return <button onClick={onClick}>Enviar</button>
}

function FormularioRegistro(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <>
            <Inputs label="Usuario" type={"text"} value={username} onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <Inputs label={"Password"} type={"password"} value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <ButtonSubmit onClick={() => {
                console.log(username)
                console.log(password)
            }} />
        </>
    )
}

export default FormularioRegistro;