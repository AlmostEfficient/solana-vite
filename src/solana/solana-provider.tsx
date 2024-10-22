import { ReactNode, useCallback } from 'react'
import { WalletError } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useCluster } from './cluster-provider'

import '@solana/wallet-adapter-react-ui/styles.css'

export const WalletButton = WalletMultiButton

export function SolanaProvider({ children }: { children: ReactNode }) {
  const { cluster } = useCluster()
  const endpoint = cluster.endpoint
  const onError = useCallback((error: WalletError) => {
    console.error(error)
  }, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} onError={onError} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
