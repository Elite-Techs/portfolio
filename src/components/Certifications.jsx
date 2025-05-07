import React from "react";
import { FaCertificate, FaUniversity, FaExternalLinkAlt } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

const certifications = [
  {
    id: 1,
    title: "Google Cybersecurity Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.credly.com/badges/fb00a53e-e039-40a1-991d-49ecd5e646d4/public_url",
  },
  {
    id: 2,
    title: "Google IT Automation with Python",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.credly.com/badges/b21b33d7-02ed-43ee-ac60-20a8088f5874/public_url",
  },
  {
    id: 3,
    title: "Google IT Support Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://coursera.org/share/4ed3b98590bdb34405a8d6d03e20aae6",
  },
  {
    id: 4,
    title: "Cybersecurity Mastery & Ethical Hacking",
    platform: "Torilo Academy",
    icon: <FaUniversity className="text-yellow-400 text-2xl" />,
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section className="bg-black text-white py-20" id="certifications">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <FaCertificate className="text-green-400" /> Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-2">
                {cert.icon}
                <h3 className="text-xl font-semibold text-green-400">
                  {cert.title}
                </h3>
              </div>
              <p className="text-gray-400 mb-4">Issued by {cert.platform}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
