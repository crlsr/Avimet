//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importacion de modulos de firebase
/*
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
*/

//importando los componentes
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Notfound from "./pages/Notfound";

function App() {
  /*const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });
  */

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
