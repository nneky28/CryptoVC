import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = useState("");
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      // Listen for account changes
      window.ethereum.on('accountsChanged', handleAccountsChanged);

      // Listen for network changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      // Check if wallet is already connected
      checkIfWalletIsConnected();

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', () => window.location.reload());
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
    }
  };

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
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

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    setConnButtonText("Wallet Connected");
    getAccountBalance(newAccount.toString());
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

  return (
    <WalletContext.Provider
      value={{
        defaultAccount,
        connButtonText,
        errorMessage,
        connectWalletHandler,
        userBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
