import React, { useContext,useState } from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
        <button onClick={handleSubmit}>Submit</button><br/>
    </div>
  )
}

export default Login