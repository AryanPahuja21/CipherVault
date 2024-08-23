import { useState } from "react";
import NewWalletDialog from "./NewWalletDialog";

const NewWalletButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const updateDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = (e: any) => {
    if (e.target.id === "dialog-overlay") setIsDialogOpen(false);
  };

  return (
    <div>
      <button
        className="p-4 rounded-md text-xl text-black font-semibold bg-gradient-to-br from-amber-300 to-emerald-500"
        onClick={updateDialog}
      >
        Create New Wallet
      </button>

      {isDialogOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
          id="dialog-overlay"
          onClick={closeDialog}
        >
          <div>
            <NewWalletDialog />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewWalletButton;
