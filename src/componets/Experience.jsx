import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="m-6 border-b border-neutral-900 pb-20">
      <h1 className="text-4xl text-center my-20">Experience</h1>
      {EXPERIENCES.map((item, index) => (
        <div
          key={index}
          className=" mb-8 flex flex-wrap lg:justify-center gap-4"
        >
          <div className="w-full lg:w-1/4 text-lg">
            <p className="mb-2 text-sm text-neutral-400"> {item.year} </p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4 mr-2">
            <h2 className="text-xl font-semibold mb-2">
              {item.role}-
              <span className="text-sm text-purple-300">{item.company}</span>
            </h2>
            {/* <h2 className="py-4 font-light tracking-tight">{ABOUT_TEXT}</h2> */}
            <p className="mb-4  tracking-tight text-neutral-400  ">
              {item.description}
            </p>
            <div className="flex flex-wrap">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
