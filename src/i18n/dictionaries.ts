import type { Locale } from "./types";

export type OverviewCardCopy = {
  title: string;
  value: string;
  accent: string;
  icon: string;
  description: string;
};

export type EducationCopy = {
  period: string;
  title: string;
  description: string;
};

export type CertificateCopy = {
  name: string;
  issuer: string;
  period: string;
  badge: string;
};

export type ProjectCopy = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl: string;
  repositoryUrl?: string;
};

export type Dictionary = {
  meta: {
    htmlLang: string;
    clockLocale: string;
  };
  languageSwitcher: {
    label: string;
    es: string;
    en: string;
  };
  topBar: {
    systemName: string;
    status: string;
    statusValue: string;
    sysOnline: string;
  };
  sidebar: {
    workspace: string;
    overview: string;
    projects: string;
    contact: string;
    visitNetworks: string;
  };
  overview: {
    greeting: string;
    roles: string[];
    bio: string;
    photoAriaLabel: string;
    photoAlt: string;
    repositoryHeading: string;
    studiesHeading: string;
    certificatesHeading: string;
    verified: string;
    cards: OverviewCardCopy[];
    education: EducationCopy[];
    certificates: CertificateCopy[];
  };
  projects: {
    heading: string;
    description: string;
    cardLabel: string;
    previewAlt: string;
    viewProject: string;
    viewRepository: string;
    items: ProjectCopy[];
  };
  contact: {
    heading: string;
    description: string;
    locationLabel: string;
    locationValue: string;
    formEyebrow: string;
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    responseTime: string;
    submitted: string;
    mailSubjectFallback: string;
    mailBodyName: string;
    mailBodyEmail: string;
    mailBodyMessage: string;
    mailSubjectPrefix: string;
  };
};

