//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

//importacion de modulos de firebase
/*
import appFirebase from "./credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
*/

//importando los componentes
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile/Profile";
import NotFound from './pages/NotFound/Notfound';
import TipsNews from './pages/TipsNews/TipsNews';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PasswordRecovery from './pages/auth/PasswordRecovery';
import Destination from "./pages/Destination";
import BookingPage from './components/booking/BookingPage';
import Factura from "./components/Factura/Factura";

import Community from './pages/Community/Community';


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
            <Route path="/destinations/:slug" element={<Destination />}/>
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/factura" element={<Factura />} />
            <Route path="/tips-news" element={<TipsNews />} />
            <Route path="*" element={<NotFound />}/>
            <Route path="/community" element={<Community />} />
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