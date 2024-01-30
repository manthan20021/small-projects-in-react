import { useState, useContext } from 'react'
import UserContext from '../context/Context'

function Login() {

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  const {setUser} = useContext(UserContext)

  const subHndlar = (e) => {
    e.preventDefault()
    setUser({username, pass})
  }

  return (
    <div>
      <input type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='Username'/>

      <input type="text"
      value={pass}
      onChange={(e)=> setPass(e.target.value)}
      placeholder='Password'/>
      <button onClick={subHndlar}>submit</button>
    </div>
  )
}

export default Login
