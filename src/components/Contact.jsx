import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_fpw07jt", // ✅ Your service ID
        "template_38eqja8", // ✅ Your template ID
        form.current,
        "TXhnj5nDTQ-2yELzZ" // ✅ Your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Let's Connect
            </h3>
            <p className="text-gray-300 text-lg">
              Have a project, job opportunity, or collaboration in mind? Feel free to reach out and let's make it happen.
            </p>

            <div className="space-y-4 text-gray-400 text-base">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400" />
                <a
                  href="mailto:princerichard547@gmail.com"
                  className="hover:underline"
                >
                  princerichard547@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-green-400" />
                <span>+234 (80) 7891 0382</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkedAlt className="text-green-400" />
                <span>#36 Ketu, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            noValidate
            className="space-y-6 bg-gray-900 p-8 rounded-xl shadow-md"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <input
              type="hidden"
              name="date"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
