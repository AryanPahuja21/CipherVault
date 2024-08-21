import { generateMnemonic } from "bip39";
import { useState } from "react";

const GenerateMnemonic = () => {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={async function () {
            const mn = await generateMnemonic();
            setMnemonic(mn);
          }}
        >
          Create Seed Phrase
        </button>
      </div>

      <div>
        <input type="text" value={mnemonic} className="w-full"></input>
      </div>
    </div>
  );
};

export default GenerateMnemonic;
