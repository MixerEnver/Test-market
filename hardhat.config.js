require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const {PrivateKey,RopstenRpc,RinkebyRpc, FujiRpc, apiKey} = process.env

module.exports = {
    solidity: {
        version: "0.8.7",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        ropsten: {
            url: RopstenRpc,
            accounts: [`0x${PrivateKey}`]
        },
        rinkeby: {
            url: RinkebyRpc,
            accounts: [`0x${PrivateKey}`]
        },
        avalancheFujiTestnet: {
            url: FujiRpc,
            accounts: [`0x${PrivateKey}`],
            chainId: 43113
        }
    },
    etherscan: {
        // Your API key for Snowtrace
        // Obtain one at https://snowtrace.io/
        apiKey: {
            avalancheFujiTestnet: apiKey
        }

    },
};