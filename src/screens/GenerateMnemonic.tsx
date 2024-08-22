import { generateMnemonic } from "bip39";
import { useState } from "react";
import Footer from "../components/Footer";
import { MdContentCopy } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GenerateMnemonic = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

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
            setCopied(false);
          }}
          className="bg-zinc-500 hover:bg-zinc-400 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg"
        >
          Create Seed Phrase
        </button>
      </div>
      {mnemonic && (
        <button
          onClick={function () {
            navigator.clipboard.writeText(mnemonic);
          }}
          className=""
        >
          <div
            className="mt-10 border border-zinc-400 rounded-md bg-zinc-800"
            onClick={() => setCopied(true)}
          >
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
            <div className="px-5 py-3 flex items-center text-zinc-400">
              <MdContentCopy />
              {
                <p className="mx-2">
                  {copied ? "Copied to clipboard!" : "Click anywhere to copy"}
                </p>
              }
            </div>
          </div>
        </button>
      )}
      <div>
        {mnemonic && (
          <div className="flex flex-col items-center">
            <p className="mt-10 text-zinc-400">
              This seed phrase is the only way to recover your wallet. Keep it
              safe and do not share it with anyone.
            </p>
            <button
              onClick={() => {
                localStorage.setItem("mnemonic", mnemonic);
                navigate("/");
                window.location.reload();
              }}
              className="mt-4 bg-zinc-300 hover:bg-zinc-200 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg flex justify-center items-center gap-2"
            >
              Continue to Wallet
              <FaWallet />
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GenerateMnemonic;
