import React from "react";
import { GiFruiting } from "react-icons/gi";
import Banner1 from "../assets/banner1.png";
const Banner = () => {
  return (
    <div className="mt-[100px]">
      <div className="h-[600px] w-full relative">
        <img
          src="https://images.pexels.com/photos/8181546/pexels-photo-8181546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="photo"
          className="h-[600px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text inside the image */}
        <div className="absolute inset-0 flex flex-col justify-center text-start text-white px-[200px] w-[1000px]">
          <div className="flex flex-row">
            <div>
              <GiFruiting className="text-5xl mb-6" />
              <p className="text-5xl font-bold mb-6 font-poppins">
                Mesmerizing Pure Freshly Squeezed Orange Juice
              </p>
              <p className="text-base mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
              <button className="bg-orange-400 p-2 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Second image on the right side */}
        <div className="absolute bottom-0 right-0">
          <img
            src={Banner1}
            alt="photo"
            className="h-[300px] w-[300px] object-cover m-8"
          />
        </div>
        {/* Second image on the right side */}
        {/* <div className="absolute bottom-0 left-0">
          <img
            src={Banner1}
            alt="photo"
            className="h-[300px] w-[300px] object-cover m-1"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
