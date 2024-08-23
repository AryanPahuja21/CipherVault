import Header from "../components/Header";

const FirstWallet = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-full flex justify-center">
        <div className="h-[50vh] w-[60vw] flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center font-bold">
            Start by creating your first wallet
          </h1>
          <button className="mt-14 p-4 rounded-md text-xl text-black font-semibold bg-gradient-to-br from-amber-300 to-emerald-500">
            Create New Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstWallet;
