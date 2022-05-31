import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface User {
  id: string
  name: string
  avatar_url: string
}

interface AuthState {
  token: string
  user: User
}

interface LogInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  logIn(credentials: LogInCredentials): Promise<void>
  logOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@RPER:token')
    const user = localStorage.getItem('@RPER:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const logIn = useCallback(async ({ email, password }: LogInCredentials) => {
    const response = await api.post('sessions', { email, password })

    const { token, user } = response.data

    localStorage.setItem('@RPER:token', token)
    localStorage.setItem('@RPER:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const logOut = useCallback(() => {
    localStorage.removeItem('@RPER:token')
    localStorage.removeItem('@RPER:user')

    setData({} as AuthState)
  }, [])

  const provisions = { user: data.user, logIn, logOut }

  return (
    <AuthContext.Provider value={provisions}>{children}</AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
