import gasliLogo from "../assets/gasliLogo.jpeg";
import sodapalLogo from "../assets/sodapallogo-removebg-preview.png";
import minecraftLogo from "../assets/minecraftlogo.svg";

export type Lang = "en" | "es";

export interface Translation {
  developer: {
    name: string;
    fullName: string;
    title: string;
    description: string;
  };
  social: {
    github: string;
    email: string;
    location: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  about: {
    title: string;
    description: string;
    motto: string;
  };
  experiences: Array<{
    position: string;
    company: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  }>;
  projects: Array<{
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
  }>;
  skills: {
    develop: { title: string; description: string; details: string; tools: string[] };
    design: { title: string; description: string; details: string; tools: string[] };
  };
  ui: {
    nav: { about: string; work: string; contact: string };
    landing: { hello: string; an: string; role1: string; role2: string };
    whatIDo: { skillsetTools: string };
    career: { titleMy: string; titleAnd: string; titleExp: string; now: string };
    work: {
      titleMy: string;
      titlePersonal: string;
      titleProjects: string;
      toolsAndFeatures: string;
      wantSeeMore: string;
      exploreAll: string;
      seeAllWorks: string;
    };
    techStack: { title: string };
    cta: { hireMe: string };
    contact: {
      email: string;
      location: string;
      social: string;
      designedBy: string;
      by: string;
    };
    myWorks: { back: string; allTitle: string; works: string; subtitle: string };
    loading: { welcome: string; role1: string; role2: string };
    socialIcons: { resume: string };
    languageToggle: { label: string };
    cvFile: string;
  };
}

const en: Translation = {
  developer: {
    name: "Roberto Siracusa",
    fullName: "Roberto Siracusa",
    title: "Full-Stack Developer",
    description:
      "CS Student building intelligent systems and modern web applications. Passionate about machine learning, deep learning, and creating next-gen autonomous agents.",
  },
  social: {
    github: "RobertoSiracusa",
    email: "rjsc15.7@gmail.com",
    location: "Valencia, Venezuela",
  },
  contact: {
    email: "rjsc15.7@gmail.com",
    github: "https://github.com/RobertoSiracusa",
    linkedin: "https://www.linkedin.com/in/robertosiracusa/",
  },
  about: {
    title: "About Me",
    description:
      "I am a CS student from Valencia, Venezuela. I build mobile apps, chatbots, and modern web applications. My expertise includes Machine Learning, Mobile Development, and Full-Stack Web Development with React, Node.js, and Python. Currently building many different mobile and web applications. I have a competitive programming mindset and a deep passion for automation. I speak Spanish natively, English at a C1 advanced level, and German at an A2 elementary level.",
    motto: "For me, Coding is art.",
  },
  experiences: [
    {
      position: "CS Engineer",
      company: "Soon to graduate",
      period: "2027 ",
      location: "Valencia, Venezuela",
      description:
        "Soon to graduate as a Computer Science Engineer, with experience in full-stack development, AI, and building modern software solutions.",
      responsibilities: [
        "Developing machine learning models with TensorFlow and PyTorch",
        "Building AI-powered chatbots and conversational agents",
        "Working with LLMs and transformer architectures",
        "Creating autonomous AI systems and automation tools",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "LLMs", "NLP", "AI Agents"],
    },
    {
      position: "Full-Stack Developer",
      company: "Freelance",
      period: "2025",
      location: "Valencia, Venezuela",
      description:
        "Evolved into full-stack development, building complete web applications from frontend to backend with modern frameworks, databases, and deployment pipelines.",
      responsibilities: [
        "Developing full-stack web applications using React and Node.js",
        "Building RESTful APIs and integrating databases",
        "Creating responsive and interactive user interfaces",
        "Deploying and maintaining web applications in production",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
    },
    {
      position: "Frontend Developer",
      company: "Freelance",
      period: "2023 - 2024",
      location: "Valencia, Venezuela",
      description:
        "Started freelancing by designing and developing landing pages and static websites for small businesses and entrepreneurs.",
      responsibilities: [
        "Building responsive landing pages for clients",
        "Designing and implementing modern UI/UX",
        "Optimizing websites for performance and SEO",
        "Managing client relationships and project delivery",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Figma"],
    },
    {
      position: "Computer Engineering Student",
      company: "Universidad José Antonio Páez",
      period: "2023 - 2027",
      location: "Valencia, Venezuela",
      description:
        "Pursuing a Computer Engineering degree, expected to graduate in July 2027. Building strong foundations in computer science, algorithms, software architecture, and systems design.",
      responsibilities: [
        "Studying algorithms, data structures, and computer architecture",
        "Developing academic projects in software engineering",
        "Learning advanced mathematics and discrete structures",
        "Collaborating on team-based engineering projects",
      ],
      technologies: ["C", "Java", "Python", "SQL", "Data Structures", "Algorithms"],
    },
    {
      position: "Self-Taught Developer",
      company: "Self-Development",
      period: "2021 - 2022",
      location: "Valencia, Venezuela",
      description:
        "Began learning Python on my own, exploring programming fundamentals, automation, and building small projects that sparked my passion for software development.",
      responsibilities: [
        "Learning Python programming and core concepts",
        "Building automation scripts and small tools",
        "Exploring data structures and algorithms",
        "Developing problem-solving skills through practice",
      ],
      technologies: ["Python", "Automation", "Scripting", "Git", "Problem Solving"],
    },
    {
      position: "Language Skills",
      company: "Certifications",
      period: "2020 - Present",
      location: "Valencia, Venezuela",
      description:
        "Multilingual professional with advanced English proficiency and foundational German skills, enabling effective communication in international environments.",
      responsibilities: [
        "English — C1 Advanced level",
        "German — A2 Elementary level",
        "Spanish — Native speaker",
      ],
      technologies: ["English C1", "German A2", "Spanish Native"],
    },
    {
      position: "High School Graduate",
      company: "Bachillerato",
      period: "2020",
      location: "Valencia, Venezuela",
      description:
        "Graduated from high school, establishing the academic foundation that led to pursuing Computer Engineering.",
      responsibilities: [
        "Completed secondary education",
        "Developed foundational academic skills",
        "Discovered interest in technology and computing",
      ],
      technologies: ["Mathematics", "Physics", "Computer Basics"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "GasliApp",
      category: "Mobile App",
      technologies: "React Native, Supabase, Node.js, Express, Typescript, Android, iOS",
      image: gasliLogo,
      description:
        "A mobile app that provides real-time monitoring status of Gas Stations in Venezuela. Features include location-based  index, historical data visualization.",
    },
    {
      id: 2,
      title: "BCV Api",
      category: "API / Data",
      technologies: "PHP, Python, Java,Typescript,Javascript, Web Scraping, REST API",
      image: "",
      description:
        "An API that provides real-time exchange rates from the Central Bank of Venezuela (BCV). It scrapes the BCV website for accurate and up-to-date currency data, making it accessible for developers and applications.",
    },
    {
      id: 3,
      title: "Minecraft Syncronizer",
      category: "Cloud / Automation",
      technologies: "Python, AWS, Google Cloud, Azure, Automation, Scripting",
      image: minecraftLogo,
      description:
        "A cloud-based automation tool for synchronizing Minecraft worlds across different platforms.",
    },
    {
      id: 4,
      title: "Soon to be announced",
      category: "Web Service",
      technologies: "Typescript, Python, Django, React, Next.js, Node.js, AWS, Google Cloud",
      image: "",
      description:
        "A soon-to-be-announced web service that offers a web platform for enterprises to market and sell their products online, providing a seamless e-commerce experience for both businesses and customers.",
    },
    {
      id: 5,
      title: "SodaPal",
      category: "Mobile App",
      technologies: "React Native, Supabase, Node.js, Express, Typescript, Android",
      image: sodapalLogo,
      description: "A mobile app for managing and tracking soda consumption in real-time.",
    },
  ],
  skills: {
    develop: {
      title: "Mobile Developer",
      description: "native Android, native iOS, React Native, Flutter development",
      details:
        "Building many different mobile applications using React Native, Flutter, and native Android development. Creating seamless user experiences with modern UI/UX principles.",
      tools: [
        "React Native",
        "Flutter",
        "Android Studio",
        "Xcode",
        "TKinter",
        "Kotlin",
        "Swift",
        "TypeScript",
        "JavaScript",
      ],
    },
    design: {
      title: "FULL-STACK",
      description: "Modern web development & scalable applications",
      details:
        "Building responsive and performant web applications using React, Next.js, Node.js, and databases. Creating seamless user experiences with modern UI/UX principles.",
      tools: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "TailwindCSS",
        "REST APIs",
        "Docker",
        "Git",
      ],
    },
  },
  ui: {
    nav: { about: "ABOUT", work: "WORK", contact: "CONTACT" },
    landing: {
      hello: "Hello! I'm",
      an: "An",
      role1: "CSE Student",
      role2: "Full-Stack Developer",
    },
    whatIDo: { skillsetTools: "Skillset & tools" },
    career: {
      titleMy: "My career",
      titleAnd: "&",
      titleExp: "experience",
      now: "NOW",
    },
    work: {
      titleMy: "My",
      titlePersonal: "Personal",
      titleProjects: "Projects",
      toolsAndFeatures: "Tools and features",
      wantSeeMore: "Want to see more?",
      exploreAll: "Explore all of my projects and creations",
      seeAllWorks: "See All Works →",
    },
    techStack: { title: "Tech Stack" },
    cta: { hireMe: "Hire Me →" },
    contact: {
      email: "Email",
      location: "Location",
      social: "Social",
      designedBy: "Designed and Developed",
      by: "by",
    },
    myWorks: {
      back: "← Back to Home",
      allTitle: "All",
      works: "Works",
      subtitle: "A collection of all my projects and creations",
    },
    loading: {
      welcome: "Welcome",
      role1: "CSE Student",
      role2: "Full Stack Developer",
    },
    socialIcons: { resume: "RESUME" },
    languageToggle: { label: "ES" },
    cvFile: "/CV_Roberto_Siracusa.pdf",
  },
};

const es: Translation = {
  developer: {
    name: "Roberto Siracusa",
    fullName: "Roberto Siracusa",
    title: "Desarrollador Full-Stack",
    description:
      "Estudiante de Ingeniería en Computación que construye sistemas inteligentes y aplicaciones web modernas. Apasionado por el machine learning, deep learning y la creación de agentes autónomos de nueva generación.",
  },
  social: {
    github: "RobertoSiracusa",
    email: "rjsc15.7@gmail.com",
    location: "Valencia, Venezuela",
  },
  contact: {
    email: "rjsc15.7@gmail.com",
    github: "https://github.com/RobertoSiracusa",
    linkedin: "https://www.linkedin.com/in/robertosiracusa/",
  },
  about: {
    title: "Sobre Mí",
    description:
      "Soy estudiante de Ingeniería en Computación de Valencia, Venezuela. Desarrollo apps móviles, chatbots y aplicaciones web modernas. Mi experiencia incluye Machine Learning, Desarrollo Móvil y Desarrollo Web Full-Stack con React, Node.js y Python. Actualmente construyo diversas aplicaciones móviles y web. Tengo una mentalidad de programación competitiva y una profunda pasión por la automatización. Hablo español nativo, inglés nivel C1 avanzado y alemán nivel A2 elemental.",
    motto: "Para mí, programar es arte.",
  },
  experiences: [
    {
      position: "Ingeniero en Computación",
      company: "Próximo a graduarme",
      period: "2027 ",
      location: "Valencia, Venezuela",
      description:
        "Próximo a graduarme como Ingeniero en Computación, con experiencia en desarrollo full-stack, IA y construcción de soluciones de software modernas.",
      responsibilities: [
        "Desarrollo de modelos de machine learning con TensorFlow y PyTorch",
        "Construcción de chatbots y agentes conversacionales con IA",
        "Trabajo con LLMs y arquitecturas transformer",
        "Creación de sistemas autónomos de IA y herramientas de automatización",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "LLMs", "NLP", "Agentes IA"],
    },
    {
      position: "Desarrollador Full-Stack",
      company: "Freelance",
      period: "2025",
      location: "Valencia, Venezuela",
      description:
        "Evolucioné al desarrollo full-stack, construyendo aplicaciones web completas desde el frontend hasta el backend con frameworks modernos, bases de datos y pipelines de despliegue.",
      responsibilities: [
        "Desarrollo de aplicaciones web full-stack con React y Node.js",
        "Construcción de APIs RESTful e integración de bases de datos",
        "Creación de interfaces de usuario responsivas e interactivas",
        "Despliegue y mantenimiento de aplicaciones web en producción",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript"],
    },
    {
      position: "Desarrollador Frontend",
      company: "Freelance",
      period: "2023 - 2024",
      location: "Valencia, Venezuela",
      description:
        "Inicié como freelance diseñando y desarrollando landing pages y sitios web estáticos para pequeñas empresas y emprendedores.",
      responsibilities: [
        "Construcción de landing pages responsivas para clientes",
        "Diseño e implementación de UI/UX moderno",
        "Optimización de sitios web para rendimiento y SEO",
        "Gestión de relaciones con clientes y entrega de proyectos",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Figma"],
    },
    {
      position: "Estudiante de Ingeniería en Computación",
      company: "Universidad José Antonio Páez",
      period: "2023 - 2027",
      location: "Valencia, Venezuela",
      description:
        "Cursando la carrera de Ingeniería en Computación, con graduación esperada en julio de 2027. Construyendo bases sólidas en ciencias de la computación, algoritmos, arquitectura de software y diseño de sistemas.",
      responsibilities: [
        "Estudio de algoritmos, estructuras de datos y arquitectura de computadoras",
        "Desarrollo de proyectos académicos en ingeniería de software",
        "Aprendizaje de matemáticas avanzadas y estructuras discretas",
        "Colaboración en proyectos de ingeniería en equipo",
      ],
      technologies: ["C", "Java", "Python", "SQL", "Estructuras de Datos", "Algoritmos"],
    },
    {
      position: "Desarrollador Autodidacta",
      company: "Auto-formación",
      period: "2021 - 2022",
      location: "Valencia, Venezuela",
      description:
        "Comencé a aprender Python por mi cuenta, explorando fundamentos de programación, automatización y construyendo pequeños proyectos que despertaron mi pasión por el desarrollo de software.",
      responsibilities: [
        "Aprendizaje de programación en Python y conceptos clave",
        "Construcción de scripts de automatización y herramientas pequeñas",
        "Exploración de estructuras de datos y algoritmos",
        "Desarrollo de habilidades de resolución de problemas",
      ],
      technologies: ["Python", "Automatización", "Scripting", "Git", "Resolución de Problemas"],
    },
    {
      position: "Habilidades Lingüísticas",
      company: "Certificaciones",
      period: "2020 - Presente",
      location: "Valencia, Venezuela",
      description:
        "Profesional multilingüe con dominio avanzado de inglés y bases sólidas en alemán, lo que permite una comunicación efectiva en entornos internacionales.",
      responsibilities: [
        "Inglés — Nivel C1 Avanzado",
        "Alemán — Nivel A2 Elemental",
        "Español — Hablante nativo",
      ],
      technologies: ["Inglés C1", "Alemán A2", "Español Nativo"],
    },
    {
      position: "Bachiller",
      company: "Bachillerato",
      period: "2020",
      location: "Valencia, Venezuela",
      description:
        "Me gradué de bachillerato, estableciendo la base académica que me llevó a estudiar Ingeniería en Computación.",
      responsibilities: [
        "Educación secundaria completada",
        "Desarrollo de habilidades académicas fundamentales",
        "Descubrimiento del interés por la tecnología y la computación",
      ],
      technologies: ["Matemáticas", "Física", "Computación Básica"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "GasliApp",
      category: "App Móvil",
      technologies: "React Native, Supabase, Node.js, Express, Typescript, Android, iOS",
      image: gasliLogo,
      description:
        "Una app móvil que provee monitoreo en tiempo real del estado de las estaciones de servicio en Venezuela. Incluye índice basado en ubicación y visualización de datos históricos.",
    },
    {
      id: 2,
      title: "BCV Api",
      category: "API / Datos",
      technologies: "PHP, Python, Java, Typescript, Javascript, Web Scraping, REST API",
      image: "",
      description:
        "Una API que provee tasas de cambio en tiempo real del Banco Central de Venezuela (BCV). Hace web scraping del sitio del BCV para obtener datos precisos y actualizados, accesibles para desarrolladores y aplicaciones.",
    },
    {
      id: 3,
      title: "Minecraft Syncronizer",
      category: "Nube / Automatización",
      technologies: "Python, AWS, Google Cloud, Azure, Automatización, Scripting",
      image: minecraftLogo,
      description:
        "Herramienta de automatización en la nube para sincronizar mundos de Minecraft entre diferentes plataformas.",
    },
    {
      id: 4,
      title: "Próximamente",
      category: "Servicio Web",
      technologies: "Typescript, Python, Django, React, Next.js, Node.js, AWS, Google Cloud",
      image: "",
      description:
        "Servicio web a anunciarse próximamente, que ofrece una plataforma para que las empresas comercialicen y vendan sus productos online, brindando una experiencia e-commerce fluida tanto para negocios como clientes.",
    },
    {
      id: 5,
      title: "SodaPal",
      category: "App Móvil",
      technologies: "React Native, Supabase, Node.js, Express, Typescript, Android",
      image: sodapalLogo,
      description: "Una app móvil para gestionar y rastrear el consumo de bebidas en tiempo real.",
    },
  ],
  skills: {
    develop: {
      title: "Desarrollador Móvil",
      description: "Android nativo, iOS nativo, React Native, Flutter",
      details:
        "Construyo diversas aplicaciones móviles usando React Native, Flutter y desarrollo nativo de Android. Creo experiencias de usuario fluidas con principios modernos de UI/UX.",
      tools: [
        "React Native",
        "Flutter",
        "Android Studio",
        "Xcode",
        "TKinter",
        "Kotlin",
        "Swift",
        "TypeScript",
        "JavaScript",
      ],
    },
    design: {
      title: "FULL-STACK",
      description: "Desarrollo web moderno y aplicaciones escalables",
      details:
        "Construyo aplicaciones web responsivas y de alto rendimiento usando React, Next.js, Node.js y bases de datos. Creo experiencias de usuario fluidas con principios modernos de UI/UX.",
      tools: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "TailwindCSS",
        "REST APIs",
        "Docker",
        "Git",
      ],
    },
  },
  ui: {
    nav: { about: "SOBRE MÍ", work: "PROYECTOS", contact: "CONTACTO" },
    landing: {
      hello: "¡Hola! Soy",
      an: "",
      role1: "Estudiante de Computación",
      role2: "Desarrollador Full-Stack",
    },
    whatIDo: { skillsetTools: "Habilidades y herramientas" },
    career: {
      titleMy: "Mi carrera",
      titleAnd: "&",
      titleExp: "experiencia",
      now: "HOY",
    },
    work: {
      titleMy: "Mis",
      titlePersonal: "Proyectos",
      titleProjects: "Personales",
      toolsAndFeatures: "Herramientas y características",
      wantSeeMore: "¿Quieres ver más?",
      exploreAll: "Explora todos mis proyectos y creaciones",
      seeAllWorks: "Ver Todos los Proyectos →",
    },
    techStack: { title: "Tecnologías" },
    cta: { hireMe: "Contrátame →" },
    contact: {
      email: "Correo",
      location: "Ubicación",
      social: "Redes",
      designedBy: "Diseñado y Desarrollado",
      by: "por",
    },
    myWorks: {
      back: "← Volver al Inicio",
      allTitle: "Todos los",
      works: "Proyectos",
      subtitle: "Una colección de todos mis proyectos y creaciones",
    },
    loading: {
      welcome: "Bienvenido",
      role1: "Estudiante de Computación",
      role2: "Desarrollador Full Stack",
    },
    socialIcons: { resume: "CV" },
    languageToggle: { label: "EN" },
    cvFile: "/CV_Roberto_Siracusa.pdf",
  },
};

export const translations: Record<Lang, Translation> = { en, es };

export const detectLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "es") return stored;
  const nav = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || "en";
  return nav.toLowerCase().startsWith("es") ? "es" : "en";
};
