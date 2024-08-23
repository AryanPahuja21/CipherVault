const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full flex flex-col items-center select-none">
      <div className="h-0.5 w-full bg-zinc-500" />
      <h1 className="m-4 text-zinc-200">
        Created and Curated by{" "}
        <a href="https://aryan-pahuja.vercel.app" target="_blank">
          <span className="font-bold">Aryan Pahuja</span>
        </a>
      </h1>
    </div>
  );
};

export default Footer;
