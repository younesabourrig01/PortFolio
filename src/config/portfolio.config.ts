import Avatar from "@assets/images/avatar.png";
import AboutAvatar from "@assets/images/me.png";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import TwitterIconRaw from "@assets/SVGs/Twitter.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
  title: "Younes Abourrig | Full-Stack Developer",
  description:
    "Younes Abourrig is a junior full-stack developer focused on building robust web applications with React, Laravel, databases, Docker, and Git.",
  canonical: "",
  googleSiteVerification: "",
  keywords:
    "Younes Abourrig, Full Stack Developer, Junior Full Stack Developer, React Developer, Laravel Developer, Express.js, MongoDB, SQL, Docker, GitHub, Web Developer Portfolio",
  avatar: "/favicon.png",
  siteUrl: "https://younesabourrig.dev/",
};

// Header Section
export const headerConfig = {
  logotext: "Portfolio.",
  actionButton: {
    text: "Resume",
    url: "/Resume.pdf",
  },
};

// Hero Section
export const heroConfig = {
  salutation: "Hi, my name is",
  firstName: "Younes",
  lastName: "Abourrig",
  position: "Junior Full-Stack Developer",
  tagLine: {
    prefixText: "I build",
    highlightedText: "Robust Web Apps",
    suffixText: "with clean full-stack architecture.",
  },
  avatar: Avatar,
  links: [
    {
      label: "GitHub",
      url: "",
      icon: GithubIconRaw,
    },
    {
      label: "LinkedIn",
      url: "",
      icon: LinkedinIconRaw,
    },
    {
      label: "X",
      url: "",
      icon: TwitterIconRaw,
    },
    {
      label: "Instagram",
      url: "",
      icon: InstagramIconRaw,
    },
    {
      label: "Google Search",
      url: "",
      icon: GoogleIconRaw,
    },
  ],
};

// About Section
export const aboutConfig = {
  aboutAvatar: AboutAvatar,
  description: [
    "I am a junior full-stack developer passionate about building reliable web applications with Laravel, React, and modern database-driven architectures.",
    "My experience includes creating full-stack features, connecting frontend interfaces to backend APIs, working with SQL and NoSQL databases, and using tools like Docker and Git to keep development organized.",
    "During my full-stack developer internship, I worked on a React and Laravel application, translated client needs into key features, and improved both performance and the overall user experience.",
    "I am curious, autonomous, and comfortable learning new backend technologies while collaborating with teams to deliver practical, maintainable solutions.",
  ],
};

// Footer Section
export const footerConfig = {
  title: "Younes Abourrig | Portfolio.",
  credit: {
    text: "Created by ChiragChrg and updated by YA.",
    url: "https://github.com/ChiragChrg",
  },
  links: [
    {
      label: "GitHub",
      url: "",
      icon: GithubIconRaw,
    },
    {
      label: "LinkedIn",
      url: "",
      icon: LinkedinIconRaw,
    },
    {
      label: "X",
      url: "",
      icon: TwitterIconRaw,
    },
    {
      label: "Instagram",
      url: "",
      icon: InstagramIconRaw,
    },
    {
      label: "Discord",
      url: "",
      icon: DiscordIconRaw,
    },
    {
      label: "Google Search",
      url: "",
      icon: GoogleIconRaw,
    },
  ],
  copyrightText: `Copyright 2026-${new Date().getFullYear()} ChiragChrg.`,
};
