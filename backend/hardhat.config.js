require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config({path:".env"});
KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  networks:{
    mantle:{
      url: "https://rpc.testnet.mantle.xyz",
      chainId: 5001,
      accounts: [KEY],
    }
  }
};
