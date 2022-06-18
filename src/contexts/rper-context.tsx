import { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface Rper {
  name: string
  coordinator_id: string
  rper_id: string
  created_at: string
  updated_at: string
}

const RperContext = createContext({})

const RperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rpers, setRpers] = useState<[Rper] | Promise<object>>(async () => {
    const response = await api.get('rpers')
    if (response) {
      return response.data
    }

    return {}
  })

  const getRpers = useCallback(async () => {
    try {
      const response = await api.get('rpers')
      setRpers(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [setRpers])

  return (
    <RperContext.Provider value={{ rpers, getRpers }}>
      {children}
    </RperContext.Provider>
  )
}

function useRper() {
  const context = useContext(RperContext)

  if (!context) {
    throw new Error('useRper must be used within a RperProvider')
  }

  return context
}

export { RperProvider, useRper }
