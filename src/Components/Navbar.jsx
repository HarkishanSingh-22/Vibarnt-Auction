import "../App.css";
import { Link } from "react-router-dom";
import VibrantLogo from "../assets/Logo-vibrant.png";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser("");
  };

  return (
    <>
      <nav className="max-w-7xl px-10   bg-white  ">
        <div className=" w-full  Nav-Container  flex items-center justify-between px-5 md:px-10 lg:px-[124px] py-4 h-20 gap-5 ">
          <div className="inner-nav flex flex-wrap items-center sm:gap-4   ">
            <img
              src={VibrantLogo}
              className="nav-logo w-54 h-12 object-contain"
              alt="Logo"
            />

            <div className="flex items-center gap-6 mt-2 ms-2 font-medium text-gray-700 hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className="hover:bg-slate-200 rounded-sm transition-all duration-300 p-1 "
              >
                Home
              </Link>

              <Link
                to="/About"
                className="hover:bg-slate-200 transition-all rounded-sm duration-300 p-1"
              >
                About
              </Link>

              <Link
                to="/Search"
                className="hover:bg-slate-200 transition-all rounded-sm duration-300 p-1"
              >
                Search
              </Link>

              <Link
                to="/Premium"
                className="hover:bg-slate-200 transition-all   rounded-sm duration-300 p-1"
              >
                Premium Subscription
              </Link>

              <Link
                to="/Contact"
                className="hover:bg-slate-200 transition-all rounded-sm duration-300 p-1"
              >
                Contact
              </Link>
            </div>
          </div>
          {!user ? (
            <div className="nav-btn flex items-center gap-4">
              <Link
                to="/auth/register"
                className="px-5 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Register
              </Link>

              <Link to="/login" className="font-medium p-1">
                Login
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <CgProfile size={28} />
                <span className="font-semibold text-green-600">{user}</span>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
