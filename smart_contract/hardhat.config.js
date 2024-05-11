require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/4iw1zKJO5q1QDufDbK_1Zwt8AAzLLRbC`,
      
      accounts: [`4e2d04b19974dc25bbc54547f5f4f3dff059255fe66d36dcbbce8a34e38454f1`]
    },
  }
};
