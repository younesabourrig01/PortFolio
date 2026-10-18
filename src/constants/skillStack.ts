import SKILLS from "@/assets/skills";

export interface ISkill {
  name: string;
  description: string;
  icon: ImageMetadata;
  link: string;
}

export const WorkWithStack = [
  {
    name: "TypeScript",
    description: "I use TypeScript to write safer, more scalable code.",
    icon: SKILLS.TsIcon,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React.js",
    description:
      "I can build dynamic frontend interfaces with reusable React components.",
    icon: SKILLS.ReactIcon,
    link: "https://react.dev/",
  },
  {
    name: "Laravel",
    description:
      "I can build structured backend applications and APIs with Laravel.",
    icon: SKILLS.LaravelIcon,
    link: "https://laravel.com/",
  },
  {
    name: "Express.js",
    description: "I can create backend APIs and services with Express.js.",
    icon: SKILLS.ExpressIcon,
    link: "https://expressjs.com/",
  },
  {
    name: "Tailwind CSS",
    description:
      "I use Tailwind CSS to build modern, responsive UIs with utility-first styling.",
    icon: SKILLS.TailwindIcon,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    description:
      "I use Redux to manage complex application state in a predictable way.",
    icon: SKILLS.ReduxIcon,
    link: "https://redux.js.org/",
  },
  {
    name: "Git",
    description: "I use Git to track changes and manage project history.",
    icon: SKILLS.GitIcon,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    description:
      "I use GitHub for repositories, collaboration, and project sharing.",
    icon: SKILLS.GithubIcon,
    link: "https://github.com/",
  },
  {
    name: "Docker",
    description:
      "I use Docker for consistent development environments and containerized services.",
    icon: SKILLS.DockerIcon,
    link: "https://www.docker.com/",
  },
] as const;

export const ToolsStack = [] as const;

export const DatabaseStack = [
  {
    name: "SQL",
    description: "I can work with relational databases and structured queries.",
    icon: SKILLS.MysqlIcon,
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    description: "I can work with NoSQL document databases using MongoDB.",
    icon: SKILLS.MongoIcon,
    link: "https://www.mongodb.com/",
  },
] as const;

export const LearningStack = [
  {
    name: "Astro",
    description:
      "I am learning Astro to build fast, content-focused websites with a modern development experience.",
    icon: SKILLS.AstroIcon,
    link: "https://astro.build/",
  },
  {
    name: "Java",
    description: "I am learning Java as part of my mobile development journey.",
    icon: SKILLS.JavaIcon,
    link: "https://www.java.com/",
  },
  {
    name: "Flutter",
    description:
      "I am learning Flutter to build cross-platform mobile applications.",
    icon: SKILLS.FlutterIcon,
    link: "https://flutter.dev/",
  },
  {
    name: "Android Studio",
    description: "I am learning Android Studio for Android app development.",
    icon: SKILLS.AndroidStudioIcon,
    link: "https://developer.android.com/studio",
  },
] as const;

export const WebLanguagesStack = LearningStack;
export const FrontendLibrariesStack = WorkWithStack;
export const StateEventStack = [] as const;
export const BackendApisStack = WorkWithStack;
export const CloudDevOpsStack = WorkWithStack;
export const ToolingTestingStack = WorkWithStack;
export const ConfigTemplatingStack = [] as const;
export const IdesDesignStack = [] as const;

export default {
  WorkWithStack,
  ToolsStack,
  DatabaseStack,
  LearningStack,
  WebLanguagesStack,
  FrontendLibrariesStack,
  StateEventStack,
  BackendApisStack,
  CloudDevOpsStack,
  ToolingTestingStack,
  ConfigTemplatingStack,
  IdesDesignStack,
};
