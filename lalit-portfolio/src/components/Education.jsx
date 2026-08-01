import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/20"
        >
          <div className="flex items-center gap-5">

            <div className="text-5xl text-cyan-400">
              <FaGraduationCap />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="text-cyan-400 mt-2">
                Future Institute of Technology
              </p>

              <p className="text-gray-400 mt-2">
                Currently Pursuing • 4th Year
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;