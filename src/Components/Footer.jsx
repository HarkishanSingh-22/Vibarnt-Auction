import "../App.css";
import FooterLogo from "../assets/FootLogo.png";

function Footer() {
  return (
    <>
      <div className="Footer-Container flex justify-center px-4">
        <div className="inner-footer  w-full max-w-[1200px] bg-black p-8 rounded-xl mb-5">
          <div className="flex justify-between gap-10 items-center border-b border-white p-5">
            <img src={FooterLogo} className="" alt="" />
            <p className="text-white text-sm mt-2 font-bold">
              Vibrantauciton.com is premium webiste in india where you can find
              all type of assests, movable and imovable properties which are
              sold thorugh
            </p>
          </div>
          <div className="grid">
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
