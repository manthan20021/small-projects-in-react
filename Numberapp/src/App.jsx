import { useState } from 'react'



function App() {
 
let [courentValue,courentValueDecris ] = useState(1)

const addValue = ()=>{
  courentValueDecris(courentValue + 1)
}
const removeVal = ()=>{
  courentValueDecris(courentValue - 1)
}

  return (
    <>
     <h1>numberAPP</h1>
     <h4>cournt value: {courentValue}</h4>

     <button onClick={addValue} >add:{courentValue}</button>
     <button onClick={removeVal}>remove:{courentValue}</button>
    </>
  )
}

export default App
