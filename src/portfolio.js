/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Younes Abourrig",
  title: "Hi all, I'm Younes",
  subTitle: emoji(
    "Junior Full Stack web developer, never stop learning, have many skils on building websites and deploying.I can use many technologies like React, Laravel and ExpressJs , I'm also in my way to learn Golang."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/younesabourrig01",
  linkedin: "https://www.linkedin.com/in/younes-abourrig-08103a338/",
  gmail: "younesabourrig@gmail.com",
  gitlab: "https://gitlab.com/younesabourrig",
  facebook: "https://web.facebook.com/youness.abourig?_rdc=1&_rdr#",
  instagram: "https://www.instagram.com/younes1ya",
  Twitter: "https://x.com/AbourrigYounes",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces"),
    emoji(
      "⚡ Develop strong, scalable backends using various architectures and design patterns, such as Microservices and MVC."
    ),
    emoji("⚡ Consume and integrate RESTful APIs in frontend applications.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "golang",
      imageSrc: "https://cdn.simpleicons.org/go/6AD7E5"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "mongodb",
      imageSrc: "https://cdn.simpleicons.org/mongodb/47A248"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "OFPPT ISTA MIRLEFT",
      logo: require("./assets/images/ofppt.png"),
      subHeader: "Technicien Spécialisé en Développement Digital",
      duration: "2024 to 2026",
      descBullets: [
        "Learn build websites",
        "Learn handel Data Bases",
        "Full formation in degitale world"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack developer",
      company: "ValaBlue",
      companylogo: require("./assets/images/valablue.png"),
      date: "Mars 2026 (1 month)",
      desc: "My first internship, it was 100% remote, i learn many things like how to use git and gitHub",
      descBullets: [
        "Create my first fullstack web application",
        "Learn use many tooles like git and gitHub",
        "Create project from 0 form charts to working code",
        "Learn Laravel basecs + React with discovring new technologys (golang + TypeScript)",
        "Call my own api and fetch data from it"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Projects Section

const projectSection = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE BUILT AND SHARED",
  projects: [
    {
      title: "StoreBuy ",
      description: "Microservices E-commerce Platform.",
      technologies: [
        {
          name: "react",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          name: "expressJs",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          name: "mongodb",
          imageSrc: "https://cdn.simpleicons.org/mongodb/47A248"
        },
        {
          name: "git",
          fontAwesomeClassname: "fab fa-git-alt"
        },
        {
          name: "docker",
          fontAwesomeClassname: "fa-brands fa-docker"
        },
        {
          name: "docker",
          fontAwesomeClassname: "fa-brands fa-docker"
        },
        {
          name: "Golang",
          fontAwesomeClassname: "fa-brands fa-golang"
        }
      ],
      sourceCodeLink: "https://github.com/younesabourrig01/StoreBuy"
    },
    {
      title: "SmartShop ",
      description:
        " SmartShop is a full-stack e-commerce web application built with React (Frontend) and Laravel (Backend), with an additional Go microservice.",
      technologies: [
        {
          name: "react",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          name: "laravel",
          fontAwesomeClassname: "fab fa-laravel"
        },
        {
          name: "SQLite",
          fontAwesomeClassname: "fa-solid fa-database"
        },
        {
          name: "git",
          fontAwesomeClassname: "fab fa-git-alt"
        },
        {
          name: "Taillwind",
          fontAwesomeClassname: "fa-brands fa-tailwind-css"
        },
        {
          name: "Golang",
          fontAwesomeClassname: "fa-brands fa-golang"
        }
      ],
      sourceCodeLink: "https://github.com/younesabourrig01/SmartShop"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/valablue.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ofppt.png"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle: "Certifications",

  achievementsCards: [
    {
      title: "Cisco-Syber Security",
      subtitle:
        "Learn bases of cybersecurity atacks types and how to protect my self from it.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "cisco",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1W4MLKluzjY-K5ZSfrO-9ljEAQiIqIroI/view?usp=drive_link"
        }
      ]
    },
    {
      title: "freecodecamp",
      subtitle: "Resposive web designe.",
      image: require("./assets/images/freecodecamp.png"),
      imageAlt: "freecodecamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/younesabourrig/responsive-web-design"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 712074402",
  email_address: "younesabourrig@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projectSection,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
