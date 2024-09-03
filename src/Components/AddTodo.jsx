import { useState } from "react";
import TodoList from "./TodoList";

const AddTodo = () => {

    const [tarea, setTarea] = useState("");

    const [arreglo, setArreglo] = useState([])

    function AgregarTarea(){
        console.log(tarea);
        arreglo.push(tarea);
        setTarea("")
        console.log(arreglo)
    }

    return(
        <>
            <div class="font-sans">
                <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div class="relative sm:max-w-sm w-full">
                        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Tareas
                            </label>
                                                
                                <div>
                                    <input type="text" placeholder="Tarea nueva" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" value={tarea} onChange={(e) => setTarea(e.target.value)} />
                                </div>
                    
                                <div class="mt-7">
                                    <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" onClick={AgregarTarea}>
                                        Registrar tarea
                                    </button>
                                </div>
                    
                                <div class="flex mt-7 items-center text-center">
                                    <hr class="border-gray-300 border-1 w-full rounded-md" />
                                    <label class="block font-medium text-sm text-gray-600 w-full">
                                        Mis tareas
                                    </label>
                                    <hr class="border-gray-300 border-1 w-full rounded-md" />
                                </div>
                    
                                <div class="flex mt-7 justify-center w-full">
                                    <TodoList arreglo={arreglo} />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo;