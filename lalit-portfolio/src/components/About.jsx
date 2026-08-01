import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLaptopCode />,
    title: "MERN Developer",
    desc: "Building modern, responsive and scalable full-stack web applications.",
  },
  {
    icon: <FaLightbulb />,
    title: "Quick Learner",
    desc: "Passionate about learning new technologies and improving every day.",
  },
  {
    icon: <FaRocket />,
    title: "Career Goal",
    desc: "Aspiring Software Developer looking for opportunities in the IT industry.",
  },
  {
    icon: <FaUserGraduate />,
    title: "CSE Student",
    desc: "Final-year B.Tech Computer Science & Engineering student.",
  },
];

function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto leading-8 mb-16">
          I am a passionate B.Tech Computer Science & Engineering student at
          <span className="text-cyan-400"> Future Institute of Technology</span>.
          I specialize in MERN Stack Development and enjoy creating secure,
          responsive, and scalable web applications using modern technologies.
          My goal is to start my career as a Software Developer in a leading IT company.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all hover:-translate-y-2"
            >
              <div className="text-4xl text-cyan-400 mb-4">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;