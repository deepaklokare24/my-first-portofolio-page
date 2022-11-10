import Image from "next/image";
import React from "react";
import webaddinImg from "../public/assets/projects/webaddin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const outlookWebAddin = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={webaddinImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Outlook 365 Web Add-ins</h2>
          <h3>Microsoft Office.JS / Next JS / React JS / Fluent UI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Currently involved in building an Outlook 365 Web Add-in using
            latest Office JS library and Graph Proxy APIs to capture various
            interactions that happens between JP Morgan Sales people and
            external Clients via Outlook Emails & Meetings. This web
            applications loads in the context of Outlook and able to interact
            with it. Due to this user now dont have to launch a separate app to
            log an interaction.
          </p>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Office.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Fluent UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Graph Proxy API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default outlookWebAddin;
