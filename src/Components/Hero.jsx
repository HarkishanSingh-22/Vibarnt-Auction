import "../App.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";

import SearchableDropdown from "../Components/SearchableDropdown";

import cities from "../temp-data/cities.json";
import banks from "../temp-data/bank.json";
import assets from "../temp-data/assets.json";

function Hero() {
  return (
    <>
      <div className="search-container w-full bg-white py-10 px-4 mb-5">
        <div className="serach-box max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="search-inner w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-4 md:p-6 lg:p-8">

            <h1 className="text-5xl font-bold text-white">
              Welcome to Vibrant Auction
            </h1>

            <p className="text-white mt-2 mb-8">
              Buy properties at 10% to 40% below market price.
            </p>


            <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 bg-white p-3 rounded-lg">

              {/* City */}
              <SearchableDropdown
                placeholder="City"
                data={cities}
                keyName="city"
                className="w-full lg:w-56"
              />

              {/* Bank */}
              <SearchableDropdown
                placeholder="Bank/Institution Name"
                data={banks}
                keyName="bank"
                className="w-full lg:flex-1"
              />

              {/* Asset */}
              <SearchableDropdown
                placeholder="Asset Type"
                data={assets}
                keyName="name"
                className="w-full lg:w-56"
              />

              {/* Search Button */}

              <Link
                to="/search"
                className="h-14 px-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition duration-300"
              >
                <CiSearch size={22} />
                Search
              </Link>

              {/* Voice */}

              <button className="h-14 w-14 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                <IoMicOutline size={26} className="text-gray-700" />
              </button>

            </div>

            {/* Tags */}

            <div className="tags mt-3 flex flex-wrap gap-3">
              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Mumbai
              </p>

              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Delhi
              </p>

              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Gurgaon
              </p>

              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Punjab
              </p>

              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Surat
              </p>

              <p className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full text-white text-sm px-2 py-1">
                Pune
              </p>
            </div>

          </div>

          <div className="hero-cards">
            <div className="cards"></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;