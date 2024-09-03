import { useState } from "react";

const TodoList = ({arreglo}) => {
    const [listTareas, setListTareas] = useState(arreglo)
    return(
        <>
            <ol>
                {
                    listTareas.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ol>
        </>
    )
}

export default TodoList;