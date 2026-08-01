import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, internship, or job opportunity? Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">
                  lalitmaity520@gmail.com
                </p>
              </div>

            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">
                  +91 8436789520
                </p>
              </div>

            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-cyan-500/20 flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">
                  Kolkata, West Bengal, India
                </p>
              </div>

            </div>

            <div className="flex gap-5 pt-6">

              <a
                href="https://github.com/Lalit-225Maity"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/lalitmaity"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-cyan-500/20 p-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-5 p-4 rounded-xl bg-slate-900 outline-none border border-slate-700 focus:border-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full mb-5 p-4 rounded-xl bg-slate-900 outline-none border border-slate-700 focus:border-cyan-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full mb-5 p-4 rounded-xl bg-slate-900 outline-none border border-slate-700 focus:border-cyan-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message..."
              required
              className="w-full mb-5 p-4 rounded-xl bg-slate-900 outline-none border border-slate-700 focus:border-cyan-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-xl font-semibold flex justify-center items-center gap-3"
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="mt-5 text-center text-cyan-400">
                {message}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;