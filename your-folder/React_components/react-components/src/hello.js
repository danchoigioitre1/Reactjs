const names = ['batman','iron man','captain','marvel',123,321,456,789]

function Hello (){
    return (names.map(name => {
       return <p>hello, {name} !!! </p>
    } )
    )
}
export default Hello