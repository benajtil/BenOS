import React from "react";
import { timeline } from "../constant";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-20 mx-auto max-w-4xl">
      {/* Retro Header */}
      <h1 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="font-sans text-3xl text-gray-700">{"<h1>"}</span>
        <span className="tracking-wider">Experience</span>
        <span className="font-sans text-3xl text-gray-700">{"</h1>"}</span>
      </h1>

      {/* Timeline */}
      <div className="relative border-l-4 border-black pl-6 space-y-12">
        {timeline.experience
          .filter((exp) => exp.display) // show only display: true
          .map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-100 border-2 border-black shadow-[4px_4px_0px_#000] p-5 rounded-md"
            >
              {/* Retro dot */}
              <div className="absolute -left-[30px] top-6 w-6 h-6 bg-yellow-300 border-2 border-black rounded-full shadow-[2px_2px_0px_#000]" />

              {/* Title + Dates */}
              <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg md:text-xl font-bold text-black">
                  {exp.title}
                </h2>
                <span className="text-xs md:text-sm text-gray-700 font-mono">
                  {exp.start} – {exp.end}
                </span>
              </div>

              {/* Company */}
              {exp.company && (
                <p className="text-sm font-mono text-blue-700 mb-2">
                  {exp.company}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-black mb-3">{exp.description}</p>

              {/* Logos */}
              {exp.logo && exp.logo.length > 0 && (
                <div className="flex gap-3 mt-2">
                  {exp.logo.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt="tech-logo"
                      className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Experience;
