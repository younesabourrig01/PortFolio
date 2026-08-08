import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
    name: string;
    description: string;
    icon: ImageMetadata;
    link: string;
}

export const WebLanguagesStack = [
    {
        name: "HTML",
        description: "Semantic markup for accessible web pages and application interfaces.",
        icon: SKILLS.HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        description: "Responsive styling, layouts, and polished frontend presentation.",
        icon: SKILLS.CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        description: "Client-side and server-side programming for interactive web applications.",
        icon: SKILLS.JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "Python",
        description: "Backend and automation language, with experience around AI-oriented microservices.",
        icon: SKILLS.PythonIcon,
        link: "https://www.python.org/",
    },
] as const;

export const FrontendLibrariesStack = [
    {
        name: "React.js",
        description: "Component-based frontend library for building dynamic user interfaces.",
        icon: SKILLS.ReactIcon,
        link: "https://react.dev/",
    },
] as const;

export const StateEventStack = [] as const;

export const BackendApisStack = [
    {
        name: "Laravel",
        description: "PHP framework used to build structured backend applications and APIs.",
        icon: SKILLS.PhpIcon,
        link: "https://laravel.com/",
    },
    {
        name: "Express.js",
        description: "Node.js framework for APIs, services, and backend application logic.",
        icon: SKILLS.ExpressIcon,
        link: "https://expressjs.com/",
    },
    {
        name: "REST API",
        description: "HTTP API design for connecting frontend applications with backend services.",
        icon: SKILLS.RestApiIcon,
        link: "https://restfulapi.net/",
    },
] as const;

export const DatabaseStack = [
    {
        name: "SQL",
        description: "Relational database querying and schema design for application data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.mysql.com/",
    },
    {
        name: "MongoDB",
        description: "NoSQL database for document-based application data and flexible schemas.",
        icon: SKILLS.MongoIcon,
        link: "https://www.mongodb.com/",
    },
] as const;

export const CloudDevOpsStack = [
    {
        name: "Docker",
        description: "Containerization for consistent local and deployment environments.",
        icon: SKILLS.DockerIcon,
        link: "https://www.docker.com/",
    },
] as const;

export const ToolingTestingStack = [
    {
        name: "Git",
        description: "Version control for tracking changes and collaborating on code.",
        icon: SKILLS.GitIcon,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        description: "Repository hosting and collaboration for software projects.",
        icon: SKILLS.GithubIcon,
        link: "https://github.com/",
    },
] as const;

export const ConfigTemplatingStack = [] as const;

export const IdesDesignStack = [
    {
        name: "VS Code",
        description: "Primary editor for web development, debugging, and project work.",
        icon: SKILLS.VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
] as const;

export default {
    WebLanguagesStack,
    FrontendLibrariesStack,
    StateEventStack,
    BackendApisStack,
    DatabaseStack,
    CloudDevOpsStack,
    ToolingTestingStack,
    ConfigTemplatingStack,
    IdesDesignStack,
};
