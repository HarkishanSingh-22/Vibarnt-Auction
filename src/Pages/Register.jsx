import "../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/Logo-vibrant.png";
import RegisterImg from "../assets/img-9.jpeg";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyEmail = "admin@gmail.com";
    const dummyPassword = "123456";

    if (formData.email === dummyEmail && formData.password === dummyPassword) {
      localStorage.setItem("user", formData.fullName);

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-6">
        <div className="w-full max-w-md">
          <div className="flex justify-center mt-4 mb-5">
            <img src={Logo} alt="Logo" className="h-12" />
          </div>

          <h1 className="text-4xl font-bold text-red-600 mb-2 text-center">
            Create an Account
          </h1>

          <p className="text-gray-600 text-lg mb-6 text-center">
            Lets start with Vibrant Auction 🏢
          </p>

          <div className="flex items-center justify-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-sm">
                1
              </div>
              <span className="text-xs mt-2">Basic Details</span>
            </div>

            <div className="w-36 border-t border-dashed border-gray-300 mx-4"></div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
                2
              </div>
              <span className="text-xs mt-2 text-gray-400">Address</span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-14 border border-gray-200 rounded-lg px-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-14 border border-gray-200 rounded-lg px-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full h-14 border border-gray-200 rounded-lg px-4 outline-none focus:border-blue-500"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full h-14 border border-gray-200 rounded-lg px-4 outline-none focus:border-blue-500"
            />

            <div className="flex justify-center pt-3">
              <button
                type="submit"
                className="bg-zinc-800 hover:bg-black text-white px-16 py-4 rounded-full text-lg font-medium transition duration-300"
              >
                Next →
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-lg text-gray-700">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 p-6">
        <img
          src={RegisterImg}
          alt="Register"
          className="w-full h-screen object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

export default Register;
