const { configDotenv } = require("dotenv");
require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
//configDotenv;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA_ALCHEMY_RPC_URL,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
