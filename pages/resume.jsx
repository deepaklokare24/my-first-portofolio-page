import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Deepak | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Deepak Lokare</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/deepakl24/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/deepaklokare24"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          A dynamic results-driven Software Engineer with over 12 years of
          experience in Designing, Architecting, and Implementing IT Solutions
          with an ability to easily adopt new and emerging technologies to meet
          business challenges; An analytical thinker and rapid problem solver;
          Demonstrates strong work ethics, excellent written and communication
          skills along with impressive track record of delivering success in
          numerous IT projects which involved both onsite and offshore models.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Fullstack Web Developer
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>RESTAPI
            <span className="px-2">|</span>D3.JS
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span>jQuery
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Material-UI
            <span className="px-2">|</span>Material-UI
            <span className="px-2">|</span>Git
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>AWS Certified Developer Associate
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">JP Morgan Chase</span>
            <span className="px-2">|</span>Bangalore, India
          </p>
          <p className="py-1 italic">
            Senior Software Engineer (2017 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Interacting with clients for gathering business needs, functional
              and high-level technical requirements and finalizing technical /
              functional specifications, HLD and LLD for the project
            </li>
            <li>
              Designing detailed technical components utilizing high-level
              architecture, design patterns and reusable code, considering real
              time constraints, functional & non-functional requirements
            </li>
            <li>
              Employing the best practices for coding, architecture, and
              security; holding scrum calls and updating on sprint status
            </li>
            <li>
              Providing post-implementation, application maintenance and
              enhancement support to the client with regard to the software
              application; ensuring all solutions are scalable, extensible &
              available from architecture standpoint
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Tata Consultancy Services Ltd
            </span>
            <span className="px-2">|</span>Bangalore, India / New Jersey, USA
          </p>
          <p className="py-1 italic">IT Analyst (2011 - 2017)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed enterprise large scale, distributed,
              performance oriented and technically sophisticated, complex
              applications.
            </li>
            <li>
              Communicated with product managers and UX designers to translate
              project requirements and business objectives into polished user
              interfaces.
            </li>
            <li>
              Developed many CRM, Dashboards, Mirco Blogging and Analytical tool
              by using my programming capabilities in HTML, CSS, JavaScript and
              other libraries like Jquery, Bootstrap, React, Angular, D3.
            </li>
            <li>
              Collaborated with teammates to deliver valuable features meeting
              business and customer needs.
            </li>
            <li>Managed and mentored a small team of developers.</li>
            <li>
              Worked closely with Devops team to implement and maintain CI/CD
              practices.
            </li>
            <li>
              Tested applications and performed troubleshooting prior to
              deployment.
            </li>
            <li>
              Collaborated with in-house UX designers to create sleek and
              innovative UI designs.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Engagements
        </h5>

        {/* Experience */}
        <div className="py-6">
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Won prize at JP Morgan Global Hackathon Event 2018</li>
            <li>Conferred with Best Team Player award in TCS</li>
            <li>
              Instructor for Master of Scince in Computer students, by training
              them Programming fundamentals and assisted them in building their
              final year academic projects
            </li>
            <li>
              Recognized for actively volunteering in many CSR initiatives like
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                <li>Teaching Government School children</li>
                <li>Making audio contents for visually impaired people</li>
                <li>
                  Enabling office security Guards with basics of spoken English
                </li>
              </ul>
            </li>
            <li>
              Received first prize in National level MechPrize competition for
              presenting paper on Claytronics
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
