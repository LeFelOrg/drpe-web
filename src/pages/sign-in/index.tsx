import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Logo />
        <form>
          <h2>Sign Up - For Team Members</h2>
          <Input type="text" name="name" placeholder="Name" icon={FiUser} />
          <Input type="email" name="email" placeholder="Email" icon={FiMail} />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={FiLock}
          />
          <Button>Create Account</Button>
        </form>
        <Link to="/">
          <FiArrowLeft />
          Create New Account
        </Link>
      </Content>
    </Container>
  )
}

export default SignIn
