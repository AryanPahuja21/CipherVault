import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";

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
              <div className="mx-auto max-w-[500px] py-4 rounded-md mb-4 ">
                <header className="w-full mx-auto bg-zinc-800 py-6 rounded-t-md">
                  <h1 className="text-xl font-bold px-4">Wallet 1</h1>
                </header>
                <main className="bg-zinc-700 pt-14 p-7">
                  <div className="flex flex-col gap-7 justify-between items-center">
                    <h2 className="mx-auto text-4xl font-bold">$0.0</h2>
                    <button className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-md">
                      Send
                    </button>
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
