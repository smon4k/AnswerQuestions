// import { ethers } from "ethers";
import Web3 from "web3"
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3Modal from "web3modal"


const isInstalled = () => {
  const {
    ethereum
  } = window;
  return Boolean(ethereum);
};
console.log();
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal;

let provider;
let networkId = 56;

export const fetchAccountData = async () => {
  // if (!isInstalled()) {
  //   alert('您未安装metamask')
  //   return
  // };
  // console.log('selectedAddress', ethereum.selectedAddress, localStorage.getItem('connectorId'));
  if(window.ethereum) {
    if (ethereum && ethereum.selectedAddress && ethereum.selectedAddress !== null && localStorage.getItem('connectorId')) {
      // if(provider || localStorage.getItem('connectorId')) {}
      const web3 = new Web3(window.ethereum);

      // console.log("Web3 instance is", web3);

      // Get connected chain id from Ethereum node
      const chainId = await web3.eth.getChainId();
      if(chainId !== networkId) {
        await networkSetup();
      }

      // Get list of accounts of the connected wallet
      const accounts = await web3.eth.getAccounts();
      // console.log(accounts);
      // MetaMask does not give you all accounts, only the selected account
      // console.log("Got accounts", accounts);
      let address = accounts[0];
      if (window.location.host === "localhost:8008" || window.location.host === "192.168.1.4:8008" ) {
        // address = "0x6Bc76D2224E6Fbd45E8E910aecAd1b4b15bdFb70";
        // address = "0xf63372F89421926e9cCEb40EFeEd632bFc458F8c";
        // address = "0x669515B8B042174deF89229c8135435a8207bFc4";
      }
      await getBaseData(chainId, accounts, address);
    } else {
      // await getBaseData();
      await connect();
      return
    }
  } else {
    await getAccountInfo();
  }
};

export const connect = async () => {
  // console.log('connect');
  const providerOptions = {
    injected: {
      display: {
        name: 'MetaMask',
        description: 'Connect to your MetaMask Wallet',
      },
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        // infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        rpc: {
          1: 'https://bsc-dataseed.binance.org/',
          56: "https://bsc-dataseed.binance.org/"
        },
        chainId: 56
      }
    },
    'custom-binance': {
      display: {
        name: 'Binance',
        description: 'Binance Chain Wallet',
        logo: require(`@/assets/wallets/binance-wallet.png`),
      },
      package: 'binance',
      connector: async (ProviderPackage, options) => {
        const provider = window.BinanceChain;
        await provider.enable();
        return provider;
      },
    },
    'custom-math': {
      display: {
        name: 'Math',
        description: 'Math Wallet',
        logo: require(`@/assets/wallets/math-wallet.svg`),
      },
      package: 'math',
      connector: async (ProviderPackage, options) => {
        const provider = new ProviderPackage(options);

        await provider.enable();

        return provider;
      }
    },
    'custom-twt': {
      display: {
        name: 'Trust',
        description: 'Trust Wallet',
        logo: require(`@/assets/wallets/trust-wallet.svg`),
      },
      package: 'twt',
      connector: async (ProviderPackage, options) => {
        const provider = new ProviderPackage(options);

        await provider.enable();

        return provider;
      },
    },
    'custom-safepal': {
      display: {
        name: 'SafePal',
        description: 'SafePal App',
        logo: require(`@/assets/wallets/safepal-wallet.svg`),
      },
      package: 'safepal',
      connector: async (ProviderPackage, options) => {
        const provider = new ProviderPackage(options);

        await provider.enable();

        return provider;
      },
    },
  };
  web3Modal = new Web3Modal({
    // network: 'binance',
    cacheProvider: true, // optional
    providerOptions, // required
    // disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  });
  // __ownInstance__.$store.commit("setWeb3Model", web3Modal);
  // console.log(web3Modal);
  try {
    provider = await web3Modal.connect();
    localStorage.setItem('connectorId', 'injected');
    // if(provider) {
    //   connectInfo(provider);
    // }
    console.log("provider", provider)
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
  await fetchAccountData();


  // provider.on("accountsChanged", (accounts) => {
  //   connectInfo(provider);
  // });

  // // Subscribe to chainId change
  // provider.on("chainChanged", (chainId) => {
  //   console.log(chainId);
  //   connectInfo(provider);
  // });

  // Subscribe to networkId change
  // provider.on("networkChanged", (networkId) => {
  //   console.log(networkId);
  //   connectInfo(provider);
  // });
  // ethereum
  //   .request({
  //     method: 'eth_requestAccounts'
  //   })
  //   .then(() => {
  //     connectInfo()
  //   })
  //   .catch((err) => {
  //     if (err.code === 4001) {
  //       console.log(err.message);
  //     }
  //   });
};

export const disconnectWallet = async () => {
  __ownInstance__.$store.dispatch("disconnectMetaMask");
  localStorage.removeItem('connectorId');
  localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
  localStorage.removeItem('userInfo');
  localStorage.removeItem('token');
  localStorage.removeItem('address');
  __ownInstance__.$store.commit("removeAddress");
};

export const networkSetup = async () => { //切换网络
  return new Promise((resolve, reject) => {
      const provider = window.ethereum
      const web3 = new Web3(window.ethereum);
      if (provider) {
          provider.request({
              method: 'wallet_switchEthereumChain',
              params: [
                  { 
                    chainId: web3.utils.numberToHex(networkId)
                  }
              ], 
          }).then(resolve(true)).catch(reject(false))
      } else {
          reject(new Error(`window.ethereum is '${typeof provider}'`))
      }
  })
};



export const connectWallet = () => {
  if (window.ethereum.isMetaMask) {
    connect();
  } else {
    alert("您未安装MetaMask")
  }
}

//获取用户是否登录
async function getAccountInfo() {
  let userInfoJson = localStorage.getItem('userInfo');
  console.log(userInfoJson);
  if(userInfoJson && userInfoJson !== undefined && userInfoJson !== null) {
    const userInfo = JSON.parse(userInfoJson);
     __ownInstance__.$store.commit("setUserInfo", userInfo);
  } 
 }


async function getBaseData(chainId, accounts, address) {
  if (chainId && accounts && address) {
    // console.log(web3Modal);
    __ownInstance__.$store.commit("getChainId", chainId);
    __ownInstance__.$store.commit("getAccounts", accounts);
    __ownInstance__.$store.commit("getAddress", address);
    localStorage.setItem('connectorId', 'injected');
    return true;
  }
  __ownInstance__.$store.commit("isConnected", true);
}