const es: Dictionary = {
  meta: {
    htmlLang: "es",
    clockLocale: "es-PE",
  },
  languageSwitcher: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
  },
  topBar: {
    systemName: "D.A.P.C. SYSTEM v7.30",
    status: "STATUS",
    statusValue: "AVAILABLE",
    sysOnline: "SYS_ONLINE",
  },
  sidebar: {
    workspace: "WORKSPACE",
    overview: "Resumen",
    projects: "Proyectos",
    contact: "Contacto",
    visitNetworks: "Visita mis redes",
  },
  overview: {
    greeting: "BUENOS DÍAS",
    roles: [
      "Ingeniería de Sistemas",
      "Desarrollador",
      "Administrador de Redes",
      "Administrador de Sistemas Operativos",
    ],
    bio: "Soy un desarrollador de software con experiencia en la creación de aplicaciones web y móviles. Me apasiona la tecnología y siempre estoy buscando aprender nuevas habilidades y mejorar mis conocimientos en el campo del desarrollo de software.",
    photoAriaLabel: "Foto de Diego Alessandro Pineda Calagua",
    photoAlt: "Fotografía de Diego Alessandro Pineda Calagua",
    repositoryHeading: "Repositorio",
    studiesHeading: "Estudios",
    certificatesHeading: "Certificados",
    verified: "Verificado",
    cards: [
      {
        title: "Tecnologías",
        value: "08+",
        accent: "STACK",
        icon: "tecnologia",
        description:
          "Desarrollo con Next.js, React, TypeScript, Node.js y herramientas modernas para crear experiencias rápidas y escalables.",
      },
      {
        title: "Experiencia",
        value: "1A",
        accent: "EXP",
        icon: "experiencia",
        description:
          "Más de un año construyendo soluciones para infraestructura, automatización y proyectos web orientados a resultados.",
      },
      {
        title: "Enfoque",
        value: "100%",
        accent: "MINDSET",
        icon: "focus",
        description:
          "Me interesa crear software claro, mantenible y útil, con atención en la experiencia de usuario y la calidad técnica.",
      },
    ],
    education: [
      {
        period: "2022 — Actualidad",
        title: "Ingeniería de Sistemas",
        description:
          "Formación sólida en infraestructura, redes, sistemas operativos y desarrollo de soluciones tecnológicas.",
      },
    ],
    certificates: [
      {
        name: "CCNA",
        issuer: "Cisco",
        period: "2026",
        badge: "Networking",
      },
      {
        name: "CyberOps Associate",
        issuer: "Cisco",
        period: "2026",
        badge: "Security",
      },
      {
        name: "Linux Essentials",
        issuer: "Cisco / Linux",
        period: "2025",
        badge: "Systems",
      },
      {
        name: "Networking Fundamentals",
        issuer: "Cisco / IT",
        period: "2025",
        badge: "Infra",
      },
    ],
  },
  projects: {
    heading: "Proyectos",
    description:
      "Una selección de proyectos con su descripción, tecnologías utilizadas y enlaces para verlos.",
    cardLabel: "Proyecto",
    previewAlt: "Vista previa de",
    viewProject: "Ver proyecto",
    viewRepository: "Repositorio",
    items: [
      {
        id: "portfolio",
        title: "Portfolio personal",
        description:
          "Sitio web personal para mostrar perfil profesional, stack tecnológico y experiencia en desarrollo.",
        image: "/screen/portfolio_screen.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        projectUrl:
          "https://portfolio-4x5jqskl3-zentoo31s-projects.vercel.app/",
        repositoryUrl: "https://github.com/zentoo31/portfolio",
      },
      {
        id: "starter",
        title: "Starter",
        description:
          "Starter es una aplicación de escritorio desarrollada con Electron, React y TypeScript cuyo objetivo es automatizar las tareas más comunes después de instalar Windows.",
        image: "/screen/starter_screen.png",
        technologies: ["React", "Electron", "TypeScript", "Vite"],
        projectUrl: "https://github.com/zentoo31/starter/releases/tag/main",
        repositoryUrl: "https://github.com/zentoo31/starter",
      },
      {
        id: "db-pos-creator",
        title: "db-pos-creator",
        description:
          "Programa CLI que scrapea la web de Plaza Vea (https://www.plazavea.com.pe/) para obtener productos de abarrotes y permite crear una base de datos con esos productos según la base de datos elegida.",
        image: "/profile-placeholder.svg",
        technologies: [
          "Python",
          "BeautifulSoup",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQL Server",
        ],
        projectUrl: "https://github.com/zentoo31/db-pos-creator",
        repositoryUrl: "https://github.com/zentoo31/db-pos-creator",
      },
      {
        id: "routeiq",
        title: "RouteIQ",
        description:
          "RouteIQ es una aplicación móvil que proporciona a los usuarios información y ubicaciones de paradas de autobús y rutas necesarias para llegar a un destino específico. Además, incluye una función de pago para los autobuses abordados por los usuarios, todo ello mejorado por un chatbot GEMINI AI que facilita la selección de puntos de partida y destino.",
        image: "/screen/routeiq_screen.png",
        technologies: ["Android Studio", "Java", "Firebase", "GEMINI AI"],
        projectUrl: "https://github.com/zentoo31/RouteIQ",
        repositoryUrl: "https://github.com/zentoo31/RouteIQ",
      },
    ],
  },
  contact: {
    heading: "Hablemos de tu próximo proyecto",
    description:
      "Estoy disponible para colaborar en ideas, desarrollos web, aplicaciones y desafíos técnicos. Si tienes una propuesta o quieres conversar, aquí tienes la mejor forma de contactarme.",
    locationLabel: "Ubicación",
    locationValue: "Perú",
    formEyebrow: "Envíame un mensaje",
    formHeading: "Contacto directo",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder:
      "Cuéntame sobre tu proyecto, idea o colaboración...",
    submit: "Enviar mensaje",
    responseTime: "Respondo normalmente en 12 a 24 horas.",
    submitted: "Tu cliente de correo está listo.",
    mailSubjectFallback: "Nuevo mensaje",
    mailBodyName: "Nombre",
    mailBodyEmail: "Email",
    mailBodyMessage: "Mensaje",
    mailSubjectPrefix: "Contacto portfolio",
  },
};

