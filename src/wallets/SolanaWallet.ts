import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import bs58 from "bs58";

export const addSolanaWallet = async (mnemonic: string) => {
  const solWallets = JSON.parse(localStorage.getItem("solWallets") || "[]");
  const currentIndex = solWallets.length;

  const seed = await mnemonicToSeed(mnemonic);
  const seedHex = Buffer.from(seed).toString("hex");
  const path = `m/44'/501'/${currentIndex}'/0'`;
  const derivedSeed = derivePath(path, seedHex).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);
  bs58.encode(keypair.publicKey.toBuffer());
  localStorage.setItem("solWallets", JSON.stringify([...solWallets, keypair]));
};
