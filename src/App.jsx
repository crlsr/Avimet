import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

//importando los componentes
import Login from "./pages/auth/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import NotFound from './pages/NotFound/Notfound';
import TipsNews from './pages/TipsNews/TipsNews';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PasswordRecovery from './pages/auth/PasswordRecovery';
import Destination from "./pages/Destination";
import BookingPage from './components/booking/BookingPage';
import Factura from "./components/Factura/Factura";
import DestinationSearch from "./pages/DestinationSearch/DestinationSearch";
import DestinationManage from "./pages/admin/DestinationManage/DestinationManage";


function App() {
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
            <Route path="/destinations" element={<DestinationSearch />} />
            <Route path="/destinations-manage" element={<DestinationManage />} />
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