import LOGOS from "@assets/Logos";
import SCREENSHOTS from "@assets/Shots";
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

export interface IProject {
    isHidden: boolean;
    showDemo?: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development" | "working now";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}

export const TECH_STACK = {
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),
    ...buildTechStack(SKILL_STACK.StateEventStack),
    ...buildTechStack(SKILL_STACK.BackendApisStack),
    ...buildTechStack(SKILL_STACK.DatabaseStack),
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};

const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Interface",
        description: "Built with layouts and interactions that stay usable across desktop and mobile screens.",
    },
    Architecture: {
        title: "Structured Architecture",
        description: "Organized around clear frontend, backend, and data responsibilities for maintainable development.",
    },
};

export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        showDemo: false,
        name: "PulseTask",
        shortDescription: "DevOps tool created to control multiple servers, manage hosted applications, and execute SSH commands.",
        description:
            "PulseTask is a DevOps tool created to control multiple remote servers with flexible workflows. It helps users create server templates to streamline management of hosted applications, connect securely via SSH, and monitor server environments. Built with Laravel, React, Redux, Tailwind CSS, SQL database, and containerized with Docker for seamless portability.",
        logoImage: LOGOS.PulseTaskLogo,
        previewImage: SCREENSHOTS.PulseTaskShots,
        deviceMockupImage: SCREENSHOTS.PulseTaskShots,
        theme: "#2563eb",
        status: "working now",
        liveUrl: "",
        sourceUrl: "https://github.com/younesabourrig01/PulseTask",
        technologies: [
            TECH_STACK.Laravel,
            TECH_STACK.Reactjs,
            TECH_STACK.Redux,
            TECH_STACK.TailwindCSS,
            TECH_STACK.SQL,
            TECH_STACK.Docker,
        ],
        features: [
            {
                title: "Remote Server Control & SSH",
                description: "Control multiple remote servers, create server management templates, and securely connect via SSH.",
            },
            {
                title: "Hosted Application Orchestration",
                description: "Streamline the management and deployment of applications hosted across server infrastructure.",
            },
            {
                title: "Docker Portability",
                description: "Utilizes Docker containers for consistent execution and easy environment setup.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
    {
        isHidden: false,
        showDemo: false,
        name: "SahaServe",
        shortDescription: "All-in-one restaurant management platform with AI review analysis and smart ordering assistant.",
        description:
            "SahaServe is an all-in-one restaurant management platform featuring an admin panel, server dashboards, Groq AI-powered review analysis, table reservation, and flexible order handling (on-site, pickup, home delivery). It includes a smart ordering assistant chatbot powered by DeepSeek AI that manages cart operations and suggests dishes based on customer preferences. Built on a hybrid architecture, AI microservices (Python/FastAPI) are separated from the core gateway (Laravel, React, Redux, Reverb, Tailwind CSS, Docker, SQL).",
        logoImage: LOGOS.SahaServeLogo,
        previewImage: SCREENSHOTS.SahaServeShots,
        deviceMockupImage: SCREENSHOTS.SahaServeShots,
        theme: "#f97316",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/younesabourrig01/SahaServe",
        technologies: [
            TECH_STACK.Laravel,
            TECH_STACK.Reactjs,
            TECH_STACK.Redux,
            TECH_STACK.Python,
            TECH_STACK.TailwindCSS,
            TECH_STACK.Docker,
            TECH_STACK.SQL,
        ],
        features: [
            {
                title: "All-in-One Restaurant Operations",
                description: "Admin panel, server dashboards, table reservation, and multi-mode order fulfillment (on-site dining, home delivery).",
            },
            {
                title: "Groq AI Review Analysis",
                description: "Automated analysis of customer reviews and feedback to optimize service quality.",
            },
            {
                title: "DeepSeek AI Smart Order Assistant",
                description: "Intelligent chatbot that adds/deletes items from the cart and recommends dishes tailored to customer conditions.",
            },
            {
                title: "Hybrid Microservice Architecture",
                description: "AI microservices built with Python & FastAPI separated from the main Laravel gateway application.",
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
    {
        isHidden: false,
        showDemo: false,
        name: "SmartShop",
        shortDescription: "E-commerce store built with a hybrid architecture combining Laravel, Go microservices, and React.",
        description:
            "SmartShop is an e-commerce store engineered with a modern hybrid architecture. It integrates a high-performance backend stack (Laravel & Go) with a feature-rich frontend (React, Redux, TypeScript, Tailwind CSS), backed by a relational SQL database and containerized with Docker.",
        logoImage: LOGOS.SmartShopLogo,
        previewImage: SCREENSHOTS.SmartShopShots,
        deviceMockupImage: SCREENSHOTS.SmartShopShots,
        theme: "#8b5cf6",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/younesabourrig01/SmartShop",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.TypeScript,
            TECH_STACK.Laravel,
            TECH_STACK.Go,
            TECH_STACK.Redux,
            TECH_STACK.TailwindCSS,
            TECH_STACK.SQL,
            TECH_STACK.Docker,
        ],
        features: [
            {
                title: "Hybrid Microservice Backend",
                description: "Combines Laravel API orchestration with high-speed Go services for optimal throughput.",
            },
            {
                title: "Type-Safe E-Commerce Storefront",
                description: "Built with React, TypeScript, and Redux to provide robust state management and seamless shopping experiences.",
            },
            {
                title: "Docker Containerization",
                description: "Fully containerized development and deployment environment for service isolation.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
    {
        isHidden: false,
        showDemo: false,
        name: "StorBuy",
        shortDescription: "Full microservices e-commerce platform built with Express.js, Go, Docker, React, and MongoDB.",
        description:
            "StorBuy is a full microservices e-commerce platform designed for scalability. It utilizes Express.js and Go for backend services, MongoDB for document storage, Docker for service containerization, and a modern React & Tailwind CSS user interface.",
        logoImage: LOGOS.StorBuyLogo,
        previewImage: SCREENSHOTS.StorBuyShots,
        deviceMockupImage: SCREENSHOTS.StorBuyShots,
        theme: "#10b981",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/younesabourrig01/StoreBuy",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Expressjs,
            TECH_STACK.Go,
            TECH_STACK.MongoDB,
            TECH_STACK.TailwindCSS,
            TECH_STACK.Docker,
        ],
        features: [
            {
                title: "Full Microservices Ecosystem",
                description: "Decomposed backend architecture using Express.js and Go microservices communicating across isolated services.",
            },
            {
                title: "NoSQL Data Layer",
                description: "Flexible document database management powered by MongoDB.",
            },
            {
                title: "Containerized Orchestration",
                description: "Dockerized setup for scalable deployment and simplified local microservice execution.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
];
