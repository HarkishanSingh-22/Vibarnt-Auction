import "../App.css";
import FooterLogo from "../assets/FootLogo.png";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { SiMaildotru } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="Footer-Container flex justify-center px-5 md:px-10 lg:px-[124px] py-4 mt-5">
        <div className="inner-footer w-full max-w-[1200px] p-5 sm:p-6 md:p-8 rounded-xl mb-5">

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 border-b border-white pb-6">
            <img
              src={FooterLogo}
              className="w-40 sm:w-48 md:w-auto"
              alt="Footer Logo"
            />

            <p className="text-white text-sm text-center md:text-left leading-7">
              Vibrantauction.com is a premium website in India where you can
              find all types of assets, movable and immovable properties that
              are sold through Banks and various Financial Institutions across
              India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 border-b border-white">

            
            <div className="About flex flex-col gap-3 text-center sm:text-left">
              <h2 className="text-red-600 text-xl font-semibold">
                Quick Links
              </h2>

              <Link to="/About" className="text-white text-sm hover:text-red-500 transition">
                About Us
              </Link>

              <Link to="/FaQ" className="text-white text-sm hover:text-red-500 transition">
                FAQ
              </Link>

              <Link to="/Premium" className="text-white text-sm hover:text-red-500 transition">
                Premium Subscription
              </Link>

              <Link to="/Contact" className="text-white text-sm hover:text-red-500 transition">
                Contact Us
              </Link>
            </div>

            
            <div className="Privacy flex flex-col gap-3 text-center sm:text-left">
              <h2 className="text-red-600 text-xl font-semibold">
                Company
              </h2>

              <Link to="/Search" className="text-white text-sm hover:text-red-500 transition">
                Privacy Policy
              </Link>

              <Link to="/Search" className="text-white text-sm hover:text-red-500 transition">
                Terms & Conditions
              </Link>
            </div>

           
            <div className="Mail flex flex-col gap-3 text-center sm:text-left">
              <h2 className="text-red-600 text-xl font-semibold">
                Communication
              </h2>

              <Link
                to="/Search"
                className="text-white text-sm flex items-center justify-center sm:justify-start gap-2 hover:text-red-500 transition"
              >
                <IoCallOutline className="text-lg" />
                +91 9920045671
              </Link>

              <Link
                to="/Search"
                className="text-white text-sm flex items-center justify-center sm:justify-start gap-2 hover:text-red-500 transition break-all"
              >
                <SiMaildotru className="text-lg" />
                info@vibrantauction.com
              </Link>
            </div>
          </div>

         
          <div>
            <p className="text-white text-center text-xs sm:text-sm py-4">
              Copyright © 2023 Vibrant Auction. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;