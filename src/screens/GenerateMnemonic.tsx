import { generateMnemonic } from "bip39";
import { useState } from "react";
import Footer from "../components/Footer";

const GenerateMnemonic = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="h-screen flex flex-col items-center text-center">
      <div>
        <h1 className="mt-24 sm:mb-2 text-2xl sm:text-4xl lg:text-5xl font-bold ">
          Generate a Secret Recovery Phrase
        </h1>
        <p className="sm:text-xl lg:text-2xl text-zinc-400">
          Keep this phrase at a safe place
        </p>
      </div>
      <div className="mt-7">
        <button
          onClick={function () {
            const mn = generateMnemonic();
            setMnemonic(mn);
          }}
          className="bg-zinc-500 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg"
        >
          Create Seed Phrase
        </button>
      </div>
      <div>
        <input
          type="text"
          value={mnemonic}
          className="w-full bg-[#111111] text-white"
        />
      </div>
      <Footer />
    </div>
  );
};

export default GenerateMnemonic;
