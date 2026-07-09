import "../App.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci"
import { IoMicOutline } from "react-icons/io5"

function Navbar() {
  return (
    <>
      <nav className="max-w-7xl  bg-white  ">
        <div className=" w-full  Nav-Container wrapper  flex items-center justify-between h-20  ">
          <div className="inner-nav flex items-center gap-8 ">
            <img
              src=""
              className="nav-logo w-12 h-12 object-contain"
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
                className="hover:bg-slate-200 transition-all  rounded-sm duration-300 p-1"
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

      

     <div className="search-container w-full min-h-screen bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="search-inner w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Vibrant Auction
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Buy properties at 10% to 40% below market price.
      </p>

      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">

        <select
          className="w-full lg:w-56 h-14 border border-gray-300 rounded-lg px-4 "
        >
          <option>City</option>
          <option>Delhi</option>
          <option>Haryana</option>
          <option>Gurgaon</option>
        </select>

       
        <select
          className="w-full lg:flex-1 h-14 border border-gray-300 rounded-lg px-4 "
        >
          <option>Bank Institution / Name</option>
          <option>Abhishek Commerce Limited</option>
          <option>Adarsh Pvt. Ltd</option>
          <option>Bajaj Pvt. Ltd</option>
        </select>

       
        <select
          className="w-full lg:w-56 h-14 border border-gray-300 rounded-lg px-4 "
        >
          <option>Asset Type</option>
          <option>Property</option>
          <option>Commercial</option>
          <option>Industrial</option>
        </select>

       
        <Link
          to="/search"
          className="h-14 px-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition duration-300"
        >
          <CiSearch size={22} />
          Search
        </Link>

       
        <button className="h-14 w-14 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
          <IoMicOutline size={26} className="text-gray-700" />
        </button>

      </div>

    </div>
  </div>
</div>
    </>
  );
}

export default Navbar;
