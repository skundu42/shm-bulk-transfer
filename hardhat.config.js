/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");


module.exports = {
  networks: {
    hardhat: {
    },
    liberty: {
      url: "https://liberty20.shardeum.org/",
      accounts:[``]
    },
    sphinx: {
        url: "https://sphinx.shardeum.org/",
        accounts: [``]
        }
  },
  solidity: "0.8.3",
};