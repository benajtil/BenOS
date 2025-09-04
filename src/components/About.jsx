import React from "react";
import { person, about, logos, timeline } from "../constant";
import "./css/About.css";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 mx-auto">
      <h1 className="text-2xl font-[SauceTomato] font-bold">
        <span className="text-8xl font-stretch-50% ">Hi!</span>
        <br />
        I'm {person.name.fullname}
      </h1>
      <p>
        Thank you for taking the time to view my portfolio. I’m excited to start
        my career in tech and eager to contribute my skills to a team where I
        can continue learning and growing. If you’d like to get in touch, feel
        free to reach me at{" "}
        <a
          href="mailto:benflorence.dev@gmail.com"
          className="text-blue-500 underline decoration-2 hover:text-blue-700"
        >
          benflorence.dev@gmail.com
        </a>
        .
      </p>
      <hr className="mt-10" />

      <div className="max-w-5xl mx-auto mt-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">
          <span className="font-sans text-3xl">{"<h1>"}</span>About Me
          <span className="font-sans text-3xl">{"</h1>"}</span>
        </h1>

        {/* Bio */}
        <div className="text-lg leading-relaxed mb-6 whitespace-pre-line">
          {about.bio.aboutme}
          <figure className="mt-10 mb-6">
            <img
              src="/assets/figure1.jpg"
              alt="not me"
              className="h-100px w-auto aspect-[16/9] object-cover transform"
            />
            <figcaption className="flex mt-2">
              <span className="font-sans">
                <strong>Figure 1 : </strong>
                <span className="font-[Win95]">
                  Developing a System that's not gonna work
                </span>
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Objective */}
        <hr />
        <div className="mb-10 flex items-start mt-20 justify-between gap-6">
          {/* Left side: Objective Text */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">
              <span className="font-sans text-3xl">{"<h1>"}</span>Objectives
              <span className="font-sans text-3xl">{"</h1>"}</span>
            </h1>
            <p className="text-lg leading-relaxed">{about.bio.objective}</p>
          </div>

          {/* Right side: Image */}
          <div>
            <img
              src="/assets/BenFlorenceAjEspirituTil.jpg"
              alt="graduated-pic"
              className="graduated-pic"
            />
            <figcaption className="flex justify-center mt-2">
              <span className="font-sans">
                <strong>Figure 2 : </strong>
                <span className="font-[Win95]">ME, 2025</span>
              </span>
            </figcaption>
          </div>
        </div>

        {/* Hobbies */}
        <div className="flex items-start gap-10">
          {/* Left - Image */}
          <img
            src="/assets/travel.jpg"
            alt="travel-pic"
            className="travel-pic w-1/2 aspect-9/12 object-cover"
          />

          {/* Right - Hobbies */}
          <div className="space-y-4 flex flex-col relative">
            <h1 className="text-3xl font-bold mb-6">
              <span className="font-sans text-3xl">{"<h1>"}</span>Hobbies
              <span className="font-sans text-3xl">{"</h1>"}</span>
            </h1>
            {about.bio.hobbies.map((hobby, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {hobby.text}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-col mb-2 bottom-0 flex justify-center left-0 mt-2">
          <span className="font-sans">
            <strong>Figure 3 : </strong>
            <span className="font-[Win95]">Pretend to travel</span>
          </span>
        </div>

        {/* Scopes / Focus Areas */}
        <div className="mb-10 p-4">
          <h3 className="text-xl font-bold mb-4 text-black font-mono">
            {"<h3>"} What I Do {"</h3>"}
          </h3>

          <ul className="list-disc list-inside grid grid-cols-3 gap-4 space-y-2 text-sm text-black">
            {about.bio.scopes.map((scope, index) => (
              <li key={index} className="leading-relaxed">
                {scope.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-4 text-black font-mono">
            {"<h3>"} Tech Stack {"</h3>"}
          </h3>

          <div className="grid grid-cols-5">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 transition"
              >
                <img
                  src={logo}
                  alt="tech-logo"
                  className="w-10 h-10 object-contain grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-6 border-2 border-gray-500 bg-gray-200 p-4 shadow-inner font-mono italic text-sm text-black">
          <p>
            Note: This project is inspired by the retro look of Windows 95.
            Originally, I created another portfolio with a pixel-themed design,
            but it didn’t feel as authentic, it was mostly just pixel fonts and
            didn’t fully capture the retro vibe I wanted.
          </p>
          <p className="mt-2">
            While exploring other portfolios for inspiration, I came across some
            amazing “gem” designs that truly brought the nostalgic OS feel to
            life. That’s when I decided to reimagine my portfolio using the
            Windows 95 aesthetic, blending modern development practices with a
            classic retro concept.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
