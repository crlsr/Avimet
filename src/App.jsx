import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importacion de modulos de firebase
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);

//importando los componentes
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home emailUser={user.email} /> : <Login />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
