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
          className="bg-zinc-500 hover:bg-zinc-400 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg"
        >
          Create Seed Phrase
        </button>
      </div>
      <div className="mt-10 border border-zinc-400 rounded-md bg-zinc-800">
        <div className="grid grid-cols-4 gap-4 p-4">
          {mnemonic.split(" ").map((word, index) => {
            return (
              <div
                key={index}
                className="md:text-2xl bg-[#111111] px-1 py-2 sm:px-4 sm:py-3 rounded-md"
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GenerateMnemonic;
