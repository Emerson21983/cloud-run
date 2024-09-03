import { useParams } from "react-router-dom";

function Usuarios(){
    let parametros = useParams();
    console.log(parametros);
    return(
        <>
            <h1>Estoy en la vista Usuarios con id: {parametros.id} con el cargo: {parametros.cargo} y se especializa en: {parametros.especialidad}</h1>
        </>
    )
}

export default Usuarios;