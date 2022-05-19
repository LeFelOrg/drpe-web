import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

const LogIn: React.FC = () => {
  function handleSubmit(data: object) {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Form onSubmit={handleSubmit}>
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
        </Form>
        <Link to="/signUp">
          <FiLogIn />
          Create New Account
        </Link>
      </Content>
      <Background />
    </Container>
  )
}

export default LogIn
