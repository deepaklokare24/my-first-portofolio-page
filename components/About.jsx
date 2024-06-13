import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/aboutme.jpeg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm a Lead software engineer with over 13 years of experience
            driving complex software initiatives from conception through
            delivery. I have honed my skills in creating scalable, cloud-native
            applications that drive business growth and enhance user experience.
            I am most skilled and passionate about React, Redux, Node.js,
            NextJS, Angular, and a deep understanding of AWS cloud services. My
            passion lies in mentoring junior engineers, fostering a culture of
            continuous learning, and leading by example in the adoption of best
            practices and technical innovation.
          </p>
          <p className="py-2 text-gray-600">
            Core Qualifications:
            <ul style={{ listStyle: "inside" }}>
              <li>
                Deep expertise across full-stack - JavaScript, Typescript,
                React, Node.js, cloud, databases
              </li>
              <li>Led projects end-to-end from architecture through launch</li>
              <li>Passionate about mentoring and unlocking talent</li>
            </ul>
          </p>
          <p className="py-2 text-gray-600">
            Leadership Capabilities:
            <ul style={{ listStyle: "inside" }}>
              <li>Managed onsite and remote teams of up to 5 to 6 engineers</li>
              <li>
                Championed best practices adoption to minimize technical debt
              </li>
              <li>
                Navigated complex stakeholder landscapes to achieve buy-in
              </li>
              <li>
                Facilitating technical and strategic planning sessions that
                align with agile methodologies
              </li>
              <li>Managing cross-functional teams</li>
              <li>Strong verbal and written communication skills</li>
            </ul>
          </p>
          <p className="py-2 text-gray-600">
            Passions:
            <ul style={{ listStyle: "inside" }}>
              <li>
                Pushing innovation - proofs-of-concept with bleeding-edge
                technologies
              </li>
              <li>Community building - organizing talks, hackathons</li>
              <li>
                Enabling others - coaching teammates hands-on and clarifying
                blockers
              </li>
            </ul>
          </p>
          <p className="py-2 text-gray-600">
            I welcome opportunities to make a significant, enterprise-wide
            positive impact through strategic engineering programs, shaping the
            future of technology solutions. I'm always open to connecting with
            like-minded professionals who are passionate about using software to
            change the world. Let's explore how we can drive innovation
            together.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
