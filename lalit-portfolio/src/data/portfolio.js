import {
    FaJava,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    FaCode,
    FaLaptopCode,
    FaServer,
    FaMobileAlt,
    FaPalette,
    FaDatabase,
} from "react-icons/fa";
import {
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiPostman,

} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

import bikeRental from "../assets/bike-rental.png";
import medicare from "../assets/medicare.png";
import Myntra from "../assets/Myntra.png"
export const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Java",
                icon: FaJava,
                level: 85,
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                level: 90,
            },
        ],
    },

    {
        title: "Frontend",
        skills: [
            {
                name: "React.js",
                icon: FaReact,
                level: 90,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                level: 92,
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: FaNodeJs,
                level: 88,
            },
            {
                name: "Express.js",
                icon: SiExpress,
                level: 87,
            },
        ],
    },

    {
        title: "Database",
        skills: [
            {
                name: "MongoDB",
                icon: SiMongodb,
                level: 88,
            },
            {
                name: "MySQL",
                icon: SiMysql,
                level: 80,
            },
        ],
    },

    {
        title: "Tools",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                level: 90,
            },
            {
                name: "GitHub",
                icon: FaGithub,
                level: 90,
            },
            {
                name: "VS Code",
                icon: VscCode,
                level: 95,
            },
            {
                name: "Postman",
                icon: SiPostman,
                level: 88,
            },
        ],
    },
];


export const services = [
    {
        title: "Full-Stack MERN Development",
        icon: FaCode,
        description:
            "Develop complete web applications using MongoDB, Express.js, React.js, and Node.js with clean architecture and scalable code.",
    },

    {
        title: "Frontend Development",
        icon: FaLaptopCode,
        description:
            "Create beautiful, responsive, and high-performance user interfaces using React.js, Tailwind CSS, HTML5, CSS3, and JavaScript.",
    },

    {
        title: "Backend API Development",
        icon: FaServer,
        description:
            "Build secure RESTful APIs with Express.js and Node.js, including authentication, authorization, and database integration.",
    },

    {
        title: "Responsive Web Design",
        icon: FaMobileAlt,
        description:
            "Develop websites that provide a seamless experience across desktop, tablet, and mobile devices.",
    },

    {
        title: "UI/UX Design",
        icon: FaPalette,
        description:
            "Design clean, intuitive, and visually engaging interfaces focused on usability and user experience.",
    },

    {
        title: "Database Design",
        icon: FaDatabase,
        description:
            "Design and manage optimized MongoDB and MySQL databases for secure and efficient data storage.",
    },
];
export const projects = [
    {
        id: 1,
        title: "Bike & Scooter Rental System",
        image: bikeRental,

        description:
            "A full-stack MERN application that allows users to browse, book, and rent bikes and scooters in real time. It features secure authentication, role-based dashboards, live vehicle availability, booking history, rental fare calculation, and a responsive mobile-first interface.",

        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
            "REST API",
        ],

        github:
            "https://github.com/Lalit-225Maity/Bike_Scooter_rental",

        live: "#",
    },

    {
        id: 2,

        title: "Online Doctor Appointment System",

        image: medicare,

        description:
            "A MERN-based doctor appointment platform where patients can search doctors, book appointments, manage bookings, while doctors and administrators handle schedules and platform management securely.",

        tech: [
            "React",
            "Express",
            "Node",
            "MongoDB",
            "JWT",
            "Tailwind",
            "Postman",
        ],

        github:
            "https://github.com/Lalit-225Maity/Online_Doctor__Appointments",

        live: "https://online-doctor-appointments-8.onrender.com",
    },
    {
        id: 3,
        title: "Online Shopping App",
        image: Myntra,
        description: "Online Shopping App is a full-stack MERN web application that provides a secure and responsive e-commerce experience. Users can browse products, search items, manage their cart, and place orders. The application includes JWT-based authentication, encrypted password storage, an admin panel for product and order management, and follows a scalable RESTful API architecture.",
        tech: [
            "Express",
            "Node",
            "MongoDB",
            "JWT",
            "Tailwind",
            "Postman",
        ],
        github:"https://github.com/Lalit-225Maity/Myntra_Clone_Using_MERN",
        live:"#"

    }
];