import { AuthProvider } from './auth-context'
import { ToastProvider } from './toast-context'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider
