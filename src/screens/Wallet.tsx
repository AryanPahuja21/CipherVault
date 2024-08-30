import { useState } from "react";
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
  const [buttonText, setButtonText] = useState("Copy Public Key");

  const removeAllWallets = () => {
    localStorage.removeItem("ethWallets");
    localStorage.removeItem("solWallets");
    window.location.reload();
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(ethWallets[0].address)
      .then(() => {
        setButtonText("Copied!");
        setTimeout(() => setButtonText("Copy Public Key"), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  console.log(ethWallets, solWallets);

  return (
    <div className="h-full">
      <Header />
      <main>
        <div className="sm:w-[60vw] mx-auto px-1 py-4 sm:p-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NewWalletButton />
            <button
              onClick={removeAllWallets}
              className="bg-red-500 hover:bg-red-600 text-white sm:text-xl font-semibold px-4 py-3 rounded-md"
            >
              Remove All Wallets
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1">
            <section className="flex flex-wrap">
              {solWallets.length >= 1 &&
                solWallets.map((solWallet: any, index: number) => (
                  <div
                    className="mx-auto max-w-[400px] py-4 rounded-md mb-4"
                    key={solWallet}
                  >
                    <header>
                      <WalletHeader walletType="Solana" index={index + 1} />
                    </header>
                    <main className="bg-zinc-800 pt-14 p-7 rounded-b-md">
                      <div className="flex flex-col gap-7 justify-between items-center">
                        <h2 className="mx-auto text-4xl font-bold">$0.0</h2>
                        <div className="flex gap-3 sm:gap-5">
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-2 sm:px-3 py-2 rounded-xl tracking-tighter">
                            <BsPlusLg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Receive
                          </button>
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-4 sm:px-3 py-2 rounded-xl">
                            <PiPaperPlaneTilt className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Send
                          </button>
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-5 sm:px-3 py-2 rounded-xl">
                            <PiCurrencyDollarLight className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Buy
                          </button>
                        </div>
                        <div className="relative group inline-block">
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-zinc-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {/* {ethWallets[0].address} */}
                          </span>
                          <button
                            className="bg-neutral-700 hover:bg-neutral-600 text-white font-semibold px-4 py-2 rounded-md"
                            onClick={handleCopy}
                          >
                            {buttonText}
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
                        </div>
                      </div>
                    </main>
                  </div>
                ))}
            </section>
            <section className="flex flex-wrap">
              {ethWallets.length >= 1 &&
                ethWallets.map((ethWallet: any, index: number) => (
                  <div
                    className="mx-auto max-w-[450px] py-4 rounded-md mb-4 "
                    key={ethWallet.address}
                  >
                    <header>
                      <WalletHeader walletType="Ethereum" index={index + 1} />
                    </header>
                    <main className="bg-zinc-800 pt-14 p-7 rounded-b-md">
                      <div className="flex flex-col gap-7 justify-between items-center">
                        <h2 className="mx-auto text-4xl font-bold">$0.0</h2>
                        <div className="flex gap-3 sm:gap-5">
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-2 sm:px-3 py-2 rounded-xl tracking-tighter">
                            <BsPlusLg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Receive
                          </button>
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-4 sm:px-3 py-2 rounded-xl">
                            <PiPaperPlaneTilt className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Send
                          </button>
                          <button className="sm:w-20 sm:h-20 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-5 sm:px-3 py-2 rounded-xl">
                            <PiCurrencyDollarLight className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
                            Buy
                          </button>
                        </div>
                        <div className="relative group inline-block">
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm bg-zinc-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {ethWallets[0].address}
                          </span>
                          <button
                            className="bg-neutral-700 hover:bg-neutral-600 text-white font-semibold px-4 py-2 rounded-md"
                            onClick={handleCopy}
                          >
                            {buttonText}
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="mt-10 flex flex-col gap-5">
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
                        </div>
                      </div>
                    </main>
                  </div>
                ))}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
