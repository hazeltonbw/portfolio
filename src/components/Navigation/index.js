import { Nav } from './Nav'
import { Logo } from '../../shared/StyledComponents'
import { Menu, burgerStyles, MenuWrapper } from './BurgerMenu'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const location = useLocation()
  const [navBarScroll, setNavBarScroll] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const isActive = (url) => {
    if (location.hash === url) return 'active'
    return ''
  }

  const handleIsOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeSideBar = () => {
    setMenuIsOpen(false)
  }

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setNavBarScroll(true)
      } else {
        setNavBarScroll(false)
      }
    }
    window.addEventListener('scroll', changeNavbarColor, { passive: true})

    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [navBarScroll])

  return (
    <Nav id='nav' navBarScroll={navBarScroll}>
      <Logo href='https://www.hazelton.dev'>H</Logo>
      <ul>
        <li>
          <a href='#home' className={isActive('#home') || isActive('')}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className={isActive('#about')}>
            About
          </a>
        </li>
        <li>
          <a href='#projects' className={isActive('#projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className={isActive('#contact')}>
            Contact
          </a>
        </li>
      </ul>
      <MenuWrapper>
        <Menu
          isOpen={menuIsOpen}
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          noOverlay
          id={'burger-menu'}
          right
          styles={burgerStyles}
        >
          <ul id='burger-links'>
            <li>
              <a
                href='#home'
                alt='Homepage'
                className={isActive('')}
                onClick={closeSideBar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                alt='About section'
                className={isActive('#about')}
                onClick={closeSideBar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#projects'
                alt='Projects section'
                className={isActive('#projects')}
                onClick={closeSideBar}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                alt='Contact section'
                className={isActive('#contact')}
                onClick={closeSideBar}
              >
                Contact
              </a>
            </li>
          </ul>
          <Logo href='#home' onClick={closeSideBar}>
            H
          </Logo>
        </Menu>
      </MenuWrapper>
    </Nav>
  )
}
export default Navigation
