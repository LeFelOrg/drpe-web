import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {
  function handleSubmit(data: object) {
    console.log(data)
  }

  return (
    <Container>
      <Background />
      <Content>
        <Logo />
        <Form onSubmit={handleSubmit}>
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
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Create New Account
        </Link>
      </Content>
    </Container>
  )
}

export default SignUp
