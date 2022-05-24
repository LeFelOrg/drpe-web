import { AuthProvider } from './hooks/auth-context'
import Router from './routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyle />
    </>
  )
}

export default App
