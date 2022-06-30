import { Flex, ProjectContainer, Project } from "./Projects";
import redditImg from "../../assets/img/reddit.png";
import shoppoImg from "../../assets/img/shoppo.png";
import moviedb from "../../assets/img/moviedb.png";
import jamming from "../../assets/img/jamming.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const projects = [
  {
    h2: "reddit minimal",
    img: redditImg,
    alt: "Screenshot of Reddit app",
    githubRepo: "https://github.com/hazeltonbw/reddit",
    liveLink: "https://bwhredditclone.netlify.app/",
    description: "Recreation of Reddit using Redux to handle state changes",
  },
  {
    h2: "Shoppo Store",
    img: shoppoImg,
    alt: "Screenshot of Shoppo e-commerce store",
    githubRepo: "https://github.com/hazeltonbw/ecommerce",
    liveLink: "https://bwhshoppo.netlify.app/",
    description: "Front end ecommerce store",
  },
  {
    h2: "Movie Database",
    img: moviedb,
    alt: "Screenshot of Movie Database app",
    githubRepo: "https://github.com/hazeltonbw/movie-db",
    liveLink: "https://bwhmoviedb.netlify.app/",
    description: "Movie Database using public API",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <Flex>
        <h1>Projects</h1>
        <ProjectContainer>
          {projects.map((project) => (
            <Project>
              <h2>{project.h2}</h2>
              <img src={project.img} alt={project.alt} />
              <p>{project.description}</p>
              <p>{project.tech}</p>
              <ul>
                <li>
                  <a
                    href={project.githubRepo}
                    title="Github Source Code"
                    alt="Github Source Code"
                  >
                    <FaGithub size="2em" />
                  </a>
                </li>
                <li>
                  <a
                    href={project.liveLink}
                    title="Live Link"
                    alt={project.h2 + "website"}
                  >
                    <CgWebsite size="2em" />
                  </a>
                </li>
              </ul>
              <hr />
            </Project>
          ))}
        </ProjectContainer>
      </Flex>
    </div>
  );
};

export default Projects;
