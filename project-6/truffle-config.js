require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const   { INFURAKEY , MNEMONIC} = process.env;
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      websockets: true,
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          INFURAKEY
        ),
      network_id: 5,
      gas: 4465030,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: '0.8.17', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
