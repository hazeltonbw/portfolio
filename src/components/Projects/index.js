import { Flex, ProjectContainer, Project } from "./Projects";
import redditImg from "../../assets/img/reddit.webp";
import shoppoImg from "../../assets/img/shoppo.webp";
import moviedb from "../../assets/img/moviedb.webp";
import jammming from "../../assets/img/jamming.webp";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Description } from "./Projects";

const projects = [
  {
    h2: "reddit minimal",
    img: redditImg,
    alt: "Screenshot of Reddit app",
    githubRepo: "https://github.com/hazeltonbw/reddit",
    liveLink: "https://bwhredditclone.netlify.app/",
    description:
      "reddit minimal was created to explore skeleton loading components, markdown rendering, responsive media carousels, animated lists, and the Redux toolkit.",
  },
  {
    h2: "Shoppo eCommerce Store",
    img: shoppoImg,
    alt: "Screenshot of Shoppo e-commerce store",
    githubRepo: "https://github.com/hazeltonbw/ecommerce",
    liveLink: "https://bwhshoppo.netlify.app/",
    description:
      "Shoppo is a front end e-commerce store using the Redux toolkit to fetch and store products in state. Pages are rendered using react-router-dom, and styled with styled-components. ",
  },
  {
    h2: "Jammming",
    img: jammming,
    alt: "Screenshot of Jammming Spotify Playlist Creator",
    githubRepo: "https://github.com/hazeltonbw/jamming",
    liveLink: "https://webejammming.netlify.app/",
    description:
      "Spotify Playlist Creator is created with React Class Components. It is one of my first major projects using GET/POST methods to fetch songs and to save users desired playlist to their Spotify account.",
  },
  {
    h2: "Movie Database",
    img: moviedb,
    alt: "Screenshot of Movie Database app",
    githubRepo: "https://github.com/hazeltonbw/movie-db",
    liveLink: "https://bwhmoviedb.netlify.app/",
    description:
      "Movie Database was created to explore an older version of react-router-dom, react-modals, and to further gain skills in Redux. Users can enter in a search for a movie and the app will return results found from a free public API.",
  },
];

const Projects = () => {
  return (
    <Flex id="projects">
      <h1>Projects</h1>
      <ProjectContainer>
        {projects.map((project, index) => (
          <Project key={index}>
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
            <Description>{project.description}</Description>
            <a href={project.liveLink} alt={project.h2 + "website"}>
              <img src={project.img} alt={project.alt} />
            </a>
          </Project>
        ))}
      </ProjectContainer>
    </Flex>
  );
};

export default Projects;
