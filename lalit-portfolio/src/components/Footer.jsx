import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              Lalit
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Passionate MERN Stack Developer dedicated to building
              responsive, secure and scalable web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#skills">Skills</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Lalit-225Maity"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/lalitmaity"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:lalitmaity520@gmail.com"
                className="hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-gray-400 mt-5">
              Kolkata, West Bengal, India
            </p>

          </div>

        </div>

        <hr className="border-slate-800 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-400">
            © 2026 Lalit Maity. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;