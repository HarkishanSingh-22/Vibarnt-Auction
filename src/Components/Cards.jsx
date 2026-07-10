import "../App.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import CardImg1 from "../assets/img-9.jpeg";

function Card() {
  return (
    <>
      <div className="w-full p-4 md:p-6 lg:p-10 mt-5 bg-gray-100">
        <div className=" mt-4 mb-6 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold ">Upcoming Auction Properties</h1>
            <p className="flex items-center gap-2 text-red-500 mb-2 underline">
              View All
              <FaArrowRightLong />
            </p>
          </div>
        </div>

        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          <div className="w-full max-w-[320px] rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
          <div className="max-w-[320px] card rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden transition-all duration-300">
            <div className="relative p-3  ">
              <img
                src={CardImg1}
                alt="Office"
                className="w-full h-48 object-cover rounded-lg cursor-pointer transform transition-transform scale-100 duration-500 ease-in-out hover:scale-105 "
              />

              <span className="absolute top-5 left-4 px-2 py-1 rounded-full border border-red-500 text-red-500 bg-white text-sm font-medium">
                Featured
              </span>

              <button className="absolute top-5 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
                <IoHeartOutline size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Land & Building</p>

                <div className="flex items-center gap-1">
                  <HiOutlineCalendarDays size={17} />
                  <span>02-09-2025</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-2">Property ID: 58630</h2>

              <p className="text-gray-500 mt-2 text-sm">
                Manthan Broadband Services Private Limited in Liquidation
              </p>

              <div className="flex items-center gap-2 mt-3 text-sm">
                <IoLocationOutline size={20} />
                <span>Land in Medinipore, West Bengal</span>
              </div>

              <h3 className="text-red-600 text-2xl font-bold mt-4">
                ₹ 15,50,00,000
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
