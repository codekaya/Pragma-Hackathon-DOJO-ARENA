export const attack = async (contract, tokenId, playerToAttack) => {
  try {
    const txn = await contract.attack(tokenId, playerToAttack)
    const receipt = await txn.wait()
    console.log(receipt)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const hide = async (contract, tokenId) => {
  try {
    const txn = await contract.hide(tokenId)
    const receipt = await txn.wait()
    console.log(receipt)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const hunt = async (contract, tokenId) => {
  try {
    const txn = await contract.hunt(tokenId)
    const receipt = await txn.wait()
    console.log(receipt)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

/* Returns the token id of the NFT owned by the player, returns -1 if doesn't own */
//nftContract ERC721 nft contractı hunterpunksların olduğu. address to token id için kullanılır.
export const getTokenIdOfPlayer = async (nftContract, addr) => {
  const balance = await nftContract.balanceOf(addr)

  if (balance > 0) {
    const tokenId = await nftContract.addressToId(addr)
    return tokenId
  }
  return -1
}
export const getCurrentPeriod = async (contract) => {
  const period = await contract.getCurrentPeriod()
  if (period > 0) {
    return period
  }
  return -1
}
const balanceOf = async (nftContract, addr) => {
  const balance = await nftContract.balanceOf(addr)
  return balance
}

const getPlayerInfo = async (contract, id) => {
  const playerInfo = await contract.getPlayerInfo(id)
  return playerInfo
}

export const getAllEvents = async (contract, fromBlock, toBlock) => {
  try {
    const events = await contract.queryFilter('*', fromBlock, toBlock)
    console.log('Events', events)
    return events
  } catch (e) {
    console.log(e)
    return false
  }
}
