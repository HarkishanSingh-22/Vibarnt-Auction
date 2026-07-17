import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlinePhone, HiOutlineAtSymbol } from "react-icons/hi";
import HeroImage from "../assets/img-5.jpeg";
import advertise from "../assets/advertise.jpeg"





function Contact() {
    return (
        <main className="min-h-screen bg-white ">
            <div className="flex gap-1.5 text-md font-normal px-31 pt-6 mb-12" >
                <p className="text-gray-400">Home</p>
                <p>/ContactUs</p>
            </div>

            {/* Hero Banner */}
            <div className="max-w-[1332px] mx-auto px-10 mt-4">
                <div className="relative h-[230px] rounded-2xl overflow-hidden">
                    <img
                        src={HeroImage}
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1332px] mx-auto px-10 mt-12 grid grid-cols-[1fr_460px] gap-8 items-start">

                {/* Left - Info */}
                <div>
                    <h2 className="text-[28px] font-bold text-[#1B1B1B]">
                        Get in touch with our support
                    </h2>
                    <p className="mt-2 text-[15px] text-gray-500">
                        Contact our support team and with any questions or queries you may have.
                    </p>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-6 mt-8">

                        <div>
                            <h3 className="font-semibold text-[#1B1B1B]">Address</h3>
                            <p className="mt-1 text-[15px] text-gray-600 leading-relaxed">
                                Office No. 24, Shreeji Plaza , TATA Road No. 2, Opera House Mumbai –400004
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#1B1B1B]">Phone</h3>
                            <p className="mt-1 text-[15px] text-gray-600">
                                9920045671, 022 31728244
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#1B1B1B]">Support</h3>
                            <p className="mt-1 text-[15px] text-gray-600">
                                info@vibrantauction.com
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[#1B1B1B]">For Business Enquiry</h3>
                            <p className="mt-1 text-[15px] text-gray-600">
                                info@vibrantauction.com
                            </p>
                        </div>

                    </div>

                    <button className="mt-6 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-3 text-sm font-medium hover:bg-gray-50">
                        <HiOutlineLocationMarker className="text-lg" />
                        Get Direction On Map
                    </button>

                    {/* Promo Card */}
                    <div className="relative mt-8 bg-[#FBE9EC] rounded-2xl p-8 overflow-hidden">
                        <div className="absolute -right-6 -bottom-10 w-40 h-40 bg-[#F5D0D6] rounded-full"></div>

                        <div className="relative">
                            <h3 className="text-2xl font-bold text-[#D6002A]">
                                Start Listing your Auction Today!
                            </h3>
                            <p className="mt-2 text-[14px] text-gray-600 max-w-[400px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button className="mt-5 bg-[#2B2730] text-white text-sm font-medium px-6 py-3 rounded-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right - Form */}
                <ContactForm />

            </div>

            <section className="max-w-[1280px] mx-auto px-1 mt-10">
                <div className="relative">
                    <img
                        src={advertise}
                        alt="Advertisement Banner"
                        className="w-full rounded-3xl object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col justify-center pl-8">
                        <h1 className="text-white font-bold text-4xl">
                            Advertisement Handling
                        </h1>

                        <div className="text-white mt-3 text-lg">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </section>





        </main>
    );
}

function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="bg-[#F7F7F8] rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-[#D6002A]">Get In Touch</h2>
            <p className="mt-1 text-[15px] text-gray-500">Let's Connect</p>

            <form className="mt-6 space-y-4">

                <FloatingField
                    label="Full Name"
                    value={fullName}
                    onChange={setFullName}
                />

                <FloatingField
                    label="Email"
                    value={email}
                    onChange={setEmail}
                />

                <FloatingField
                    label="Contact Number"
                    value={contactNumber}
                    onChange={setContactNumber}
                />

                <div className="relative">
                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full h-[54px] rounded-xl border border-[#ECECEC] bg-white px-4 text-[15px] text-gray-400 outline-none appearance-none focus:border-[#D6002A]"
                    >
                        <option value="">Subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="business">Business Enquiry</option>
                        <option value="support">Support</option>
                    </select>
                    <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={1}
                    className="w-full rounded-xl border border-[#ECECEC] bg-white px-4 py-4 text-[15px] outline-none resize-none focus:border-[#D6002A]"
                />

                <button
                    type="submit"
                    className="bg-[#2B2730] text-white text-sm font-medium px-8 py-3 rounded-full"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

function FloatingField({ label, value, onChange }) {
    return (
        <div className="relative w-full h-[54px] rounded-xl border border-[#ECECEC] bg-white px-4 flex flex-col justify-center focus-within:border-[#D6002A]">
            {value && (
                <span className="text-xs text-gray-400 leading-none">{label}</span>
            )}
            <input
                type="text"
                placeholder={label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full text-[15px] outline-none bg-transparent"
            />
        </div>
    );
}

export default Contact