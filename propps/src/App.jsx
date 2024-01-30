import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from "./componts/Cart"

function App() {
  

  return (
    <>
     <Cart userNname = "Manthan"
      about = "he hello iam manthan harale iam form akola maharastra looking for web devlopper job in india"
       contact = "contect me"/>

     <Cart userNname = "pratik"
      about="hello iam pratik harale form akola maharastra iam profestional farmer working my won farm in chanikapur"
       contact="visit my farm" />

     <Cart userNname = "priti" about="iam a house wife" 
     contact="no contact"/>
     <Cart userNname = "rajkumar" about="iam a farmer form akola maharastra" contact="9657" />
     <Cart userNname = "harale" about="we are lovely popel" contact="visit our famly" />
    
    
    
     </>
  )
}

export default App
