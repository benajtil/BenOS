import React, { useState } from "react";
import { projects } from "../constant";
import RetroModal from "./RetroModal";

const Project = () => {
  const [activeType, setActiveType] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Group projects by type
  const groupedProjects = projects.reduce((acc, project) => {
    const type = project.type || "Projects";
    if (!acc[type]) acc[type] = [];
    acc[type].push(project);
    return acc;
  }, {});

  // If a type is active, show details
  if (activeType) {
    return (
      <div className="p-6">
        <button
          onClick={() => setActiveType(null)}
          className="mb-4 px-3 py-1 !bg-gray-200 border border-black font-mono hover:bg-gray-300"
        >
          ← Back
        </button>

        <h2 className="text-4xl font-black mb-6">{activeType} Projects</h2>

        <div className="space-y-6">
          {groupedProjects[activeType].map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="border border-black p-6 bg-gray-50 shadow-md cursor-pointer hover:bg-gray-100"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>

              {/* Languages/Tools */}
              {project.languages && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-gray-400 text-sm font-mono"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Retro Modal */}
        <RetroModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    );
  }

  // Otherwise show list of categories
  return (
    <div className="p-6">
      <h2 className="text-6xl font-black mb-2 font-serif text-black">
        Projects
      </h2>
      <h4 className="text-2xl font-bold mb-8 font-mono text-gray-600">
        & Hobbies
      </h4>

      <p className="mb-8 text-sm text-black font-mono leading-relaxed">
        Click on a category below to see the projects in that field.
      </p>

      <div className="space-y-6">
        {Object.keys(groupedProjects).map((type, index) => (
          <div
            key={index}
            onClick={() => setActiveType(type)}
            className="border border-black p-6 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <h3 className="text-4xl font-black text-black mb-2">{type}</h3>
            <p className="uppercase tracking-wide font-mono text-gray-700">
              {groupedProjects[type].length} projects
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
