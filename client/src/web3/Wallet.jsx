import { getEthereumIfExists } from './utils'

export const connectWallet = async () => {
  if (getEthereumIfExists()) {
    const accounts = await getEthereumIfExists().request({
      method: 'eth_requestAccounts',
    })

    return accounts
  } else {
    console.log("Couldn't connect wallet.")
    return false
  }
}

export const disconnectWallet = () => {}
