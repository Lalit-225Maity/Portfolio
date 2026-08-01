import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20"
        >
          <div className="flex items-start gap-5">

            <div className="text-5xl text-cyan-400">
              <FaBriefcase />
            </div>

            <div>

              <h3 className="text-2xl font-bold">
                MERN Stack Intern
              </h3>

              <p className="text-cyan-400 mt-2">
                Ardent Computech Limited
              </p>

              <p className="text-gray-400 mt-3 leading-8">
                Completed a MERN Stack internship where I gained hands-on
                experience in developing full-stack web applications using
                React.js, Node.js, Express.js, and MongoDB. Worked with REST
                APIs, authentication using JWT, responsive UI development with
                Tailwind CSS, and Git/GitHub for version control.
              </p>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;