import { useCallback, useRef } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Logo from '../../components/logo'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/get-validation-errors'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string()
          .matches(/^[A-Za-z ãáâéêèëíõóôúüçñø-]+$/, 'Enter a valid name.')
          .required('Name required.'),
        email: Yup.string()
          .required('Email required.')
          .email('Enter a valid email address.'),
        password: Yup.string().min(6, 'Enter at least 6 digits.'),
      })
      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Sign Up - For Team Members</h2>
          <Input type="text" name="name" placeholder="Name" icon={FiUser} />
          <Input type="text" name="email" placeholder="Email" icon={FiMail} />
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
