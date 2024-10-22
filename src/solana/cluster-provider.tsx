import { createContext, ReactNode, useContext } from 'react'

export interface Cluster {
  name: string
  endpoint: string
}

export const clusters: Record<string, Cluster> = {
  mainnet: {
    name: 'mainnet',
    endpoint: import.meta.env.VITE_HELIUS_MAINNET_URL || '',
  },
  devnet: {
    name: 'devnet',
    endpoint: import.meta.env.VITE_HELIUS_DEVNET_URL || '',
  },
  local: {
    name: 'local',
    endpoint: 'http://localhost:8899',
  },
}

export interface ClusterProviderContext {
  cluster: Cluster
}

const Context = createContext<ClusterProviderContext>({} as ClusterProviderContext)

interface ClusterProviderProps {
  children: ReactNode
  clusterName?: keyof typeof clusters
}

export function ClusterProvider({ children, clusterName = 'devnet' }: ClusterProviderProps) {
  const value: ClusterProviderContext = {
    cluster: clusters[clusterName],
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useCluster() {
  return useContext(Context)
}