import { useState, useEffect } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { WalletButton } from './solana/solana-provider'
import { useCluster } from './solana/cluster-provider'
import './App.css'

function App() {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const { cluster } = useCluster()
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then(bal => {
        setBalance(bal / LAMPORTS_PER_SOL)
      })
    } else {
      setBalance(null)
    }
  }, [connection, publicKey])

  return (
    <>
      <h1>Solana vite template</h1>
      <WalletButton />
      <div>
        <p>Network: {cluster.name}</p>
        <p>Address: {publicKey ? publicKey.toBase58() : 'Not connected'}</p>
        <p>Balance: {balance !== null ? `${balance} SOL` : 'N/A'}</p>
      </div>
    </>
  )
}

export default App
