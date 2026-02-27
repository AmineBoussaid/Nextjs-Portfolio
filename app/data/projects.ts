export interface Project {
    id: number;
    title: string;
    description: string;
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
        description: "Solution développée pour la RADEEF (Régie Autonome de Distribution d'Eau et d'Électricité de Fès). Conception et développement d'une application web centralisée visant à digitaliser le suivi des interventions techniques. La plateforme permet d'optimiser la gestion des réclamations clients, d'affecter efficacement les équipes sur le terrain et d'analyser les données via des tableaux de bord interactifs.",
        highlights: [
            {
                title: "Suivi centralisé",
                summary: "Digitalise et centralise le cycle complet des interventions techniques."
            },
            {
                title: "Affectation terrain",
                summary: "Améliore l'affectation des équipes pour accélérer la prise en charge."
            },
            {
                title: "Pilotage par la donnée",
                summary: "Fournit des tableaux de bord interactifs pour le suivi des performances."
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
                title: "Mise en relation rapide",
                summary: "Recherche et filtrage des prestataires par service, localisation et évaluation."
            },
            {
                title: "Suivi des réservations",
                summary: "Gestion de l'état des demandes et rappels automatiques via notifications."
            },
            {
                title: "Confiance et qualité",
                summary: "Système de notation et commentaires post-service pour améliorer la réputation."
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
    }
];
