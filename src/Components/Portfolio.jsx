import React from "react";

const projectList = [
  {
    title: "ShareMeals",
    type: "Full-stack product",
    description:
      "A deployed meal-sharing platform with authentication, discovery features, a tested API, and a responsive React interface.",
    stack: ["React", "Vite", "Node.js", "SQL"],
    liveUrl: "https://sharemeals.vercel.app/",
    codeUrl: "https://github.com/Dolapo-Mosuro/shareAMeal",
    featured: true,
  },
  {
    title: "UI Product Prototype",
    type: "UI/UX design",
    description:
      "A completed interactive product prototype focused on clear user flows, interface hierarchy, and usable visual design.",
    stack: ["Figma", "Prototyping", "UI Design", "UX"],
    prototypeUrl:
      "https://www.figma.com/proto/GMevkj8meUVyu9tIzb3ZNa/AJO?node-id=1-8538&p=f&t=hcZp7rNJcuXm9b8B-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },

  {
    title: "URL Shortener",
    type: "Frontend utility",
    description:
      "A focused browser-based utility that turns long web addresses into concise, easier-to-share URLs.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    liveUrl: "https://dolapo-mosuro.github.io/URLshortner/",
  },
  {
    title: "Weather Pricing API",
    type: "Backend integration",
    description:
      "A transport pricing API that combines live weather conditions, route data, ticket sales, and generated travel documents.",
    stack: ["Node.js", "Express", "Weather API", "MySQL", "PDFKit"],
  },
  {
    title: "Dynamic Ticketing System",
    type: "Transport platform",
    description:
      "A database-driven ticketing backend with route CRUD, secure ticket numbers, round trips, and eight-tier weather-based pricing.",
    stack: ["Node.js", "Express", "MySQL", "REST API"],
  },
  {
    title: "vending machine",
    type: "Backend service",
    description:
      "A vending machine backend with product CRUD, stock management, and a REST API for retrieving available products and processing purchases.",
    stack: ["Node.js", "Express", "MySQL", "REST API"],
  },
  {
    title: "Todo App",
    type: "Frontend utility",
    description:
      "A focused task-management interface for creating and organizing everyday actions in the browser.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://dolapo-mosuro.github.io/TODO/",
    codeUrl: "https://github.com/Dolapo-Mosuro/TODO",
  },
];

const Portfolio = () => (
  <section className="padding projects-section" id="portfolio">
    <div className="projects-heading">
      <p className="section-kicker">Selected work</p>
      <h2>Projects built to solve real problems.</h2>
      <p>Full-stack products, backend services, learning platforms, and interface design.</p>
    </div>

    <div className="projects-grid">
      {projectList.map((project, index) => (
        <article
          className={`project-card${project.featured ? " project-card-featured" : ""}`}
          key={project.title}
        >
          <div className="project-card-topline">
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-type">{project.type}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="project-stack" aria-label={`${project.title} technologies`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          {(project.liveUrl || project.codeUrl || project.prototypeUrl) && (
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live project <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.prototypeUrl && (
                <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                  View prototype <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                  Source code <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;
