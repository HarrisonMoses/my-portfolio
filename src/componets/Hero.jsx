import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profile from "../assets/profile.JPG";

const Hero = () => {
  return (
    <div className="m-6 border-b border-neutral-900 pb-4 lg:mb-35 md:pb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-16 text-4xl lg:text-6xl font-thin lg:mt-16 ">
              Moses Mugoya
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8  ">
          <div className="flex justify-center">
            <img src={profile} alt="Profile" className="rounded-xl max-md:size-[40] max-md:rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
