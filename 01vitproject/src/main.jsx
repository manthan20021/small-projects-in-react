import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Tester(){
  return(
    <h2>harale rajkumar manthan</h2>
  )
}

const AnotherElement = ( 
  <a href="http://google.com"  target = '_blank'> jum to google</a>

)

ReactDOM.createRoot(document.getElementById('root')).
render(
  AnotherElement
)
