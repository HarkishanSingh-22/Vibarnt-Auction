import "../App.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6"

function Hero() {
  return (
    <>
      <div className="search-container w-full  bg-white py-10 px-4 mb-5 ">
        <div className="serach-box max-w-7xl mx-auto  sm:px-2 lg:px-8 ">
          <div className="search-inner  w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-4 md:p-6 lg:p-8 ">
            <h1 className="text-5xl font-bold text-white">
              Welcome to Vibrant Auction
            </h1>

            <p className="text-white mt-2 mb-8">
              Buy properties at 10% to 40% below market price.
            </p>

            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 bg-white p-3 rounded-lg">
              <select
                defaultValue=""
                className="w-full lg:w-56 h-14 border border-gray-300 rounded-lg px-4 text-gray-400 focus:text-black"
              >
                <option value="" disabled>
                  City
                </option>

                <option className="text-black" value="Delhi">
                  Delhi
                </option>

                <option className="text-black" value="Haryana">
                  Haryana
                </option>

                <option className="text-black" value="Gurgaon">
                  Gurgaon
                </option>
              </select>

              <select
                defaultValue=""
                className="w-full lg:flex-1 h-14 border border-gray-300 rounded-lg px-4 text-gray-400 focus:text-black"
              >
                <option value="" disabled>
                  Bank Institution / Name
                </option>

                <option className="text-black">
                  Abhishek Commerce Limited
                </option>
                <option className="text-black">Adarsh Pvt. Ltd</option>
                <option className="text-black">Bajaj Pvt. Ltd</option>
              </select>

              <select
                defaultValue=""
                className="w-full lg:w-56 h-14 border border-gray-300 rounded-lg px-4 text-gray-400 focus:text-black"
              >
                <option value="" disabled>
                  Asset Type
                </option>

                <option value="Property" className="text-black">
                  Property
                </option>

                <option value="Commercial" className="text-black">
                  Commercial
                </option>

                <option value="Industrial" className="text-black">
                  Industrial
                </option>
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

            <div className="tags mt-3 flex flex-wrap gap-3 ">
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm p-1 px-2  ">
                Mumbai
              </p>
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm p-1 px-2  ">
                Delhi
              </p>
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white  text-sm p-1 px-2  ">
                Gurgoan
              </p>
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm p-1 px-2">
                Punjab
              </p>
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm p-1 px-2 ">
                Surat
              </p>
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm p-1 px-2 ">
                Pune
              </p>
            </div>
          </div>
          
          
          <div className="hero-cards">
            <div className="cards">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
