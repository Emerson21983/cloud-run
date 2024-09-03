import { useEffect, useState } from "react";

function Timer(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalidId = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => clearInterval(intervalidId)
    }, [])

    return(
        <div>
            Segundos: {seconds}
        </div>
    )
}

export default Timer;