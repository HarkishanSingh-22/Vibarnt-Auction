import "../App.css";
import FooterLogo from "../assets/FootLogo.png";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { SiMaildotru } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="Footer-Container flex justify-center px-4 mt-5">
        <div className="inner-footer  w-full max-w-[1200px]  p-8 rounded-xl mb-5">
          <div className="flex justify-between gap-10 items-center border-b border-white p-5">
            <img src={FooterLogo} className="" alt="" />
            <p className="text-white text-sm mt-2 font-semibold">
              Vibrantauciton.com is premium webiste in india where you can find
              all type of assests, movable and imovable properties which are
              sold thorugh Banks and various Financial Insitutions Acorros the India.
            </p>
          </div>
          <div className="grid grid-cols-3 py-6 gap-8 border-b border-white">
            <div className="About flex flex-col gap-3 ">
              <h2 className="text-red-600 text-xl ">Quick links</h2>
              <Link to="/About" className="text-white text-sm">
                About Us{" "}
              </Link>
              <Link to="/FaQ" className="text-white text-sm">
                FaQ{" "}
              </Link>
              <Link to="Premium" className="text-white text-sm">
                Premium Subscirbtion{" "}
              </Link>
              <Link to="/Contact" className="text-white text-sm">
                Contact Us{" "}
              </Link>
            </div>
            <div className="Privacy flex flex-col gap-3 ">
              <h2 className="text-red-600 text-xl ">Company</h2>
              <Link to="/Search" className="text-sm text-white">
                Privacy Policy{" "}
              </Link>
              <Link to="/Search" className="text-sm text-white">
                Terms & Conditions{" "}
              </Link>
            </div>
            <div className="Mail flex flex-col gap-3 ">
              <h2 className="text-red-600 text-xl ">Communication</h2>
              <Link
                to="/Search"
                className="text-sm text-white flex items-center gap-2"
              >
                <IoCallOutline />
                91+9920045671
              </Link>
              <Link
                to="/Search"
                className="text-sm text-white flex items-center gap-2"
              >
                <SiMaildotru /> Info@vibrantauction.com
              </Link>
            </div>
          </div>
          <div className="">
          <p className="text-white text-center p-2">Copyright © 2023 Vibrant Auction. All rights reserved.</p>
        </div>
        </div>
        
      </div>
    </>
  );
}
export default Footer;
