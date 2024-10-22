import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { WalletButton } from './solana/solana-provider'
import { useCluster } from './solana/cluster-provider'
import { useGetBalance, useGetSignatures, useGetTokenAccounts, useTransferSol } from './solana/hooks'
import './App.css'

function App() {
  const { publicKey } = useWallet()
  const { cluster } = useCluster()
  const [destinationAddress, setDestinationAddress] = useState('')
  const [amount, setAmount] = useState(0)

  const { data: balance } = useGetBalance({ address: publicKey! })
  const { data: signatures } = useGetSignatures({ address: publicKey! })
  const { data: tokenAccounts } = useGetTokenAccounts({ address: publicKey! })
  const transferSol = useTransferSol({ address: publicKey! })

  const handleTransfer = () => {
    if (publicKey) {
      transferSol.mutate({
        destination: new PublicKey(destinationAddress),
        amount: amount,
      })
    }
  }

  return (
    <>
      <h1>Solana vite template</h1>
      <WalletButton />
      <div>
        <p>Network: {cluster.name}</p>
        <p>Address: {publicKey ? publicKey.toBase58() : 'Not connected'}</p>
        <p>Balance: {balance !== undefined ? `${balance / LAMPORTS_PER_SOL} SOL` : 'N/A'}</p>
        <p>Recent signatures: {signatures?.length ?? 'N/A'}</p>
        <p>Token accounts: {tokenAccounts?.length ?? 'N/A'}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Destination address"
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount in SOL"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleTransfer} disabled={!publicKey || transferSol.isPending}>
          Transfer SOL
        </button>
      </div>
    </>
  )
}

export default App
