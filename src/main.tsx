import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClusterProvider } from './solana/cluster-provider.tsx'
import { SolanaProvider } from './solana/solana-provider.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* defaults to devnet unless mainnet is specified */}
      <ClusterProvider clusterName="mainnet"> 
      <SolanaProvider>
          <App />
        </SolanaProvider>
      </ClusterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
