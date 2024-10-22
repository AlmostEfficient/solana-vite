import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ClusterProvider } from './solana/cluster-provider.tsx'
import { SolanaProvider } from './solana/solana-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClusterProvider>
      <SolanaProvider>
        <App />
      </SolanaProvider>
    </ClusterProvider>
  </StrictMode>,
)
