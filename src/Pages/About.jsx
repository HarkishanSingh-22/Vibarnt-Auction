
import HeroImage from "../assets/img-5.jpeg";
import build from "../assets/img-1.jpeg";
import Advertise from "../assets/advertise.jpeg"

function About() {
    return (

        <>
            <section className="px-31 pt-6 ">
                <div className="flex gap-1.5 text-md font-normal" >
                    <p className="text-gray-400">Home</p>
                    <p>/About</p>
                </div>

                <div className="relative">
                    <img
                        src={HeroImage}
                        alt=""
                        className="w-full h-auto mt-10 object-cover rounded-3xl"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white text-5xl font-bold">
                            About Us
                        </h3>
                    </div>
                </div>

                <div className="text-center mt-8 px-4 sm:px-8 lg:px-20 xl:px-32">
                    <p className="text-gray-700 text-lg font-normal tracking-wider">
                        Vibrantauction.com is a product of BizIndia Asset Solution Private Limited
                        Mumbai based company Incorporated with the goal to provide solutions to all
                        type of assets.
                    </p>
                </div>

                <div className="mt-10 px-4 sm:px-8 lg:px-20 xl:px-32">

                    <h2 className="text-xl text-red-600 tracking-wide font-semibold">
                        Where it Started
                    </h2>

                    <div className="mt-6 text-gray-700 leading-8 tracking-wider">
                        <p>
                            Vibrantauction.com is premium website in India where you can find all
                            types of assets, movable and immovable properties which are sold through
                            Banks and various Financial Institution Across India.
                        </p>
                    </div>

                    <div className="border-red-600 border-2 rounded-full w-32 mt-8">

                    </div>

                    <div className="">

                        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>

                            <div className="bg-white rounded-2xl border-amber-100 shadow-lg hover:shadow-2xl transition duration-300 px-6 py-4 flex flex-col ">
                                <img src={build} alt="" className="w-18 h-18" />
                                <h5 className="text-black font-bold text-md">Bank</h5>
                                <p className="text-gray-700 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit.</p>
                            </div>


                        </div>
                    </div>
                </div>

                          <div className="relative max-w-[1280px] mx-auto px-1 mt-10 ">
                            <img
                                src={Advertise}
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

        </>
    )

}

export default About