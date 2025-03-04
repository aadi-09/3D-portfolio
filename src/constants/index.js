import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tribute Page",
      description:
        "An elegant tribute page dedicated to Dr. Carl Sagan, showcasing his life, achievements, and contributions to science and astronomy. The page features a clean design with key information and quotes from Dr. Sagan, providing an insightful overview of his legacy.",
      tags: [
        {
          name: "HTML",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",
        },
        {
          name: "CSS",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/aadi-09/Projects/tree/main/TributePage",
    },
    {
      name: "ToDo List",
      description:
        "A user-friendly to-do list application that enables users to efficiently manage tasks by adding and deleting them. It features a clean and minimalistic design, making task management straightforward.",
      tags: [
        {
          name: "HTML",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",
        },
        {
          name: "CSS",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
        },
        {
          name: "JavaScript",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/aadi-09/Projects/tree/main/ToDo-List",
    },
    {
      name: "Calculator",
      description:
        "A simple yet functional calculator application that supports basic arithmetic operations. It features a clean and intuitive interface, making it easy to perform calculations.",
      tags: [
        {
          name: "HTML",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",
        },
        {
          name: "CSS",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
        },
        {
          name: "JavaScript",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aadi-09/CodSoft/tree/main/calculator",
    },
    {
      name: "Product Landing Page",
      description:
        "A simple product landing page with placeholder text and a basic layout. It serves as a template for showcasing products with sections for images, descriptions, and call-to-action buttons.",
      tags: [
        {
          name: "HTML",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500",
        },
        {
          name: "CSS",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500",
        },
        {
          name: "JavaScript",
          color: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/aadi-09/CodSoft/tree/main/landing-page",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };