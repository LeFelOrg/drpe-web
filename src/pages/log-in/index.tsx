import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

const LogIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <form>
          <h2>Credentials</h2>
          <Input type="email" name="email" placeholder="Email" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={FiLock}
          />
          <Button>Log In</Button>
          <Link to="/forgotPassword">Forgot Password?</Link>
        </form>
        <Link to="/signIn">
          <FiLogIn />
          Create New Account
        </Link>
      </Content>
      <Background />
    </Container>
  )
}

export default LogIn
