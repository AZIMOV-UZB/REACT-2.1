import { useState } from "react";
import "./header.css";
import { FaHeart ,FaRegHeart  } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "@/context/index";
import rasm from "../../assets/Header.svg"
const Hader = () => {
  const [{ wishlist, cart }, dispatch] = useStateValue();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container header mx-auto   px-5">
        <div className=" flex items-center  gap-[69px] justify-between mt-5">
          <Link to={"/"}>
            <img
              className=" "
              src={rasm}
              alt="foto"
            />
          </Link>

          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
          <button
            onClick={() => dispatch({ type: "LOGOUT", payload: cart })}
            className="border-none outline-none text-[14px] font-[600] text-[#000000] pl-2"
          >
            LOGOUT
          </button>
              <div className="flex items-center gap-1">
                <FaRegHeart  className="text-[25px] " />
                <sup className="py-3 px-2 rounded-full
 text-[#fff] bg-green-500">{wishlist.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#000000] "
                  }
                  to={"/wishlist"}
                >
                  Wishlist
                </NavLink>
              </div>
      
              <div className="flex items-center gap-1">
                <IoPersonOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#000000] navbar__collection"
                  }
                  to={"/Admin"}
                >
                  Account
                </NavLink>
              </div>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hader;
