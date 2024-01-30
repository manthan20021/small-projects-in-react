import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("green")

  return (
   <div id='main' style={{backgroundColor:color}}>
    <div id="btnsHolder">
<button id='red ' onClick={() => setColor("red")}>red</button>
<button id='blue' onClick={() => setColor("blue")}>blue</button>
<button id='yellow' onClick={() => setColor("yellow")}>yellow</button>
<button id='black' onClick={()=> setColor("black")}>black</button>

    </div>
   </div>
  )
}

export default App
