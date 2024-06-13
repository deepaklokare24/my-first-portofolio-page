import Image from "next/image";
import React from "react";
import zyyah from "../public/assets/projects/zyyah.png";
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
          src={zyyah}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Zyyah App</h2>
          <h3>NextJS / Microservice / MongoDB / Supabase, Auth0 / Stripe</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            ZYYAH is the Dallas-based PropTech and Insurtech start-up changing
            the real estate industry by placing the power of homeownership in
            the palm of its user's hand. ZYYAH’s mission is to pioneer a
            hassle-free home experience with innovative digital aggregation for
            the home. ZYYAH connects homeowners to a network of vetted service
            providers and real estate professionals, as well as products and
            services like home warranty, home insurance, mortgage, and title
            services, among others. More information is available at{" "}
            <a
              href="https://www.ZYYAH.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ZYYAH.com
            </a>
          </p>
          
          <p>My key Responsibilities are,</p>
          <ul style={{ listStyle: "inside" }}>
            <li>
              Developed innovative features that unified homeowners, real estate
              agents, and service providers on a single platform, enhancing user
              engagement through end-to- end cloud-native solutions using
              NextJS, MongoDB, Supabase, and Auth0, while ensuring best
              practices and high-quality code standards.
            </li>
            <li>
              Developed a comprehensive reporting dashboard, including Sales TAX
              and cost reports, which provided crucial insights into revenue
              generation and helped in strategizing to increase customer
              engagement.
            </li>
            <li>
              Integrated with the SISU API platform to build a customizable
              dashboard of widgets using microfrontend architecture.
            </li>
            <li>
              Developed a community blog post feature similar to Quora, allowing
              real estate agents to post FAQs and enabling moderators to manage
              and respond to queries.
            </li>
            <li>
              Research, evaluate, and document third-party integrations like
              Stripe, Google Places API, SendGrid etc.
            </li>
            <li>
              Cultivating a culture of continuous learning and improvement,
              mentoring 5 junior developers and providing regular code reviews
              and feedback.
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
