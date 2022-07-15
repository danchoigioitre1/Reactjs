import { useState, useEffect } from 'react'

function App() {
    const [car, setCar] = useState('Mes')
    const [color, setColor] = useState('Black')
    const choiceCar = e => setCar(e)
    const choiceColor = e => setColor(e)

    // useEffect(
    //     () => {
    //         switch (car) {
    //             case 'Mes':
    //                 setCar('Mes')
    //                 break

    //             case 'BMW':
    //                 setCar('BMW')
    //                 break


    //             case 'Honda':
    //                 setCar('Honda')
    //                 break


    //             case 'Audi':
    //                 setCar('Audi')
    //                 break


    //             case 'Vin':
    //                 setCar('Vin')
    //                 break
    //             default:

    //         }

    //     }, [car]

    // )



    return (
        <div>
            <div>
                <select onChange={e => choiceCar(e.target.value)}>
                    <option value='Mes'>Mes</option>
                    <option value='BMW'>BMW</option>
                    <option value='Honda'>Honda</option>
                    <option value='Audi'>Audi</option>
                    <option value='Vin'>Vin</option>

                </select>
            </div>

            <div>
                <select onChange={e => choiceColor(e.target.value)}>
                    <option value='Black'>Black</option>
                    <option value='Red'>Red</option>
                    <option value='Green'>Green</option>
                    <option value='Pink'>Pink</option>
                    <option value='Grey'>Grey</option>

                </select>
            </div>


            <div>
                <h1>You choice a {color} {car} </h1>
            </div>
            <button onClick={()=>console.log(color +" "+ car)}>Submit</button>
        </div>
    )


}
export default App

