import Image from "next/image";
import React from "react";
import echoImg from "../public/assets/projects/echo.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ilp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={echoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Echo - Deal Feedback Tool</h2>
          <h3>HTML / CSS / React / Spring Boot / Hibernate / Oracle</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Its a feedback facilitation and automation tool intended to collect
            and organise investor feedback with respect to ongoing or upcoming
            investment opportunities. Throughout the lifecycle of an IPO, the
            banking team will initiate a conversation with Sales team requesting
            for information on potential investor clients. Currently this
            communication is primarily conducted via email. And manually
            searching for deals in emails is inefficient and error prone, as
            important information can be lost in the sea of emails.
            <br /> So as soon as a potential deal occurs, the backing team can
            create a new deal in the investor Feedback tool. And all the
            information about the deals can be consumed from this tool. This
            caters to easy filtering of deals by topic, by Investor Client, by
            Sales and by tickers and following all the required visibility
            controls.
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
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spring Boot
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Hibernate
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Oracle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ilp;
