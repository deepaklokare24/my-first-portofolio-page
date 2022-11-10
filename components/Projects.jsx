import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import explorerImg from "../public/assets/projects/explorer.png";
import ilpImg from "../public/assets/projects/ilp.png";
import webaddinImg from "../public/assets/projects/webaddin.png";
import datalakeImg from "../public/assets/projects/awsdatalake.png";
import click2callImg from "../public/assets/projects/click2call.png";
import chimeInsightsImg from "../public/assets/projects/chimeInsights.png";
import echoImg from "../public/assets/projects/echo.png";
import chorusImg from "../public/assets/projects/chorus.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Outlook Web Add-in"
            backgroundImg={webaddinImg}
            projectUrl="/outlookWebAddin"
            tech="Microsoft Office JS, Outlook 365 Web Add-in, Next JS, React JS, Fluent UI"
          />
          <ProjectItem
            title="AWS Data Lake Formation"
            backgroundImg={datalakeImg}
            projectUrl="/awsDataLake"
            tech="AWS S3, IAM, Glue, Lambda, Redshift, Athena, Terraform, Java"
          />
          <ProjectItem
            title="Explorer"
            backgroundImg={explorerImg}
            projectUrl="/explorer"
            tech="HTML, CSS, React with Redux, D3.JS"
          />
          <ProjectItem
            title="Click2Call"
            backgroundImg={click2callImg}
            projectUrl="/click2call"
            tech="HTML, CSS, React, Spring Boot, Hibernate, Oracle"
          />
          <ProjectItem
            title="Interactive Landing Page"
            backgroundImg={ilpImg}
            projectUrl="/ilp"
            tech="ExtJS 4, Spring, Hibernate and Oracle"
          />
          <ProjectItem
            title="Echo"
            backgroundImg={echoImg}
            projectUrl="/echo"
            tech="HTML, CSS, React, Spring Boot, Hibernate, Oracle"
          />
          <ProjectItem
            title="Chime Insights"
            backgroundImg={chimeInsightsImg}
            projectUrl="/chimeInsights"
            tech="HTML, CSS, Angular, D3.JS, Highcharts, Spring, Hibernate, Oracle, R Language"
          />
          <ProjectItem
            title="Chorus"
            backgroundImg={chorusImg}
            projectUrl="/chorus"
            tech="HTML, CSS, jQuery, Bootstrap, Spring, JDBC and Oracle"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
