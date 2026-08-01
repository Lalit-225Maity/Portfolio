import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "services",
    "projects",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-slate-950/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
 

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-white">Lalit</span>

          <span className="text-cyan-400">.</span>
        </motion.h1>

       

        <ul className="hidden lg:flex gap-8">

          {menu.map((item) => (

            <li key={item}>

              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400"
                className="capitalize cursor-pointer text-gray-300 hover:text-cyan-400 transition"
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

     

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://github.com/Lalit-225Maity"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lalitmaity"
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/my_cv (3).pdf"
            className="px-5 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition"
          >
            Resume
          </a>

        </div>

        

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      
      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="lg:hidden bg-slate-900 backdrop-blur-xl"
          >

            {menu.map((item) => (

              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="block py-4 text-center capitalize border-b border-slate-800 hover:text-cyan-400 cursor-pointer"
              >
                {item}
              </Link>

            ))}

            <div className="flex justify-center gap-8 py-6">

              <a
                href="https://github.com/Lalit-225Maity"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/lalitmaity"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={24} />
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;