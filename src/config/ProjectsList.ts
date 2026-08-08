import LOGOS from "@assets/Logos";
import SCREENSHOTS from "@assets/Shots";
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

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
        name: "SahaServe",
        shortDescription: "Full-stack restaurant management application for orders, inventory, and operations.",
        description:
            "SahaServe is a full-stack final-year project designed for restaurant management. It combines order handling, stock tracking, and operational workflows in a React frontend supported by a Laravel backend and an AI-oriented Python microservice.",
        logoImage: LOGOS.CookeezLogo,
        previewImage: SCREENSHOTS.CookeezShots,
        deviceMockupImage: SCREENSHOTS.CookeezShots,
        theme: "#f97316",
        status: "completed",
        liveUrl: "",
        sourceUrl: "",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Laravel,
            TECH_STACK.Python,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Restaurant Operations",
                description: "Supports core workflows for managing restaurant orders, stock, and day-to-day service activity.",
            },
            {
                title: "AI Microservice",
                description: "Uses a Python microservice to keep specialized processing separate from the main application backend.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
    {
        isHidden: false,
        name: "PluseTask",
        shortDescription: "DevOps-oriented tool for remote server management and orchestration.",
        description:
            "PluseTask is a DevOps management tool focused on remote server orchestration. The application uses a Laravel backend with a React frontend to centralize server-related actions and make infrastructure workflows easier to monitor and control.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.NextmartShots,
        deviceMockupImage: SCREENSHOTS.NextmartShots,
        theme: "#2563eb",
        status: "completed",
        liveUrl: "",
        sourceUrl: "",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Laravel,
            TECH_STACK.Docker,
            TECH_STACK.Git,
        ],
        features: [
            {
                title: "Remote Server Management",
                description: "Groups server management tasks into a clearer application workflow for distance-based operations.",
            },
            {
                title: "DevOps Workflow",
                description: "Designed around orchestration needs, environment consistency, and operational visibility.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
    {
        isHidden: false,
        name: "Storebuy",
        shortDescription: "Microservices-based application with Express.js, MongoDB, Go, and React.",
        description:
            "Storebuy is a microservices project built to explore backend decomposition, service communication, and performance optimization. It uses Express.js and MongoDB for the main backend, a dedicated Go microservice, and a React frontend.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.NextmartShots,
        deviceMockupImage: SCREENSHOTS.NextmartShots,
        theme: "#16a34a",
        status: "completed",
        liveUrl: "",
        sourceUrl: "",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Expressjs,
            TECH_STACK.MongoDB,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Microservice Architecture",
                description: "Splits application responsibilities across services to make backend behavior easier to scale and evolve.",
            },
            {
                title: "Service Communication",
                description: "Focuses on communication between services and backend performance optimization.",
            },
            COMMON_FEATURES.Architecture,
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: [],
    },
];
