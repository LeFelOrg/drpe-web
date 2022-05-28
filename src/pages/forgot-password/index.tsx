import { useRef, useCallback } from 'react'
import * as Yup from 'yup'
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Form } from '@unform/web'
import { useAuth } from '../../contexts/auth-context'
import { FormHandles } from '@unform/core'
import { useToast } from '../../contexts/toast-context'
import getValidationErrors from '../../utils/get-validation-errors'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Container, Content, Background } from './styles'

interface ForgotPasswordFormData {
  email: string
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { user } = useAuth()
  const { addToast } = useToast()
  // const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required.')
            .email('Enter a valid email address.'),
        })
        await schema.validate(data, {
          abortEarly: false,
        })
        // password recovery

        // navigate('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)

          return
        }
        addToast({
          type: 'error',
          title: 'Password recovery error',
          description:
            'An error occurred when trying to reset your password, please try again',
        })
      }
    },
    [addToast],
  )

  return user ? (
    <Navigate to="/dashboard" />
  ) : (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Password Recovery</h2>
          <Input type="text" name="email" placeholder="Email" icon={FiMail} />
          <Button>Recover</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Back to Log In
        </Link>
      </Content>
      <Background />
    </Container>
  )
}

export default ForgotPassword
