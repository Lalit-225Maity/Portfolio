import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

         
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            Featured
            <span className="text-cyan-400">
              {" "}
              Projects
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-3xl mx-auto">
            Here are some of my full-stack applications built using
            modern web technologies.
          </p>
        </motion.div>

        

        <div className="space-y-16">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className={`grid lg:grid-cols-2 gap-10 items-center bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

           

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              

              <div className="p-10">

                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {project.description}
                </p>

               

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

               

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;