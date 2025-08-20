import React from "react";
import AdArchitecture from "../assets/Ad-architecture.png"; 
import ecomwithjs from "../assets/ecomwithjs.png";
import ecomwithbootstrap from "../assets/ecomwithbootstrap.png";
import FinancialIncidentResponsePlan from "../assets/Financial-Incident-Response-Plan.png";
import WeeklySSHReport from "../assets/Weekly-SSH-System-Report-preview.png";

const projects = [
  {
    id: 1,
    name: "Enterprise-Grade Active Directory Lab with SOC Integration",
    date: "Jul 2025 – Present",
    details: [
      "Built multi-server Windows environment with domain controller, file server, and Windows 11 clients.",
      "Automated onboarding for 50+ simulated users via PowerShell, reducing manual provisioning time by 80%.",
      "Configured Group Policy to enforce password policies, lockout rules, and audit logging.",
      "Integrated Splunk to monitor system events for proactive incident detection.",
      "Demonstrated cross-functional IT Support, SysAdmin, and SOC Analyst capabilities.",
    ],
    technologies:
      "Active Directory, Windows Server 2022, PowerShell, Splunk, Sysmon, GPO",
    image: AdArchitecture, 
    github: "#",
  },
  {
    id: 2,
    name: "Ecommerce Web Store – Bootstrap & JavaScript Versions",
    date: "",
    details: [
      "Developed responsive ecommerce interfaces with Bootstrap (mobile-optimized UI) and JavaScript (dynamic cart & product rendering).",
      "Published both versions on GitHub Pages for live demos.",
      "Tools: HTML, CSS, Bootstrap, JavaScript, GitHub Pages.",
    ],
    technologies: "HTML, CSS, Bootstrap, JavaScript",
    image: ecomwithbootstrap,
    view: "https://elite-techs.github.io/ecommerce-boostrap/",
    github: "https://github.com/Elite-Techs/ecommerce-boostrap",
  },
  {
    id: 3,
    name: "Sector-Specific Incident Response Plan Templates",
    date: "",
    details: [
      "Authored IR plans aligned with NIST Framework for Financial, Retail (POS), Healthcare (Ransomware), and Manufacturing (ICS/SCADA) sectors.",
      "Delivered compliance-ready playbooks for sector-specific threats.",
    ],
    technologies: "Incident Response, NIST Framework, Cybersecurity Strategy",
    image: FinancialIncidentResponsePlan,
    view: "https://github.com/Elite-Techs/Financial-Incident-Response-Plan",
    github: "https://github.com/Elite-Techs/Financial-Incident-Response-Plan",
  },
  {
    id: 4,
    name: "Weekly SSH System Report Script (Automation)",
    date: "",
    details: [
      "Created a Linux Bash script to generate & email weekly server health reports over SSH.",
      "Metrics include CPU, memory, disk space, uptime, and login activity.",
      "Configured as a cron job for proactive remote server monitoring.",
    ],
    technologies: "Bash, Linux Automation, Cron Jobs",
    image: WeeklySSHReport,
    view: "https://github.com/Elite-Techs/Weekly-SSH-System-Report-Script",
    github: "https://github.com/Elite-Techs/Weekly-SSH-System-Report-Script",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Recent Projects
        </h2>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-6 hover:scale-105 transition-transform duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-1">
                {project.name}
                {project.date && (
                  <span className="block text-sm text-gray-400 font-normal">
                    {project.date}
                  </span>
                )}
              </h3>
              <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm mb-4">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.view && (
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white font-medium hover:scale-105 transition"
                  >
                    Live Preview
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:scale-105 transition"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
