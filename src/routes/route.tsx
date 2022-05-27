import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Navigate,
} from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <ReactDOMRoute
    // {...rest}
    // render={() => {
    //   return isPrivate === !!user ? (
    //     <Component />
    //   ) : (
    //     <Navigate to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
    //   )
    // }}
    />
  )
}

export default Route
