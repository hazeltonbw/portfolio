import { Flex, ProjectContainer, Project } from "./Projects";
import redditImg from "../../assets/img/reddit.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    h2: "reddit minimal",
    img: redditImg,
    alt: "Screenshot of Reddit app",
    githubRepo: "https://github.com/hazeltonbw/reddit",
    liveLink: "https://bwhredditclone.netlify.app/",
    description: "Recreation of Reddit using Redux to handle state changes",
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
                  <a href={project.githubRepo} alt="Github Source Code">
                    <FaGithub size="2em" />
                  </a>
                </li>
                <li>
                  <a href={project.liveLink} alt="Github Source Code">
                    <FaGithub size="2em" />
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
