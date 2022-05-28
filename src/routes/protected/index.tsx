import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth-context'

const Protected: React.FC = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to="/" />
}

export default Protected
