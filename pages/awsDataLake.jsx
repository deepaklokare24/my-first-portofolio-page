import Image from "next/image";
import React from "react";
import datalakeImg from "../public/assets/projects/awsdatalake.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const datalake = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={datalakeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">AWS Data Lake Formation</h2>
          <h3>
            AWS S3 / IAM / Glue / Lambda / Redshift / Athena / Terraform / Java
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            As a part of Data Migration requirement, we are supposed to build a
            Data Lake in AWS. Currently CIB has huge data sitting inside on-prem
            cloud using oracle DB. But in order to facilitate data scientists to
            generate useful analytics on this data, we had to bring all this
            data across various teams in CIB to one Data Lake in AWS.
            <br />
            <br /> So we designed and built a data pipeline application for
            migrating huge data (GBs) from on Prem to AWS cloud (Data Lake)
            using AWS Glue (ETL tool), AWS S3, IAM, Lambda, Redshift, Athena,
            Terraform. This facilitated Data Scientists to generate useful
            analytics on top of this data which streams across various products
            in CIB.
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
                <RiRadioButtonFill className="pr-1" /> AWS S3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> IAM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Glue
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Lamda
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Event Bridge
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SNS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Athena
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redshift
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> DataDog
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Terraform
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default datalake;
