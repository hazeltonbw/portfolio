import { Flex, ProjectContainer, Project } from "./Projects";
import redditImg from "../../assets/img/reddit.png";
import shoppoImg from "../../assets/img/shoppo.png";
import moviedb from "../../assets/img/moviedb.png";
import jammming from "../../assets/img/jamming.png";
import { FaGithub } from "react-icons/fa";
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
  {
    h2: "Jammming",
    img: jammming,
    alt: "Screenshot of Jammming Spotify Playlist Creator app",
    githubRepo: "https://github.com/hazeltonbw/jamming",
    liveLink: "https://webejammming.netlify.app/",
    description: "Spotify Playlist Creator App using React Class Components",
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
              <ul>
                <li>
                  <h2>{project.h2}</h2>
                </li>
                <li>
                  <a
                    href={project.githubRepo}
                    title="Github Source Code"
                    alt="Github Source Code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="2em" />
                  </a>
                </li>
                <li>
                  <a
                    href={project.liveLink}
                    title="Live Link"
                    alt={project.h2 + "website"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CgWebsite size="2em" />
                  </a>
                </li>
              </ul>
              <h3>{project.description}</h3>
              <p>{project.tech}</p>
              <img src={project.img} alt={project.alt} />
            </Project>
          ))}
        </ProjectContainer>
      </Flex>
    </div>
  );
};

export default Projects;
