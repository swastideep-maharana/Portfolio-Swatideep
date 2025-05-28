export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-purple-600 text-sm",
    img: "/SwastideepProfile.png",
    spareImg: "/grid.svg",
  },
  {
    id: 2,
    title:
      "Full Stack Developer passionate about creating innovative web solutions",
    description:
      "Specializing in MERN stack development with a focus on user experience and performance optimization",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title:
      "Tech stack includes React, Node.js, MongoDB, and modern web technologies",
    description:
      "Always learning and improving | Open to new challenges and opportunities",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-sm",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Available for freelance projects and full-time opportunities",
    description: "Let's create something amazing together!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title:
      "AI Tutor Companion AI Learning Companion transforms education through personalized AI tutoring and voice interaction. Built with Next.js and TypeScript, it offers interactive learning sessions with voice-enabled AI companions that adapt to your learning style.",
    img: "/Ai-tutuor.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/c.svg",
    ],
    link: "https://ai-voice-agent-interview-prep-4ztc.vercel.app",
  },

  {
    id: 2,
    title: "Tomato - Food Ordering & Delivery",
    des: "A full-stack food delivery web application with real-time order tracking, user authentication, and seamless payment integration. Features include restaurant listings, menu management, and order history.",
    img: "/tomato.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/html.png",
      "/css.png",
      "/mongo.png",
      "/node.png",
      "/c.svg",
    ],
    link: "https://food-delivery-web-frontend-eexv.vercel.app",
  },
  {
    id: 3,
    title: "BinkeyIt - E-commerce Platform",
    des: "A comprehensive e-commerce platform with features like product catalog, shopping cart, user authentication, payment processing, and order management. Built with modern web technologies for optimal performance.",
    img: "/binkeyit.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/html.png",
      "/css.png",
      "/mongo.png",
      "/node.png",
    ],
    link: "https://binkeyit-ecommercee.vercel.app",
  },
  {
    id: 4,
    title: "BuildIX - AI-Powered Web App Builder",
    des: "An innovative platform that enables users to create full-stack web applications using AI as a backend. Features include drag-and-drop interface, AI-powered code generation, and real-time preview.",
    img: "/buildix.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongo.png", "/c.svg"],
    link: "https://buildix.netlify.app",
  },
  {
    id: 5,
    title: "ChatterBox - Real-time Chat Application",
    des: "A modern real-time chat application supporting individual and group conversations. Features include instant messaging, user authentication, message history, and real-time notifications.",
    img: "/chatterbox.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/html.png",
      "/mongo.png",
      "/node.png",
      "/c.svg",
    ],
    link: "https://chatterbox-1qmd.onrender.com",
  },
  {
    id: 6,
    title: "RespawinGalaxy - Gaming Website",
    des: "An interactive gaming website showcasing the dynamic world of gaming. Features include game listings, user profiles, community features, and an immersive user interface.",
    img: "/respawing.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/html.png", "/css.png"],
    link: "https://respawingalaxy.netlify.app",
  },
];

export const testimonials = [
  {
    img: "/jsm-logo.png",
    name: "JSM Tech",
    quote:
      "A talented developer who consistently delivers high-quality work and innovative solutions.",
  },
  {
    img: "/jsm-logo.png",
    name: "BuildIX Team",
    quote:
      "Demonstrated exceptional skills in AI integration and full-stack development.",
  },
  {
    img: "/jsm-logo.png",
    name: "BinkeyIt Project",
    quote:
      "Created a robust e-commerce platform with excellent user experience and performance.",
  },
  {
    img: "/jsm-logo.png",
    name: "ChatterBox Users",
    quote:
      "Built a reliable and feature-rich real-time chat application that users love.",
  },
  {
    img: "/jsm-logo.png",
    name: "RespawinGalaxy Community",
    quote:
      "Developed an engaging gaming platform with great attention to detail and user experience.",
  },
];

export const companies = [
  {
    id: 1,
    name: "JavaScript",
    img: "/js.png",
  },
  {
    id: 2,
    name: "React",
    img: "/re.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    img: "/tail.svg",
  },
  {
    id: 4,
    name: "Node.js",
    img: "/node.png",
  },
  {
    id: 5,
    name: "MongoDB",
    img: "/mongo.png",
  },
  {
    id: 6,
    name: "TypeScript",
    img: "/ts.svg",
  },
  {
    id: 7,
    name: "CSS",
    img: "/css.png",
  },
  {
    id: 8,
    name: "HTML",
    img: "/html.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Developed responsive web applications using React.js and modern frontend technologies. Implemented user interfaces and integrated with backend services. Focused on performance optimization and accessibility.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Built full-stack applications using MERN stack. Implemented RESTful APIs, database design, and frontend interfaces. Integrated third-party services and implemented real-time features using WebSocket.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer",
    desc: "Created responsive websites and web applications. Worked with various frontend frameworks and backend technologies. Implemented SEO best practices and optimized website performance.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UI/UX Developer",
    desc: "Designed and implemented user interfaces with focus on user experience. Worked with modern design tools and frameworks. Created interactive prototypes and implemented responsive designs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/swastideep-maharana",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/swastideep__/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
  },
  {
    id: 4,
    img: "/twit.svg",
    link: "https://x.com/swastideep884",
  },
];
