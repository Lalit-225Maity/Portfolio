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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-24 pb-10"
    >
      
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

           
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="text-cyan-400 text-base sm:text-lg mb-2">
              Hello, I'm
            </p>

            <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Lalit
              <span className="text-cyan-400"> Maity</span>
            </h1>

            <div className="mt-5 h-12 sm:h-16 text-xl sm:text-2xl lg:text-3xl font-semibold">
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

            <p className="mt-6 text-gray-400 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              Passionate B.Tech CSE student and MERN Stack Developer
              who enjoys building modern, responsive and scalable web
              applications using React, Node.js, Express.js and
              MongoDB. I am actively seeking opportunities to begin
              my career as a Software Developer in the IT industry.
            </p>

            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">

              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-center"
              >
                Hire Me
              </a>

              <a
                href="/my_cv (5).pdf"
                className="px-7 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 transition flex items-center justify-center gap-2"
              >
                <FaDownload />
                Resume
              </a>

            </div>

          
            <div className="flex justify-center lg:justify-start gap-6 mt-8 text-2xl">

              <a
                href="https://github.com/Lalit-225Maity"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/lalitmaity"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:lalitmaity520@gmail.com"
                className="hover:text-cyan-400 transition hover:scale-110"
              >
                <FaEnvelope />
              </a>

            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40 animate-pulse"></div>

              <img
                src={profile}
                alt="Lalit Maity"
                className="
                  relative
                  object-cover
                  rounded-full
                  border-4
                  border-cyan-400
                  shadow-[0_0_50px_rgba(6,182,212,0.5)]

                  w-52 h-52
                  sm:w-64 sm:h-64
                  md:w-80 md:h-80
                  lg:w-[430px] lg:h-[430px]
                "
              />

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero; 