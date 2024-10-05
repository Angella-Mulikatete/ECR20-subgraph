import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
   networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumSepolia: {
      url: process.env.ARBITRUM_RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
    },
    scrollSepolia: {
      url: process.env.SCROLL_RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!],
    },
  },
  
  // etherscan: {
  //   apiKey:{
  //     arbitrumSepolia: "11XBITUSRTETURM7D2JTXPE49ZG84GPMX7",
  //   }
  // },

  etherscan: {
    apiKey:{
      scrollSepolia: "TCB88QWMWISN4EF6QIK9MKHBHAQ5QZ5VHU",
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  },
};


export default config;


// ERC20TokenModule#ERC20Token - 0x6107f49E3DB8D15783083446d53CE15Bd15fDe0F
// Successfully verified contract ERC20Token on the block explorer.
//https://sepolia.scrollscan.com/address/0x6107f49E3DB8D15783083446d53CE15Bd15fDe0F#code