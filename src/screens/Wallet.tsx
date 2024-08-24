import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";

const Wallet = () => {
  const ethWallets = JSON.parse(localStorage.getItem("ethWallets") || "[]");

  const removeAllWallets = () => {
    localStorage.removeItem("ethWallets");
    window.location.reload();
  };

  console.log(ethWallets);
  return (
    <div className="h-full">
      <Header />
      <main>
        <div className="mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Wallets</h1>
          <div className="flex gap-4">
            <NewWalletButton />
            <button
              onClick={removeAllWallets}
              className="bg-red-500 text-white text-xl font-semibold px-4 py-2 rounded-md"
            >
              Remove All Wallets
            </button>
          </div>
          <div className="mt-4">
            {ethWallets.map((wallet: any, index: number) => (
              <div key={index} className="bg-[#333] p-4 rounded-md mb-4">
                <h2 className="text-xl font-bold">Wallet {index + 1}</h2>
                <p className="text-lg">Address: {wallet.address}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