const en: Dictionary = {
  meta: {
    htmlLang: "en",
    clockLocale: "en-US",
  },
  languageSwitcher: {
    label: "Language",
    es: "Spanish",
    en: "English",
  },
  topBar: {
    systemName: "D.A.P.C. SYSTEM v7.30",
    status: "STATUS",
    statusValue: "AVAILABLE",
    sysOnline: "SYS_ONLINE",
  },
  sidebar: {
    workspace: "WORKSPACE",
    overview: "Overview",
    projects: "Projects",
    contact: "Contact",
    visitNetworks: "Visit my networks",
  },
  overview: {
    greeting: "GOOD MORNING",
    roles: [
      "Systems Engineering",
      "Developer",
      "Network Administrator",
      "Operating Systems Administrator",
    ],
    bio: "I am a software developer with experience building web and mobile applications. I am passionate about technology and always looking to learn new skills and deepen my knowledge in software development.",
    photoAriaLabel: "Photo of Diego Alessandro Pineda Calagua",
    photoAlt: "Photograph of Diego Alessandro Pineda Calagua",
    repositoryHeading: "Repository",
    studiesHeading: "Studies",
    certificatesHeading: "Certificates",
    verified: "Verified",
    cards: [
      {
        title: "Technologies",
        value: "08+",
        accent: "STACK",
        icon: "tecnologia",
        description:
          "Building with Next.js, React, TypeScript, Node.js, and modern tools to create fast, scalable experiences.",
      },
      {
        title: "Experience",
        value: "1Y",
        accent: "EXP",
        icon: "experiencia",
        description:
          "Over a year building solutions for infrastructure, automation, and results-driven web projects.",
      },
      {
        title: "Focus",
        value: "100%",
        accent: "MINDSET",
        icon: "focus",
        description:
          "I care about clear, maintainable, useful software — with attention to user experience and technical quality.",
      },
    ],
    education: [
      {
        period: "2022 — Present",
        title: "Systems Engineering",
        description:
          "Solid training in infrastructure, networking, operating systems, and building technology solutions.",
      },
    ],
    certificates: [
      {
        name: "CCNA",
        issuer: "Cisco",
        period: "2026",
        badge: "Networking",
      },
      {
        name: "CyberOps Associate",
        issuer: "Cisco",
        period: "2026",
        badge: "Security",
      },
      {
        name: "Linux Essentials",
        issuer: "Cisco / Linux",
        period: "2025",
        badge: "Systems",
      },
      {
        name: "Networking Fundamentals",
        issuer: "Cisco / IT",
        period: "2025",
        badge: "Infra",
      },
    ],
  },
  projects: {
    heading: "Projects",
    description:
      "A selection of projects with descriptions, technologies used, and links to explore them.",
    cardLabel: "Project",
    previewAlt: "Preview of",
    viewProject: "View project",
    viewRepository: "Repository",
    items: [
      {
        id: "portfolio",
        title: "Personal portfolio",
        description:
          "Personal website showcasing professional profile, tech stack, and development experience.",
        image: "/screen/portfolio_screen.png",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        projectUrl:
          "https://portfolio-4x5jqskl3-zentoo31s-projects.vercel.app/",
        repositoryUrl: "https://github.com/zentoo31/portfolio",
      },
      {
        id: "starter",
        title: "Starter",
        description:
          "Starter is a desktop app built with Electron, React, and TypeScript that automates the most common tasks after installing Windows.",
        image: "/screen/starter_screen.png",
        technologies: ["React", "Electron", "TypeScript", "Vite"],
        projectUrl: "https://github.com/zentoo31/starter/releases/tag/main",
        repositoryUrl: "https://github.com/zentoo31/starter",
      },
      {
        id: "db-pos-creator",
        title: "db-pos-creator",
        description:
          "CLI tool that scrapes Plaza Vea (https://www.plazavea.com.pe/) for grocery products and builds a database from those products for the chosen database engine.",
        image: "/profile-placeholder.svg",
        technologies: [
          "Python",
          "BeautifulSoup",
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "SQL Server",
        ],
        projectUrl: "https://github.com/zentoo31/db-pos-creator",
        repositoryUrl: "https://github.com/zentoo31/db-pos-creator",
      },
      {
        id: "routeiq",
        title: "RouteIQ",
        description:
          "RouteIQ is a mobile app that gives users bus stop locations and routes to reach a destination. It also includes payment for boarded buses, enhanced by a GEMINI AI chatbot that helps choose start and end points.",
        image: "/screen/routeiq_screen.png",
        technologies: ["Android Studio", "Java", "Firebase", "GEMINI AI"],
        projectUrl: "https://github.com/zentoo31/RouteIQ",
        repositoryUrl: "https://github.com/zentoo31/RouteIQ",
      },
    ],
  },
  contact: {
    heading: "Let's talk about your next project",
    description:
      "I am available to collaborate on ideas, web development, applications, and technical challenges. If you have a proposal or just want to chat, here is the best way to reach me.",
    locationLabel: "Location",
    locationValue: "Peru",
    formEyebrow: "Send me a message",
    formHeading: "Direct contact",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project, idea, or collaboration...",
    submit: "Send message",
    responseTime: "I usually reply within 12 to 24 hours.",
    submitted: "Your email client is ready.",
    mailSubjectFallback: "New message",
    mailBodyName: "Name",
    mailBodyEmail: "Email",
    mailBodyMessage: "Message",
    mailSubjectPrefix: "Portfolio contact",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
