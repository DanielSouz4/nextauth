import { createContext, ReactNode } from 'react'
import { api } from '../services/api'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticadted: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticadted = false

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const respose = await api.post('/sessions', { email, password })

      console.log(respose.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticadted }}>
      {children}
    </AuthContext.Provider>
  )
}
