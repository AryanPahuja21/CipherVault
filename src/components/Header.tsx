import { TbLogout } from "react-icons/tb";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("mnemonic");
    localStorage.removeItem("wallet");
    window.location.reload();
  };

  return (
    <div className="flex justify-center">
      <div className="w-[60vw] flex flex-col justify-center">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="w-10 select-none" />
            <h1 className="text-3xl font-semibold">CipherVault</h1>
          </div>
          <div className="flex mt-2">
            <button onClick={logout}>
              <TbLogout className="w-8 h-full" />
            </button>
          </div>
        </div>
        <span className="w-full h-0.5 bg-zinc-500 mx-auto"></span>
      </div>
    </div>
  );
};

export default Header;
