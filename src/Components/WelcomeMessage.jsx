import { useEffect, useState } from "react";

function WelcomeMessage(){
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true)
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    return(
        <div>
            {showMessage ? <h2>showMessage es true</h2> : <h2>showMessage es false aun</h2>}
        </div>
    )
}

export default WelcomeMessage;