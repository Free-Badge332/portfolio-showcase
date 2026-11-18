export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "ProShop",
    subtitle: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart management, and secure checkout.",
    image: "/projects-imgs/social.png",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "CSS"],
    githubUrl: "https://github.com/ezadin2/proshop-demo",
  },
  {
    id: 2,
    title: "ሀሴት Delivery",
    subtitle: "Delivery Management Platform",
    description:
      "An Ethiopian delivery platform with customer booking, real-time tracking, admin analytics, and a driver operations interface.",
    image: "/projects-imgs/quran.png",
    technologies: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    liveUrl: "https://hasset-delivery-front-end-side.onrender.com/",
    githubUrl: "https://github.com/ezadin2/Hasset_Delivery_Front-End_Side",
  },
  {
    id: 3,
    title: "Dina Mart",
    subtitle: "Complete E-commerce System",
    description:
      "A secure cross-platform shopping experience with verified Firebase authentication, product browsing, cart management, orders, and user accounts.",
    image: "/projects-imgs/notes.png",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Privacy Checker",
    subtitle: "Data Privacy Compliance",
    description:
      "A Streamlit tool built at INSA Summer Camp for PII scanning, anonymization, NLP entity detection, and automated compliance scoring.",
    image: "/projects-imgs/trello.png",
    technologies: ["Python", "Streamlit", "NLP", "Pandas"],
    githubUrl: "https://github.com/ezadin2",
  },
  {
    id: 5,
    title: "Audio Application",
    subtitle: "Cross-platform Audio Experience",
    description:
      "An audio-based mobile application showcasing sound features, modern UI, and responsive state management.",
    image: "/projects-imgs/portfolio.png",
    technologies: ["Flutter", "Firebase", "Dart", "State Management"],
    githubUrl: "https://github.com/ezadin2/Audio-player",
  },
  {
    id: 6,
    title: "Chat Application",
    subtitle: "Real-time Messaging",
    description:
      "A real-time chat application with a modern interface, user messaging, and a responsive design.",
    image: "/projects-imgs/chatApp.png",
    technologies: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://nextjs-setup-gilt.vercel.app/",
    githubUrl: "https://github.com/ezadin2/nextjs-setup",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Appreciation",
    image: "/imgs/appr2.png",
    link: "/imgs/appr2.png",
  },
  {
    id: 2,
    title: "Academic Achievement",
    image: "/imgs/appre1.png",
    link: "/imgs/appre1.png",
  },
  {
    id: 3,
    title: "Professional Certificate",
    image: "/imgs/tempo.png",
    link: "/imgs/tempo.png",
  },
  {
    id: 4,
    title: "Huawei Certificate",
    image: "/imgs/huawe.png",
    link: "/imgs/huawe.png",
  },
  {
    id: 5,
    title: "Cisco Certificate",
    image: "/imgs/cisco.png",
    link: "/imgs/cisco.png",
  },
  {
    id: 6,
    title: "Development Certificate",
    image: "/imgs/bago.png",
    link: "/imgs/bago.png",
  },
  {
    id: 7,
    title: "Technical Certificate",
    image: "/imgs/mosq2.png",
    link: "/imgs/mosq2.png",
  },
  {
    id: 8,
    title: "Oracle Certificate",
    image: "/imgs/orac.png",
    link: "/imgs/orac.png",
  },
];

export const resumeUrl = "/imports/Ezadin_Badiru_Resume.pdf";
