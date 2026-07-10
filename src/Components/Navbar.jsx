import "../App.css";
import { Link } from "react-router-dom";
import VibrantLogo from "../assets/Logo-vibrant.png";

function Navbar() {
  return (
    <>
      <nav className="max-w-7xl px-10   bg-white  ">
        <div className=" w-full  Nav-Container  flex flex-wrap items-center justify-between h-20  ">
          <div className="inner-nav flex flex-wrap items-center gap-8 ">
            <img
              src={VibrantLogo}
              className="nav-logo w-54 h-12 object-contain"
              alt="Logo"
            />

            <div className="flex items-center gap-6 font-medium text-gray-700">
              <Link
                to="/"
                className="hover:bg-slate-200 rounded-sm transition-all duration-300 p-1"
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

          <div className="nav-btn flex items-center gap-4">
            <Link
              to="/Register"
              className="px-5 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300"
            >
              Register
            </Link>

            <Link to="/Login" className="font-medium  p-1">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
