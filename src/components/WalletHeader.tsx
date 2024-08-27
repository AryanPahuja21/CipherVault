import walletDetails from "../utils/wallets.json";
import { MdKeyboardArrowDown } from "react-icons/md";

const WalletHeader = () => {
  return (
    <div className="w-full mx-auto bg-zinc-900 py-4 rounded-t-md drop-shadow-lg flex items-center gap-4 px-5">
      <img
        src={walletDetails[0].icon}
        className="w-11 p-2 cursor-pointer hover:bg-zinc-800 rounded-md"
      />
      <div className="w-full text-xl font-bold p-2 flex justify-between items-center cursor-pointer hover:bg-zinc-800 rounded-md">
        <h1>Solana Wallet 1</h1>
        <div>
          <MdKeyboardArrowDown className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default WalletHeader;
