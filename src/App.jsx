import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "@/layout/Layout";
import Auth from "./pages/auth/auth";
import Wishlist from "./pages/wishlist/wishlist";
import Admin from "./pages/admin/Admin";
import Profil from "./pages/admin/Profil";
import User from "./pages/admin/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Admin/*" element={<Admin/>}>
          <Route path="profil" element={<Profil/>} />
          <Route path="user" element={<User/>} />
        </Route>
          </Route>
        </Route>{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
