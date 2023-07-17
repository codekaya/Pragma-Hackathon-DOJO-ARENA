export const getBlockInfo = async (provider, blockNumber) => {
  const block = await provider.getBlock(blockNumber)
  return block
}
