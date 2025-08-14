import React from "react";
import { ShieldCheck, Zap, Monitor } from "lucide-react";

const services = [
  {
    id: 1,
    title: "SOC Operations & Threat Detection",
    description:
      "I monitor and investigate security alerts using SIEM tools like Splunk and ELK. Skilled in log analysis, incident documentation, and applying the MITRE ATT&CK framework to improve detection and response capabilities.",
    icon: <ShieldCheck size={36} className="text-green-400 mb-4" />,
  },
  {
    id: 2,
    title: "Security Automation & Scripting",
    description:
      "I develop Python, Bash, and PowerShell scripts to automate repetitive IT and SOC workflows — from log parsing and report generation to alert enrichment and early threat identification.",
    icon: <Zap size={36} className="text-yellow-400 mb-4" />,
  },
  {
    id: 3,
    title: "IT Support & Systems Administration",
    description:
      "I manage and secure enterprise IT environments, including Active Directory administration, user account provisioning, GPO policy enforcement, and hardware/software troubleshooting.",
    icon: <Monitor size={36} className="text-blue-400 mb-4" />,
  },
];

const Service = () => {
  return (
    <section className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center hover:scale-105"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
