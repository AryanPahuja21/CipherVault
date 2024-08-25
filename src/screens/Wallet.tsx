import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";
import walletDetails from "../utils/wallets.json";
import { BsPlusLg } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { PiCurrencyDollarLight } from "react-icons/pi";

const Wallet = () => {
  const ethWallets = JSON.parse(localStorage.getItem("ethWallets") || "[]");
  const solWallets = JSON.parse(localStorage.getItem("solWallets") || "[]");
  const wallets = ethWallets || solWallets;

  const removeAllWallets = () => {
    localStorage.removeItem("ethWallets");
    localStorage.removeItem("solWallets");
    window.location.reload();
  };

  console.log(ethWallets, solWallets);

  return (
    <div className="h-full">
      <Header />
      <main>
        <div className="sm:w-[60vw] mx-auto p-4">
          <div className="flex gap-4 justify-center">
            <NewWalletButton />
            <button
              onClick={removeAllWallets}
              className="bg-red-500 hover:bg-red-600 text-white sm:text-xl font-semibold px-4 sm:px-4 sm:py-2 rounded-md"
            >
              Remove All Wallets
            </button>
          </div>
          <div className="mt-4">
            {wallets && (
              <div className="mx-auto max-w-[450px] py-4 rounded-md mb-4 ">
                <header className="w-full mx-auto bg-zinc-900 py-4 rounded-t-md drop-shadow-lg flex items-center gap-4 px-5">
                  <img
                    src={walletDetails[0].icon}
                    className="w-11 p-2 cursor-pointer hover:bg-zinc-800 rounded-md"
                  />
                  <h1 className="text-xl font-bold p-2 cursor-pointer hover:bg-zinc-800 rounded-md">
                    Solana Wallet 1
                  </h1>
                </header>
                <main className="bg-zinc-800 pt-14 p-7 rounded-b-md">
                  <div className="flex flex-col gap-7 justify-between items-center">
                    <h2 className="mx-auto text-4xl font-bold">$0.0</h2>
                    <div className="flex gap-5">
                      <button className="w-20 h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-3 py-2 rounded-xl">
                        <BsPlusLg className="w-8 h-8 mx-auto" />
                        Receive
                      </button>
                      <button className="w-20 h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-3 py-2 rounded-xl">
                        <PiPaperPlaneTilt className="w-8 h-8 mx-auto" />
                        Send
                      </button>
                      <button className="w-20 h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-3 py-2 rounded-xl">
                        <PiCurrencyDollarLight className="w-8 h-8 mx-auto" />
                        Buy
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="mt-10 flex flex-col gap-5">
                      {walletDetails.map((wallet: any, index: number) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-zinc-700 hover:bg-zinc-600 cursor-pointer p-4 rounded-2xl"
                        >
                          <div className="flex gap-4 items-center">
                            <img
                              src={wallet.icon}
                              alt={wallet.name}
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-xl font-bold">
                                {wallet.name}
                              </h3>
                              <p className="text-zinc-400">0 {wallet.ticker}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </main>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
