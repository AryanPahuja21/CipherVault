import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

interface EthWalletProps {
  mnemonic: string;
}

export const EthWallet: React.FC<EthWalletProps> = ({ mnemonic }) => {
  localStorage.setItem("currentIndex", "0");
  localStorage.setItem("addressses", "[]");
  const addresses = JSON.parse(localStorage.getItem("addresses") || "[]");

  return (
    <div>
      <button
        onClick={async function () {
          const currentIndex = parseInt(
            localStorage.getItem("currentIndex") || "0"
          );
          const seed = await mnemonicToSeed(mnemonic);
          const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
          const hdNode = HDNodeWallet.fromSeed(seed);
          const child = hdNode.derivePath(derivationPath);
          const privateKey = child.privateKey;
          const wallet = new Wallet(privateKey);
          localStorage.setItem("currentIndex", (currentIndex + 1).toString());
          localStorage.setItem(
            "addresses",
            JSON.stringify([...addresses, wallet.address])
          );
        }}
      >
        Add ETH wallet
      </button>

      {addresses.map((p: any) => (
        <div>Eth - {p}</div>
      ))}
    </div>
  );
};
