import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";

const socialLinks = [
  { name: "WhatsApp", url: "https://wa.me/+254759604380" },
  { name: "GitHub", url: "https://github.com/Leon8M" },
  { name: "Twitter", url: "https://x.com/leon_nex" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/leon-munene/" },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Leon Munene",
          from_email: form.email,
          to_email: "leonmunene254@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section: Social Links */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to collaborate? Contact me for insights on financial analysis
            and strategic growth solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg flex items-center gap-2 hover:text-primary transition"
              >
                {link.name} <FaArrowRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-transparent border border-gray-700 p-6 rounded-lg"
        >
          <div className="flex flex-col mb-6">
            <label
              htmlFor="name"
              className="text-sm text-gray-400 mb-2"
            >
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-black-200 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="email"
              className="text-sm text-gray-400 mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-black-200 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="text-sm text-gray-400 mb-2"
            >
              Tell me about the project
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              className="bg-black-200 text-white p-3 rounded-md outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition"
          >
            {loading ? "Submitting..." : "Submit message"}{" "}
            <FaArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
