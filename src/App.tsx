import Router from './routes'
import AppProvider from './contexts'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Router />
      </AppProvider>
      <GlobalStyle />
    </>
  )
}

export default App
