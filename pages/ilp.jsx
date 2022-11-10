import Image from "next/image";
import React from "react";
import ilpImg from "../public/assets/projects/ilp.png";
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
          src={ilpImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Interactive Landing Page (ILP)</h2>
          <h3>HTML / CSS / ExtJS 4 / Spring / Hibernate / Oracle</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            ILP is a portal framework built using ExtJS following standard MVC
            pattern, which provide users a quick way to look up key client data
            points such as Revenue, Touch points, Coverage, Contacts, Rates,
            Public Finance, FX in a consolidated manner. <br />
            Here users were allowed to load different application widgets in our
            portal framework and allowing them to do drag and drop, shuffling
            around widgets. They can maximise, minimise, close, unpin, add
            widgets on a fly and save user preferences. Also implemented Message
            Bus feature in our application were in user is able to see client
            specific data i.e., widgets automatically refresh itself according
            to global client filter.
            <br /> We also developed an Admin Wizard page, using which admin can
            configure widgets, loader files, global filter, design layouts,
            arrange widgets and provide approvals for onboarding other apps into
            ILP. Admin was also given facility to provide Entitlements at
            widget, page and application level.
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
                <RiRadioButtonFill className="pr-1" /> ExtJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Spring
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
