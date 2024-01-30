import './App.css'
import Login from './componts/Login'
import Profil from './componts/profil'
import ContextPrdever from './context/Contextprovider'

function App() {

  return (
    <ContextPrdever>

      <h1>manthan</h1>
      
      <Login/>
      <Profil/>

    </ContextPrdever>
  )
}

export default App
