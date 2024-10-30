import React from 'react'
import { RiReactjsLine, } from 'react-icons/ri'
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiFlutter } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <RiReactjsLine className="lg:text-6xl text-[20px] text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiMongodb className="lg:text-6xl text-[20px] text-green-500" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiFlutter className="lg:text-6xl text-[20px] text-[#02569B]" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiMysql className="lg:text-6xl text-[20px] text-[#00758F]" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <FaNodeJs className="lg:text-6xl text-[20px] text-[#339933]" />
        </div>
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
          <SiPostgresql className="lg:text-6xl text-[20px] text-[#336791]" />
        </div>
      </div>
    </div>
  );
}

export default Technologies
