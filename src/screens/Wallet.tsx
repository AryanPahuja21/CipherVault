import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";

const Wallet = () => {
  const ethWallets = JSON.parse(localStorage.getItem("ethWallets") || "[]");
  const solWallets = JSON.parse(localStorage.getItem("solWallets") || "[]");

  const removeAllWallets = () => {
    localStorage.removeItem("ethWallets");
    localStorage.removeItem("solWallets");
    window.location.reload();
  };

  console.log(ethWallets);
  console.log(solWallets);
  return (
    <div className="h-full">
      <Header />
      <main>
        <div className="sm:w-[60vw] mx-auto p-4">
          <div className="flex gap-4">
            <NewWalletButton />
            <button
              onClick={removeAllWallets}
              className="bg-red-500 hover:bg-red-600 text-white sm:text-xl font-semibold px-4 sm:px-4 sm:py-2 rounded-md"
            >
              Remove All Wallets
            </button>
          </div>
          <div className="mt-4">
            {ethWallets.map((wallet: any, index: number) => (
              <div key={index} className="bg-[#333] p-4 rounded-md mb-4">
                <h2 className="text-xl font-bold">Wallet {index + 1}</h2>
                <p className="text-lg break-words">Address: {wallet.address}</p>
              </div>
            ))}
            {solWallets.map((wallet: any, index: number) => (
              <div key={index} className="bg-[#333] p-4 rounded-md mb-4">
                <h2 className="text-xl font-bold">Wallet {index + 1}</h2>
                <p className="text-lg break-words">Address: {wallet.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
