
import { useState } from 'react'

//importacion de modulos de firebase
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase);

//importando los componentes
import Login from './components/Login'
import Home from './components/Home'

import "./App.css";

function App() {
  
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })

  return (
    <div>
      {user ? <Home emailUser = {user.email} /> : <Login />}
    </div>
  )
}

export default App
