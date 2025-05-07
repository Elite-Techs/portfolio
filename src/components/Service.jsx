import React from "react";
import { ShieldCheck, Zap, CloudLightning } from "lucide-react";

const services = [
  {
    id: 1,
    title: "SOC & Threat Detection",
    description:
      "I monitor enterprise environments using SIEMs like Splunk and ELK, detect anomalies, analyze incidents, and escalate threats for rapid response.",
    icon: <ShieldCheck size={36} className="text-green-400 mb-4" />,
  },
  {
    id: 2,
    title: "Security Automation with Python & AI",
    description:
      "I build Python scripts and integrate AI tools to automate log analysis, alert triage, and incident response workflows in SOC environments.",
    icon: <Zap size={36} className="text-yellow-400 mb-4" />,
  },
  {
    id: 3,
    title: "Cloud Security & Compliance",
    description:
      "I secure multi-cloud infrastructures (AWS, Azure) through IAM, policy auditing, vulnerability management, and compliance enforcement.",
    icon: <CloudLightning size={36} className="text-blue-400 mb-4" />,
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
