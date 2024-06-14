const { ethers } = require('hardhat')
const fs = require('fs')
const { off } = require('process')

async function main() {
  const base_uri = 'https://ipfs.io/ipfs/QmTWbe9wDns7aqZQNCuWh5PqybGbBF91kngC5Zf8qmCoyg/'
  const Contract = await ethers.getContractFactory('CryptoOgr')
  const contract = await Contract.deploy('CryptoOgr NFT', 'COG', base_uri)

  await contract.deployed()

  const address = JSON.stringify({address: contract.address}, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if(err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})