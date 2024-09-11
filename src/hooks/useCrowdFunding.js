import { useContext, useCallback } from 'react';
import { ethers } from 'ethers';

import config from '../config';
import { contractABI } from '../assets/contract_abi';
const contractAddress = config.CONTRACT_ADDRESS;


export const useCrowdFunding = (signer) => {


  const getContract = useCallback(() => {
    if (!signer) throw new Error('Wallet not connected');
    return new ethers.Contract(contractAddress, contractABI, signer);
  }, [signer]);

  const launch = useCallback(async (goal, duration) => {
    const contract = getContract();
    console.log(contract)
    const tx = await contract.launch(ethers.utils.parseEther(goal.toString()), duration);
    await tx.wait();
    return tx;
  }, [getContract]);

  const cancel = useCallback(async (id) => {
    const contract = getContract();
    const tx = await contract.cancel(id);
    await tx.wait();
    return tx;
  }, [getContract]);

  const pledge = useCallback(async (id, amount) => {
    const contract = getContract();
    const tx = await contract.pledge(id, ethers.utils.parseEther(amount.toString()));
    await tx.wait();
    return tx;
  }, [getContract]);

  const unpledge = useCallback(async (id, amount) => {
    const contract = getContract();
    const tx = await contract.unpledge(id, ethers.utils.parseEther(amount.toString()));
    await tx.wait();
    return tx;
  }, [getContract]);

  const claim = useCallback(async (id) => {
    const contract = getContract();
    const tx = await contract.claim(id);
    await tx.wait();
    return tx;
  }, [getContract]);

  const refund = useCallback(async (id) => {
    const contract = getContract();
    const tx = await contract.refund(id);
    await tx.wait();
    return tx;
  }, [getContract]);

  const getCampaign = useCallback(async (id) => {
    const contract = getContract();
    const campaign = await contract.campaigns(id);
    return {
      creator: campaign.creator,
      goal: ethers.utils.formatEther(campaign.goal),
      startAt: new Date(campaign.startAt.toNumber() * 1000),
      endAt: new Date(campaign.endAt.toNumber() * 1000),
      claimed: campaign.claimed,
      pledged: ethers.utils.formatEther(campaign.pledged),
    };
  }, [getContract]);

  const getCampaignCount = useCallback(async () => {
    const contract = getContract();
    const count = await contract.count();
    return count.toNumber();
  }, [getContract]);

  const getPledgedAmount = useCallback(async (id, address) => {
    const contract = getContract();
    const amount = await contract.pledgedAmount(id, address);
    return ethers.utils.formatEther(amount);
  }, [getContract]);

  return {
    launch,
    cancel,
    pledge,
    unpledge,
    claim,
    refund,
    getCampaign,
    getCampaignCount,
    getPledgedAmount,
    config
  };
};