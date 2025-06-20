import React from "react";
import AboutImage from "../assets/aboutme-image.jpeg";
import { ShieldCheck, Cloud, Code2, Globe, Settings2 } from "lucide-react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-white-400">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="flex-shrink-0 w-64 h-64 md:w-72 md:h-80">
            <img
              src={AboutImage}
              alt="About Me"
              className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-green-500"
            />
          </div>

          {/* About Text */}
          <div className="flex-1">
            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              I’m <span className="text-green-400 font-semibold">Prince Richard</span>, a passionate <strong>Cybersecurity & SOC Analyst</strong> focused on building secure, resilient systems. I specialize in <em>threat detection, cloud security, incident response</em>, and <strong>Python-driven security automation</strong>.
              I'm currently interning at <strong>Redynox</strong> and recently completed a cybersecurity internship at <strong>Torilo Academy</strong>, where I gained hands-on experience with industry tools and real-world scenarios.
            </p>

            <p className="text-lg mb-6 leading-relaxed text-gray-300">
              I’ve earned global certifications from <strong>ISC2</strong> (CC), <strong>Google</strong> (Cybersecurity, IT Support, Python Automation, and Cloud Security), <strong>IBM & Microsoft</strong>, and I’m currently advancing through the <em>Cybersecurity Mastery & Ethical Hacking Program</em> while preparing for <strong>CompTIA Security+</strong>. With a solid background in <strong>full-stack development</strong> (React, PHP, Laravel), I bring a DevSecOps mindset to every project I work on.
            </p>

            {/* Skills Progress Bars */}
            <div className="space-y-5 mt-8">
              {[
                ["Security Tools (SIEM, EDR)", "w-11/12"],
                ["Threat Detection & SOC", "w-10/12"],
                ["Full-Stack Development", "w-10/12"],
                ["Scripting & Automation", "w-10/12"],
              ].map(([label, width]) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0"
                >
                  <span className="w-full sm:w-4/12 text-gray-400">
                    {label}:
                  </span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="text-green-400 w-5 h-5" />
                  Cybersecurity & SOC
                </h3>
                <ul className="list-disc list-inside">
                  <li>Splunk, ELK, Wireshark, Sysmon</li>
                  <li>MITRE ATT&CK, Threat Intelligence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Cloud className="text-blue-400 w-5 h-5" />
                  Cloud Platforms
                </h3>
                <ul className="list-disc list-inside">
                  <li>Google Cloud, AWS, Azure, IAM</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Settings2 className="text-yellow-400 w-5 h-5" />
                  Scripting & Automation
                </h3>
                <ul className="list-disc list-inside">
                  <li>Python, Bash, Cron, Automation Scripts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Code2 className="text-purple-400 w-5 h-5" />
                  Web Development
                </h3>
                <ul className="list-disc list-inside">
                  <li>React, PHP, Laravel, HTML, CSS, JavaScript</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Globe className="text-red-400 w-5 h-5" />
                  Tools & Collaboration
                </h3>
                <ul className="list-disc list-inside">
                  <li>Git, GitHub, VS Code, Trello, VirtualBox</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
