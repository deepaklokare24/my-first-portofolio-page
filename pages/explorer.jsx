import Image from "next/image";
import React from "react";
import explorerImg from "../public/assets/projects/explorer.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const explorer = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={explorerImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Explorer</h2>
          <h3>HTML / CSS / React with Redux / D3.JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Developed this web application from scratch which intended to show
            near real time data to CRMusers by constantly polling key
            interactions in every few seconds. <br /> Many components are built
            around these interactions like Snapshot, Watchlist, Leaderboard,
            Connections. Refine data for various filter criteria like Global
            filter (search for Client, Contact, Staff, Team, Ticker, Sector),
            Date Range picker, Region filter, Interaction type filter. <br /> We
            also allowed users to launch various related apps using our app and
            also made our app listen to different apps triggers and reload
            itself for various contexts using Interoperability. <br /> Web page
            is built using latest version of React along with various libraries
            like Redux, Axios, Bootstrap, Ag-grid-react, react-d3-graph,
            react-content-loader, react-select, react-virtualized,
            react-beautiful-dnd, react-idle-timer, moment. For Unit test
            coverage, we used Jest along with Enzyme. 
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
                <RiRadioButtonFill className="pr-1" /> React with Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> D3.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JPM UI Toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Jest with Enzyme
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default explorer;
