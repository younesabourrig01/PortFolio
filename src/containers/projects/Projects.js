import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {projectSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!projectSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="project-header">
          <h1 className={isDark ? "dark-mode project-title" : "project-title"}>
            {projectSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
            }
          >
            {projectSection.subtitle}
          </p>
        </div>
        <div className="project-cards-div-main">
          {projectSection.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={isDark ? "dark-mode project-card" : "project-card"}
              >
                <div className="project-card-detail">
                  <h3
                    className={
                      isDark
                        ? "dark-mode project-card-title"
                        : "project-card-title"
                    }
                  >
                    {project.title}
                  </h3>
                  <p
                    className={
                      isDark
                        ? "dark-mode project-card-description"
                        : "project-card-description"
                    }
                  >
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <ul className="project-technologies">
                      {project.technologies.map((technology, index) => {
                        return (
                          <li
                            key={index}
                            className="project-technology"
                            title={technology.name}
                          >
                            {technology.imageSrc ? (
                              <img
                                className="project-technology-icon"
                                src={technology.imageSrc}
                                alt={technology.name}
                              />
                            ) : (
                              <i
                                className={technology.fontAwesomeClassname}
                                style={technology.style}
                                aria-hidden="true"
                              ></i>
                            )}
                            <span>{technology.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                {project.sourceCodeLink && (
                  <Button
                    text={"Source Code"}
                    className="project-card-button"
                    href={project.sourceCodeLink}
                    newTab={true}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
