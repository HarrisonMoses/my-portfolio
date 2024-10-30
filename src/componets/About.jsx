import React from "react";
import profile from "../assets/profile.JPG";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="m-6 border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center ">
            <img src={profile} alt="" className="hidden lg:block rounded-xl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <h2 className="py-4 font-light tracking-tight">{ABOUT_TEXT}</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
