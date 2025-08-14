import React from 'react';
import { FaCertificate, FaUniversity } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';

const certifications = [
  {
    id: 1,
    title: "ISC2 Certified in Cybersecurity (CC)",
    platform: "ISC2",
    icon: <FaCertificate className="text-green-400 text-2xl" />,
    link: "#",
  },
  {
    id: 2,
    title: "Microsoft Cybersecurity Analyst",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-500 text-2xl" />,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/0HQIV16I3542",
  },
  {
    id: 3,
    title: "IBM & ISC2 Cybersecurity Specialist",
    platform: "Coursera",
    icon: <SiCoursera className="text-purple-400 text-2xl" />,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/1S7F52P0KW4F",
  },
  {
    id: 4,
    title: "Google Cloud Cybersecurity Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/VEO0A81GBQ08",
  },
  {
    id: 5,
    title: "Google Cybersecurity Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.credly.com/badges/fb00a53e-e039-40a1-991d-49ecd5e646d4/public_url",
  },
  {
    id: 6,
    title: "Google IT Automation with Python",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.credly.com/badges/b21b33d7-02ed-43ee-ac60-20a8088f5874/public_url",
  },
  {
    id: 7,
    title: "Google IT Support Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-blue-400 text-2xl" />,
    link: "https://www.credly.com/badges/3e320e7b-19aa-409c-b141-6caaba9d9fd7/public_url",
  },
  {
    id: 8,
    title: "IBM Generative AI Fundamentals",
    platform: "Coursera",
    icon: <SiCoursera className="text-pink-400 text-2xl" />,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/EMLNVVGOV0I3",
  },
  {
    id: 9,
    title: "Cybersecurity Mastery & Ethical Hacking",
    platform: "Torilo Academy",
    icon: <FaUniversity className="text-yellow-400 text-2xl" />,
    link: "https://drive.google.com/file/d/1nwAmSkG8eRlYm7R6_7FWJkGkMuESoVcz/view?usp=sharing",
  },
  {
    id: 10,
    title: "Google Data Analytics Professional Certificate",
    platform: "Coursera",
    icon: <SiCoursera className="text-green-300 text-2xl" />,
    link: "https://www.coursera.org/account/accomplishments/specialization/LXXSWPURCPLP",
  },
];

const Certifications = () => {
  return (
    <section className="bg-black text-white py-20" id="certifications">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center hover:scale-105"
            >
              {cert.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{cert.title}</h3>
              <p className="text-gray-400">{cert.platform}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
