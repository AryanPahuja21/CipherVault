import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";
import WalletHeader from "../components/WalletHeader";
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
                <header>
                  <WalletHeader />
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
                      {solWallets && (
                        <div className="flex justify-between items-center bg-zinc-700 hover:bg-zinc-600 cursor-pointer p-4 rounded-2xl">
                          <div className="flex gap-4 items-center">
                            <img
                              src={walletDetails[0].icon}
                              alt={walletDetails[0].name}
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-xl font-bold">
                                {walletDetails[0].name}
                              </h3>
                              <p className="text-zinc-400">
                                0 {walletDetails[0].ticker}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {ethWallets && (
                        <div className="flex justify-between items-center bg-zinc-700 hover:bg-zinc-600 cursor-pointer p-4 rounded-2xl">
                          <div className="flex gap-4 items-center">
                            <img
                              src={walletDetails[1].icon}
                              alt={walletDetails[1].name}
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-xl font-bold">
                                {walletDetails[1].name}
                              </h3>
                              <p className="text-zinc-400">
                                0 {walletDetails[1].ticker}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
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
