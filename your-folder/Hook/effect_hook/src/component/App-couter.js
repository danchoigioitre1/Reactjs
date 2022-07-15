import { useState } from 'react'
function App() {
    const [add1, setadd1] = useState(0)
    const [add2, setadd2] = useState(0)
    const Add1 = () => {
        setadd1(prev => prev + 1)
    }
    const Add2 = () => {
        setadd2(prev => prev + 1)
        setadd2(prev => prev + 1)
    }
    return (
        <div>
            <div>
                <h1>Count: {add1}</h1>
                <button onClick={Add1}>Add 1</button>
            </div>

            <div>
                <h1>Count: {add2}</h1>
                <button onClick={Add2}>Add 2</button>
            </div>
        </div>

    )

}
export default App