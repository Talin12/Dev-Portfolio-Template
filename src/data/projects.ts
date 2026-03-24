export type Page = "home" | "project1" | "nexus" | "quantum" | "contact";
export const PAGES: Page[] = ["home", "project1", "nexus", "quantum", "contact"];

export const PROJECTS = {
  project1: {
    video: "https://res.cloudinary.com/duk9coqow/video/upload/v1774381672/Video_Generation_Request_Fulfilled_2_vomuie.mp4",
    title: "PROJECTY\nSYSTEMS",
    subtitle: "We create interesting digital architectures for modern brands.",
    tags: [
      { id: "01", name: "CORE ENGINE", desc: "Distributed Node\nInfrastructure" },
      { id: "02", name: "VISUAL STACK", desc: "High-Density\nInterface Layer" }
    ],
    desc: "Projecty is an advanced framework that creates visual identities for various digital entities. Our final results are brilliant and technically sound.",
    date: "24 MARCH 2026 | ARCHIVE",
    footerQuote: "Architectures that attract global attention."
  },
  nexus: {
    video: "https://cdn.pixabay.com/video/2026/01/21/329185_large.mp4",
    title: "NEXUS\nPROTOCOL",
    subtitle: "High-speed data pathways for decentralized computing.",
    tags: [
      { id: "01", name: "NEURAL NET", desc: "Deep Learning\nIntegrations" },
      { id: "02", name: "DATA STREAM", desc: "Real-time Sync\nMechanisms" }
    ],
    desc: "Nexus handles immense real-time data flow with zero latency. It's built for environments where split-second decisions define success.",
    date: "25 MARCH 2026 | ARCHIVE",
    footerQuote: "Connections that transcend physical limits."
  },
  quantum: {
    video: "https://cdn.pixabay.com/video/2025/11/17/316531_large.mp4",
    title: "QUANTUM\nENGINE",
    subtitle: "Next-generation cryptographic processing units.",
    tags: [
      { id: "01", name: "CRYPTO CORE", desc: "Quantum-Safe\nEncryption" },
      { id: "02", name: "LOGIC GATES", desc: "Multi-State\nProcessing" }
    ],
    desc: "The Quantum Engine breaks conventional computing paradigms by processing multiple states simultaneously, delivering unparalleled security.",
    date: "26 MARCH 2026 | RESEARCH",
    footerQuote: "Defining the future of secure computation."
  },
  contact: {
    video: "https://cdn.pixabay.com/video/2025/10/11/309178_large.mp4",
    title: "ARCHITECT\nPROFILE",
    subtitle: "Ready to initialize your next digital masterpiece?",
    tags: [
      { id: "01", name: "DISCUSS", desc: "Project Scoping\n& Analysis" },
      { id: "02", name: "DEPLOY", desc: "Global Production\nRollout" }
    ],
    desc: "I am always looking for the next complex system to architect. If you have a functional vision, I have the operational capability to build it.",
    date: "STATUS: AVAILABLE",
    footerQuote: "Initiate contact sequence."
  }
};
