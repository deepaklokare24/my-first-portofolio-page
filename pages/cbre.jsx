import Image from "next/image";
import React from "react";
import cbre from "../public/assets/projects/cbre.png";
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
          src={cbre}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CBRE Project Management and Reporting Tool</h2>
          <h3>
            React / NestJS / Microservices /PostgreSQL /MongoDB / Prisma / Azure
            DevOps
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            CBRE Group, Inc. is an American commercial real estate services and
            investment firm. It is the world's largest commercial real estate
            services and investment firm. More information is available at{" "}
            <a
              href="https://www.cbre.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cbre.com
            </a>
          </p>
          <p>
            CBRE provides services to both occupiers of and investors in real
            estate. For occupiers, CBRE provide facilities management, project
            management, transaction (both property sales and leasing) and
            consulting services and valuation among others. For investors, CBRE
            provide capital markets (property sales, commercial mortgage
            brokerage, loan origination and servicing), property leasing,
            investment management, property management, valuation and
            development services, among others
          </p>

          <p>My key Responsibilities are,</p>
          <ul style={{ listStyle: "inside" }}>
            <li>
              Contributing to the development of a next-gen PaaS solution,
              enhancing project management efficiency for 1000+ CBRE project
              managers.
            </li>
            <li>
              Generating essential reports such as OrderBook, Revenue, Sales,
              and Monday Morning Meeting (MMM) reports by integrating with their
              ERP systems, providing critical insights and improving business
              processes.
            </li>
            <li>
              Enabling the features to support CBRE’s new initiatives, including
              the deployment of 10,000+ EV charging stations across the USA.
            </li>
          </ul>
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
                <RiRadioButtonFill className="pr-1" /> React Query
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Microservice
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongoose
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Supabase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Auth0
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Places API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SendGrid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default outlookWebAddin;
