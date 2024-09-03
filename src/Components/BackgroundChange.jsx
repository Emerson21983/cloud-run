import { useEffect, useState } from "react";

function BackgroundChange(){
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode){
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#fff";
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#333";
        }
    }, [isDarkMode])

    return(
        <div>
            <h1>Bienvenidos</h1>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Modo claro" : "Modo oscuro"}
            </button>
        </div>
    )
}

export default BackgroundChange;