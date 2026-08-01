import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-20"
    > 
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Lalit
            <span className="text-cyan-400"> Maity</span>
          </h1>

          <div className="text-2xl lg:text-3xl font-semibold mt-5 h-16">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1500,
                "Frontend Developer",
                1500,
                "Backend Developer",
                1500,
                "Software Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            Passionate B.Tech CSE student and MERN Stack Developer
            who enjoys building modern, responsive and scalable
            web applications using React, Node.js, Express and
            MongoDB. I am actively seeking opportunities to begin
            my career as a Software Developer in the IT industry.
          </p>

          
          <div className="flex flex-wrap gap-5 mt-8">

            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
            >
              Hire Me
            </a>

            <a
              href="/my_cv (3).pdf"
              className="px-7 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 transition flex items-center gap-2"
            >
              <FaDownload />
              Resume
            </a>

          </div>
 
          <div className="flex gap-6 mt-8 text-2xl">

            <a
              href="https://github.com/Lalit-225Maity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/lalitmaity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:lalitmaity520@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Lalit Maity"
              className="relative h-80 w-80 lg:h-[450px] lg:w-[450px] rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_50px_rgba(6,182,212,0.5)]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero; 