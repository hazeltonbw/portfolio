import { Flex, ProjectContainer, Project, Footnote } from './Projects'
import redditImg from '../../assets/img/reddit.webp'
import shoppoImg from '../../assets/img/shoppo.webp'
import moviedb from '../../assets/img/moviedb.webp'
import jammming from '../../assets/img/jamming.webp'
import { FaGithub } from 'react-icons/fa'
import { FcInfo } from 'react-icons/fc'
import { CgWebsite } from 'react-icons/cg'
import { Description } from './Projects'
import { useState } from 'react'
import ReactTooltip from 'react-tooltip'

const projects = [
  {
    h2: 'reddit minimal',
    img: redditImg,
    alt: 'Screenshot of Reddit app',
    githubRepo: 'https://github.com/hazeltonbw/reddit',
    liveLink: 'https://bwhredditclone.netlify.app/',
    description:
      'reddit minimal is a reddit clone created to explore skeleton loading components, markdown rendering, responsive media carousels, animated lists, and the Redux toolkit.',
  },
  {
    h2: 'Jammming',
    img: jammming,
    alt: 'Screenshot of Jammming Spotify Playlist Creator',
    footnote:
      "Note: Spotify's API requires users email addresses to be added to the developer dashboard in order to update playlists on Spotify. If you'd like access, please ",
    githubRepo: 'https://github.com/hazeltonbw/jamming',
    liveLink: 'https://webejammming.netlify.app/',
    description: (
      <>
        Jammming is a Spotify playlist creator, created with React Class
        Components. It is one of my first major projects using a RESTful API to
        fetch songs and to save users desired playlist to their Spotify account.
      </>
    ),
  },
  {
    h2: 'Shoppo eCommerce Store',
    img: shoppoImg,
    alt: 'Screenshot of Shoppo e-commerce store',
    githubRepo: 'https://github.com/hazeltonbw/ecommerce',
    liveLink: 'https://bwhshoppo.netlify.app/',
    description:
      'Shoppo is a front end e-commerce store using the Redux toolkit to fetch and store products in state. Pages are rendered using react-router-dom, and styled with a light/dark theme using styled-components. ',
  },
  {
    h2: 'Movie Database',
    img: moviedb,
    alt: 'Screenshot of Movie Database app',
    githubRepo: 'https://github.com/hazeltonbw/movie-db',
    liveLink: 'https://bwhmoviedb.netlify.app/',
    description:
      'Movie Database was created to explore an older version of react-router-dom, react-modals, and to further gain skills in Redux. Users can enter in a search for a movie and the app will return results found from a free public API.',
  },
]

const Projects = () => {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <Flex id='projects'>
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
                  title='Github Source Code'
                  alt='Github Source Code'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub size='2em' />
                </a>
              </li>
              <li>
                <a
                  href={project.liveLink}
                  title='Live Link'
                  alt={project.h2 + 'website'}
                  target='_blank'
                  rel='noreferrer'
                >
                  <CgWebsite size='2em' />
                </a>
              </li>
              <li>
                {project.footnote && (
                  <FcInfo
                    aria-label='Side note about project'
                    style={{ display: 'inline-block' }}
                    size='2em'
                    data-tip="Note: Spotify's API requires users email addresses to be added to the developer dashboard in order to update playlists on Spotify. If you'd like access, please contact me."
                    // TODO: react-tooltip is not supported in React 18 yet,
                    // had to introduce this nice little hack to make tooltips work on hover
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => {
                      setShowTooltip(false)
                      setTimeout(() => setShowTooltip(true), 50)
                    }}
                  />
                )}
              </li>
            </ul>
            <Description>
              {project.description}
              {project.footnote && <></>}
            </Description>
            {showTooltip && (
              <ReactTooltip
                place='bottom'
                effect='solid'
                type='info'
                delayShow={300}
                backgroundColor='#518dff'
                className='tooltip'
              />
            )}
            {project.footnote && (
              <Footnote>
                {project.footnote}
                <a href='mailto:brandon@hazelton.dev?subject=Requesting access to Spotify Playlist Creator'>
                  email me.
                </a>
              </Footnote>
            )}
            <a
              href={project.liveLink}
              alt={project.h2 + 'website'}
              target='_blank'
              rel='noreferrer'
            >
              <img src={project.img} alt={project.alt} />
            </a>
          </Project>
        ))}
      </ProjectContainer>
    </Flex>
  )
}

export default Projects
