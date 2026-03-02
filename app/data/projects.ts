export interface Project {
    id: number;
    title: string;
    description: string;
    meta?: string;
    highlights?: { title: string; summary: string }[];
    technologies: string[];
    category: 'web' | 'mobile' | 'design' | 'data' | 'cybersecurity';
    liveLink?: string;
    githubLink?: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "LexiFlow",
        description: "LexiFlow is a web-based document analysis and text processing platform designed to collect, normalize, index, search, and visualize textual corpora. The system follows a structured information retrieval pipeline including acquisition, normalization, extraction, indexing, search, and visualization. The goal of the project is to implement explainable algorithms for document processing and to provide an interactive dashboard for exploring analytical results such as word frequency statistics, word clouds, and corpus insights. LexiFlow demonstrates the fundamentals of search engines, text mining, and information visualization.",
        highlights: [
            {
                title: "Structured pipeline",
                summary: "Covers acquisition, normalization, extraction, indexing, and search in one workflow."
            },
            {
                title: "Explainable processing",
                summary: "Uses interpretable text processing steps to make results easier to understand."
            },
            {
                title: "Interactive analytics",
                summary: "Provides dashboard insights like word frequencies, word clouds, and corpus exploration."
            }
        ],
        technologies: ["React.js", "Bootstrap 5", "Python", "Flask", "REST API", "WordCloud", "Text Processing Algorithms", "HTML", "CSS", "JavaScript"],
        category: "data",
        githubLink: "https://github.com/AmineBoussaid/LexiFlow",
        images: [
            "/LexiFlow/1.png",
            "/LexiFlow/2.png",
            "/LexiFlow/3.png",
            "/LexiFlow/4.png",
            "/LexiFlow/5.png",
            "/LexiFlow/6.png",
            "/LexiFlow/7.png",
            "/LexiFlow/8.png",
            "/LexiFlow/9.png"
        ]
    },
    {
        id: 2,
        title: "OptiTask GIAO",
        description: "Solution developed for RADEEF (Autonomous Water and Electricity Distribution Authority of Fez). Design and development of a centralized web application to digitize technical intervention tracking. The platform optimizes customer complaint management, improves field team assignment, and analyzes operations through interactive dashboards.",
        highlights: [
            {
                title: "Centralized tracking",
                summary: "Digitizes and centralizes the full lifecycle of technical interventions."
            },
            {
                title: "Field assignment",
                summary: "Improves team assignment to accelerate response times."
            },
            {
                title: "Data-driven operations",
                summary: "Provides interactive dashboards for performance monitoring."
            }
        ],
        technologies: [
            "Angular",
            "TypeScript",
            "Angular Material",
            "Bootstrap",
            "Node.js",
            "Java",
            "Spring Boot",
            "Spring Web",
            "Spring Data JPA",
            "Spring Security",
            "JWT",
            "MySQL",
            "Docker",
            "Docker Compose",
            "Portainer",
            "MapStruct",
            "Lombok",
            "Swagger",
            "Maven"
        ],
        category: "data",
        githubLink: "https://github.com/AmineBoussaid/OptiTask-GIAO_Backend",
        images: [
            "/OptiTask GIAO/1.png",
            "/OptiTask GIAO/2.png",
            "/OptiTask GIAO/3.png",
            "/OptiTask GIAO/4.png",
            "/OptiTask GIAO/5.png",
            "/OptiTask GIAO/6.png",
            "/OptiTask GIAO/7.png",
            "/OptiTask GIAO/8.png",
            "/OptiTask GIAO/9.png",
            "/OptiTask GIAO/10.png"
        ]
    },
    {
        id: 3,
        title: "PrestaLink",
        description: "A mobile service and booking management application that connects clients with service providers. It includes advanced search and filtering, real-time booking tracking, automatic notifications, and a review system to build trust.",
        highlights: [
            {
                title: "Fast matching",
                summary: "Searches and filters providers by service, location, and rating."
            },
            {
                title: "Booking tracking",
                summary: "Manages request statuses and automatic reminder notifications."
            },
            {
                title: "Trust and quality",
                summary: "Rating and post-service review system to strengthen provider reputation."
            }
        ],
        technologies: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
        category: "mobile",
        githubLink: "https://github.com/DUNCANtTALL/Pfa",
        images: [
            "/PrestaLink/1.png",
            "/PrestaLink/2.png",
            "/PrestaLink/3.png",
            "/PrestaLink/4.png",
            "/PrestaLink/5.png",
            "/PrestaLink/6.png",
            "/PrestaLink/7.png"
        ]
    },
    {
        id: 4,
        title: "PeerConnect — Modern Scientific Peer Review Platform",
        description: "PeerConnect is a multi-role SaaS application that digitizes the full scientific review lifecycle: submission, assignment, expert review, and editorial decision. The platform centralizes collaboration between Admin, Author, and Reviewer in a single, clear, and traceable workflow. It enables teams to manage papers, track assignments, submit structured evaluations, and drive final decisions. The goal is to improve the quality, transparency, and speed of the peer-review process.",
        meta: "Type: Full-stack web app • Status: Production-ready UI • Role: Design & Development",
        highlights: [
            {
                title: "User roles",
                summary: "Admin drives the workflow, Author submits and tracks papers, Reviewer evaluates and recommends decisions."
            },
            {
                title: "Role-based authentication",
                summary: "Differentiated access by user profile with a clear permission hierarchy."
            },
            {
                title: "Peer-review workflow",
                summary: "Paper submission, reviewer assignment, status tracking, and editorial decision in one unified flow."
            },
            {
                title: "Structured evaluation",
                summary: "Multi-criteria form covering quality, originality, clarity, and final recommendation."
            },
            {
                title: "Architecture modulaire",
                summary: "Structured routing (public, auth, dashboard) and coherent components for a maintainable application."
            },
            {
                title: "Impact",
                summary: "Reduces peer-review friction, improves status visibility, and accelerates editorial decision-making."
            }
        ],
        technologies: ["Angular", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
        category: "web",
        githubLink: "https://github.com/AmineBoussaid/Peer-Connect",
        images: [
            "/PeerConnect/1.png",
            "/PeerConnect/2.png",
            "/PeerConnect/3.png",
            "/PeerConnect/4.png",
            "/PeerConnect/5.png",
            "/PeerConnect/6.png",
            "/PeerConnect/7.png",
            "/PeerConnect/8.png",
            "/PeerConnect/9.png",
            "/PeerConnect/10.png",
            "/PeerConnect/11.png",
            "/PeerConnect/12.png",
            "/PeerConnect/13.png",
            "/PeerConnect/14.png"
        ]
    }
];
