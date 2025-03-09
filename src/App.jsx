//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importacion de modulos de firebase
/*
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
*/

//importando los componentes
import Login from "./pages/LoginSignUp/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/LoginSignUp/SignUp";
import Notfound from "./pages/NotFound/Notfound";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PasswordRecovery from './pages/LoginSignUp/PasswordRecovery';


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
        <Route element={<Footer />}>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
    </Router>
  );
}

export default App;
