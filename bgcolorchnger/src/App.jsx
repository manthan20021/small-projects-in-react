import {useState } from 'react'
import './App.css'

function App() {
  const [change, setChange] = useState(null)
  

  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }


  return (
    <div className='h-[100vh] flex items-center justify-center' style={{backgroundColor: change}}>
      <button className='px-10 py-5 rounded-xl text-white text-[20px] bg-gray-600 font-bold' onClick={()=> setChange(color)}>change</button>
        
    </div>
  )
}

export default App
