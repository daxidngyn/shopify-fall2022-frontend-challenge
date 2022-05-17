const Footer = () => {
  return (
    <footer className="bg-slate-100 pb-10 sm:pb-4">
      <div className="text-sm opacity-70 flex flex-col items-center justify-center">
        <span>
          Designed and developed by&nbsp;
          <span className="text-emerald-500">David Nguyen</span>
        </span>
        <span>
          Built with <span className="text-emerald-500">Next.js</span>
          &nbsp;and&nbsp;
          <span className="text-emerald-500">Tailwindcss</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
