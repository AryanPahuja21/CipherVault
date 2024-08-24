import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export const addSolanaWallet = async (mnemonic: string) => {
  const solWallets = JSON.parse(localStorage.getItem("solWallets") || "[]");
  const currentIndex = solWallets.length;

  const seed = mnemonicToSeed(mnemonic);
  const path = `m/44'/501'/${currentIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString()).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);
  localStorage.setItem("solWallets", JSON.stringify([...solWallets, keypair]));
};
