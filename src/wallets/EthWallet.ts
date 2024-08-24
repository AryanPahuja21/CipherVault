import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const addEthWallet = async (mnemonic: string) => {
  const ethWallets = JSON.parse(localStorage.getItem("ethWallets") || "[]");
  const currentIndex = ethWallets.length;

  const seed = await mnemonicToSeed(mnemonic);
  const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  const privateKey = child.privateKey;
  const wallet = new Wallet(privateKey);
  localStorage.setItem("ethWallets", JSON.stringify([...ethWallets, wallet]));
};
