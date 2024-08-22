const Wallet = () => {
  const removeWallets = () => {
    localStorage.removeItem("mnemonic");
    window.location.reload();
  };
  return (
    <div className="h-screen">
      <button>Create New Wallet</button>
      <button onClick={removeWallets}>Logout</button>
    </div>
  );
};

export default Wallet;
