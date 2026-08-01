import { motion } from "framer-motion";
import { services } from "../data/portfolio";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
 

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
            I build modern, secure, and scalable web applications using the
            MERN stack with a strong focus on performance, clean architecture,
            and exceptional user experience.
          </p>
        </motion.div>

         

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400"
              >

              

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

                <div className="relative z-10">

                  

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:rotate-6 transition">

                    <Icon />

                  </div>

                  

                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                 

                  <p className="text-gray-400 leading-8">
                    {service.description}
                  </p>
 

                  <button className="mt-8 flex items-center gap-3 text-cyan-400 font-semibold group-hover:gap-5 transition-all">

                    Learn More

                    <FaArrowRight />

                  </button>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Services;