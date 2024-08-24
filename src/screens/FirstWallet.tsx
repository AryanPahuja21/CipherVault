import Footer from "../components/Footer";
import Header from "../components/Header";
import NewWalletButton from "../components/NewWalletButton";

const FirstWallet = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-full flex justify-center">
        <div className="h-[50vh] w-[60vw] flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-5xl text-center font-bold">
            Start by creating your first wallet
          </h1>
          <div className="mt-14">
            <NewWalletButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FirstWallet;
