import React from "react";
import { person, about, logos, timeline } from "../constant";
import "./css/About.css";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen overflow-y-auto py-16 px-6 md:px-20 overflow-hidden"
    >
      <h1 className="text-2xl font-[SauceTomato] font-bold">
        <span className="text-8xl font-stretch-50% ">Hi!</span>
        <br />
        I'm {person.name.fullname}
      </h1>
      <p></p>
      <hr />
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        {/* Bio */}
        <p className="text-lg leading-relaxed mb-6">
          {about.bio.aboutme}
          <figure>
            <img
              src="./assets/not-me-2.jpg"
              alt="not me"
              className="w-[100px] h-[100px] mb-6 rounded-lg object-cover border-4 border-gray-700 transform hover:scale-110 transition duration-300"
            />
            <figcaption className="text-sm text-gray-400 mb-10 flex">
              <figcaption className="text-sm text-gray-400">
                <strong>Figure 1 : </strong> This is not me, but an AI generated
                image representing me.
              </figcaption>
            </figcaption>
          </figure>
        </p>
        {}

        {/* Objective */}
        <div className="mb-10 flex items-start justify-between gap-6">
          {/* Left side: Objective Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">
              Objective
            </h3>
            <p className="text-lg leading-relaxed">{about.bio.objective}</p>
          </div>

          {/* Right side: Image */}
          <div>
            <img
              src="./assets/bg1.jpg"
              alt="graduated-pic"
              className="graduated-pic"
            />
            <p>Figure 2 : Graduated</p>
          </div>
        </div>

        {/* Scopes / Focus Areas */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-2 text-pink-400">
            What I Do
          </h3>

          <ul className="list-disc list-inside space-y-2">
            {about.bio.scopes.map((scope, index) => (
              <li key={index} className="text-lg">
                {scope.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            Tech Stack
          </h3>
          <div className="tech-logo flex flex-wrap gap-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="tech-logo"
                className="w-14 h-14 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
