import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <img src="/logo.png" alt="" className="w-14 sm:w-24 select-none" />
      <h1 className="text-3xl sm:text-5xl font-bold text-center">
        CipherVault
      </h1>
      <p className="sm:mx-7 mb-4 sm:mb-5 sm:text-2xl text-center">
        Your Crypto, Your Vault
      </p>
      <Link to="/generate">
        <HomeButton />
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
