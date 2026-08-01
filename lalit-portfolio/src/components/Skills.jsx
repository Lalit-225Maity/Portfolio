import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

         

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I enjoy learning modern technologies and building scalable,
            responsive and secure web applications using the MERN stack.
          </p>
        </motion.div>

        

        <div className="space-y-14">

          {skillCategories.map((category, categoryIndex) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
            >

              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">

                {category.skills.map((skill, index) => {

                  const Icon = skill.icon;

                  return (

                    <motion.div
                      key={index}
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 transition-all hover:border-cyan-400"
                    >

                      <div className="flex justify-between items-center mb-4">

                        <div className="flex items-center gap-4">

                          <Icon className="text-4xl text-cyan-400" />

                          <div>

                            <h4 className="text-lg font-semibold">
                              {skill.name}
                            </h4>

                          </div>

                        </div>

                        <span className="text-cyan-400 font-bold">
                          {skill.level}%
                        </span>

                      </div>

                      

                      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.3,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />

                      </div>

                    </motion.div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;