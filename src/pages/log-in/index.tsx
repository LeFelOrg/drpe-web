import { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useAuth } from '../../contexts/auth-context'
import { useToast } from '../../contexts/toast-context'
import getValidationErrors from '../../utils/get-validation-errors'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Container, Content, Background } from './styles'

interface LogInFormData {
  email: string
  password: string
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { logIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: LogInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required.')
            .email('Enter a valid email address.'),
          password: Yup.string().required('Password required.'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })
        await logIn({
          email: data.email,
          password: data.password,
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
      }
      addToast({
        type: 'error',
        title: 'Authentication error',
        description:
          'An error occurred when logging in, please check credentials',
      })
    },
    [logIn, addToast],
  )

  return (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Credentials</h2>
          <Input type="text" name="email" placeholder="Email" icon={FiMail} />
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
