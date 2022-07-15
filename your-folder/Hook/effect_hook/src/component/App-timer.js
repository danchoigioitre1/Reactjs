import { useState, useEffect } from 'react'

function App() {
    const [timer, setTimer] = useState(4)


    useEffect(
        () => {
            const time = setInterval(() => { setTimer(timer - 1) }, 1000)
            if (timer===0) return () => {clearInterval(time)
        }
        }

        , [timer]
    )



    // useEffect(() => { 
    //     SetTimer(prev => prev-1)
    // })


    return (
        <div>
            <h1> Count down form : {timer}</h1>
        </div>
    )



}
export default App