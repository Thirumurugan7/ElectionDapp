import Web3 from "web3";
import abi from "./abi.json";
import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const Address = "0xa76334ba28A0d6DB56f777206d891673cc29C4a2";

export const contest = async ({ name }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  console.log(name);
  const tokenId = await Role.contest(name);
  console.log(tokenId);
  return tokenId;
};
export const vote = async ({ name }) => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  const tokenId = await Role.voteForCandidate(name);
  console.log(tokenId);
  return tokenId;
};
export const endElection = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  const tokenId = await Role.endElection();
  console.log(tokenId);
  return tokenId;
};
export const startElection = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  console.log(provider);
  const signer = provider.getSigner();
  console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  console.log(Role);
  const tokenId = await Role.startElection();
  console.log(tokenId);
  return tokenId;
};

export const isElectionStarted = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(Address, abi, signer);
  const tokenId = await Role.isElectionStarted();
  return tokenId;
};
export const isElectionEnded = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(Address, abi, signer);
  const tokenId = await Role.isElectionEnded();
  return tokenId;
};

// getPlayerTotalDeposit;

export const getAllContestants = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  //console.log(provider);
  const signer = provider.getSigner();
  //console.log(signer);
  const Role = new ethers.Contract(Address, abi, signer);
  //console.log(Role);
  const tokenId = await Role.getAllContestants();
  //console.log(tokenId);
  return tokenId;
};
export const getWinner = async () => {
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();
  const signer = provider.getSigner();
  const Role = new ethers.Contract(Address, abi, signer);
  const tokenId = await Role.getWinner();
  return tokenId;
};
