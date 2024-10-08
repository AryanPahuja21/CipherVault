import wallets from "../utils/wallets.json";
import { addEthWallet } from "../wallets/EthWallet";
import { addSolanaWallet } from "../wallets/SolanaWallet";

const NewWalletDialog = () => {
  const mnemonic = localStorage.getItem("mnemonic") || "";

  const addWallet = (wallet: any) => () => {
    if (wallet.id === 1) {
      addSolanaWallet(mnemonic);
    } else if (wallet.id === 2) {
      addEthWallet(mnemonic);
    }
    window.location.reload();
  };

  return (
    <div className="pt-8 p-4 border border-zinc-200 bg-zinc-900 rounded-md">
      {wallets.map((wallet) => {
        return (
          <div
            key={wallet.id}
            className="w-80 h-20 flex items-center p-4 border border-zinc-300 rounded-md bg-zinc-800 hover:bg-zinc-700 mb-4 cursor-pointer"
            onClick={addWallet(wallet)}
          >
            <img src={wallet.icon} alt="" className="w-7 select-none" />
            <div className="flex-1">
              <h1 className="text-xl text-center font-semibold">
                New {wallet.name} Wallet
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewWalletDialog;
