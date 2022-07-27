import { Logo } from '../../shared/StyledComponents'
import { StyledFooter } from "./Footer"
const Footer = () => {
  return (
    <StyledFooter>
      <Logo href='https://www.hazelton.dev'>H</Logo>
      <span>&copy; {new Date().getFullYear()} Brandon Hazelton</span>
    </StyledFooter>
  )
}
export default Footer
