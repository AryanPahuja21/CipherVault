const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[60vw] flex flex-col justify-center">
        <div className="flex items-center py-6">
          <img src="/logo.png" alt="" className="w-10" />
          <h1 className="text-3xl font-semibold">CipherVault</h1>
        </div>
        <span className="w-full h-0.5 bg-zinc-500 mx-auto"></span>
      </div>
    </div>
  );
};

export default Header;
