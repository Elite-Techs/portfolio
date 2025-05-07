import React from "react";
import ecomwithjs from "../assets/ecomwithjs.png";
import ecomwithbootstrap from "../assets/ecomwithbootstrap.png";
import FinancialIncidentResponsePlan from "../assets/Financial-Incident-Response-Plan.png";
import WeeklySSHReport from "../assets/Weekly-SSH-System-Report-preview.png";

const projects = [
  {
    id: 1,
    name: "Weekly SSH System Report Script",
    technologies: "Bash Scripting, Linux Automation",
    image: WeeklySSHReport,
    view: "https://github.com/Elite-Techs/Weekly-SSH-System-Report-Script",
    github: "https://github.com/Elite-Techs/Weekly-SSH-System-Report-Script",
  },
  {
    id: 2,
    name: "Financial Incident Response Plan",
    technologies: "Incident Response, Cybersecurity Strategy",
    image: FinancialIncidentResponsePlan,
    view: "https://github.com/Elite-Techs/Financial-Incident-Response-Plan",
    github: "https://github.com/Elite-Techs/Financial-Incident-Response-Plan",
  },
  {
    id: 3,
    name: "Ecommerce UI (Bootstrap)",
    technologies: "Bootstrap, JavaScript",
    image: ecomwithbootstrap,
    view: "https://elite-techs.github.io/ecommerce-boostrap/",
    github: "https://github.com/Elite-Techs/ecommerce-boostrap",
  },
  {
    id: 4,
    name: "Ecommerce Website (Vanilla Stack)",
    technologies: "HTML5, CSS3, JavaScript",
    image: ecomwithjs,
    view: "https://elite-techs.github.io/Elite-Techs-ecommercejs/",
    github: "https://github.com/Elite-Techs/Elite-Techs-ecommercejs",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20" id="projects"> {/* ✅ ID FIXED */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Recent Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p>

                <div className="flex flex-wrap gap-4">
                  {project.view && (
                    <a
                      href={project.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live`}
                      className="px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white font-medium hover:scale-105 transition"
                    >
                      Live Preview
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:scale-105 transition"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
