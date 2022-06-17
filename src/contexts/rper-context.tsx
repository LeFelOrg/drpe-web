import { createContext, useContext, useState } from 'react'

const RperContext = createContext({})

const RperProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rper, setRper] = useState<any>()

  return <RperContext.Provider value={rper}>{children}</RperContext.Provider>
}

function useRper() {
  const context = useContext(RperContext)

  if (!context) {
    throw new Error('useRper must be used within a RperProvider')
  }

  return context
}

export { RperProvider, useRper }
