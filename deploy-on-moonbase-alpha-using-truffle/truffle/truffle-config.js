const PrivateKeyProvider = require ('./private-provider')
var privateKey = "99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342";

module.exports = {
  networks: {
    moonbean: {
      provider: () => new PrivateKeyProvider(privateKey, "https://rpc.testnet.moonbeam.network/",43),
       network_id: 43,    // 
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },

  compilers: {
    solc: {
       version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        settings: {          // See the solidity docs for advice about optimization and evmVersion
         optimizer: {
          enabled: false,
           runs: 200
        },
       evmVersion: "byzantium"
      }
    }
  }

}
