import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { token } from '../Components/Contract';

export const WalletContext = createContext();

const SEPOLIA_OPTIMISM_CHAIN_ID = '0xaa37dc';
// const SEPOLIA_OPTIMISM_CHAIN_ID = '0x' + (11155420).toString(16);
const SEPOLIA_OPTIMISM_RPC_URL = 'https://sepolia.optimism.io'; 
const BLOCK_EXPLORER_URL = 'https://sepolia-optimism.etherscan.io/';



export const WalletProvider = ({ children }) => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = useState("");
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      checkIfWalletIsConnected();

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const checkIfWalletIsConnected = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      accountChangedHandler(accounts[0]);
    }
  };

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      accountChangedHandler(accounts[0]);
    } else {
      setDefaultAccount(null);
      setConnButtonText("Connect Wallet");
      resetProviderAndSigner();
    }
  };

  const handleChainChanged = async (chainId) => {
    // Reload the page if the chain is not Sepolia Optimism
    if (chainId !== SEPOLIA_OPTIMISM_CHAIN_ID) {
      await switchToSepoliaOptimism();
    } else {
      window.location.reload();
    }
  };

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        await switchToSepoliaOptimism();
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangedHandler(accounts[0]);
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };
  const switchToSepoliaOptimism = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_OPTIMISM_CHAIN_ID }],
      });
  
      // After switching, reinitialize provider and contract
      const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_OPTIMISM_RPC_URL);
      setProvider(provider);
  
      const signer = provider.getSigner();
      setSigner(signer);
  
      const contract = new ethers.Contract(token.address, token.abi, signer);
      setContract(contract);
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: SEPOLIA_OPTIMISM_CHAIN_ID,
                chainName: 'Optimism Sepolia',
                nativeCurrency: {
                  name: 'Sepolia Ether',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: [SEPOLIA_OPTIMISM_RPC_URL],
                blockExplorerUrls: [BLOCK_EXPLORER_URL],
              },
            ],
          });
  
          // Reinitialize provider and contract after adding the network
          const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_OPTIMISM_RPC_URL);
          setProvider(provider);
  
          const signer = provider.getSigner();
          setSigner(signer);
  
          const contract = new ethers.Contract(token.address, token.abi, signer);
          setContract(contract);
        } catch (addError) {
          console.error("Failed to add network:", addError);
          throw addError;
        }
      } else {
        console.error("Failed to switch network:", switchError);
        throw switchError;
      }
    }
  };
  
  
  const accountChangedHandler = async (newAccount) => {
    setDefaultAccount(newAccount);
    setConnButtonText("Wallet Connected");
    await getAccountBalance(newAccount);
    initializeProviderAndContract(newAccount);
  };

  const getAccountBalance = async (account) => {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      setUserBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const initializeProviderAndContract = async (account) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const signer = provider.getSigner(account);
    setSigner(signer);

    const contract = new ethers.Contract(token.address, token.abi, signer);
    setContract(contract);
  };

  const resetProviderAndSigner = () => {
    setProvider(null);
    setSigner(null);
    setContract(null);
  };

  return (
    <WalletContext.Provider
      value={{
        defaultAccount,
        connButtonText,
        errorMessage,
        connectWalletHandler,
        switchToSepoliaOptimism,
        userBalance,
        provider,
        signer,
        contract,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
